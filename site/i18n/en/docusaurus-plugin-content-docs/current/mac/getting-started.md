---
title: Mac Setup
description: What the macOS companion app and bridge must prepare before the iPhone connects.
---

# Mac Setup

The primary setup path for CodexPocket is the native macOS companion app. The goal is to avoid requiring Node.js or npm from end users and keep bridge, Projects, logs, and pairing manageable on the Mac side.

## What to confirm first on Mac

- `Codex CLI` and `git` are available
- the companion app can start and stop the bridge
- `Show Pairing QR` can display the import payload for iPhone
- `Projects` can add and edit workspaces

## First-run flow

1. launch the companion app
2. start the bridge
3. show the pairing QR or Pairing Code
4. register the required Projects
5. let the iPhone complete Host import

## Ongoing responsibilities on Mac

- bridge state and connectivity
- the source of truth for `Projects`
- logs and diagnostics
- always-on settings such as `Launch at Login`
- Host identity and token consistency during re-pairing

## Topics to expand here

- first-launch migration
- re-pairing the same Mac versus adding a second Mac
- how `bridgeID` is used for Host updates
- when to use the JS reference bridge versus the native bridge

## Related pages

- [Start on Mac](../mac/)
- [iPhone setup](../iphone/getting-started)
- [Pairing and bridge](../shared/pairing-and-bridge)
