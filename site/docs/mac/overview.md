---
title: Mac を準備する
slug: /mac/
description: iPhone から使う前に、Mac 側で本当に必要な準備だけをまとめます。
---

CodexPocket の実行側は Mac です。iPhone は操作画面なので、Mac で Codex が普段どおり動き、`CodexPocketMac` が待ち受けできれば使い始められます。

## 先に結論

普段 Mac で Codex を使っている人なら、新しくやることは多くありません。

1. `CodexPocketMac` を起動する
2. `codex` が使えることを確認する
3. 使いたい workspace が Codex App に入っているか確認する
4. Bridge が動いていることを確認する
5. Pairing QR を iPhone で読み取る

`Git` はブランチ関連を使う人だけ必要です。ポートやトークン、Project の手動登録は、通常は触らなくて構いません。

## Mac 側で担っていること

- Bridge の起動と停止
- iPhone に見せる Project 一覧の管理
- `codex` を使った Thread と Exec の実行
- Pairing QR の表示
- 状態確認とログ管理

## どこを見ればよいか

- `一般`
  Bridge のオンとオフ、ログイン時起動、全体の状態を見る場所です。
- `プロジェクト`
  Codex App から入ってきた workspace と、手動追加した Project を確認する場所です。
- `ペアリング`
  QR、Pairing URL、Pairing Code を出す場所です。
- `詳細`
  `codex`、`git`、シェルの検出状態を確認する場所です。
- `ログ`
  Bridge がうまく動かないときに stdout と stderr を見る場所です。

## このセクションの読み方

- 最初に見るのは [最初にやること](./getting-started)
- Codex App を使っているなら [Codex App をインストールする](./install-codex-app) と [Project を作成する](./create-project)
- `codex` の確認は [Codex CLI をインストールする](./install-codex-cli)
- ブランチ操作も使うなら [Git を使えるようにする](./install-git)
- Project を手で追加したいときだけ [Project を手動で追加する](./register-project)
- 最後に [Bridge を開始する](./start-bridge)
