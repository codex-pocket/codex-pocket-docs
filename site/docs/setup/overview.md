---
title: セットアップの全体像
slug: /setup/
description: Mac の準備から iPhone の接続までをまとめた入口ページです。
---

import MacDownloadLink from '@site/src/components/MacDownloadLink';

CodexPocket のセットアップは、「Mac で待ち受ける」「iPhone で読み取る」「そのまま続きを触る」の 3 段階です。Mac で使っている Codex を、iPhone から触れるようにする準備だと考えると分かりやすくなります。

![Mac で待ち受けて iPhone で取り込むセットアップの流れ](/img/docs/setup-overview-hero.webp)

1. Mac 側を整える
2. iPhone で Mac を取り込む
3. Project と Thread が見えることを確かめる

## やりたいことから探す

| やりたいこと | 読むページ |
| --- | --- |
| 最初に必要なものだけ確認したい | [はじめる前に必要なもの](./requirements) |
| 使える端末の組み合わせを見たい | [対応環境](./supported-environments) |
| Mac 側の準備を順番に進めたい | [Mac を準備する](../mac/) |
| iPhone で Host を追加する流れを見たい | [iPhone アプリを入手する](../iphone/getting-started) |
| QR でつなぐ実画面を見たい | [Pairing する](../shared/pairing-and-bridge) |

## 1. Mac 側を整える

最初に Mac で次を済ませます。ここで実行環境そのものを作るので、iPhone 側はあとからつなぐだけです。

- `CodexPocketMac` を起動する
- `codex` が使えることを確認する
- Codex App を使うなら、使いたい workspace を Codex App に入れる
- Bridge が動いていることを確認する

まだ Mac 側の準備が済んでいない場合は、ここで先に <MacDownloadLink>Mac 側の準備</MacDownloadLink> を開いておくと流れが止まりません。

Codex App を使わない場合は、iPhone で Host を追加したあとに `プロジェクト` の `+` から手動で追加します。

## 2. iPhone で Mac を取り込む

おすすめは QR での追加です。Mac の `ペアリング` に出る QR を iPhone で読み取ると、接続先と認証情報をまとめて取り込めます。

取り込み後は、iPhone 側で次の初回処理が自動で進みます。

- Bridge の接続確認
- Project 一覧の取得
- 最初の workspace の準備
- Host の保存

## 3. 使えることを確かめる

セットアップが終わったら、iPhone で次を確認します。

- `ホーム` に Host が見える
- `プロジェクト` に Mac の workspace が見える
- Project を開くと Thread を作成または再開できる

## 先に読むページ

- 何をそろえるかは [はじめる前に必要なもの](./requirements)
- 対象の端末かどうかは [対応環境](./supported-environments)
- Mac 側の手順はサイドバーの `Mac アプリ` を上から順に読む

接続で詰まったときは、先に Mac 側の `一般`、`プロジェクト`、`ペアリング` を見ると切り分けやすくなります。
