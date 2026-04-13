---
title: Mac から始める
slug: /mac/
description: macOS companion app と bridge の管理面から CodexPocket を把握する導線です。
---

# Mac から始める

CodexPocket の Mac 側は、Codex CLI と `codex app-server` を支える実行環境です。iPhone から見える thread、projects、branches、skills、commands は、この companion app と bridge が管理している状態を元にしています。

## Mac 側で見るもの

- `Companion app`
  pairing QR、bridge の起動停止、Project 管理、ログ確認の入口です
- `Bridge`
  iPhone からの API 呼び出しを受け、Codex と git の状態を中継します
- `Project registry`
  どの workspace を iPhone 側へ公開するかを管理します
- `Logs`
  接続やデータ収集の失敗を Mac 側で確認する場所です

## このセクションで扱う内容

- 初回セットアップで Mac 側に何を用意するか
- pairing QR と手入力コードをどう扱うか
- Project / Logs / Bridge のどこを管理画面として持つか

## 次に読む

- [Mac の初期セットアップ](./getting-started)
- [pairing と bridge の全体像](../shared/pairing-and-bridge)
- [全体アーキテクチャ](../reference/architecture)
