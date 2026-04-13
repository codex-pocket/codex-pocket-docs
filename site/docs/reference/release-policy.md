---
title: リリースバージョン運用
---

# リリースバージョン運用

このサイトは Docusaurus の docs versioning を有効化し、安定版と `next` を並行して公開できる構成にしています。platform-first の導線にしても、版の切り方は変えません。

## 現在のルール

- `/docs/`
  最新安定版 `0.1.0`
- `/docs/next/`
  次の未リリース版

## 新しい版を切る手順

```bash
npm run docs:version -- 0.2.0
```

## 版を切ったあとに見る場所

- `versioned_docs/version-0.2.0/`
- `versioned_sidebars/version-0.2.0-sidebars.json`
- `docusaurus.config.ts` の `lastVersion`

## このサイト固有の注意点

- `docs/iphone/` `docs/mac/` `docs/shared/` の構造を、versioned docs 側でも崩さない
- 旧バージョンだけ generic guide 構成に戻さず、stable / next で同じ入口を保つ
- 過去版を編集するときは、対応する `versioned_sidebars` と `i18n/en` の versioned docs も合わせて更新する

## 編集メモ

今後リリースノートや migration guide を足す場合は、このページから各バージョン固有ページへリンクする構成にすると、最新導線と履歴導線を分けやすくなります。
