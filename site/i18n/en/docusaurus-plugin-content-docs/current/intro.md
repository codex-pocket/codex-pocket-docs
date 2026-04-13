---
id: intro
title: Documentation Overview
slug: /
description: Official CodexPocket docs with separate entry points for iPhone and Mac.
---

# CodexPocket Docs

CodexPocket lets you use your iPhone as the control surface for Codex running on a Mac. These docs separate the first entry point by device and move cross-device topics into shared pages.

:::tip Feedback

Please use [GitHub Issues](https://github.com/codex-pocket/codex-pocket-docs/issues) for bug reports and doc feedback. For security-related reports, follow the process in [SECURITY.md](https://github.com/codex-pocket/codex-pocket-docs/blob/main/SECURITY.md) instead of opening a public issue.

:::

## Where to start

### Start on iPhone

- you want to add a Host and open Projects and Threads first
- you want to understand the entry points for `Composer`, slash commands, and skills
- you want to see how much of the workflow starts from the iPhone side

[Go to the iPhone section](./iphone/)

### Start on Mac

- you want to begin from the macOS companion app and bridge admin flow
- you want to understand pairing QR, Project management, and logs first
- you want to know what the Mac side must provide before the iPhone connects

[Go to the Mac section](./mac/)

### Use Mac and iPhone together

- you want the cross-device view of pairing, bridge, and thread workflow
- you want to understand which state lives on iPhone and which lives on Mac
- you want shared flows in one place instead of split across device docs

[Go to the shared section](./shared/)

## Site assumptions

- `/docs/`
  latest stable release `0.1.0`
- `/docs/next/`
  next unreleased version
- `ja / en`
  Japanese and English share the same structure

## Structure rules

- keep device-specific onboarding in `iPhone` and `Mac`
- move pairing and thread workflow into `shared`
- keep architecture, release policy, and localization under `reference`
