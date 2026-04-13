---
title: Start on Mac
slug: /mac/
description: The device-first entry point for people starting from the macOS companion app.
---

# Start on Mac

The Mac side of CodexPocket is the execution environment behind Codex CLI and `codex app-server`. The threads, projects, branches, skills, and commands you see on iPhone all come from the state managed by the companion app and bridge on Mac.

## What you look at on Mac

- `Companion app`
  the entry point for pairing QR, bridge start and stop, Project management, and logs
- `Bridge`
  the layer that serves iPhone requests and relays Codex and git state
- `Project registry`
  the place that decides which workspaces are exposed to iPhone
- `Logs`
  the place to inspect connection and data-collection failures

## What this section covers

- what the Mac side must prepare during initial setup
- how pairing QR and manual codes are handled
- which parts of Projects, Logs, and Bridge belong in the admin surface

## Read next

- [Mac setup](./getting-started)
- [Pairing and bridge](../shared/pairing-and-bridge)
- [Architecture](../reference/architecture)
