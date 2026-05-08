---
title: Codex CLI をインストールする
description: iPhone から使う前に Codex CLI が見えているか確認するページです。
---

Mac でふだん Codex を使っているなら、このページは「インストール」より「確認」に近い内容です。CodexPocketMac は Mac 側の Codex 環境を利用するため、`codex` コマンドが見えている必要があります。

## 確認するコマンド

ターミナルで次を実行します。

```bash
which codex
codex app-server --help
```

期待する状態は次のとおりです。

- `which codex` でパスが表示される
- `codex app-server --help` がエラーにならない

Homebrew で入れている場合でも、`which codex` は `/opt/homebrew/bin/codex` や `/usr/local/bin/codex` のような `bin` 配下の symlink を返すことがあります。導入元を確認したいときは、そのパスに対して次も実行します。

```bash
CODEX_PATH="$(which codex)"
ls -l "$CODEX_PATH"
```

`ls -l` のリンク先、または `which codex` の結果そのものが `/opt/homebrew/Caskroom/...` や `/usr/local/Caskroom/...` を指していれば、Homebrew cask で入っている状態です。

## うまくいかないとき

- `which codex` が空なら、Codex CLI のインストールや PATH を見直します
- ターミナルでは動くのに Mac アプリでは認識されないときは、Mac アプリを再起動します
- 状態は `詳細` タブの `Codex CLI` 行でも確認できます

## この確認が終わるとできること

- Bridge を開始できる
- Project ごとに Thread 一覧を取得できる
- iPhone から Composer や Fork を使える

Codex CLI が見つからない状態では、iPhone 側の接続までは進めても実作業には入りません。
