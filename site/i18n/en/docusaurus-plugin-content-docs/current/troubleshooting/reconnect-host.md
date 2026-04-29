---
title: Reconnect or Pair Again
description: This page explains when to try reconnecting and when pairing again is the faster fix.
---

Even if a `Host` that used to work suddenly stops connecting, you usually do not need to delete and recreate it immediately. The useful split is: `Is this a problem that recovers with reconnect?` or `Do I really need to pair again?`

## The key thing to know first

Even if the live connection on the iPhone drops, work on the Mac may keep going. The `Thread` screen can stop updating while the Mac-side run still finishes, and once the connection returns the history catches up.

So "the iPhone screen stopped updating" is not the same thing as "the work on the Mac stopped."

## Reconnect steps to try first

Try these in order:

1. run `Connection Test` from `Hosts` on the iPhone
2. refresh from `Projects` or `Hosts` on the iPhone
3. reopen the target `Thread`
4. bring the iPhone app back to the foreground

If the disconnect was temporary, it often comes back at this stage.

## Cases that often recover with reconnect alone

### Only live updates stopped

Typical signs:

- the thread screen stopped updating
- it looks disconnected
- when you reopen it after a while, more history is visible

In that case, the Mac-side work may have continued. Reopen the `Thread` first before pairing again.

### The iPhone had been in the background

It is not unusual for the connection to look dropped after the app stayed closed or backgrounded for a while. Returning it to the foreground triggers resync, so reopen it normally first.

### You just returned to the same network

After a Wi-Fi switch or a short network wobble, `Connection Test` and refresh are often enough. Hosts with Managed Relay saved automatically fall back to Relay when the local connection is not reachable.

## Cases where pairing again is often faster

Pairing again can be faster than trying to reconnect if one of these changed:

### The token was regenerated on the Mac

If you used `Regenerate Token` in `Pairing`, the old Host information on the iPhone can no longer authenticate. Scan the new QR and import it again.

### The Bridge port changed

If you changed the port in `Bridge`, the iPhone may still be pointing at the old endpoint. Pairing again is the reliable fix.

### The Host was edited manually many times

If `Bridge Host`, `Bridge URL`, and `Bearer Token` were edited repeatedly and you no longer trust the result, deleting the old Host and importing it from QR again is safer.

## Places to check on the Mac

### `General`

- whether `Runtime` is `Running`
- whether `Health` is visible
- whether `Bridge prerequisites are not satisfied` is absent
- whether there is no legacy launchd warning

### `Bridge`

- whether the display name or port changed
- whether the local endpoint is visible

### `Pairing`

- whether the QR code can be shown
- whether the current endpoint looks correct

## Places to check on the iPhone

### `Hosts`

- Host state
- `Connection Test`
- `Retry Setup`

### `Settings`

- `Timeout`
- `KeepAlive`
- local network permission

For unstable networks or very first connections, a slightly longer `Timeout` can make recovery easier.

## When to suspect the network first

- it worked earlier, but stopped after you moved to another place
- the iPhone switched to mobile data
- the Mac is asleep
- the home Wi-Fi looks the same, but the Mac and iPhone are actually on different SSIDs

A Host with Managed Relay saved automatically falls back to Relay even from another Wi-Fi network or mobile data. If fallback does not happen, check whether `CodexPocketMac` is running on the Mac and whether Managed Relay information is saved for the Host.

If Managed Relay has not been saved for the Host yet, return to the same network as the Mac and use `Retry Setup`. If the iPhone can reach the Mac there, it will import Relay information and become eligible for automatic fallback next time.

## Final checks before deleting and recreating the Host

1. in `General` on the Mac, check `Runtime` and warnings
2. in `Hosts` on the iPhone, run `Connection Test`
3. refresh
4. confirm whether `Authentication failed` is visible
5. think back to whether the token or port changed recently

If those checks make it clear that the token or endpoint is stale, that is the point where pairing again is enough.
