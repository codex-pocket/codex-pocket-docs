---
title: What Works Well and What to Watch For
description: This page explains the tasks CodexPocket fits well and the situations where returning to the Mac is faster.
---

CodexPocket is not meant to replace the Mac completely. It narrows the feature set so the Codex workflow you already use on the Mac is easier to continue while away from the desk.

## Current assumptions

- the Mac and iPhone are on the same local network
- the mobile side is designed for iPhone
- `CodexPocketMac` and `Bridge` are running on the Mac

## Things that work well on the iPhone

- open registered `Projects`
- follow existing `Threads`, start new ones, and `Fork`
- send additional instructions from `Composer`
- follow progress by reading the `Work Log` and `Answer`
- use commands, `Skills`, and `Exec` for short operations
- check, create, and switch local branches in Git-managed workspaces
- open source links inside answers and preview code

## Things that are not a good fit from the iPhone alone

- full-scale file editing or long code rewrites
- environment setup such as installing Codex CLI or Git, or fixing PATH
- heavy Git work such as merge or rebase conflict resolution and history cleanup
- opening arbitrary workspaces on the Mac that are not registered yet
- browsing every thread on the Mac that is outside the managed scope

## Behavior worth knowing

- if the iPhone stays in the background for too long during the first Host import, the process can pause and then resume when the app returns to the foreground
- even if the live connection on the iPhone drops, the work on the Mac keeps running and the history catches up after reconnection
- branch actions only appear when the `Project` is Git-managed and `git` is available on the Mac
- detailed checks for logs or missing prerequisites happen in `Logs` and `Details` on the Mac

## Signs that it is time to go back to the Mac

- you want to re-check connection or QR settings
- you need to add a workspace that is missing from the `Project` list
- you want to finish a larger code edit or review
- you need to resolve Git conflicts or clean up history
- you see prerequisite errors such as `Codex CLI missing` or `git missing`

The easiest way to stay productive is to separate "continue from the iPhone" from "prepare and repair on the Mac."
