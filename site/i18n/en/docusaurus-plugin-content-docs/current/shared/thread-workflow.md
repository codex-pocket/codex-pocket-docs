---
title: Thread Workflow
description: The shared flow from Project selection to thread resume and follow-up turns.
---

# Thread Workflow

The thread workflow does not live entirely on iPhone or Mac. Projects are anchored in Mac workspaces, while day-to-day reading and follow-up often happen on iPhone, so this flow needs a cross-device view.

![Diagram of the Project to Thread to Composer workflow](/img/docs/thread-workflow.svg)

## Core flow

1. open a Host on iPhone
2. choose the target `Project`
3. resume an existing `Thread` or start a new one
4. read transcript history and live output while sending follow-up turns
5. switch branches or fork the conversation when needed

## How follow-up works

- `queue`
  send it with the `Queue` button on the right. The next turn starts after the current run completes.
- `steer`
  send it with the `Steer` button on the left. Additional instructions go into the active turn.

Anything sent with `queue` stays visible as a pending card until it runs. From that card you can switch it to `Steer Now` or cancel it.

## Topics to expand here

- merging transcript history with live events
- how branch switching changes the target repo context for Thread
- where review and approval UI enters the flow
- the initialization path for workspaces that are not yet git repositories

## Related pages

- [Pairing and bridge](./pairing-and-bridge)
- [Start on iPhone](../iphone/)
- [Start on Mac](../mac/)
