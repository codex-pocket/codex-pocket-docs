## Summary

- 

## What Changed

- 

## Helper Commands

- `./scripts/run-current-doc-checks.sh --staged`
- `./scripts/run-doc-review-checks.sh --staged`
- スクリプトの使い分け: `scripts/README.md`

## Checks

- [ ] current docs の markdown を更新した場合、`./scripts/run-current-doc-checks.sh --staged` を実行した
- [ ] `site/docs/` を更新した場合、必要な英語版を `site/i18n/en/docusaurus-plugin-content-docs/current/` に反映した
- [ ] セットアップや運用フローを変えた場合、関連する `usage/` と `troubleshooting/` も確認した
- [ ] 画像や図版を追加した場合、`site/static/img/` に配置し、本文で意味が分かる alt を付けた
- [ ] サイドバーや入口ページから辿れる導線を確認した
- [ ] `./scripts/run-doc-review-checks.sh --staged` または同等の確認を実行した

## Notes for Reviewers

- ローカルでまとめて再確認したいときは `./scripts/run-doc-review-checks.sh --worktree` を使えます
- スクリプト一覧と用途は `scripts/README.md` にまとめています
- スクリーンショットや確認してほしい導線があれば書いてください
- 未対応の翻訳、既知の制約、後続で直す点があれば書いてください
