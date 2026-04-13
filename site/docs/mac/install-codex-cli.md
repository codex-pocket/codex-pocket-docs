---
title: Codex CLI をインストールする
description: CodexPocketMac が `codex` を見つけられるか確認するページです。
---

Mac で普段 Codex を使っているなら、このページでやることはインストールより確認です。`CodexPocketMac` が実際に呼び出すのは `codex` CLI なので、まずそこが見えている必要があります。

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
- `一般` に `Bridge の前提条件を満たしていません` と出ているときも、まずここを見ます

## この確認が終わるとできること

- Bridge を開始できる
- Project ごとに Thread 一覧を取得できる
- iPhone から Composer や Exec を使える

Codex App を使っていても、この確認は一度しておくと確実です。CLI が見つからない状態では、iPhone 側の接続までは進めても実作業には入りません。
