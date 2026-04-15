---
title: If Pairing Fails
description: This page explains what to check when the Mac cannot be added with QR or pairing code.
---

If pairing fails, check things in this order.

## 1. Confirm the Mac side is ready

- `CodexPocketMac` is running
- `Runtime` is `Running`
- the QR code can be shown from `Pairing`

If this part is not ready, fixing only the iPhone side will not move things forward.

## 2. Confirm permissions on the iPhone

- the camera is allowed if you use QR
- local network access is allowed

If those permissions were denied, allow them from the iPhone Settings app.

## 3. Confirm the network

- the Mac and iPhone are on the same Wi-Fi
- the Mac is not asleep
- neither device has shifted onto another network or mobile data

## 4. Recreate the pairing information

- reopen the QR code on the Mac
- use `Regenerate Token`, then scan again
- if QR is difficult, use the pairing URL or pairing code

## 5. If initial setup stops after the Host is added

After the Host is saved, Bridge verification and project import continue. If that stage stops, try these:

- bring the iPhone app back to the foreground and wait
- use `Retry Setup` from `Hosts`
- restart Bridge on the Mac

If it still does not move, inspect `Logs` on the Mac.
