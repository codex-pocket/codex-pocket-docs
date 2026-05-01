---
title: Send with Composer
description: This page explains how to send requests from the iPhone with Composer.
---

The `Composer` is the input area at the bottom of the `Thread` screen. It is the main place you use when asking Codex to do something from the iPhone.

The usual flow is simple: write the request and send it. Only when needed do you reach for the top controls or the `+` menu.

## Basic send flow

1. Write the request in `Composer`.
2. Add an image or command if needed.
3. Tap the send button on the right.

After sending, you can stay on the same screen and follow the `Work Log` and `Answer`.

## What the `+` menu can do

- `Images`
  Attach images from the photo library. You can add up to 2 images per send, and images are automatically resized before sending.
- `Commands`
  Pick from common slash commands.
- `Skills`
  Choose a Skill available in that workspace.
- `Status`
  Check the current Host, `Project`, branch, model, and related state.
- `Exec`
  Start a separate one-shot execution.

You do not need to memorize every command name. When unsure, choosing from `+` is usually safer.

## What the top control row changes

- `Mode`
  Leave it at the default unless you specifically want to start from planning.
- `Speed`
  Changes how response speed is biased.
- `Model`
  Switches the model.
- `Reasoning`
  Raise this only when you want deeper thinking.
- `Approval`
  Changes how command execution confirmation works.
- `Follow-up`
  Chooses how additional instructions are sent while work is running.

For normal use, starting with the defaults and changing only when needed is enough.

## Common commands

- `/status`
  check the current state
- `/model`
  review the model choice
- `/approvals`
  review the approval mode
- `/images`
  attach images
- `/exec`
  run something once outside the main `Thread`
- `/fork`
  branch the current conversation

If the workspace has its own prompts or Skills, they can also show up as options.

## How to send a `Follow-up`

- `Queue`
  send it with the `Queue` button on the right. The next request waits until the current run finishes.
- `Steer`
  send it with the `Steer` button on the left. Additional direction goes into the run that is already in progress.

Anything sent with `Queue` stays visible as a pending card above Composer. From there you can switch it to `Steer Now` or cancel it.

`Steer` is useful when you are away from the desk and want to add just one quick correction. `Queue` is better when you want the next request to wait its turn calmly.

## No need to panic if the connection pauses

Even if Composer shows that updates have stopped, the work on the Mac usually keeps running. Often only the live stream on the iPhone was interrupted.

When the connection returns, the content is synced again. First keep the `Thread` open and wait a little, or reopen it to confirm the latest state.
