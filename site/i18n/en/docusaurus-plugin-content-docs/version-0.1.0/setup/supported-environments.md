---
title: Supported Environments
description: This page explains the environments assumed by the current release.
---

The current CodexPocket release targets the setup where an iPhone opens Codex running on a Mac on the same local network. This page organizes what combinations are supported, partially supported, or out of scope.

## Supported combinations

| Item | Status | Notes |
| --- | --- | --- |
| Mac | Supported | `macOS 15` or later |
| iPhone | Supported | physical devices running `iOS 18` or later |
| Mac and iPhone on the same local network | Supported | typical home Wi-Fi or the same LAN |
| Mac environment where Codex runs | Supported | `CodexPocketMac` uses Codex on the Mac |
| Japanese / English UI | Supported | can be switched inside the app |

## Partially supported cases

| Item | Status | Notes |
| --- | --- | --- |
| Macs without `git` | Partial | basic actions may still work, but Git-dependent features such as branch actions do not |
| Pairing without QR | Partial | even if the camera is unavailable, adding by pasting a pairing code is possible |

## Currently out of scope

| Item | Status | Reason |
| --- | --- | --- |
| iPad | Unsupported | the current iOS app is designed for iPhone |
| Android | Unsupported | the current mobile app is iPhone-only |
| Mac-only client flow | Unsupported | CodexPocket assumes the iPhone is the control surface |
| Internet-facing connections | Unsupported | the current release assumes the same local network |
| Mobile-data-only connections | Unsupported | the Mac and iPhone must be on the same network |

## How to judge quickly

If the following are true, you are within the intended scope:

- the Mac is on `macOS 15` or later
- the iPhone is on `iOS 18` or later
- Codex already works normally on the Mac
- the Mac and iPhone are on the same local network

If you want to connect from another network while away from home, or use an iPad, that is out of scope in the current release.

> TODO(image): A comparison diagram of supported versus unsupported setups, with `Mac + iPhone on the same Wi-Fi` marked `OK` and another network or `iPad` marked `No`.
