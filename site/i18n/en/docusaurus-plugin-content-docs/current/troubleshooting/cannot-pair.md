---
title: If Pairing Does Not Finish
description: This page explains what to check when QR scanning, pairing URLs, or initial setup stop halfway through.
---

`Pairing` is not just "scan the QR code." After the iPhone saves the Host, the initial setup continues with a few more steps:

1. confirm that the iPhone can reach Bridge
2. import the `Project` list
3. prepare the first workspace
4. finalize the Host for normal use

That is why even if the QR scan succeeds, the problem can still be somewhere inside the pairing flow.

## Where to look first

### On the Mac

- `CodexPocketMac` is running
- in `General`, `Runtime` is `Running` and `Health` is visible
- in `Pairing`, QR, `Copy Pairing URL`, and `Copy Pairing Code` are available
- in `Details`, both `Codex CLI` and `Shell` are detected

### On the iPhone

- in `Hosts`, check the Host state, `Connection Test`, and `Retry Setup`
- in `Settings`, check camera, local network access, and `Timeout`

## Common causes and fixes

### The QR code will not scan

Check these first:

- camera permission is allowed on the iPhone
- the QR code on the Mac is clearly visible
- glare or distance is not making the scan harder

If the camera is unavailable, use `Copy Pairing URL` or `Copy Pairing Code` from `Pairing` on the Mac, then paste it into the same screen on the iPhone.

### Setup stops after `Save as Host`

The initial setup can continue for as long as 300 seconds. On the first connection, the Mac sometimes needs a little time to prepare Codex.

If it looks stuck, check these in order:

1. in `General` on the Mac, confirm that `Runtime` is `Running`
2. check whether `General` on the Mac shows any prerequisite warnings
3. confirm that the Mac and iPhone are on the same network
4. run `Retry Setup` from `Hosts` on the iPhone

If the first setup fails, closing the waiting screen returns you to the previous screen and opens a sheet that shows the stage where it failed and the error details. You can close the sheet there and retry from the same place.

Even if you see `Host initial setup did not finish within 300 seconds`, the Host itself remains saved. Try `Retry Setup` before deleting it.

### You see `Authentication failed`

This usually means the token on the iPhone no longer matches the token on the Mac. A common case is that `Regenerate Token` was used on the Mac while the iPhone still kept the old token.

Use one of these fixes:

- show the QR again in `Pairing` on the Mac and import it again on the iPhone
- if you use manual entry, replace the token with the newest one

If the old Host stopped working right after token regeneration, pairing again is the fastest fix.

### You see `Bridge URL or Token is not set`

This is more common when the Host was added manually. The connection fails if either of these is missing:

- `Bridge Host` or `Bridge URL`
- `Bearer Token`

If you are unsure, QR is safer than manual entry because it imports both the endpoint and token together.

### The QR scans, but the connection fails somewhere else

During first setup, the Mac and iPhone need to be visible on the same local network. After setup finishes, the Host stores both local connection candidates and Managed Relay connection information.

A Host with Managed Relay saved first tries the local connection on the same Wi-Fi. If that is not reachable, it automatically falls back to Relay. As long as `CodexPocketMac` is running on the Mac, the following states can still work:

- the Mac and iPhone are on different Wi-Fi networks
- the iPhone switched over to mobile data

If the Host is old enough that Managed Relay was not saved, or if it was created manually, return to the same Wi-Fi as the Mac and use `Retry Setup`. If the iPhone can reach the Mac there, it will import Relay information and become eligible for automatic fallback next time.

## Mac-side prerequisites that often block pairing

Check these in `Details` on the Mac:

- `Codex CLI`
  both `codex` and `codex app-server --help` need to work
- `Shell`
  an executable shell needs to resolve
- `git`
  not required for pairing itself, but required for branch features

Also, if an old `dev.codexpocket.bridge.plist` remains under `~/Library/LaunchAgents`, it can conflict with the app-managed Bridge. If `General` or `Details` shows warnings, clear those first.

## When pairing again is the faster last resort

Pairing again is often faster if any of these are true:

- you used `Regenerate Token` on the Mac
- you changed the Bridge port
- you edited a manually entered Host many times and no longer trust which values are correct
- the Host is saved, but `Retry Setup` keeps ending in authentication or missing-field errors

In that case, delete the old Host on the iPhone and import it again from `Pairing` on the Mac.
