---
title: Troubleshooting
slug: /troubleshooting/
description: This is the entry page for pairing, project visibility, reconnection, and log checks.
---

CodexPocket works as a combination of `CodexPocketMac` on the Mac and `CodexPocket` on the iPhone. Even when you are away from the desk, most problems still fall into four buckets:

- `Pairing` does not finish
- `Projects` do not appear
- you cannot reconnect to a `Host` that used to work
- you do not know where to look for the cause

The fastest first cut is still: `Is Bridge running on the Mac?` and `Can the iPhone reach it from the same network?`

## Five checks that save time early

1. In `General` on the Mac, `Runtime` shows `Running`
2. `General` on the Mac does not show warnings such as `Bridge prerequisites are not satisfied` or legacy launchd conflicts
3. The Mac can show a QR code in `Pairing`
4. On the iPhone, `Connection Test` can run for the target Host
5. The Mac and iPhone are on the same network

The current release assumes a local network. If you are trying to connect from somewhere else or through another network, first go back to the same network and then check again.

## Entry points by symptom

### Pairing does not finish

Start here when:

- the QR code will not scan
- setup stops after `Save as Host`
- you see errors such as `Authentication failed` or `Bridge URL or Token is not set`

[If Pairing Does Not Finish](./cannot-pair)

### Projects do not appear

Start here when:

- pairing finished but `Projects` is still empty
- the workspace you always use on the Mac does not appear on the iPhone
- the Host looks fine but you cannot continue into threads

[If Projects Do Not Appear](./cannot-see-projects)

### You cannot reconnect to a Host that used to work

Start here when:

- a Host that worked before now looks disconnected
- live updates stopped
- it stopped working after a Mac-side setting change

[Reconnect or Pair Again](./reconnect-host)

### You want logs first

If you want the most detailed Mac-side view, start here:

- you want to inspect `Codex CLI` or `git` detection
- you want to know why Bridge does not start
- you want to know where stdout and stderr are stored

[Check the Logs](./check-logs)

## Places worth checking first

- `General` in the Mac app
- `Logs` in the Mac app
- `Details` in the Mac app
- `Hosts` on the iPhone

Because the actual engine lives on the Mac, the Mac app is usually the shortest path when you are not sure.

## If it still does not resolve

If it still does not resolve after these checks, use [GitHub Issues](https://github.com/codex-pocket/codex-pocket-docs/issues) for reports that can be public, or the [contact form (English only)](https://forms.gle/FCzeECQAWNvr3UD8A) for private contact.

## Related pages

- [Network Requirements](../shared/network-requirements)
- [Pair the Devices](../shared/pairing-and-bridge)
- [Confirm the Connection](../shared/check-connection)
- [Start on Mac](../mac/)
- [Start on iPhone](../iphone/)
