---
title: Check the Logs
description: This page explains how to inspect Mac-side logs when connection or execution gets stuck.
---

When you want the detailed cause, inspect the logs on the Mac. It is easier to stay oriented if you assume that the logs live in the Mac app, not on the iPhone.

## First place to look

Open the `Logs` tab in `CodexPocketMac` and inspect:

- `stdout`
- `stderr`

This is where Bridge startup failures and runtime errors appear.

## Other useful places to inspect

- `General`
  recent error state
- `Details`
  detection state for Codex CLI, Git, and Shell
- `Open Log Folder`
  useful when you want to share logs outside the app

## Situations where logs are especially useful

- Bridge will not start
- initial setup after pairing does not move
- the `Project` list cannot be fetched
- `Thread` fails

## Errors that are often easy to spot

- Codex CLI is missing
- Git is missing
- port conflicts
- health check failures

When the cause is still unclear, read `General` and `Details` first, then move into `Logs`.
