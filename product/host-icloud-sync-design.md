# Host iCloud Sync Design

## 目的

Host 情報の iCloud 保存を、次のケースでも破綻しない設計に置き換える。

- 既存 Host が繋がらなくなり、削除してから同じ Mac を再登録する
- 既存 Host を残したまま、別の Mac を 2 台目の Host として追加する
- 同じ Mac を別端末で再度 pairing し、token や endpoint だけを更新する
- 片方の端末で Host を削除し、別端末では別の Host を追加する
- 他端末で同期された変更を、起動中の iPhone 側が取り込む

この設計では、未リリース前提に合わせて暫定 fallback を残さない。Host の source of truth を一本化し、Host ごとの同期と削除を恒久対応として扱う。

## 現状の問題

現状は Host catalog を 1 個の synchronizable Keychain item に配列ごと保存している。これには次の問題がある。

- 追加、更新、削除の同期単位が大きく、別端末で異なる Host を同時に編集すると last-write-wins になりやすい
- Host の一覧を app snapshot にも持っているため、source of truth が二重化している
- Host を 0 件にした状態と、まだ同期されていない初期状態を区別しにくい
- pairing payload に stable identity がなく、同じ Mac の再取り込みと別の Mac の追加を機械的に区別できない
- foreground 復帰時に token は再読込しているが、Host catalog 自体は再読込していない

## 設計方針

### 1. Host の source of truth を synchronizable Keychain に一本化する

Host 一覧は app snapshot から外し、iPhone 側の Host source of truth は synchronizable Keychain のみとする。`AppSnapshot.hosts` は廃止し、app snapshot には Host 以外のローカル状態だけを残す。

- 残すもの
  - `projectPreferences`
  - `threadReadMarkers`
  - `settings`
  - Host のローカル専用状態
- 外すもの
  - Host 本体
  - Host の bridge token

これで Host 配列の dual-write をやめ、削除済み Host がローカル snapshot から復活する経路をなくす。

### 2. Host 本体は Host 単位で同期する

Host catalog は 1 アイテム配列ではなく、Host ごとの record と metadata に分割する。

- `dev.mogir.CodexPocket.host-record.v2`
  - `account = hostID`
  - 値は `SyncedHostRecord`
- `dev.mogir.CodexPocket.host-catalog-metadata.v2`
  - `account = default`
  - 値は `HostCatalogMetadata`
- `dev.mogir.CodexPocket.bridge-token`
  - `account = hostID`
  - 値は token 本体

`SyncedHostRecord` は Host の共有すべき設定だけを持つ。`bootstrapState` や接続失敗メッセージのような端末ローカル状態は含めない。

```swift
struct SyncedHostRecord: Codable, Hashable {
    var id: UUID
    var bridgeID: UUID?
    var name: String
    var connectionMode: HostConnectionMode
    var hostname: String
    var username: String
    var port: Int
    var authType: AuthenticationType
    var keyReference: String
    var bridgeBaseURL: String
    var bridgeEndpoints: [BridgeEndpointDescriptor]
    var preferredEndpointID: String?
    var note: String
    var createdAt: Date
    var updatedAt: Date
}

struct HostCatalogMetadata: Codable, Hashable {
    var schemaVersion: Int
    var defaultHostID: UUID?
    var initializedAt: Date
    var updatedAt: Date
}

struct HostLocalState: Codable, Hashable {
    var hostID: UUID
    var bootstrapState: HostBootstrapState
    var bootstrapFailureMessage: String
    var updatedAt: Date
}
```

### 3. 同じ Mac を識別する stable bridge identity を導入する

同じ Mac の再取り込みと、別の Mac の追加を区別するため、Mac bridge 側に `bridgeID` を導入する。

- `NativeBridgeConfiguration` に `bridgeID: UUID` を追加する
- 初回設定生成時に 1 回だけ発行し、その後は固定する
- pairing payload に `bridgeID` を含める
- `/health` の返却値にも `bridgeID` を含める
- pairing payload の version は `4` に上げる
- `mac-cli` reference path も同じ schema に揃える

この `bridgeID` を「同じ Mac かどうか」の唯一の判定根拠にする。ホスト名や endpoint は判定に使わない。

## Host 追加・削除・再追加の扱い

### 1. 既存 Host を残したまま、同じ Mac を再度 pairing した場合

取り込んだ payload の `bridgeID` が既存 Host と一致したら、新しい Host は作らない。既存 Host をそのまま更新する。

- 更新するもの
  - name
  - hostname
  - endpoint
  - note
  - token
- 維持するもの
  - `host.id`
  - project preference
  - thread cache
  - default host 選択

これにより、token rotation や endpoint 更新で Host が二重化しない。

### 2. 既存 Host を削除してから、同じ Mac を再度 pairing した場合

削除時点で `host-record` と `bridge-token` を synchronizable Keychain から消す。後から同じ `bridgeID` を持つ payload を取り込んでも、既存 record がないため新規 Host として扱う。

つまり、ユーザーが「壊れた Host を捨てて、まっさらな Host として作り直す」と決めた場合は、その意図をそのまま反映する。

### 3. 2 台目の Mac を Host として追加する場合

`bridgeID` が既存 record と一致しなければ、2 台目の Host としてそのまま追加する。既存 Host には触れない。

## ローカル専用状態の分離

次の状態は同期対象にしない。

- `bootstrapState`
- `bootstrapFailureMessage`
- 接続テストの成功/失敗表示
- 一時的な endpoint 解決結果
- project catalog cache
- thread transcript cache

これらは端末ローカル状態として app snapshot か in-memory state に保持する。別端末で setup が失敗したことを、そのまま他端末へ同期しないためである。

## AppStore の責務変更

### 1. `persist()` は Host を保存しない

`persist()` は app snapshot とローカル cache だけを保存する。Host の同期書き込みは Host の追加、更新、削除を行う箇所から明示的に呼ぶ。

- `upsertHost`
  - `SyncedHostRecord` を 1 件 upsert
  - token を更新
  - default host metadata を必要に応じて更新
  - ローカル snapshot を保存
- `deleteHost`
  - host record を削除
  - token を削除
  - ローカル関連 state を掃除
  - default host metadata を再計算
  - ローカル snapshot を保存

### 2. foreground 復帰時は Host catalog 全体を再読込する

`handleScenePhaseChange(.active)` では token だけでなく Host catalog 全体を再読込する。

新設する `reloadHostsFromSyncStore()` は次を行う。

1. metadata を読む
2. host records を全件読む
3. token を host 単位で hydration する
4. 旧 state と diff を取る
5. 削除された Host の project/thread/cache を掃除する
6. 追加・更新された Host を in-memory state に反映する
7. default host を正規化する
8. 変更があればローカル snapshot を保存する

この再読込は次のタイミングで実行する。

- app launch
- scene active 復帰
- Hosts 画面の pull-to-refresh
- pairing import 完了直後

## duplicate 防止のルール

### 1. pairing import

pairing import は `bridgeID` ベースで必ず dedupe する。

- 同じ `bridgeID` がある
  - 既存 Host を更新
- 同じ `bridgeID` がない
  - 新規 Host を追加

### 2. manual host

bridge mode の manual host は、保存前に `health` を叩いて `bridgeID` を確定させる。`bridgeID` が確定できない bridge host は保存しない。

未リリース前提なので、bridge identity を持たない bridge host を暫定保存する fallback は設けない。

これにより manual host も pairing import と同じ dedupe ルールで扱える。

### 3. identity mismatch

既存 Host に保存済みの `bridgeID` と、接続先の `health.bridgeID` が一致しない場合は設定不整合として失敗させる。別の Mac に向いている可能性があるため、黙って上書きしない。

## default host の扱い

default host は Host record に埋め込まず、catalog metadata の `defaultHostID` だけで管理する。

- Host 追加時
  - 既存 Host が 0 件なら、その Host を default にする
- Host 更新時
  - `makeDefault` が指定されたら metadata を更新する
- Host 削除時
  - 削除対象が default なら、残っている Host のうち先頭 1 件を default にする
  - 残り 0 件なら `nil`

default を metadata へ分離することで、「2 端末が別の Host を default にした」ケースは metadata 1 件の last-write-wins で閉じる。Host record 側で複数 `isDefault` が立つ状態は作らない。

## Migration

移行は 1 回だけ行う。未リリース前提なので互換レイヤーを残し続けない。

### 移行元

- 旧 `AppSnapshot.hosts`
- 旧 bulk `host-catalog` Keychain item
- 旧 synchronizable / local の bridge token item
- version 3 の pairing payload

### 移行手順

1. `host-catalog-metadata.v2` が存在しなければ migration モードに入る
2. 旧 bulk host catalog があればそれを優先して読む
3. なければ旧 `AppSnapshot.hosts` を読む
4. Host ごとに `SyncedHostRecord` を作り、token を host 単位 item に移す
5. metadata を作成する
6. 旧 bulk host catalog item を削除する
7. `AppSnapshot.hosts` の読み込み経路を削除する

移行完了後は v2 catalog だけを読む。空の catalog と未初期化状態は metadata の有無で判定する。

## 競合解決

### 別 Host への変更

Host ごとの Keychain item に分けることで自然に merge させる。端末 A が Host A を削除し、端末 B が Host B を追加しても競合しない。

### 同一 Host への変更

同じ `hostID` の record 更新は record 単位の last-write-wins とする。競合単位が 1 Host に閉じるため、現状の配列丸ごと上書きより被害範囲が小さい。

### 同じ Mac の再取り込み

競合ではなく dedupe として扱う。`bridgeID` が同じなら既存 Host 更新、なければ新規 Host 追加に固定する。

## 実装順

1. Mac 側
   - `NativeBridgeConfiguration` に `bridgeID` を追加
   - pairing payload v4 を追加
   - `/health` に `bridgeID` を追加
   - `mac-cli` reference path も同様に更新
2. iPhone 側 model
   - `AppSnapshot.hosts` を廃止
   - `SyncedHostRecord` / `HostCatalogMetadata` / `HostLocalState` を追加
3. iPhone 側 storage
   - `HostCatalogStore` を bulk API から record API に変更
   - token store は host 単位のまま流用
4. iPhone 側 AppStore
   - `reloadHostsFromSyncStore()` を追加
   - Host mutation を incremental sync に切り替える
   - foreground 復帰で Host 再読込を実行する
5. UI
   - manual host 保存前に bridge identity を確定する
   - identity mismatch / duplicate update のエラー表示を追加する

## テスト計画

最低限、次を unit test と integration test で固定する。

- 旧 bulk host catalog から host 単位 item への migration
- 旧 `AppSnapshot.hosts` からの migration
- 既存 Host を削除した後に同じ `bridgeID` を再追加すると、新しい `host.id` で作られる
- 既存 Host を残したまま同じ `bridgeID` を再 import すると、同じ `host.id` のまま更新される
- 別の `bridgeID` を持つ Host を追加すると 2 件共存する
- foreground 復帰で他端末の追加、更新、削除が取り込まれる
- default host 削除時に残存 Host へ自動で移る
- `bootstrapState` が他端末へ伝播しない
- `health.bridgeID` mismatch 時に保存を拒否する

## この設計で解消すること

この設計で、最初に問題になっていた細かいケースは次のように閉じる。

- 繋がらない Host を削除してから作り直す
  - 削除後は record ごと消えるので、新規 Host として作り直せる
- 同じ Mac を別端末で再度 pairing する
  - `bridgeID` が同じなので既存 Host 更新になる
- 2 台目の Mac を追加する
  - `bridgeID` が異なるので 2 件目の Host として追加される
- 他端末で Host を消した
  - foreground 復帰時の reload で local state ごと掃除される

要点は、Host catalog を「配列 1 個」ではなく「Host 単位 record + metadata + token」に分解し、同じ Mac を `bridgeID` で識別することにある。
