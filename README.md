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
- Mac setup guide: [Mac アプリを準備する](https://codex-pocket.github.io/codex-pocket-docs/docs/mac/)
- Releases: [codex-pocket-releases](https://github.com/codex-pocket/codex-pocket-releases/releases)

## Repository Layout

- `product/`: product requirements and design documents
- `site/`: public Docusaurus documentation site
- `.github/`: docs-specific issue templates and deployment workflows

## Local Development

```bash
cd site
npm ci
npm run start
```

## Support

- Bug reports and documentation requests: [GitHub Issues](https://github.com/codex-pocket/codex-pocket-docs/issues)
- Security-related reports: [SECURITY.md](SECURITY.md)
