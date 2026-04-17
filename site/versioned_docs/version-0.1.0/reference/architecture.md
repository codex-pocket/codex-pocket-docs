---
title: どこで何が動くか
description: iPhone と Mac で役割がどう分かれているかを説明します。
---

CodexPocket は、iPhone だけで完結するアプリではありません。実際に Codex が動き、workspace や Git を触っているのは Mac 側です。iPhone は、その Mac 上の Codex を開いて続けるための画面として使います。

![CodexPocket の構成図](/img/docs/architecture-flow.svg)

## まず覚えたい全体像

```text
iPhone
  ↓ 依頼を送る / 状態を見る
Bridge
  ↓ Mac 上の Codex へつなぐ
Mac 上の Codex
  ↓ workspace / Git / thread を扱う
Mac の作業環境
```

## 役割の分担

- iPhone アプリ
  Project を選ぶ、Thread を開く、Composer から依頼を送る、`作業ログ` と `回答` を読む、`Exec` やブランチ切り替えを使う
- Mac アプリ
  `Bridge` の起動と停止、`ペアリング` QR の表示、iPhone に見せる `Project` の管理、ログ確認、前提条件の確認
- Mac 上の Codex
  実際の処理、コマンド実行、Git 操作、thread の保存を担当する

## iPhone に見えている情報

iPhone には、Mac 側で用意された内容が表示されます。

- `Project` 一覧は、Mac 側で登録された workspace が元になります
- `Thread` 一覧と本文は、Mac 側の管理情報を基準に表示されます
- いま開いている Thread の本文は iPhone に一時的に保持されますが、開き直したときや再接続後は Mac 側の最新内容へ寄せます

そのため、「iPhone で新しい開発環境を作る」のではなく、「Mac で動いている環境を開く」と考えると分かりやすくなります。

## 接続が切れたときの動き

iPhone 側のライブ表示が切れても、Mac 側の作業はそのまま続きます。再接続できると、iPhone は `Thread` の履歴を取り直して追いつきます。

席を外しているあいだに通信が不安定になっても、まずは Mac 側の作業が止まっていないかを見る、という理解で問題ありません。

## ペアリングで渡しているもの

`ペアリング` では、iPhone が Mac を見つけて接続するための情報を渡します。

- Mac の表示名
- ローカルでつなぐための接続先
- 認証トークン
- 必要に応じたメモ

初回は QR を使うのが最も簡単です。取り込んだ接続情報のうち、認証トークンは安全な保存領域に保持されます。

## 迷ったときに見る場所

- 接続や QR のことなら Mac の `ペアリング` と `Bridge`
- Project 一覧のことなら Mac の `プロジェクト`
- 動かない理由を知りたいなら Mac の `一般` `ログ` `詳細`
