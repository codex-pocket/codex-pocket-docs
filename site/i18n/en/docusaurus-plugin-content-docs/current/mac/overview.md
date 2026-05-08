---
title: Start on Mac
slug: /mac/
description: This section collects only the Mac-side setup that actually matters before using the iPhone.
---

The execution side of CodexPocket is the Mac. The iPhone is the control surface, so you can start as soon as Codex works normally on the Mac and `CodexPocketMac` can wait for connections.

![Illustration of the Mac side acting as the CodexPocket control center](/img/docs/mac-overview-hero.webp)

## How to get CodexPocketMac

<a class="button button--primary button--lg margin-right--sm margin-bottom--sm" href="https://github.com/codex-pocket/codex-pocket-releases/releases">Download the Mac app</a>
<a class="button button--secondary button--lg margin-right--sm margin-bottom--sm" href="https://github.com/codex-pocket/codex-pocket-releases/releases/tag/mac-v0.1.3">Read the release notes</a>
<a class="button button--secondary button--lg margin-bottom--sm" href="https://github.com/codex-pocket/codex-pocket-mac-app/blob/main/README.md#quickstart">Run from source</a>

Note: download the `.dmg` from GitHub Releases, then install it on your Mac.

The current public Mac stable is `0.1.3`. In the normal path, download the notarized DMG and start from there. Use the `mac-app` README Quickstart only when you want a source build for development or verification.

## The short version first

If you already use Codex on the Mac every day, there is not much new to do.

1. Launch `CodexPocketMac`.
2. Confirm that `codex` is available.
3. Confirm that the workspace you want is present in Codex App.
4. Confirm that Bridge is running.
5. Scan the pairing QR from the iPhone.

You only need `Git` when you want branch-related features. Most people do not need to touch ports, tokens, or manual project registration first.

## Find the right page fast

| If you want to... | Read this page |
| --- | --- |
| know the minimum first checks | [First Things to Check](./getting-started) |
| continue with a Codex App-based workflow | [Install the Codex App](./install-codex-app) |
| confirm the `codex` CLI setup | [Install Codex CLI](./install-codex-cli) |
| enable Git for branch actions too | [Make Git Available](./install-git) |
| add a project by hand | [Register a Project](./register-project) |
| finish with Bridge startup | [Start Bridge](./start-bridge) |

## What the Mac side is responsible for

- starting and stopping Bridge
- managing the `Project` list shown to the iPhone
- running `Threads` through `codex`
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
