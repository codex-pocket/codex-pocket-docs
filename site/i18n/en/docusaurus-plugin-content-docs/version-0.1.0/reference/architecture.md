---
title: Where Things Run
description: This page explains how responsibilities are split between the iPhone and the Mac.
---

CodexPocket does not finish the work on the iPhone alone. The real Codex process, workspace access, and Git operations all happen on the Mac. The iPhone is the screen you use to open and continue that Mac-side work.

![Diagram of the CodexPocket architecture](/img/docs/architecture-flow.svg)

## The shape to remember first

```text
iPhone
  ↓ send requests / check status
Bridge
  ↓ connect to Codex on the Mac
Codex on the Mac
  ↓ use workspace / Git / threads
Mac work environment
```

## What each side is responsible for

- iPhone app
  choose a `Project`, open a `Thread`, send requests from `Composer`, read the `Work Log` and `Answer`, and use `Fork` or branch switching
- Mac app
  start and stop `Bridge`, show the pairing QR, manage the `Projects` list shown to the iPhone, expose logs, and confirm prerequisites
- Codex on the Mac
  do the actual processing, run commands, perform Git operations, and store `Threads`

## What the iPhone is showing you

The iPhone shows data prepared on the Mac.

- the `Project` list is based on workspaces registered on the Mac
- the `Thread` list and message bodies are based on state managed on the Mac
- the open `Thread` body may be held temporarily on the iPhone, but reopening or reconnecting brings it back to the latest Mac-side state

That is why it is more accurate to think "open the environment running on the Mac" rather than "build a new development environment on the iPhone."

## What happens when the connection drops

Even if the live view on the iPhone disconnects, the work on the Mac often keeps going. Once the connection comes back, the iPhone re-fetches the `Thread` history and catches up.

So if the network gets unstable while you are away from the desk, the first question is usually whether the Mac-side work is still running, not whether the iPhone screen stopped updating.

## What pairing passes to the iPhone

`Pairing` gives the iPhone the information it needs to find and connect to the Mac:

- the display name of the Mac
- the local endpoint to connect to
- the authentication token
- optional notes

For the first setup, QR is the easiest path. After import, the authentication token is stored in secure storage on the iPhone.

## Where to look when you are unsure

- for connection or QR issues: `Pairing` and `Bridge` on the Mac
- for `Project` list questions: `Projects` on the Mac
- for understanding why something is not working: `General`, `Logs`, and `Details` on the Mac
