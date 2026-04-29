---
title: Network Requirements
description: This page explains the network assumptions CodexPocket needs for the connection.
---

For first setup, CodexPocket needs the Mac and iPhone to be visible on the same local network. After setup, a Host with Managed Relay information saved can automatically fall back to Relay when the local connection is not reachable.

## Basic requirements

- during first setup, the Mac and iPhone are on the same network
- Bridge is running on the Mac
- local network access is allowed on the iPhone
- camera access is allowed on the iPhone if you scan the QR code
- the Mac is not asleep
- the Host you want to use from another Wi-Fi network or mobile data has Managed Relay information saved

## How the connection is found

CodexPocket mainly finds the Mac in three ways:

- Bonjour
- a local URL
- Managed Relay

During pairing, the iPhone receives local connection candidates, the token needed for authentication, and Managed Relay connection information. You usually do not need to think about the mechanics, but the useful mental model is: find the Mac that is visible on the same network, and if that is not reachable, connect through Relay.

If you add a Host manually, the usual form for `Bridge URL` is `http://<bridge-host>:43123`.

## Networks that usually work well

- home Wi-Fi
- office LANs that allow device-to-device communication
- test networks where the Mac and iPhone are on the same segment
- another Wi-Fi network or mobile data for a Host with Managed Relay information saved

Even if the Wi-Fi name looks the same, the local connection may fail when peer-to-peer traffic is blocked. If Managed Relay information is saved, the Host can fall back to Relay in that case too.

## Examples that commonly break the connection

- the Mac and iPhone are on different Wi-Fi networks
- the iPhone has fallen back to mobile data before Managed Relay is set up
- guest Wi-Fi or similar networks block device-to-device traffic
- VPN or other network settings block Bonjour or the local URL
- local network permission is denied on the iPhone before first setup
- the Mac is asleep
- Bridge is stopped
- Managed Relay information is not saved for the Host

## What this page does not cover

- direct internet-facing access without Managed Relay
- future backend topologies

The baseline is: do first setup from the same place on the same network, then let the Host fall back to Relay after that information is saved. When something fails, checking whether Managed Relay information is saved for the Host makes the cause easier to narrow down.
