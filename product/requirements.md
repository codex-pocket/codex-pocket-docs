# CodexPocket 要件定義

- 文書名: CodexPocket 要件定義
- 版数: v0.5
- 更新日: 2026-04-05
- 目的: iPhone から Mac 上の Codex 実行環境を Codex App 風に参照・再開・実行できる remote app の現行要件を定義する

## 1. プロダクト定義

CodexPocket は、iPhone を Mac 上の Codex の「実行端末」ではなく「操作面」として使うためのアプリである。

- iPhone 側は thread 一覧、thread 再開、新規 thread、composer、skills、slash command catalog を提供する
- Mac 側は通常のメインウィンドウとメニューバー extra を持つ native companion app が bridge を管理し、`codex app-server` を中継して thread / skill / command 情報を iPhone へ渡す

## 2. 体験目標

ユーザーは iPhone 上で Project を選び、次の流れを短時間で完了できることを目標とする。

1. Bridge Host に安全に接続する
2. 対象 workspace の thread 一覧を見る
3. 既存 thread を reopening して過去 transcript を確認する
4. Mac のローカルブランチを切り替える、または新しく作る
5. slash command、skill、custom prompt を composer から実行する
6. live output を追いながら追加の turn を送る

## 3. システム構成

### 3.1 全体構成

```text
[iPhone App]
  ├─ Sidebar / Thread UI
  ├─ Review / Exec
  ├─ Branch switcher
  ├─ Project switcher
  ├─ Command picker
  └─ Skill picker
        ↓
[Local Network (initial release)]
        ↓
[Mac native bridge app]
  ├─ CodexPocketMac
  ├─ NativeBridgeRuntime (Swift)
  ├─ CodexAppServerClient (Swift)
  ├─ NativeGitService (Swift)
  ├─ codex app-server
  ├─ git
  └─ Codex CLI
```

### 3.2 責務分離

iPhone 側責務:

- Host と Project の保持
- current branch の表示と切替
- thread 一覧取得
- thread detail と transcript history の表示
- turn 送信
- skill / command の選択と composer への挿入
- one-shot exec
- live event の描画

Mac 側責務:

- native companion app の起動、bridge 起動停止、pairing QR、logs、project 管理、launch-at-login の提供
- Bridge API の公開
- `codex app-server` との通信
- custom prompt scan
- branch / git の管理
- Codex CLI 実行環境の維持

補足:

- shipping path の native companion app は Swift 実装の bridge runtime を直接起動する
- end-user に必要な外部依存は `Codex CLI` と `git` のみとする
- `mac-cli` は repo に残すが、回帰比較用 reference/oracle として扱う

## 4. 機能要件

### 4.1 Host 管理

- Host を複数登録できる
- Bridge 接続を前提とする
- Host catalog は iPhone 側の app snapshot に保存し、同じ内容を iCloud 同期の Keychain-backed catalog にも保持して app reinstall や別端末での復元に使う
- Bridge Token は iPhone の iCloud 同期 Keychain に保存し、アプリの通常保存領域には残さない
- 初回リリースは同一 LAN 前提とし、インターネット越し接続は現行 scope に含めない
- Host は `bridgeEndpoints` を持ち、Bonjour local discovery と hostname ベースの local URL を保持できる
- 最後に成功した endpoint は `preferredEndpointID` として保存し、次回接続で最優先に使う
- QR import と手入力の両方を提供する
- QR import だけで Host が完成することを優先し、手入力は補助導線とする
- 新規 Host 追加直後は専用の data collection 画面へ切り替え、収集中は他画面へ操作を分散させない
- Host は bridge 検証と project catalog 収集が完了してから確定保存し、5 分以内に完了しない場合は追加を成立させない
- data collection 中に app が background へ移行した場合は許可された background 実行時間内は継続し、停止した場合は foreground 復帰後に現在の段階から再開する
- 接続テストを保存前後どちらでも実行できる

### 4.2 Project 管理

- Project は workspace のアンカーである
- 1 Project は 1 Host に紐づく
- iPhone 側は最後に取得できた Project 一覧をローカル保持し、pairing import 完了時と app foreground 復帰時に再取得する
- Mac companion app の workspace registry は `~/.codex/.codex-global-state.json` の local workspace root を additive に自動取り込みし、Codex app 側で追加した Project を削除同期なしで bridge 側へ反映する
- thread 一覧、skills、commands、models、exec は Project を起点に取得する

### 4.3 Branch 管理

- Project ごとに Mac 上のローカルブランチ一覧を表示できる
- current branch を iPhone から切り替えられる
- 新しいブランチを iPhone から作成し、そのまま切り替えられる
- branch 作成 UI では `feature/` `bugfix/` `hotfix/` `release/` `chore/` などの prefix をワンタップで選べる
- current branch は `Threads` / `Exec` の作業対象 repo context に反映される

### 4.4 Thread 一覧 / 詳細

- selected Project に対して Mac bridge 管理の thread 一覧を表示できる
- thread は `New Thread` で新規作成できる
- 既存 thread は再開できる
- pairing/import 時に CodexApp 側の既存 thread 一覧を iPhone が直接取り込まない
- thread 一覧と transcript history の source of truth は Mac bridge 側の managed thread catalog とし、iPhone 側は read-only transcript cache だけを保持する
- reopening 時には transcript history を読み込み、user / assistant の会話面として表示する
- assistant が同一 turn で `回答` と `作業ログ` を返した場合、回答を主表示にし、作業ログは折りたたみで参照できる
- transcript は text-first とし、非 text item は簡潔な system row に落とす

### 4.5 Composer / Commands / Skills

- composer から text turn を送れる
- composer の 1 回目の tap で text input が first responder になり、同じ操作でキーボードが開く
- turn 送信時は composer の編集状態を即座に終了し、キーボードを閉じて transcript 閲覧へ戻る
- composer 外の tap と transcript scroll でもキーボードを閉じ、composer の編集状態を解除できる
- フォローアップ動作として `queue` と `steer` を切り替えられる
- `queue` は current run 完了後に次の turn を順次送る
- `steer` は current run の active turn に追加指示を送る
- built-in slash command catalog を表示できる
- enabled skills を表示できる
- `~/.codex/prompts/*.md` を custom prompt として表示できる
- skill 選択時は `$skill-name` を composer に挿入し、turn payload にも `skill` item を付与する
- built-in command から model / approvals / images / exec / fork の専用 UI を開ける

### 4.6 Live Event

- thread event WebSocket を通じて live output を受信できる
- assistant delta を逐次 UI に反映できる
- transcript history と live event を item id ベースで重複なく統合する
- 接続切断や失敗を UI 上で認識できる
- iPhone 側の live 接続が切れても active turn は Mac 側で継続し、再接続後は Mac 側 transcript history を再同期する

### 4.7 Git 初期化

- git 管理外の workspace を thread から扱った場合は、iPhone から `git init` を実行して継続できる
- `push`、`rebase`、`reset`、`merge` などの高度な git 操作は対象外とする

### 4.8 Exec

- one-shot `exec` を iPhone から開始できる
- exec は ephemeral thread と event stream で実行し、model / approvals / image input を指定できる

### 4.9 設定

- App language は English / Japanese を切り替えられる
- Theme、font size、keepAlive、connection timeout を変更できる
- Follow-up behavior の既定値を `queue` / `steer` から選べる
- debug log viewer は持たず、診断ログは Mac 側に残す

### 4.10 macOS Companion App

- メインウィンドウを持つ通常の macOS app として動作し、メニューバー extra も併設する
- メインウィンドウとメニューバー extra から `Show Pairing QR`、`Start / Stop Bridge`、`Open Logs`、`Quit` を提供する
- メインウィンドウに `General`、`Bridge`、`Projects`、`Pairing`、`Logs`、`Advanced` の管理 pane を持つ
- `Projects` は `name / workingDirectory` の CRUD を GUI で行える
- `Pairing` は current QR、Pairing URL、Pairing Code、token 再生成を提供する
- `Login at Login` を切り替えられる
- 初回起動時に legacy `~/.config/codex-pocket/` 設定と logs を `~/Library/Application Support/CodexPocketMac/` へ one-shot migration できる

## 5. Bridge API 要件

Bridge は少なくとも次を提供する。

- `GET /v1/health`
- `GET /v1/projects`
- `POST /v1/projects`
- `PUT /v1/projects/:id`
- `DELETE /v1/projects/:id`
- `GET /v1/codex/threads`
- `GET /v1/codex/threads/:id`
- `POST /v1/codex/threads`
- `POST /v1/codex/threads/:id/resume`
- `POST /v1/codex/threads/:id/turns`
- `POST /v1/codex/threads/:id/fork`
- `GET /v1/codex/skills`
- `GET /v1/codex/models`
- `GET /v1/codex/commands`
- `GET /v1/codex/projects/:id/branches`
- `POST /v1/codex/projects/:id/branches`
- `POST /v1/codex/projects/:id/branches/switch`
- `POST /v1/codex/projects/:id/initialize-repository`
- `POST /v1/codex/exec`
- `WS /v1/codex/threads/:id/events`
- `WS /v1/codex/exec/:id/events`

`GET /v1/codex/threads/:id` は `history` を返し、iPhone 側が raw app-server shape を知らずに transcript を描画できること。

## 6. 非機能要件

- Bridge Token を平文で永続化しない
- iPhone 側は app-owned copy を英日切替できる
- keepAlive により WebSocket idle connection を維持する
- Codex 本体更新の影響は極力 Mac 側で吸収する
- bridge のログには token、Authorization header、pairing URL、手入力 command 本文を残さない
- 初回リリースは同一 LAN 前提とし、managed relay / VPN / STUN/TURN / 公開 HTTPS endpoint には依存しない
- 接続は Bonjour / hostname ベースの local URL で完結させる
- end-user の primary setup path は native macOS companion app とし、ターミナル操作を必須にしない
- end-user の primary setup path は native macOS companion app とし、Node.js や npm を要求しない

## 7. 現在の対象外

- detached HEAD からの高度な復旧、複数 worktree の管理 UI、branch rename / delete などの高度な Git 操作
- フル IDE 的な file browser / editor
- lossless event replay
- tool call ごとの詳細 UI
- CLI の `login` / `logout` / `mcp` / `sandbox` / `cloud` などの環境管理 UI
- iPad / macOS / Android への同時展開

## 8. 完成条件

次を満たす状態を現行の完成ラインとする。

- iPhone 起動後に sidebar + thread UI を開ける
- iPhone 側の touch interaction は [`docs/touch-interaction-guidelines.md`](touch-interaction-guidelines.md) に従い、tap / swipe / long press が競合しない
- Project ごとに current branch を切り替えられる
- Project ごとにローカルブランチを作成できる
- Project ごとに thread 一覧が見える
- 既存 thread を reopening すると transcript history が見える
- thread の削除は CodexPocket 管理台帳から外す操作であり、CodexApp / app-server 上の元 thread 自体は削除しない
- 新しい turn を送ると live output が継続して流れる
- git 管理外の workspace では thread 画面から初期化導線を出せる
- Exec を iPhone から開始できる
- skills と command catalog を iPhone から利用できる
- Mac で native companion app を起動するとメニューバー常駐し、Settings から bridge / pairing / projects / logs を操作できる

## 9. 次フェーズ要件: Happy 型 Relay Trust Model

初回の同一 LAN 前提リリース後は、外出先からの接続を dumb relay + end-to-end encryption ベースへ拡張する。詳細は [`docs/relay-trust-model.md`](relay-trust-model.md) を正本とする。

- 構成要素は `Mac 側 CLI / Agent`、`iPhone / Web client`、`Relay Server` の 3 つとする
- Relay Server は暗号化済み blob の受信、保存、配送だけを担い、復号鍵、平文ログ、AI 実行ロジック、承認判断を持たない
- 初回 pairing は QR または手入力コードで行い、共有秘密情報は relay を通さず端末間で共有する
- 端末は relay へ外向き接続だけを行い、固定 IP やポート開放なしで同一 session に参加できるようにする
- session 参加時は pairing 済みの秘密情報に基づいて challenge-response を行い、relay は session 単位の整合確認だけを担う
- 会話、コード、コマンド、diff、承認内容は送信前に暗号化し、復号は受信端末でのみ行う
- relay は missed messages の再配信とオフライン復帰用の一時保存を担うが、保存データも暗号化済みとする
- 承認待ちイベントは relay 上では意味解釈せず、暗号化済みイベントとして配送する
- relay が見える情報と見えない情報、可用性依存、push 通知依存、self-host 可能性はユーザーへ明示する

## 10. 開発・変更要件

本リポジトリに対する実装変更は、機能追加・不具合修正・仕様変更を問わず次を満たすこと。

- リリース前提のため、暫定対応、段階的対応、その場しのぎの回避策は採らず、恒久対応として一度で完了する形で実装する
- 不具合修正や仕様変更は表面的なパッチではなく原因を解消する
- 未リリースであることを理由に、後方互換性維持だけを目的とした実装、feature flag、暫定 fallback、dual-write、互換レイヤーは追加しない
- 外部制約で恒久対応が不可能な場合は、暫定実装を入れず制約を明示して停止する
- 変更に伴って不要になったコード、設定、アセット、テスト、ドキュメントは必ず削除し、コメントアウトや到達不能コードとして残さない
- TODO、FIXME、XXX、`後でやる` 前提のメモは新たに残さない
- 振る舞いを変えた場合は、関連テストを同じ変更で更新または追加し、README と docs も同時に整合させる
- 変更後に不要になった移行処理、互換処理、古い文言や説明は残さない
- Swift を変更した場合は必要に応じて `cd mac-app && xcodegen generate` を実行し、iOS 側は `swiftc -typecheck` を優先して確認する
- `mac-cli` を変更した場合は `npm --prefix mac-app/mac-cli test` を実行する
