---
title: Start Bridge
description: This page explains how to confirm that the Mac is in a state the iPhone can connect to.
---

Bridge is the listener that connects the iPhone to Codex on the Mac. In `CodexPocketMac`, if `Enable Bridge` is on, it usually starts automatically at launch.

## First places to look

- `Runtime` in `General`
- `Health` in `General`
- the QR code in `Pairing`
- the local endpoint in `Bridge`

If `Runtime` shows `Running` or `Running externally`, you can usually move on to pairing.

## How to start it manually

If it did not start automatically, use either of these:

- turn on `Enable Bridge` in `General`
- choose `Start Bridge` from the menu bar

## How to confirm it started correctly

You are ready when the following are true:

- `Runtime` is `Running`
- `Health` is visible
- you can show the QR code from `Pairing`
- the local endpoint appears in the `Bridge` tab

## Settings you normally do not need to touch

The defaults are usually fine, but if needed you can change these in `Bridge`:

- display name
- port
- pairing notes

After changing them, press `Save` so the state is updated.

## If you use it away from the desk

If you spend long stretches away from the Mac, it is worth checking `Launch at login` in `General`. Bridge itself is designed to come up automatically after launch, so you usually do not need to revisit this page every time.

## If it does not start

- check `Codex CLI` and `Shell` in `Details`
- inspect stdout and stderr in `Logs`
- if you see warnings about legacy launchd, confirm them in `General` and `Details`

> TODO(image): A pair of screenshots showing `Runtime: Running` in `General` and the QR visible in `Pairing`.
