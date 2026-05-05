---
title: Make Git Available
description: This page explains the checks you need only if you want Git-related views and branch actions.
---

Git is not required for CodexPocket itself. You only need it when you want features such as:

- checking the current branch
- switching branches
- creating a new branch
- confirming whether a workspace is Git-managed

## First check

Run this in Terminal:

```bash
git --version
```

If it prints a version, Git is available.

## What still works without Git

- open a `Project`
- read `Threads`
- send requests from `Composer`
- run `Exec`

In other words, if all you want is "keep reading and sending from the iPhone," you can start without Git.

## If Git is not found

- install the macOS Command Line Tools
- set the Git executable you normally use in `Details` > `Executable Paths`
- restart the Mac app and check the `git` row in `Details`

If Git is missing, Bridge itself may still work, but branch-related UI on the iPhone will be limited.
