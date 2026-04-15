---
title: なぜ Mac が必要なのか
description: CodexPocket が iPhone 単体ではなく Mac companion と一緒に動く理由、データの流れ、権限の意味を説明します。
---

`CodexPocket` を初めて見ると、「なぜ iPhone アプリなのに Mac が必要なのか」と感じやすいはずです。このページは、その前提をまとめたものです。ユーザー向けの説明ですが、アプリを評価するときに知りたいことも同じ内容にそろえています。

## 一言で言うと

- iPhone は、Project や Thread を開き、追加の指示を送り、結果を確認するための画面です
- 実際に Codex が動き、workspace や Git を触っているのは Mac 側です
- 現在の公開リリースは、ユーザー自身の Mac と iPhone が同じローカルネットワークにいる前提です
- iPhone アプリの中に cloud relay や developer backend を前提にした実行経路は含めていません

短く言うと、`CodexPocket` は iPhone から Mac 上の作業を続けるための companion app です。

## Mac が必要な理由

`CodexPocket` の価値は、Mac で使っている Codex 環境をそのまま iPhone から続けられることにあります。そのため、次の役割は Mac 側に残しています。

- Codex の実行
- workspace へのアクセス
- Git 状態の確認や branch 操作
- project 一覧と thread 一覧の正本管理
- pairing QR と bridge の提供

iPhone 側は、Mac 側の作業を薄く安全に開くための companion UI です。これは単に機能を減らしているのではなく、普段の作業環境をユーザー自身の Mac に残したまま扱えるようにするためです。

## どこで何が動くか

| 要素 | 役割 | 主にどこで扱うか |
| --- | --- | --- |
| iPhone app `CodexPocket` | pairing、project/thread の表示、follow-up 入力、結果確認 | iPhone |
| Mac app `CodexPocketMac` | bridge 起動、pairing QR、project 管理、Mac 側の状態確認 | ユーザー自身の Mac |
| Codex 実行環境 | 実際の prompt 実行、workspace / Git 操作、thread 継続 | ユーザー自身の Mac |

この構成なので、iPhone 側だけで新しい実行環境を持つわけではありません。iPhone は、すでに Mac 上にある環境へつながる前面 UI です。

## ネットワーク前提

現在の公開リリースは、同一 LAN 上の Mac と iPhone を前提にしています。

- 接続の主経路は Bonjour とローカル URL です
- pairing QR には、接続候補と接続用トークンが入ります
- `Direct Bridge URL` は、Bonjour 解決がうまくいかないときに同じ LAN 内の hostname / IP を手入力するための補助導線です
- インターネット越しの relay 接続は、このリリースでは対象外です

詳しくは [接続に必要なネットワーク条件](../shared/network-requirements) を見てください。

## 権限の意味

現在の iPhone app が使う権限は次です。

| 権限 | 使う理由 |
| --- | --- |
| ローカルネットワーク | ユーザー自身の Mac bridge を同じ LAN で見つけて接続するため |
| カメラ | Mac 側の Pairing QR を読むため |
| 写真 | ユーザーが明示的に選んだ画像を添付するため。システムの photo picker を使います |
| 通知 | task 完了などを iPhone 上でローカル通知として知らせるため |

使っていないものは次です。

- 連絡先
- 位置情報
- マイク
- 広告 ID

## データの流れとプライバシー

現行の iPhone app について、先に押さえておきたい点は次です。

- iPhone app は、developer-operated server へ user data を送って保存しません
- iPhone app には、analytics SDK、advertising SDK、tracking SDK は入っていません
- iPhone app から送る入力は、主にユーザー自身の Mac へ直接送られます
- Host 情報や bridge token は iPhone の Keychain を使って安全に保持します

もう少し具体的には、次のように考えると分かりやすくなります。

- `iPhone app が扱うもの`
  Host、Project、Thread の表示状態、接続設定、ユーザーが送る follow-up 入力
- `Mac 側で扱うもの`
  実際の Codex 実行、workspace、Git、thread の正本
- `developer が保持しないもの`
  iPhone app から developer backend へ送って保存する user data

注意点として、Mac 側の Codex 環境そのものが外部サービスへ接続するかどうかは、ユーザー自身の Mac の設定に従います。少なくとも iPhone app 自体は、第三者 AI SDK を内包したり、iPhone から第三者 AI API を直接叩いたりする構成にはしていません。

詳しくは [プライバシーポリシー](/privacy-policy) を見てください。

## どう評価すると分かりやすいか

このアプリを初めて触るときは、次の順で見ると全体像をつかみやすくなります。

1. Mac で `CodexPocketMac` を起動する
2. `Pairing` で QR を出す
3. iPhone で `Add from QR` を開いて読み取る
4. host setup が終わったら Project を開く
5. Thread を新規作成または再開する
6. 短い prompt を送り、結果が iPhone に出ることを確認する

この流れを通すと、iPhone が単体実行環境ではなく、Mac 上の作業を続けるための companion app であることが自然に分かります。

## 関連ページ

- [どこで何が動くか](./architecture)
- [できることと注意点](./limitations)
- [接続に必要なネットワーク条件](../shared/network-requirements)
- [Pairing と Bridge の基本](../shared/pairing-and-bridge)
- [プライバシーポリシー](/privacy-policy)
