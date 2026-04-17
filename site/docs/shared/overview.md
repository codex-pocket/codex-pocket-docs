---
title: Mac と iPhone を連携する
slug: /shared/
description: Mac で動いている Codex を iPhone から使うための連携手順をまとめます。
---

import MacDownloadLink from '@site/src/components/MacDownloadLink';

このセクションは、普段は Mac で Codex を使っていて、席を外したときに iPhone から続きを見たい人向けの案内です。

CodexPocket では、実際の作業は Mac 側で動き続けます。iPhone 側でやることは、Mac を `Host` として登録し、開きたい `Project` と `Thread` に入ることです。

連携の前提として Mac 側で `CodexPocketMac` が起動している必要があります。まだ準備していない場合は、先に <MacDownloadLink>Mac 側の準備</MacDownloadLink> を済ませてください。

![Mac と iPhone をつないで Project と Thread を開くまでの流れ](/img/docs/setup-overview-hero.webp)

## やりたいことから探す

| やりたいこと | 読むページ |
| --- | --- |
| QR での連携手順を順番に見たい | [Pairing する](./pairing-and-bridge) |
| つながったかを切り分けたい | [接続を確認する](./check-connection) |
| 同じ LAN やポート条件を確認したい | [接続に必要なネットワーク条件](./network-requirements) |
| ペアリング自体がうまくいかない | [Pairing できない](../troubleshooting/cannot-pair) |
| 先に Mac 側の準備から見直したい | [Mac を準備する](../mac/) |

## このセクションで分かること

- 初回連携で何をするか
- `ペアリング` と `Bridge` の違い
- 連携できたかをどこで確認するか
- 接続に必要なネットワーク条件

## 連携の流れ

1. Mac で `CodexPocketMac` を開き、`一般` の `ランタイム` が `実行中` になっていることを確認します。
2. Mac の `ペアリング` で QR を表示します。
3. iPhone の `ホスト` で `QR から追加` を開き、QR を読み取ります。
4. `Host として保存` を押し、iPhone 側の初回設定が終わるまで待ちます。
5. `プロジェクト` から作業したい `Project` を開き、`Thread` を始めます。

## まず押さえる言葉

- `ペアリング`
  最初の 1 回だけ行う登録です。Mac の接続先と接続用トークンを iPhone に渡します。
- `Bridge`
  iPhone と Mac の間で実際の通信を受け持つ窓口です。Mac 側で動き続けます。
- `Host`
  iPhone から見に行く Mac です。
- `Project`
  iPhone から開く作業フォルダです。

難しく考えなくて構いません。いつも Codex を使っている Mac を iPhone に登録する、と考えるのがいちばん分かりやすくなります。

## 連携が終わるとできること

- iPhone から `Project` を開く
- 既存の `Thread` を再開する
- 新しい `Thread` を始める
- `作業ログ` と `回答` を追う
- 必要に応じて `Exec` や `Fork` を使う

## 続けて読むページ

- [Pairing する](./pairing-and-bridge)
- [接続を確認する](./check-connection)
- [接続に必要なネットワーク条件](./network-requirements)
