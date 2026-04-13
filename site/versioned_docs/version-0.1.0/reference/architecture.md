---
title: アーキテクチャ
---

# アーキテクチャ

CodexPocket は、iPhone を操作面、Mac を実行環境として使う構成を前提にしています。ドキュメントもこの責務分担に合わせて `iPhone` `Mac` `shared` `reference` の 4 軸で整理します。

## 全体像

```text
[iPhone App]
  ├─ Host / Project / Thread UI
  ├─ Composer / Skills / Commands
  └─ Review / Exec
        ↓
[Local Network / future relay]
        ↓
[macOS Companion App]
  ├─ Pairing / Bridge / Logs / Projects
  ├─ codex app-server
  ├─ git
  └─ Codex CLI
```

## 主要コンポーネント

- `iPhone app`
  Host と Project の選択、thread 表示、Composer、skills、exec を担当します
- `macOS companion app`
  pairing QR、bridge 起動停止、Project 管理、logs を担当します
- `bridge runtime`
  iPhone からの API 呼び出しを受け、Codex と git の状態を中継します
- `future relay`
  初回 LAN 前提リリース後に、外出先接続を扱うための拡張点です

## ドキュメントとの対応

- `iPhone`
  操作面としての最初の導線
- `Mac`
  companion app と bridge の管理導線
- `shared`
  pairing、bridge、thread workflow のような共通フロー
- `reference`
  アーキテクチャ、リリース運用、多言語運用の横断情報
