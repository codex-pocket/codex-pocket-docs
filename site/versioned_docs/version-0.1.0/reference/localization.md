---
title: 多言語運用
---

# 多言語運用

このサイトは `ja` を既定ロケール、`en` を追加ロケールとして構成しています。

## コンテンツの置き場所

- 日本語の基準文書
  `docs/`
- 英語の docs 本文
  `i18n/en/docusaurus-plugin-content-docs/`
- 英語の UI 文言
  `i18n/en/code.json`
  `i18n/en/docusaurus-theme-classic/`

## 開発時の確認コマンド

```bash
npm run start:ja
npm run start:en
```

## 翻訳ひな形を更新する

```bash
npm run write-translations -- --locale en
```

## 編集メモ

本文ページは markdown / MDX のまま翻訳し、ホームや navbar/footer のような React / themeConfig 文言は translation catalog で管理する前提です。
