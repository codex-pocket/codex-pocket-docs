---
title: iPhone アプリを使い始める
slug: /iphone/
description: Mac で動いている Codex を、iPhone から続けるための入口です。
---

CodexPocket の iPhone アプリは、Mac の代わりになるアプリではありません。ふだん Mac で整えている Codex の環境を、離席中や移動中にそのまま扱うためのアプリです。

入手先と現在の配布状況は、先に [iPhone アプリを入手する](./getting-started) にまとめています。

すでに Mac で Codex を使いこなしている人なら、iPhone 側で新しく覚えることは多くありません。最初に `Host` を 1 台追加すれば、Project を開いて thread の確認、追加指示、軽い切り替えができるようになります。

初回設定では、iPhone と Mac が同じローカルネットワークにある必要があります。設定後に Managed Relay 情報が保存された Host は、別 Wi-Fi やモバイル回線からも接続できます。Mac 側の準備がまだなら、先に [Mac を準備する](../mac/) を確認してください。ネットワーク条件を細かく確認したいときは [ネットワーク要件](../shared/network-requirements) も役立ちます。

![離席中でも iPhone から thread を追いかけるイメージ](/img/docs/iphone-overview-hero.webp)

## やりたいことから探す

| やりたいこと | 読むページ |
| --- | --- |
| 配布状況と入手方法を知りたい | [iPhone アプリを入手する](./getting-started) |
| 初回起動で見る項目を先に知りたい | [初回起動で確認すること](./first-launch) |
| QR かコードで Host を追加したい | [Mac を追加する](./add-host) |
| Mac 側の準備から見直したい | [Mac を準備する](../mac/) |
| Project や Thread が見えないときの確認先を知りたい | [Project が見つからない](../troubleshooting/cannot-see-projects) |

## iPhone でよく使うこと

- 進行中の thread を開いて、`回答` と `作業ログ` を確認する
- Composer から短い追記や方向修正を送る
- `ブランチ切り替え` で、いまの workspace のローカルブランチを確認する
- `Exec` で、その場で 1 回だけ動かしたい指示を実行する
- `ホーム` と `プロジェクト` から、最近使った workspace にすぐ戻る

## 先に知っておくこと

- iPhone が repository を持つわけではありません。実際の作業は Mac 上の Codex と workspace で進みます。
- iPhone 側の接続が切れても、Mac 側の作業が続くことがあります。
- 最初の設定では、Mac 側で `CodexPocketMac` と `Bridge` の準備ができている必要があります。

## アプリ内の主な画面

- `メイン画面`
  既定 Host、最近使ったプロジェクト、いま開いている thread の入口になります。
- `サイドバー`
  `プロジェクト` `ホスト` `設定` を開く入口です。thread を開いているときも左上から戻れます。
- `プロジェクト`
  開きたい workspace を選びます。必要なら iPhone から追加もできます。
- `ホスト`
  Mac の追加、接続テスト、再設定を行います。
- `設定`
  言語、テーマ、フォントサイズ、接続まわりを調整します。

## 最初の流れ

1. [iPhone アプリを入手する](./getting-started)
2. 初回起動で権限と表示設定を確認する
3. 空の画面の `QR から追加` か、サイドバーの `ホスト` から Mac の QR を読み取り、Host を保存する
4. Host の初回設定が終わるのを待つ
5. `プロジェクト` から workspace を開き、thread を続ける

iPhone 側で最初に覚えれば十分なのは `ホスト` と `プロジェクト` です。thread の使い方は、Host を追加したあとに自然に慣れていけます。
