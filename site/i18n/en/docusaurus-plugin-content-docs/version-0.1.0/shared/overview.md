---
title: Connect Mac and iPhone
slug: /shared/
description: This section walks through linking the Mac that runs Codex to the iPhone that controls it.
---

import MacDownloadLink from '@site/src/components/MacDownloadLink';

This section is for people who already use Codex on the Mac and want to keep following the work from an iPhone after stepping away from the desk.

In CodexPocket, the real work keeps running on the Mac. On the iPhone, what you do is add that Mac as a `Host`, then open the `Project` and `Thread` you want.

`CodexPocketMac` needs to be running on the Mac before this can work. If the Mac side is not ready yet, start with <MacDownloadLink>the Mac setup</MacDownloadLink>.

## What this section explains

- what happens during the first link
- the difference between `Pairing` and `Bridge`
- where to confirm that the link worked
- the network conditions required for the connection

## The flow

1. On the Mac, open `CodexPocketMac` and confirm that `Runtime` in `General` shows as running.
2. On the Mac, open `Pairing` and show the QR code.
3. On the iPhone, open `Add from QR` under `Hosts` and scan the QR code.
4. Tap `Save as Host`, then wait for the iPhone to finish the initial setup.
5. Open the `Project` you want and start or resume a `Thread`.

## Terms worth knowing first

- `Pairing`
  The one-time registration step that sends the Mac endpoint and token to the iPhone.
- `Bridge`
  The service that actually carries communication between the iPhone and the Mac. It keeps running on the Mac.
- `Host`
  The Mac as it appears from the iPhone.
- `Project`
  The working folder you open from the iPhone.

You do not need to overthink it. The simplest mental model is: register the Mac you already use for Codex on the iPhone.

## What you can do after the link is done

- open a `Project` from the iPhone
- resume an existing `Thread`
- start a new `Thread`
- follow the `Work Log` and `Answer`
- use `Fork` or branch switching when needed

## Read these next

- [Pair the Devices](./pairing-and-bridge)
- [Confirm the Connection](./check-connection)
- [Network Requirements](./network-requirements)
