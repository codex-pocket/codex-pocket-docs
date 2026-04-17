# Contributing

## Scope

- `site/` は公開 docs site のソースです

## Rules

- 非公開の要件、設計、審査素材、内部検証メモはこの公開 repo に置かない
- 実装判断が変わる差分は、関連 repo のコード変更と同じタイミングで更新する
- backend / relay の内容に触れるときは関連 repo の設計文書とも整合させる

## Content Workflow

- 日本語の現行ドキュメントは `site/docs/`、英語の現行ドキュメントは `site/i18n/en/docusaurus-plugin-content-docs/current/` を更新する
- セットアップや運用フローを変えたときは、関連する `usage/` と `troubleshooting/` も同時に確認する
- 画像やスクリーンショットを追加するときは `site/static/img/` 配下に置き、本文で意味が分かる alt を付ける
- 手動追加や例外フローのページでも、サイドバーから辿れる状態を保つ

## Verification

```bash
cd site
npm ci
npm run validate
```

必要なら `npm run start:ja` と `npm run start:en` で表示確認をします。
