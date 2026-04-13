---
title: Thread Workflow
description: The shared flow from Project selection to thread resume, follow-up turns, and exec.
---

# Thread Workflow

The thread workflow does not live entirely on iPhone or Mac. Projects are anchored in Mac workspaces, while day-to-day reading and follow-up often happen on iPhone, so this flow needs a cross-device view.

## Core flow

1. open a Host on iPhone
2. choose the target `Project`
3. resume an existing `Thread` or start a new one
4. read transcript history and live output while sending follow-up turns
5. switch branches or run `exec` when needed

## When to use thread versus exec

- `Thread`
  the main path for ongoing conversational work with Codex
- `Exec`
  the path for one-shot runs that you want to stream separately

## How follow-up works

- `queue`
  sends the next turn after the current run completes
- `steer`
  injects additional instructions into the active turn

## Topics to expand here

- merging transcript history with live events
- how branch switching changes the target repo context for Thread and Exec
- where review and approval UI enters the flow
- the initialization path for workspaces that are not yet git repositories

## Related pages

- [Pairing and bridge](./pairing-and-bridge)
- [Start on iPhone](../iphone/)
- [Start on Mac](../mac/)
