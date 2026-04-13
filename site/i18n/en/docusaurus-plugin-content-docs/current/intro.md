---
id: intro
title: Documentation Overview
slug: /
description: Official CodexPocket documentation for the iPhone app, macOS companion app, pairing, bridge, and thread workflows.
---

# Documentation Overview

`CodexPocket Docs` is the official documentation site for CodexPocket, covering the iPhone app, macOS companion app, pairing, bridge, thread workflows, and release operations.

:::note Current state

- `0.1.0` is pinned as the stable release at `/docs/`
- `docs/` is published as `next` at `/docs/next/`
- Japanese is the default locale, and English is available under `en`

:::

## Planned content areas

- onboarding for the iPhone client
- setup instructions for the macOS companion app and bridge
- pairing and bridge connection prerequisites
- thread / review / exec workflows
- release notes and known limitations

## Where content lives

- `docs/`
  working docs for the next unreleased version
- `versioned_docs/`
  fixed snapshots for published releases
- `i18n/en/`
  English translation files

## Operational note

When you cut a new release, finish the draft in `docs/` first and then run `npm run docs:version -- <version>`. That keeps stable documentation untouched while the next version continues to move.
