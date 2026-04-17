---
title: Codex App をインストールする
description: Codex App を使っている人が、CodexPocketMac とつなぐ前に確認することをまとめます。
---

Codex App をすでに Mac で使っているなら、このページでやることはインストール手順より確認です。`CodexPocketMac` は Codex App の workspace 情報を読み取り、iPhone に見せる Project 候補にします。

![Codex App の workspace が CodexPocketMac と iPhone に見えてくる流れ](/img/docs/workspace-sync.svg)

## ここで確認すること

- Codex App が普段どおり使える
- iPhone で見たいフォルダが Codex App の workspace に入っている
- `CodexPocketMac` の `プロジェクト` に数秒で反映される

## 覚えておきたいこと

- Codex App を常に開いたままにする必要はありません
- `CodexPocketMac` は workspace の一覧を自動で取り込みます
- 一覧に出ないときだけ iPhone 側の手動追加を使います

## 反映の見方

1. Codex App で、使いたいフォルダが workspace として見えていることを確認する
2. `CodexPocketMac` を開く
3. `プロジェクト` タブに同じフォルダが出てくるか見る

追加した直後に見えないときは、数秒待ってから見直してください。

## Codex App を使わない場合

Codex App を使わず、`codex` CLI だけで作業している場合でも CodexPocket は使えます。その場合は [Project を追加する](./register-project) を見ながら、iPhone 側で作業フォルダを登録します。
