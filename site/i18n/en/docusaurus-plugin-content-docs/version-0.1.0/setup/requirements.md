---
title: What You Need Before You Start
description: This page explains the things you should have ready before setup.
---

This page summarizes what is worth having ready before setup begins. The two most important conditions are that Codex already works on the Mac and that the Mac and iPhone are on the same local network.

## Things you always need

- a Mac running `macOS 15` or later
- an iPhone running `iOS 18` or later
- a Mac environment where Codex already works normally
- the same local network for the Mac and iPhone
- the Mac app `CodexPocketMac`
- the iPhone app `CodexPocket`

## Things to confirm on the Mac

### 1. Codex already works

CodexPocket is an app for remotely opening the Codex environment on the Mac. That means Codex itself needs to work on the Mac first.

Internally, `CodexPocketMac` uses `codex app-server`. If Codex is not installed or cannot start on the Mac, fix that first.

### 2. At least one `Project` is ready

The iPhone only shows projects that were registered on the Mac side. If you want to start using the iPhone right after pairing, it helps to already have at least one `Project`.

### 3. The Mac is left in a usable state

The actual processing happens on the Mac. If the Mac is asleep or the required apps are stopped, the iPhone cannot connect. Before you leave the desk, confirm that the Mac side is ready.

## Things to confirm on the iPhone

### 1. Local network access

The iPhone uses local network access to find and connect to the Mac. If iOS asks for permission during first connection, allow it.

### 2. Camera access

The easiest path is scanning the QR code shown on the Mac. If you use QR, the camera is required.

If the camera is unavailable, you can still add the Host by pasting a pairing code.

## Things that are useful but not strictly required

### `git`

Most Codex users already have `git`, and it is useful in CodexPocket too, especially for branch switching and other Git-related actions.

Even if `git` is missing, basic thread viewing and a lot of normal actions can still work. Git-dependent features will not.

## After this page

If you still are not sure whether your setup fits, read [Supported Environments](./supported-environments) next. If your combination is in scope, you can continue with setup.

> TODO(image): A Mac-side screenshot that makes both `Codex is detected` and `at least one Project is visible` obvious at a glance.
