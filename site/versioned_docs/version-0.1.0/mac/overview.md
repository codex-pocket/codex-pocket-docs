---
title: Mac アプリを準備する
slug: /mac/
description: iPhone から使う前に、Mac 側でやることをまとめたページです。
---

import MacDownloadLink from '@site/src/components/MacDownloadLink';

CodexPocket を使い始めるときは、まず Mac 側を整えます。ここでいう準備とは、Mac に常駐する `CodexPocketMac` を起動し、iPhone が見に行く Project と接続情報を用意することです。

まずアプリ本体がまだない場合は、ここから入れます。

<MacDownloadLink className="button button--primary button--lg">Mac アプリをダウンロード</MacDownloadLink>

## Mac アプリの役割

Mac アプリは次の仕事を担当します。

- Bridge の起動と停止
- iPhone とつなぐための Pairing QR 表示
- iPhone に見せる Project 一覧の管理
- Bridge の状態確認
- ログ確認

## Mac 側で先にやること

1. CodexPocketMac を起動する
2. Codex CLI を使えることを確認する
3. 必要なら Git を使えるようにする
4. 必要なら iPhone 側で Project を追加する
5. Bridge を開始する

すでに Mac で Codex を使いこなしているなら、主な追加作業は `CodexPocketMac` の起動と `Project` の確認です。

## 設定画面でよく見る場所

- `一般`
  Bridge の有効化、ログイン時起動、全体の状態確認
- `Bridge`
  表示名、ポート、ローカル接続先の確認
- `プロジェクト`
  iPhone に見せる workspace の確認
- `ペアリング`
  QR、Pairing URL、Pairing Code の表示
- `ログ`
  Bridge の stdout と stderr
- `詳細`
  Codex CLI や Git の検出状態、各種パス
