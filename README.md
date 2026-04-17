<p align="center">
  <img src="https://raw.githubusercontent.com/codex-pocket/.github/main/profile/assets/github-hero-ja.png" alt="CodexPocket hero banner" width="100%">
</p>

# CodexPocket Docs

Official product documentation and support content for CodexPocket.

CodexPocket は、Mac 上で動いている Codex を iPhone からすぐ再開するための companion です。  
このリポジトリには、公開ドキュメント、セットアップ導線、トラブルシューティング、Docusaurus site のソースをまとめています。  
現在の案内は、同じ LAN 上での QR pairing を使って、席を立ったあとも軽く続けられる体験を中心に整理しています。

## Quick Links

- Public docs site: [codex-pocket.github.io/codex-pocket-docs](https://codex-pocket.github.io/codex-pocket-docs/)
- Setup overview: [セットアップの全体像](https://codex-pocket.github.io/codex-pocket-docs/docs/setup/)
- Mac guide: [Mac アプリを準備する](https://codex-pocket.github.io/codex-pocket-docs/docs/mac/)
- iPhone guide: [iPhone アプリを準備する](https://codex-pocket.github.io/codex-pocket-docs/docs/iphone/)
- Pairing guide: [Mac と iPhone を連携する](https://codex-pocket.github.io/codex-pocket-docs/docs/shared/)
- Contribution guide: [CONTRIBUTING.md](CONTRIBUTING.md)
- Releases: [codex-pocket-releases](https://github.com/codex-pocket/codex-pocket-releases/releases)

## Repository Layout

- `site/`: public Docusaurus documentation site
- `.github/`: docs-specific issue templates and deployment workflows
- `scripts/`: docs review / verification helpers. See [scripts/README.md](scripts/README.md)

## Local Development

```bash
cd site
npm ci
npm run start
```

ローカルで公開内容を確認する前に、最低限 `npm run validate` を通してください。`typecheck` と 2 言語ぶんの Docusaurus build をまとめて検証できます。
current docs の内容チェックは、repo root で `./scripts/run-current-doc-checks.sh --worktree` を使うと 1 コマンドでまとめて確認できます。
PR 前の確認をまとめて回したいときは、repo root で `./scripts/run-doc-review-checks.sh --worktree` を使うと current docs 向けチェックと `npm run validate` を続けて実行できます。
任意で `./scripts/install-git-hooks.sh` を実行すると、current docs の markdown を commit するときだけ pre-commit hook で軽い docs チェックを走らせられます。
各スクリプトの役割は [scripts/README.md](scripts/README.md) にまとめています。

## Editing Notes

- 公開ドキュメント本文は `site/docs/` にあり、英語版は `site/i18n/en/docusaurus-plugin-content-docs/current/` に置いています
- 現在案内している動線が変わる差分は、関連するセットアップ、使い方、トラブルシューティングも同じタイミングで見直します
- 画像や図版を追加するときは `site/static/img/` 配下に置き、ページ本文では用途が分かる代替テキストを付けます

## Support

- Bug reports and documentation requests: [GitHub Issues](https://github.com/codex-pocket/codex-pocket-docs/issues)
- Security-related reports: [SECURITY.md](SECURITY.md)
