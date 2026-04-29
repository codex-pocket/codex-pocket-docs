---
title: Why the Mac Is Required
description: Explains why CodexPocket works with a Mac companion, how data flows, and what the iPhone permissions are for.
---

When people first see `CodexPocket`, a natural question is: why does an iPhone app need a Mac at all? This page explains that model directly. It is written for users, but it also covers the same facts people usually want to know when evaluating how the app works.

## In one sentence

- The iPhone is the screen you use to open projects and threads, send follow-up instructions, and read results.
- The real Codex process, workspace access, and Git operations stay on the Mac.
- First setup requires your iPhone and your own Mac to be on the same local network.
- Hosts with Managed Relay information saved can connect from another Wi-Fi network or mobile data.

The short version is that `CodexPocket` is a companion app for continuing work already running on your Mac.

## Why the Mac is part of the product

The point of `CodexPocket` is not to rebuild a second Codex environment on the iPhone. The point is to keep using the Mac environment you already trust and already work in. That is why these responsibilities stay on the Mac:

- running Codex
- accessing the workspace
- checking Git state and switching branches
- keeping the source of truth for projects and threads
- showing the pairing QR code and running the bridge

The iPhone side is intentionally a thin companion UI. That is not a limitation for its own sake. It is what lets your normal work stay on your own Mac instead of being copied into a developer-managed cloud workflow.

## Where things run

| Component | Role | Where it mainly happens |
| --- | --- | --- |
| iPhone app `CodexPocket` | pairing, project and thread browsing, follow-up input, result viewing | iPhone |
| Mac app `CodexPocketMac` | bridge startup, pairing QR, project management, Mac-side status | your own Mac |
| Codex runtime | prompt execution, workspace access, Git operations, thread continuation | your own Mac |

Because of this structure, the iPhone app is not a separate execution environment. It is the front-end view into the environment that already exists on the Mac.

## Network assumptions

First setup is designed for a Mac and iPhone on the same LAN. After Managed Relay information is saved for a Host, the app automatically falls back to Relay when the local connection is not reachable.

- The main connection paths are Bonjour and a local URL.
- The pairing QR code contains connection candidates, the access token, and Managed Relay connection information.
- The `Direct Bridge URL` field is only a recovery path for entering a same-LAN hostname or IP manually if Bonjour discovery fails.
- Directly exposing the Bridge over the internet without Managed Relay is outside the supported scope.

For more detail, see [Network Requirements](../shared/network-requirements).

## What the permissions mean

The current iPhone app uses the following permissions:

| Permission | Why it is used |
| --- | --- |
| Local Network | To discover and connect to your own Mac bridge on the same LAN during first setup and local connections |
| Camera | To scan the pairing QR code shown on the Mac |
| Photos | To attach an image you explicitly choose through the system photo picker |
| Notifications | To show on-device local alerts such as task completion |

The app does not use:

- Contacts
- Location
- Microphone
- the advertising identifier

## Data flow and privacy

For the current iPhone app, the main points are straightforward:

- the iPhone app does not send user data to developer-operated servers for storage
- the iPhone app does not include analytics, advertising, or tracking SDKs
- input sent from the iPhone is sent primarily to your own Mac. When Managed Relay is used, execution and the source of truth for threads still stay on the Mac
- host information and bridge tokens are kept securely with Keychain on the iPhone

Another useful way to think about it is this:

- `What the iPhone app handles`
  host state, project and thread state, connection settings, and the follow-up input you choose to send
- `What the Mac handles`
  the real Codex execution, the workspace, Git, and the source of truth for threads
- `What the developer does not keep`
  user data sent from the iPhone app to a developer backend for storage

One nuance is worth calling out clearly: whether the Mac-side Codex environment connects to external services depends on the configuration of your own Mac. The iPhone app itself does not embed a third-party AI SDK or directly call a third-party AI API. Managed Relay is a connection path back to the Mac; it does not create another Codex runtime on the iPhone.

For more detail, see the [Privacy Policy](/privacy-policy).

## The easiest way to understand the product

If you want to understand the app quickly, this is the clearest flow:

1. Launch `CodexPocketMac` on the Mac.
2. Open `Pairing` and show the QR code.
3. On iPhone, open `Add from QR` and scan it.
4. After host setup finishes, open a project.
5. Open an existing thread or create a new one.
6. Send a short prompt and confirm that the result appears on the iPhone.

That flow makes the product model clear very quickly: the iPhone is not trying to replace the Mac runtime. It is the companion app you use to continue the same work from somewhere else in the house or office.

## Related Pages

- [Where Things Run](./architecture)
- [What Works Well and What to Watch For](./limitations)
- [Network Requirements](../shared/network-requirements)
- [Pairing and Bridge Basics](../shared/pairing-and-bridge)
- [Privacy Policy](/privacy-policy)
