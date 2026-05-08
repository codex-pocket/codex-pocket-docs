---
title: Install Codex CLI
description: This page explains how to confirm that Codex CLI is visible before using the iPhone.
---

If you already use Codex on the Mac, this page is closer to a verification checklist than an installation guide. `CodexPocketMac` depends on the Mac-side Codex environment, so the `codex` command must be visible.

## Commands to check

Run these in Terminal:

```bash
which codex
codex app-server --help
```

The expected results are:

- `which codex` prints a path
- `codex app-server --help` does not fail

Even when `codex` was installed with Homebrew, `which codex` may print a symlink under `bin`, such as `/opt/homebrew/bin/codex` or `/usr/local/bin/codex`. To confirm where it came from, inspect that path too:

```bash
CODEX_PATH="$(which codex)"
ls -l "$CODEX_PATH"
```

If the `ls -l` target, or the `which codex` result itself, points into `/opt/homebrew/Caskroom/...` or `/usr/local/Caskroom/...`, it is installed as a Homebrew cask.

## If it does not work

- if `which codex` is empty, revisit the Codex CLI installation or PATH
- if it works in Terminal but the Mac app does not detect it, restart the Mac app
- you can also inspect the `Codex CLI` row in `Details`

## What this enables

- starting Bridge
- fetching the `Thread` list for each `Project`
- using `Composer` and `Fork` from the iPhone

If Codex CLI is missing, the iPhone may reach the connection stage, but it will not get as far as doing real work.
