---
title: App Store フィーチャー向けブリーフ
description: App Store Editorial 向けに、CodexPocket の価値、体験フロー、公開前提を短くまとめたページです。
---

`CodexPocket` は、ユーザー自身の Mac で動いている Codex を iPhone から続けるための companion app です。iPhone を別の開発環境にせず、いま走っている作業の続きを少しだけ前に進められることを重視しています。

![CodexPocket の thread 画面](/img/docs/IMG_4365.jpeg)

## 一言でいうと

- Mac 上の実行をそのままに、iPhone で進捗確認と follow-up を行える
- QR でペアリングし、同じ LAN 上の自分の Mac に直接つながる
- Project と Thread を開き、短い指示、ブランチ切り替え、Exec、結果確認を iPhone から行える

## このローンチで伝えたいこと

- 長めの Codex 作業を、机の前に固定されずに続けられる
- 実際の workspace、Git 状態、thread の正本は Mac に残る
- iPhone 側には developer-operated backend や cloud relay を前提にしたコア実行経路を入れていない
- 日本語と English の UI を切り替えられる

## 体験の最短フロー

1. Mac で `CodexPocketMac` を開き、`Pairing` に QR を表示する
2. iPhone で `Add from QR` を開き、QR を読み取る
3. 取り込み後、Mac にある Project を開く
4. 進行中の Thread を再開するか、新しく作る
5. 短い follow-up を送り、結果を iPhone で確認する

| Mac 側 | iPhone 側 |
| --- | --- |
| ![Mac の Pairing 画面](/img/docs/pairing-mac.jpg) | ![iPhone の QR 追加画面](/img/docs/pairing-iphone.jpg) |

## ほかと違う点

- iPhone を second IDE にしない。Mac 上の実行環境をそのまま操作面だけ持ち出す
- 同じ LAN 上の自分の Mac に直接つながる
- Pairing、Project、Thread、follow-up という最短経路に絞り、touch-first で使える
- 実際にこのアプリ自体も CodexPocket を使いながら作っている

## 現在の公開前提

| 項目 | 現在の範囲 |
| --- | --- |
| Client | iOS (iPhone) |
| Companion | CodexPocketMac |
| Network | 同一ローカルネットワーク |
| Languages | Japanese, English |
| Mac distribution | public stable `0.1.4` |
| iPhone distribution | App Store launch preparation in progress |

## プライバシーと権限

- iPhone app は user data を developer-operated server へ送って保存しない
- analytics、advertising、tracking SDK は入れていない
- `Local Network` は自分の Mac bridge 検出と接続、`Camera` は QR 読み取り、`Photos` はユーザーが明示的に選んだ画像添付、`Notifications` はローカル完了通知にだけ使う

## 関連ページ

- [なぜ Mac が必要なのか](./why-mac-is-required)
- [Pairing と Bridge の基本](../shared/pairing-and-bridge)
- [プライバシーポリシー](/privacy-policy)
