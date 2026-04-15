---
title: Mac アプリを準備する
slug: /mac/
description: iPhone から使う前に、Mac 側でやることをまとめたページです。
---

CodexPocket を使い始めるときは、まず Mac 側を整えます。ここでいう準備とは、Mac に常駐する `CodexPocketMac` を起動し、iPhone が見に行く Project と接続情報を用意することです。

## CodexPocketMac の入手方法

<a class="button button--primary button--lg margin-right--sm margin-bottom--sm" href="https://github.com/codex-pocket/codex-pocket-releases/releases">Mac アプリをダウンロード</a>
<a class="button button--secondary button--lg margin-right--sm margin-bottom--sm" href="https://github.com/codex-pocket/codex-pocket-releases/releases/tag/mac-v0.1.2">リリースノートを見る</a>
<a class="button button--secondary button--lg margin-bottom--sm" href="https://github.com/codex-pocket/codex-pocket-mac-app/blob/main/README.md#quickstart">ソースから起動する</a>

※ GitHub Releases から `.dmg` をダウンロードして、Mac にインストールしてください。

現在公開中の Mac stable は `0.1.2` です。通常は notarized DMG をダウンロードすればそのまま始められます。開発版や検証版を試したいときだけ、`mac-app` README の Quickstart から source build を使ってください。

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
