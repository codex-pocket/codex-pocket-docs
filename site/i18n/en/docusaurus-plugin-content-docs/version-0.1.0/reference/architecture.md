---
title: Architecture
---

# Architecture

CodexPocket assumes a split where the iPhone is the control surface and the Mac is the execution environment. The docs now mirror that split with four axes: `iPhone`, `Mac`, `shared`, and `reference`.

## System view

```text
[iPhone App]
  ├─ Host / Project / Thread UI
  ├─ Composer / Skills / Commands
  └─ Review / Exec
        ↓
[Local Network / future relay]
        ↓
[macOS Companion App]
  ├─ Pairing / Bridge / Logs / Projects
  ├─ codex app-server
  ├─ git
  └─ Codex CLI
```

## Main components

- `iPhone app`
  owns Host and Project selection, thread rendering, Composer, skills, and exec
- `macOS companion app`
  owns pairing QR, bridge lifecycle, Project management, and logs
- `bridge runtime`
  receives API calls from iPhone and relays Codex and git state
- `future relay`
  the extension point for remote access after the initial LAN-first release

## How that maps to the docs

- `iPhone`
  the first-run path for the control surface
- `Mac`
  the admin path for the companion app and bridge
- `shared`
  cross-device flows such as pairing, bridge, and thread workflow
- `reference`
  cross-cutting material such as architecture, release policy, and localization
