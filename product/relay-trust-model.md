# CodexPocket Happy 型 Relay Trust Model

- 文書名: CodexPocket Happy 型 Relay Trust Model
- 状態: 初回 LAN 前提リリース後の次フェーズ要件
- 更新日: 2026-04-05
- 目的: 外出先の iPhone / Web から自宅 Mac 上の Codex を扱うための relay trust model と設計原則を定義する

## 1. 目指す体験

- 自宅 Mac で Codex CLI を継続実行できる
- 外出先の iPhone / Web から同じ session を確認、操作、承認できる
- CodexPocket の relay は接続性と同期だけを提供し、中身を読めない
- relay を完全に信頼しなくても、会話、コード、コマンド、diff、承認内容は秘匿される

## 2. 全体構成

```text
[Home Mac]
  ├─ CodexPocket CLI / Agent
  ├─ Codex CLI launch + supervision
  ├─ output / state / approval event capture
  └─ encrypt-before-send

[Remote Client]
  ├─ iPhone app / Web app
  ├─ encrypted payload receive
  ├─ local decrypt + render
  └─ encrypt user input + approval response

[CodexPocket Relay]
  ├─ WebSocket / pub-sub / temporary storage
  ├─ encrypted blob delivery
  └─ session-scoped relay only
```

各要素の責務は次のとおりとする。

- Mac 側 CLI / Agent は Codex CLI の起動、出力監視、状態取得、承認待ちイベント検知、暗号化済みイベント送信を担う
- iPhone / Web client は relay から暗号化済みデータを受信し、端末上で復号して表示する
- Relay Server は暗号化済みメッセージの受信、保存、配送のみを担い、平文の意味処理は行わない

## 3. Trust Model

CodexPocket がユーザーに約束することは「relay を信用してください」ではなく、「relay を信用しなくても内容は読めません」である。

relay の責務:

- 接続の受付
- 暗号化済みメッセージの配送
- オフライン復帰用の保存
- session 単位の中継

relay に持たせないもの:

- 復号鍵
- 平文ログ
- AI 実行ロジック
- コード解釈
- 承認判断
- UI 状態の意味理解

## 4. 初回 Pairing

1. 自宅 Mac 側で session を開始する
2. CLI / Agent が共有秘密情報を生成する
3. 共有秘密情報を QR または手入力コードで iPhone / Web 側へ渡す
4. Mac と client が同じ秘密情報を保持する
5. 以後の通信はこの秘密情報またはそこから導出した鍵素材に基づいて暗号化する

重要事項:

- 共有秘密情報は relay を通さない
- relay は鍵を知らない
- relay は暗号化済みデータしか扱わない

## 5. 接続と認証

- Mac と iPhone / Web client はどちらも relay へ外向き接続する
- これにより、ポート開放や固定 IP を不要にする
- session 参加時は pairing 済みの秘密情報に基づく challenge-response で本人性を確認する
- relay は session に紐づく公開情報または登録済み検証情報で整合確認だけを行い、平文内容は扱わない

実装原則:

- challenge は毎回更新できること
- relay は署名または検証用データの整合確認だけを行うこと
- 認証成功後にのみ同一 session の配送を開始すること

## 6. データフロー

### 6.1 Mac → iPhone / Web

1. Codex CLI が動作する
2. CodexPocket CLI / Agent が出力や状態変化を取得する
3. 端末側で暗号化する
4. relay に送信する
5. client が取得する
6. client 側で復号して表示する

### 6.2 iPhone / Web → Mac

1. ユーザーが指示または承認を入力する
2. client 側で暗号化する
3. relay に送信する
4. Mac が取得して復号する
5. CodexPocket CLI / Agent が Codex CLI へ反映する
6. 結果を再び暗号化して返す

## 7. Relay を使う理由

P2P 直結ではなく relay を使う理由は次のとおりとする。

- 自宅回線の IP 変動
- NAT / CGNAT
- モバイル回線
- ポート開放の運用負荷
- 接続断からの再同期

relay の主目的はセキュリティそのものではなく、「どこからでも安定して届く」ための接続基盤である。

## 8. オフライン耐性

- relay は暗号化済み blob を一時保存できる
- iPhone が圏外でも自宅 Mac の Codex は動き続ける
- client は復帰後に missed messages を取得して追従できる
- session を切らずに、あとから履歴を読める
- 保存データも暗号化済みであり、relay 運営者は内容を読めない

## 9. Permission / 承認フロー

CodexPocket は次の種類の操作を承認待ちイベントとして扱えるようにする。

- ファイル変更
- 危険なコマンド
- 外部連携
- MCP 的な操作

承認フロー:

1. Mac 側で承認が必要な操作を検知する
2. その内容を暗号化して relay へ送る
3. iPhone / Web client に通知する
4. ユーザーが `Allow` または `Deny` を返す
5. 返答を暗号化して Mac に返す
6. Mac が実行継続または中断を決める

relay はこのイベントの意味を解釈しない。

## 10. Relay が見えるもの / 見えないもの

relay が見えるもの:

- 接続の有無
- おおよその時刻
- メッセージ数
- データサイズ
- session 識別子相当のメタ情報
- 端末の online / offline 状態

relay が見えないもの:

- コード本文
- 会話内容
- コマンド内容
- diff の中身
- 承認内容の詳細
- API key や秘密情報
- 作業中 project の実データ

## 11. ユーザーへの開示事項

CodexPocket は「relay を完全に信頼しなくてよい」ことを強みとして明示する一方で、次もユーザーへ正直に伝える。

- relay の可用性には依存する
- 通信量や接続時刻など一部メタ情報の露出可能性は残る
- 配布する CLI / app 実装自体への信頼は必要である
- push 通知インフラへの依存は残る

つまり、内容秘匿は強いが、運用依存はゼロではないことを明示する。

## 12. 設計原則

- server は dumb relay に徹する
- 鍵管理は端末側で完結させる
- 暗号化は送信前に行う
- 復号は受信端末のみで行う
- ビジネスロジックは app 側へ集約する
- AI 実行は常に自宅 Mac 側で行う
- relay は同期と保存だけを担う
- self-host 可能な構造を維持する

## 13. 一言説明

CodexPocket は、「自宅 Mac で動く Codex を、外出先から安全に触るためのリモート UI」であり、「relay はつなぐだけで読めない」という zero-trust 寄りの設計を採用する。
