---
title: Mac の初期セットアップ
description: macOS companion app と bridge を用意して iPhone をつなぐまでの前提を整理します。
---

# Mac の初期セットアップ

CodexPocket の primary setup path は native macOS companion app です。end-user に Node.js や npm を要求せず、Mac 側で bridge、projects、logs、pairing を管理できる構成を前提にします。

## Mac 側で最初に確認すること

- `Codex CLI` と `git` が利用できる
- companion app から `Start / Stop Bridge` を操作できる
- `Show Pairing QR` で iPhone 取り込み用の情報を表示できる
- `Projects` で workspace を追加・編集できる

## 初回セットアップの流れ

1. companion app を起動する
2. bridge を開始する
3. pairing QR または Pairing Code を表示する
4. 必要な Project を registry に登録する
5. iPhone 側で Host import を完了させる

## 運用時に Mac 側で持つ責務

- `bridge` の起動状態と接続性
- `Projects` の source of truth
- `Logs` の確認
- `Launch at Login` など常駐設定
- 再 pair 時の Host identity と token の整合

## このページで今後詳しくする項目

- 初回起動時の migration
- 同じ Mac の再 pair と別の Mac 追加の扱い
- `bridgeID` を使った Host 更新の考え方
- JS reference bridge と native bridge の住み分け

## 関連ページ

- [Mac から始める](../mac/)
- [iPhone 側の初期セットアップ](../iphone/getting-started)
- [pairing と bridge の全体像](../shared/pairing-and-bridge)
