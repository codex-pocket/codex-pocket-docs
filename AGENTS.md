# AGENTS.md

## Docs Versioning

- Docusaurus の `current` は `next` として公開され、stable は `site/versioned_docs/` と `site/i18n/en/docusaurus-plugin-content-docs/version-*` から公開される。
- 公開済み手順や誤記を直すときは、`current` だけでなく該当する stable version と English versioned docs への backport 要否を先に確認する。
- next 専用の新機能説明は `current` に留め、stable へ入れる場合はその version の実際の挙動に合う短い補足にする。
