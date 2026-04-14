---
title: Codex CLI をインストールする
description: CodexPocketMac が `codex` を見つけられるか確認するページです。
---

Mac で普段 Codex を使っているなら、このページでやることはインストールより確認です。`CodexPocketMac` が実際に呼び出すのは `codex` CLI なので、まずターミナルで `codex` が起動し、必要なサブコマンドも使える状態にしておきます。

## 1. ターミナルで `codex` が起動するか確認する

ターミナルで次を順に実行します。

```bash
codex --version
codex
```

期待する状態は次のとおりです。

- `codex --version` でバージョンが表示される
- `codex` を実行すると Codex CLI が起動する

起動確認だけなら、画面が開いた時点で `Ctrl+C` で終了して構いません。

## 2. `CodexPocketMac` が必要とするコマンドを確認する

続けて、`CodexPocketMac` が利用するコマンドも確認します。

```bash
which codex
codex app-server --help
```

ここで確認したいのは次の 2 点です。

- `which codex` で `codex` の実パスが表示される
- `codex app-server --help` がエラーにならない

`codex` 本体が起動しても `codex app-server --help` が失敗する場合は、CLI が古いか壊れている可能性があります。

## 3. 最新版か確認して更新する

まず、今どこから `codex` が入っているかを見ます。

```bash
which codex
```

`/opt/homebrew/Caskroom/...` や `/usr/local/Caskroom/...` を指しているなら、Homebrew で入っている状態です。その場合は次で確認と更新を進めます。

```bash
brew update
brew info codex
brew upgrade codex
codex --version
codex app-server --help
```

確認の見方は次のとおりです。

- `brew info codex` でインストール済みバージョンと配布中バージョンを確認する
- `brew upgrade codex` で更新する
- 更新後に `codex --version` をもう一度実行し、期待したバージョンになっているか確認する
- 最後に `codex app-server --help` を実行し、CodexPocketMac が必要とする機能も問題ないことを確かめる

Homebrew 以外で入れている場合は、最初に使ったインストール方法で更新したあと、同じく `codex --version` と `codex app-server --help` をやり直します。

## うまくいかないとき

- `which codex` が空なら、Codex CLI のインストールや PATH を見直します
- `codex --version` は通るのに `codex` が起動しないなら、シェル設定や実行権限を見直します
- `codex` は起動するのに `codex app-server --help` が失敗するなら、CLI を更新してから再確認します
- ターミナルでは動くのに Mac アプリでは認識されないときは、Mac アプリを再起動します
- 状態は `詳細` タブの `Codex CLI` 行でも確認できます
- `一般` に `Bridge の前提条件を満たしていません` と出ているときも、まずここを見ます

## この確認が終わるとできること

- Bridge を開始できる
- Project ごとに Thread 一覧を取得できる
- iPhone から Composer や Exec を使える

Codex App を使っていても、この確認は一度しておくと確実です。CLI が見つからない状態では、iPhone 側の接続までは進めても実作業には入りません。
