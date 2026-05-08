---
title: Make Git Available
description: This page explains how to confirm Git if you want branch features.
---

Git is not required for CodexPocket itself, but you need it if you want to:

- check the current branch
- switch branches
- create a new branch

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
- use `Fork`

So if your main goal is just "keep reading and sending from the iPhone," you can start without Git.

## If Git is not found

- install the macOS Command Line Tools
- make sure the Git path you normally use is visible to the Mac app too
- restart the Mac app and check the `git` row in `Details`

If Git cannot be used, branch-related screens on the iPhone can show messages that the workspace is not available for branch actions.
