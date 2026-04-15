---
title: Start Bridge
description: This page explains how to put the Mac into a state the iPhone can connect to.
---

Bridge is the service that connects the iPhone to Codex on the Mac. After the `Projects` are ready, the next step is starting Bridge.

## How to start it

There are two common ways:

- turn on `Enable Bridge` in `General`
- choose `Start Bridge` from the menu bar

## How to confirm it started correctly

You are ready when these are true:

- `Runtime` is `Running`
- `Health` is visible
- the QR code can be shown in `Pairing`
- the local endpoint appears in the `Bridge` tab

## Settings you may need to change

The defaults are usually fine, but if needed you can change these in `Bridge`:

- display name
- port
- pairing notes

After changing them, press `Save` so the state is updated.

## If it does not start cleanly

- check `Codex CLI` and `Shell` in `Details`
- inspect stdout and stderr in `Logs`
- if you see legacy launchd warnings, confirm them in `General` and `Details`

