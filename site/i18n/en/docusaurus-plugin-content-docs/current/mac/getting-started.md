---
title: First Things to Check
description: This page explains what to look at right after launching CodexPocketMac and the fastest path to first use.
---

When `CodexPocketMac` launches, it prepares the settings window and menu bar item, and if the prerequisites are met, it can also start Bridge automatically. The first question is whether the Mac is ready to wait for the iPhone.

If `CodexPocketMac` is not installed yet, open [Start on Mac](./) first and choose either the public release or the source Quickstart.

## Fastest path

1. Launch `CodexPocketMac`.
2. In `General`, check `Runtime`.
3. In `Details`, confirm that `Codex CLI` and `Shell` were found. If either is missing, set the matching path in `Executable Paths`.
4. In `Projects`, confirm that the workspace you want is visible.
5. In `Pairing`, confirm that you can show the QR code.

## Things worth checking right after launch

- `Runtime`
  If it shows `Running` or `Running externally`, you can usually keep going.
- `Enable Bridge`
  In most cases, leave it on. If it is off, the iPhone cannot connect.
- `Launch at login`
  Worth considering only if you want to use the app while away from the Mac regularly.
- warnings
  If you see messages such as `No projects found` or `Bridge prerequisites are not satisfied`, fix those before moving on.

## What you can do from the menu bar

Even when the settings window is closed, a lot of everyday actions are available from the menu bar.

- `Start Bridge`
- `Stop Bridge`
- `Show Pairing QR`
- `Open Settings`
- `Open Logs`

This is also the fastest place when you only want to pop the pairing QR back open.

## If you want to use it away from the desk

- decide whether to enable `Launch at login`
- confirm that the workspace you use most is visible in `Projects`

Once those two are in place, the Mac side usually needs very little manual attention.
