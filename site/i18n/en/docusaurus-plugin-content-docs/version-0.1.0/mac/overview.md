---
title: Start on Mac
slug: /mac/
description: This page summarizes what you need to do on the Mac before using the iPhone.
---

import MacDownloadLink from '@site/src/components/MacDownloadLink';

When you start using CodexPocket, begin on the Mac. In practice, that means launching `CodexPocketMac`, preparing the `Projects` the iPhone should see, and making the connection information available.

If you do not have the app yet, download it here first.

<MacDownloadLink className="button button--primary button--lg">Download the Mac App</MacDownloadLink>

## What the Mac app does

The Mac app is responsible for:

- starting and stopping Bridge
- showing the pairing QR code used by the iPhone
- managing the `Project` list shown on the iPhone
- checking Bridge state
- exposing logs

## What to do on the Mac first

1. launch `CodexPocketMac`
2. confirm that Codex CLI is available
3. make Git available if you want branch features
4. add a `Project` from the iPhone if needed
5. start Bridge

If you already use Codex comfortably on the Mac, the main extra steps are just launching `CodexPocketMac` and checking `Projects`.

## Places you will look at most

- `General`
  Bridge enablement, launch-at-login, and overall state
- `Bridge`
  display name, port, and local endpoint
- `Projects`
  the workspaces shown to the iPhone
- `Pairing`
  the QR code, pairing URL, and pairing code
- `Logs`
  Bridge stdout and stderr
- `Details`
  detection state for Codex CLI and Git, plus useful paths
