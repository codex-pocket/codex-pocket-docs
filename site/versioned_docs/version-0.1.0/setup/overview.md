---
title: セットアップの全体像
slug: /setup/
description: Mac の準備から iPhone の接続までをまとめた入口ページです。
---

CodexPocket は、Mac の前にいなくても、Mac 上でふだん使っている Codex を iPhone から開き直したり、続きの指示を送ったりするためのアプリです。実際に処理を動かすのは Mac 側で、iPhone 側はその操作画面として使います。

Mac で Codex をすでに使えている人なら、準備で押さえることは多くありません。最初に必要なものと対応環境を確認し、そのあと Mac と iPhone を順番に用意するとスムーズです。

> TODO(画像): 「Mac が実行側、iPhone が操作側」という役割分担を示す図。Mac 側には `CodexPocketMac`、Project、Codex を、iPhone 側には Project 一覧、スレッド、Composer を配置すると伝わりやすくなります。

## 先に押さえること

- Mac 側が本体です。Project の一覧、スレッド、Codex の実行は Mac 側で管理します。
- iPhone 側は、外出先や席を離れたときに確認と操作を続けるための画面です。
- 現在は、同じローカルネットワークにある Mac と iPhone の組み合わせを前提にしています。
- 最初の設定では、Mac 側で Pairing 用の QR を表示し、iPhone で読み取ります。

## セットアップの流れ

1. [はじめる前に必要なもの](./requirements) を確認する
2. [対応環境](./supported-environments) を確認する
3. Mac に CodexPocketMac を入れて、Bridge を使える状態にする
4. Mac 側で少なくとも 1 件の Project を追加する
5. iPhone に CodexPocket を入れて、Mac の QR を読み取る
6. iPhone で Project を開き、スレッドを参照したり続きの指示を送ったりする

## Mac と iPhone の役割

### Mac 側

- Codex の実行環境を持つ
- Project 一覧を管理する
- スレッドの一覧と内容を保持する
- Pairing 用の QR を表示する

### iPhone 側

- Mac に登録された Project を開く
- スレッドの一覧と内容を確認する
- 新しい指示や follow-up を送る
- 移動中でも進行中の作業を追いかける

## このあと何を読むか

- 「何を用意すればいいか」を先に確認したい場合は [はじめる前に必要なもの](./requirements)
- 自分の端末が対象かを先に確認したい場合は [対応環境](./supported-environments)
- 手順をそのまま進めたい場合は、サイドバーの `Mac アプリ` と `iPhone アプリ` を上から順に読む

## 迷ったときの判断基準

次の 3 つがそろっていれば、たいていそのまま始められます。

- Mac で Codex を普段どおり使えている
- Mac と iPhone が同じネットワークにいる
- iPhone で QR を読み取れる、またはペアリングコードを貼り付けられる
