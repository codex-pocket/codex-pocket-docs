---
id: intro
title: はじめに
slug: /
description: Mac で動いている Codex を iPhone からリモートで続けるための入口です。
---

import MacDownloadLink from '@site/src/components/MacDownloadLink';

CodexPocket は、Mac で動いている Codex を iPhone からそのままリモート操作するためのアプリです。Mac の作業環境はそのままに、席を離れていても進捗を見て、ひとこと追記して、結果を確認できます。

Mac 側の準備がまだなら、先に <MacDownloadLink>CodexPocketMac をダウンロード</MacDownloadLink> しておくと、そのまま Pairing まで進めます。

<MacDownloadLink className="button button--primary button--lg">Mac アプリをダウンロード</MacDownloadLink>

| Mac 側 | iPhone 側 |
| --- | --- |
| ![Mac の Pairing 画面](/img/docs/pairing-mac.jpg) | ![iPhone の QR 追加画面](/img/docs/pairing-iphone.jpg) |

私自身、Mac の前にずっといるのがしんどくて、「いま動いている Codex を iPhone から触れたらかなり楽になる」と思って作りました。ソファに移ったあとも、長めの作業の様子を見たり、追加の指示を送ったり、返答だけ先に読んだりできます。実際、このアプリ自体も 50% くらいは CodexPocket を使って作っています。

## CodexPocket でいちばん便利なこと

- Mac 上の Codex を iPhone からリモートコントロールできる
- いま開いている thread の続きを、そのまま iPhone で読んで追記できる
- 新しい開発環境を iPhone に作る必要はない
- 実際の処理は Mac 側で動き、iPhone は操作画面として使う

現在は、Mac と iPhone が同じローカルネットワークにいる前提です。細かな環境整備やトラブル対応は、必要に応じて Mac 側で行います。

## こんな場面で役に立ちます

- 長めの作業を流しながら、机を離れて進捗だけ確認したい
- 「この方針で続けて」「ここだけ直して」をすぐ追記したい
- 返答や差分を先に読み、必要なときだけ Mac に戻りたい
- 画像、Exec、ブランチ切り替えなど、Mac に戻るほどではない操作を iPhone から済ませたい

## 最短ルート

1. Mac で `CodexPocketMac` を開き、`ペアリング` に QR を出す
2. iPhone で `QR から追加` を開いて読み取る
3. 取り込みが終わったら、使いたい Project と thread を開いて続きを始める

細かいセットアップは [セットアップの全体像](./setup) から、ペアリングの実画面は [Pairing する](./shared/pairing-and-bridge) から確認できます。
