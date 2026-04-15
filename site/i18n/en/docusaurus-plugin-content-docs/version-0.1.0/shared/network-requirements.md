---
title: Network Requirements
description: This page explains the network assumptions CodexPocket needs for the connection.
---

CodexPocket currently assumes the Mac and iPhone are on the same local network. You can still use the iPhone while away from the Mac, but this release does not cover internet-facing access.

## Basic requirements

- the Mac and iPhone are on the same network
- Bridge is running on the Mac
- local network access is allowed on the iPhone
- camera access is allowed on the iPhone if you scan the QR code
- the Mac is not asleep

## How the connection is found

CodexPocket mainly finds the Mac in two ways:

- Bonjour
- a local URL

During pairing, the iPhone receives these connection candidates plus the token needed for authentication. You usually do not need to think about the mechanics, but the useful mental model is: find the Mac that is visible on the same network, then connect to the endpoint that works.

If you add a Host manually, the usual form for `Bridge URL` is `http://<bridge-host>:43123`.

## Networks that usually work well

- home Wi-Fi
- office LANs that allow device-to-device communication
- test networks where the Mac and iPhone are on the same segment

Even if the Wi-Fi name looks the same, the connection may fail when peer-to-peer traffic is blocked.

## Examples that commonly break the connection

- the Mac and iPhone are on different Wi-Fi networks
- the iPhone has fallen back to mobile data
- guest Wi-Fi or similar networks block device-to-device traffic
- VPN or other network settings block Bonjour or the local URL
- local network permission is denied on the iPhone
- the Mac is asleep
- Bridge is stopped

## What this page does not cover

- internet-facing access
- relay-based access
- future backend topologies

The most reliable assumption is still: use the Mac and iPhone from the same place on the same network. When something fails, coming back to that assumption makes the cause easier to narrow down.
