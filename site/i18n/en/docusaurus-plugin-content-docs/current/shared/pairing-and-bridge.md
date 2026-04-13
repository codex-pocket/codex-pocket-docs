---
title: Pairing and Bridge
description: How pairing and the bridge connect the iPhone app with the Mac execution environment.
---

# Pairing and Bridge

In CodexPocket, the iPhone is the UI for operating Codex, while the actual execution environment stays on the Mac. `Pairing` and the `bridge` are the foundation that connects those two sides safely and quickly.

## Responsibility split

- `iPhone app`
  owns Host and Project selection, thread browsing, Composer, skills, and exec UI
- `macOS companion app`
  owns pairing QR, bridge start and stop, Project management, and logs
- `bridge runtime`
  receives API calls from iPhone and relays state from Codex CLI, `codex app-server`, and git

## Initial release assumptions

- connectivity is LAN-first
- the primary setup path is the native macOS companion app
- end users should not need Node.js or npm
- QR import is the primary path and manual entry is the fallback

## First pairing flow

1. start the bridge on Mac
2. show a pairing QR or Pairing Code from the companion app
3. add a Host on iPhone
4. complete bridge reachability checks and Project catalog collection
5. confirm that threads, branches, skills, and commands are available per Project

## What the bridge must provide

- `GET /v1/health` for reachability checks
- APIs for Projects, Threads, Branches, Skills, Commands, and Exec
- response shapes that make transcript history and live events easy to render on iPhone
- logs that do not retain tokens, Authorization headers, or pairing payloads

## Re-registering devices and handling multiple Macs

- re-pairing the same Mac updates the existing Host through `bridgeID`
- adding another Mac creates a second Host instead of mutating the first
- Host validation must finish before save, and mismatched settings should fail instead of silently overwriting

## Topics to expand here

- UI differences between QR import and manual entry
- state transitions during Host data collection
- what changes when the product expands from LAN-first to relay-based access

## Related pages

- [iPhone setup](../iphone/getting-started)
- [Mac setup](../mac/getting-started)
- [Thread workflow](./thread-workflow)
