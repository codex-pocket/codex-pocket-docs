---
title: 多言語運用
---

# 多言語運用

このサイトは `ja` を既定ロケール、`en` を追加ロケールとして構成しています。`iPhone` `Mac` `shared` `reference` の構造は両言語で揃え、読み始めの導線がずれないことを優先します。

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

## platform-first 構成でのルール

- `docs/iphone/` と `i18n/en/.../iphone/` は同じページ構成にする
- `docs/mac/` と `i18n/en/.../mac/` も同様に揃える
- `shared` は両デバイスが登場する説明だけを置き、片方の言語だけで情報が増えないようにする
- sidebar category 名も `ja / en` で対応づけ、どの locale でも同じ順番で並ぶようにする
