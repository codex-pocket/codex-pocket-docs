---
title: Start on Mac
slug: /mac/
description: This section collects only the Mac-side setup that actually matters before using the iPhone.
---

import MacDownloadLink from '@site/src/components/MacDownloadLink';

The execution side of CodexPocket is the Mac. The iPhone is the control surface, so you can start as soon as Codex works normally on the Mac and `CodexPocketMac` can wait for connections.

If you do not have the app yet, download it here first.

<MacDownloadLink className="button button--primary button--lg">Download the Mac App</MacDownloadLink>

## The short version first

If you already use Codex on the Mac every day, there is not much new to do.

1. Launch `CodexPocketMac`.
2. Confirm that `codex` is available.
3. Confirm that the workspace you want is present in Codex App.
4. Confirm that Bridge is running.
5. Scan the pairing QR from the iPhone.

You only need `Git` when you want branch-related features. Most people do not need to touch ports, tokens, or manual project registration first.

## What the Mac side is responsible for

- starting and stopping Bridge
- managing the `Project` list shown to the iPhone
- running `Threads` and `Exec` through `codex`
- showing the pairing QR
- exposing state and logs

## Where to look in the Mac app

- `General`
  the place for Bridge on/off, launch-at-login, and the overall state
- `Projects`
  the place to confirm the workspaces imported from Codex App and the projects shown on iPhone
- `Pairing`
  the place to show the QR code, pairing URL, and pairing code
- `Details`
  the place to confirm whether `codex`, `git`, and the shell were detected
- `Logs`
  the place to inspect stdout and stderr when Bridge is not behaving

## How to read this section

- start with [First Things to Check](./getting-started)
- if you use Codex App, read [Install the Codex App](./install-codex-app) and [Create a Project](./create-project)
- for Codex CLI checks, read [Install Codex CLI](./install-codex-cli)
- if you also want branch actions, read [Make Git Available](./install-git)
- only when you want to add a project by hand, read [Register a Project](./register-project)
- finish with [Start Bridge](./start-bridge)
