---
id: intro
title: ドキュメント概要
slug: /
description: CodexPocket の iPhone app、macOS companion app、pairing、bridge、thread workflow をまとめた公式ドキュメントです。
---

# ドキュメント概要

`CodexPocket Docs` は、Codex を iPhone から扱うための `CodexPocket` の公式ドキュメントです。iPhone app、macOS companion app、pairing、bridge、thread workflow、release 運用をまとめています。

:::note 現在の状態

- `0.1.0` を安定版として `/docs/` に固定
- `docs/` 配下は `next` として `/docs/next/` に公開
- 既定ロケールは日本語、英語は `en` ロケールで切り替え

:::

## ここから増やす想定の内容

- iPhone クライアントの導入ガイド
- macOS companion app / bridge のセットアップ
- pairing と bridge 接続の前提
- thread / review / exec の操作フロー
- リリースノートと既知制約

## ドキュメントの置き場所

- `docs/`
  次のリリースに向けた作業中ドキュメント
- `versioned_docs/`
  公開済みリリースの固定スナップショット
- `i18n/en/`
  英語ロケールの翻訳ファイル

## 運用メモ

新しいリリースを切るときは、まず `docs/` を整えてから `npm run docs:version -- <version>` を実行します。安定版と `next` を同時に持てるので、リリース済みの説明を崩さずに次版の作業を進められます。
