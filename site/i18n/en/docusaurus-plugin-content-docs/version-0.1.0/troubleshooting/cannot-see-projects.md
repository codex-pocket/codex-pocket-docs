---
title: If Projects Do Not Appear
description: This page explains what to check when the Host is added but the project list is still empty.
---

If the Host was added but `Projects` is still empty, the usual cause is either that automatic reflection has not finished yet or that no manual project has been added yet.

## 1. Confirm that a Mac workspace or a manually added `Project` exists

Open `Projects` in `CodexPocketMac` and check whether the target workspace is visible.

If it is not reflected automatically, add one `Project` manually from the iPhone.

## 2. Refresh on the iPhone

- pull to refresh on `Home`
- pull to refresh on `Projects`
- run `Connection Test` from `Hosts`

## 3. Confirm that Host initial setup finished

Right after the Host is added, Bridge verification and project import still need to finish. If it looks paused, use `Retry Setup`.

## 4. Confirm the working directory

On the Mac side, check whether the `Working Directory` for the `Project` is correct:

- it is not pointing to a folder that no longer exists
- it is not using a path from another Mac
- it is not pointing to a different folder with a similar name

## 5. If a Codex App workspace still does not appear

Sometimes a workspace you use every day in Codex App is not reflected automatically. In that case, adding it manually from `Projects` on the iPhone is the most reliable path.
