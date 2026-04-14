---
title: セットアップの全体像
slug: /setup/
description: Mac の準備から iPhone の接続までをまとめた入口ページです。
---

CodexPocket のセットアップは、「Mac で待ち受ける」「iPhone で読み取る」「そのまま続きを触る」の 3 段階です。Mac で使っている Codex を、iPhone から触れるようにする準備だと考えると分かりやすくなります。

1. Mac 側を整える
2. iPhone で Mac を取り込む
3. Project と Thread が見えることを確かめる

## 1. Mac 側を整える

最初に Mac で次を済ませます。ここで実行環境そのものを作るので、iPhone 側はあとからつなぐだけです。

- `CodexPocketMac` を起動する
- `codex` が使えることを確認する
- Codex App を使うなら、使いたい workspace を Codex App に入れる
- Bridge が動いていることを確認する

Codex App を使わない場合は、iPhone で Host を追加したあとに `プロジェクト` の `+` から手動で追加します。

## 2. iPhone で Mac を取り込む

おすすめは QR での追加です。Mac の `ペアリング` に出る QR を iPhone で読み取ると、接続先と認証情報をまとめて取り込めます。

取り込み後は、iPhone 側で次の初回処理が自動で進みます。

- Bridge の接続確認
- Project 一覧の取得
- 最初の workspace の準備
- Host の保存

## 3. 使えることを確かめる

セットアップが終わったら、iPhone で次を確認します。

- `ホーム` に Host が見える
- `プロジェクト` に Mac の workspace が見える
- Project を開くと Thread を作成または再開できる

## 先に読むページ

- 何をそろえるかは [はじめる前に必要なもの](./requirements)
- 対象の端末かどうかは [対応環境](./supported-environments)
- Mac 側の手順はサイドバーの `Mac アプリ` を上から順に読む

接続で詰まったときは、先に Mac 側の `一般`、`プロジェクト`、`ペアリング` を見ると切り分けやすくなります。
