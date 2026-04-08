# CodexPocket Docs

Mac 上の Codex を iPhone から扱うための docs サイト用リポジトリです。Docusaurus 3 系を使い、日本語を既定ロケールにした多言語対応と、`0.1.0` / `next` を並行運用できる docs versioning の土台を入れています。

## Quickstart

### Prerequisites

- Node.js 20 以上
- npm 11 以上

### Setup

```bash
cd /Users/mogir/workspace/codex-pocket/docs/site
npm ci
```

### Run

既定ロケールは日本語です。

```bash
npm run start
```

英語ロケールで確認する場合:

```bash
npm run start:en
```

## Common Commands

```bash
# 全ロケールをまとめて production build
npm run build

# 日本語のみ build
npm run build:ja

# 英語のみ build
npm run build:en

# 新しい docs リリースを切る
npm run docs:version -- 0.2.0

# コード/テーマ文言の翻訳ひな形を更新
npm run write-translations -- --locale en
```

## Structure

- `docs/`
  `next` 扱いの作業中ドキュメントです。次の未リリース版をここで編集します
- `versioned_docs/`
  リリース確定時点のスナップショットです。`npm run docs:version -- <version>` で増えます
- `versioned_sidebars/`
  バージョンごとの sidebar 定義です
- `i18n/en/`
  英語ロケールの翻訳ファイルです。docs 本文、sidebar 文言、コード/テーマ文言を持ちます
- `src/pages/index.tsx`
  ランディングページです
- `static/img/`
  ロゴ、favicon、social card などの静的 asset を置いています

## Versioning Notes

- 最新安定版は `0.1.0` として `/docs/` に出ます
- 作業中の未リリース版は `next` として `/docs/next/` に出ます
- 新しいリリースを切ったら、必要に応じて `docusaurus.config.ts` の `lastVersion` と `customFields.releaseVersion` も更新してください

## Localization Notes

- 既定ロケールは `ja`
- 追加ロケールは `en`
- docs 本文は `docs/` と `i18n/en/docusaurus-plugin-content-docs/` を対応させて管理します
- ホームや navbar/footer の文言は `i18n/en/code.json` と `i18n/en/docusaurus-theme-classic/` 側で翻訳します

## Deployment

`main` に push すると GitHub Actions で build して GitHub Pages に公開する想定です。

- `url`: `https://ryusei-mogi.github.io`
- `baseUrl`: `/codex-pocket-docs/`
- 公開 URL: `https://ryusei-mogi.github.io/codex-pocket-docs/`

## Contribution Policy

- 外部ユーザーは issue 作成を入口にする運用です
- GitHub 側の `pull_request_creation_policy` は `collaborators_only` に設定済みです

デプロイ先が変わる場合は [`docusaurus.config.ts`](docusaurus.config.ts) を差し替えてください。
