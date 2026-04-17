# Scripts Guide

このディレクトリには、docs repo の review と contributor workflow を補助するスクリプトを置いています。

## Start Here

| やりたいこと | 最初に使うコマンド |
| --- | --- |
| current docs の差分だけを素早く確認したい | `./scripts/run-current-doc-checks.sh --staged` |
| PR 前に current docs checks と site validate をまとめて回したい | `./scripts/run-doc-review-checks.sh --staged` |
| 変更された docs のカテゴリだけ先に把握したい | `./scripts/summarize-doc-changes.sh --worktree` |
| current docs の commit 時に軽い checks を自動実行したい | `./scripts/install-git-hooks.sh` |

## Current Docs Checks

| コマンド | 使う場面 |
| --- | --- |
| `./scripts/run-current-doc-checks.sh --staged` | current docs の markdown を編集して、PR の個別 checks 相当をまとめて確認したいとき |
| `./scripts/run-doc-review-checks.sh --staged` | current docs 向け checks と `site` の `npm run validate` をまとめて確認したいとき |
| `./scripts/check-doc-locale-parity.sh --staged` | `site/docs/` と `site/i18n/en/docusaurus-plugin-content-docs/current/` の更新対応がそろっているかだけ見たいとき |
| `./scripts/check-current-doc-frontmatter.sh --staged` | current docs の `title` と `description` を確認したいとき |
| `./scripts/check-current-doc-image-alt.sh --staged` | current docs の画像 alt を確認したいとき |
| `./scripts/check-current-doc-heading-structure.sh --staged` | current docs の見出しレベルを飛ばしていないか確認したいとき |
| `./scripts/check-current-doc-asset-paths.sh --staged` | current docs の画像参照先が存在するか確認したいとき |

`--worktree` を使うと未 commit の作業ツリー全体、`--staged` を使うと stage 済み差分だけを対象にできます。CI では base/head SHA を渡す range mode を使っています。

## Review Support

| コマンド | 使う場面 |
| --- | --- |
| `./scripts/summarize-doc-changes.sh --worktree` | 変更された docs のカテゴリをざっと一覧したいとき |
| `./scripts/install-git-hooks.sh` | repo local の pre-commit hook を有効にしたいとき |

## Notes

- `./scripts/install-git-hooks.sh` は、すでに別の `core.hooksPath` を使っている場合は上書きしません
- `.githooks/pre-commit` は current docs の markdown に差分があるときだけ `./scripts/run-current-doc-checks.sh` を実行します
