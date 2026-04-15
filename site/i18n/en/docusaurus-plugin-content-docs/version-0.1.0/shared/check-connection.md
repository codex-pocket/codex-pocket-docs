---
title: Confirm the Connection
description: This page explains how to confirm that pairing finished correctly.
---

After pairing, the fastest way to stay oriented is to check things in a fixed order. If you already know the Mac side well, the two questions that narrow things down quickest are: `Is Bridge running?` and `Can the iPhone see Projects?`

## Fastest checklist

1. On the Mac, confirm in `General` that `Runtime` shows as running.
2. On the iPhone, check whether the Host you added moves from `Initial setup in progress` to `Connection confirmed`.
3. Confirm that the Mac-side `Projects` appear in `Projects` on the iPhone.
4. Open a `Project` and make sure you can get as far as the `Thread` list.

## Where to look on the iPhone

- `Home`
  Shows the default Host state and recent `Projects`.
- `Hosts`
  Shows Host state, `Connection Test`, and `Retry Setup`.
- `Projects`
  Shows the imported `Project` list.

On the `Hosts` screen, swiping left on a Host lets you run `Connection Test`. Right after saving, the common state is `Initial setup in progress`. After success, the common state is `Connection confirmed`.

## Where to look on the Mac

- `General`
  `Runtime` and `Health`
- `Bridge`
  the current local endpoint
- `Pairing`
  the QR code, current endpoint, and token
- `Logs`
  where to look if the connection fails

## Signs of a healthy connection

- `Runtime` on the Mac is `Running`
- `Health` on the Mac is `ok`
- the Host on the iPhone reaches `Connection confirmed`
- at least one `Project` appears on the iPhone
- opening a `Project` reaches either the `Thread` list or the path to `New Thread`

## States that may recover if you wait a moment

- the Host is still `Initial setup in progress`
- `Connection Test` is still connecting
- live updates in a `Thread` pause for a while
- the iPhone takes a moment to resync after returning from the background

Even in those cases, Bridge and Codex may still be working on the Mac. First try bringing the iPhone app back to the foreground, then `Connection Test`, pull-to-refresh, or `Retry Setup`.

> TODO(image): A pair of screenshots showing `Connection confirmed` on the iPhone Host row and `Runtime` plus `Health` on the Mac. The goal is to show, in one glance, where normal looks normal.
