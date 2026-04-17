# Contributing

## Scope

- `site/` は公開 docs site のソースです

## Rules

- 非公開の要件、設計、審査素材、内部検証メモはこの公開 repo に置かない
- それらの非公開文書は sibling repo の `../codex-pocket-internal-docs/` に置く
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
current docs 向けの追加チェックは、手元では `./scripts/run-current-doc-checks.sh --staged` でまとめて確認できます。
current docs 向けチェックと site validate をまとめて回したいときは、repo root で `./scripts/run-doc-review-checks.sh --staged` を使ってください。
任意で `./scripts/install-git-hooks.sh` を実行すると、current docs の markdown を commit するときだけ pre-commit hook で `./scripts/run-current-doc-checks.sh --staged` を自動実行できます。
PR では、この aggregate command に含まれる locale parity、frontmatter、画像 alt、見出し構造、asset path の確認を個別 job で自動実行します。
各スクリプトの役割と使い分けは [scripts/README.md](scripts/README.md) を参照してください。

## Pull Requests

- PR では「何を変えたか」「どの導線やページに影響するか」「何を検証したか」を本文に残します
- 追加した PR テンプレートのチェック項目を埋めて、翻訳や関連ページ確認の抜けを防いでください
