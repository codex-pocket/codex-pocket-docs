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

## うまくいかないとき

- `which codex` が空なら、Codex CLI のインストールや PATH を見直します
- ターミナルでは動くのに Mac アプリでは認識されないときは、Mac アプリを再起動します
- 状態は `詳細` タブの `Codex CLI` 行でも確認できます

## この確認が終わるとできること

- Bridge を開始できる
- Project ごとに Thread 一覧を取得できる
- iPhone から Composer や Exec を使える

Codex CLI が見つからない状態では、iPhone 側の接続までは進めても実作業には入りません。
