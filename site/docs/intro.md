---
id: intro
title: ドキュメント概要
slug: /
description: iPhone と Mac のどちらから始めるかで導線を分けた CodexPocket 公式ドキュメントです。
---

# CodexPocket Docs

CodexPocket は、iPhone を Mac 上の Codex の「操作面」として使うためのプロダクトです。このドキュメントでは、最初に触るデバイスごとに入口を分け、両方をまたぐ内容は共有ページへ集約しています。

:::tip フィードバック

不具合報告や改善要望は [GitHub Issues](https://github.com/codex-pocket/codex-pocket-docs/issues) に書いてください。セキュリティに関わる報告は公開 issue ではなく [SECURITY.md](https://github.com/codex-pocket/codex-pocket-docs/blob/main/SECURITY.md) の手順を使ってください。

:::

## どこから読むか

### iPhone から始める

- Host を追加して `Project` と `Thread` を見たい
- `Composer`、`slash command`、`skills` の入口を先に把握したい
- iPhone 側でどこまで完結できるかを知りたい

[iPhone セクションへ進む](./iphone/)

### Mac から始める

- macOS companion app と bridge の管理面から確認したい
- pairing QR、Project 管理、ログの見方を先に押さえたい
- 「Mac 側で何を用意してから iPhone をつなぐか」を知りたい

[Mac セクションへ進む](./mac/)

### Mac と iPhone を一緒に使う

- pairing、bridge、thread workflow のように両方の役割をまたぐ話題を追いたい
- どの情報を iPhone で見て、どの設定を Mac で持つかを整理したい
- 共有フローだけをまとめて見たい

[shared セクションへ進む](./shared/)

## このサイトの前提

- `/docs/`
  最新安定版 `0.1.0`
- `/docs/next/`
  次の未リリース版
- `ja / en`
  日本語と英語を同じ構造で提供

## 使い分けの方針

- platform 固有の初期導線は `iPhone` と `Mac` に分ける
- pairing や thread workflow のような共通フローは `shared` に寄せる
- アーキテクチャ、リリース運用、多言語運用は `reference` で横断的に扱う
