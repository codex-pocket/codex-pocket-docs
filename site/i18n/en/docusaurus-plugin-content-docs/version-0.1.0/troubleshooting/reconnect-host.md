---
title: Reconnect or Pair Again
description: This page explains the order to try when a Host that used to work no longer connects.
---

If a Host that used to work suddenly stops connecting, do not jump straight to pairing again. Try these in order.

## 1. Reconnect first

- refresh on the iPhone
- run `Connection Test` from `Hosts`
- reopen the `Project`

## 2. Restore the Mac-side state

- open `CodexPocketMac`
- confirm that `Runtime` is `Running`
- if needed, stop Bridge and start it again

## 3. Pair again only if that still fails

Pairing again is often effective when:

- the token was regenerated
- the Mac-side settings changed in a larger way
- you want to clean up the Host information itself

The pairing-again flow is:

1. open `Pairing` on the Mac
2. show the new QR code or pairing code
3. update or re-add the Host on the iPhone

## One thing worth remembering

Even if the live connection on the iPhone stops, the actual work on the Mac can still continue. Try re-syncing the history first, then decide whether pairing again is really necessary.
