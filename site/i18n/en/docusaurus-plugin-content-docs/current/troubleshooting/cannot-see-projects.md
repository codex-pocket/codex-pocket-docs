---
title: If Projects Do Not Appear
description: This page explains what to check when the Host connects but the project list is still empty.
---

When `Projects` do not appear, the cause is often on the Mac side or in the initial import step rather than on the iPhone itself. The important point is that the `Projects` shown on the iPhone come from workspaces visible on the Mac or from projects added manually on the iPhone.

So if the automatically reflected workspace is not visible yet, or no manual project has been added, the iPhone list stays empty.

## Things to confirm first

1. confirm that the target workspace is visible in `Projects` on the Mac, or that a `Project` was added manually on the iPhone
2. in `General` on the Mac, `Runtime` is `Running`
3. on the iPhone, `Connection Test` succeeds for the target Host
4. pull to refresh from `Projects` or `Hosts` on the iPhone

## Common causes and fixes

### No project has been added yet

This is the most common reason. Manual add is done from `Projects` on the iPhone.

The registration flow is:

1. open `Projects` on the iPhone
2. tap `+` in the upper-right, then choose `Add Project`
3. choose the Host
4. set `Project Name` and `Working Directory`
5. save it

`Browse on Mac` helps you choose the `Working Directory` while looking at folders on the Mac.

Pairing success and project registration are separate things. Even if pairing succeeds, the iPhone list stays empty while the number of `Projects` is zero.

### You are right after pairing and import is not done yet

During the first setup, project import also runs automatically. Sometimes all it needs is a short wait.

This is especially common:

- right after first pairing
- right after restarting Bridge on the Mac
- right after the iPhone comes back from the background

Pull down to refresh in `Projects`. Refresh from `Hosts` is also fine.

### The Host connects, but the devices are not on the same network

Because the current release assumes a local network, just keeping old Host information is not enough. If the Mac is not visible from the place you are now, the iPhone cannot fetch `Projects`.

Check these:

- the Mac and iPhone are on the same Wi-Fi
- the iPhone did not fall back to mobile data
- local network permission is enabled on the iPhone
- the Mac is not asleep

If `Connection Test` fails in `Hosts`, fix the connection side first.

### Workspaces from Codex App are not reflected automatically

`CodexPocketMac` can import local workspaces already registered in Codex App on the Mac. Still, when they do not show up, manual add from `Projects` on the iPhone is the faster and more reliable path.

If the workspace is visible on the Mac but not on the iPhone, manually adding it is usually faster than waiting for automatic sync.

### The working directory points somewhere unexpected

Even if the `Project` name looks right, you may miss the expected threads when the `Working Directory` points elsewhere. Open the project settings on the iPhone and re-check the path.

## Things you can do on the iPhone

### `Refresh`

You can refresh from both `Projects` and `Hosts`. When unsure, try that first.

### `Connection Test` on the Host

This confirms whether the Host itself is reachable. If it succeeds but the number of `Projects` is still zero, it is time to inspect the registration on the Mac.

### Bring the app back to the foreground

The iPhone app also refetches the `Project` list when it becomes active again. Sometimes simply closing and reopening the app is enough.

## How to narrow it down if it still does not appear

Check in this order:

1. `General` on the Mac
   `Runtime` and warnings
2. `Projects` on the Mac
   count, names, and working directories
3. `Hosts` on the iPhone
   the result of `Connection Test`
4. `Logs` on the Mac
   stdout and stderr

If the logs suggest that Bridge itself is unstable, move on to [Check the Logs](./check-logs).

