---
title: Check the Logs
description: This page explains how to inspect Bridge state, dependencies, and storage paths on the Mac.
---

When connection or pairing gets stuck, the most reliable thing is still to look at the Mac side. In CodexPocket, the places used to identify the cause are fairly predictable:

- `General`
  runtime, health, and warnings
- `Logs`
  Bridge stdout and stderr
- `Details`
  `Codex CLI`, `git`, `Shell`, and the locations of saved files

## The order worth checking

1. open `General` on the Mac
2. look at `Runtime` and `Health`
3. if a warning is visible, clear that first
4. inspect stdout and stderr in `Logs`
5. if needed, inspect dependencies and paths in `Details`

## What `General` tells you

### `Runtime`

Common states are:

- `Running`
  Bridge is up.
- `Starting...`
  it is still coming up.
- `Stopped`
  Bridge is not running.
- `Detected external bridge`
  another Bridge is already running on the same port.

### `Health`

If you can see `status` and `version`, the Bridge health check is passing. If `Runtime` is `Running` but `Health` is missing, the Bridge process may exist but not be responding correctly.

### Common warnings

- `Bridge prerequisites are not satisfied`
  often means `Codex CLI` or `Shell` is not visible
- legacy launchd warning
  often means an old Bridge setting remains in `~/Library/LaunchAgents` and is conflicting
- `No projects found`
  pairing may still work, but the iPhone will not get any workspaces

## What `Logs` tells you

In the `Logs` tab, you can inspect:

- `stdout`
  the normal output from Bridge
- `stderr`
  errors and abnormal output

Use `Refresh` in the upper-right to reload the latest lines. `Open Log Folder` opens the actual storage location.

### Where the logs are stored

Logs are stored here:

`~/Library/Application Support/CodexPocketMac/logs/`

The main files are:

- `bridge.stdout.log`
- `bridge.stderr.log`

Use the `Logs` tab when you want to stay inside the app, and the log folder when you want to follow them in Finder.

## What `Details` tells you

`Details` is where you confirm the prerequisites for Bridge and the relevant file paths.

### Dependencies

- `Codex CLI`
  whether `codex` is found and whether `codex app-server --help` works
- `git`
  needed if you want branch-related actions
- `Shell`
  whether an executable shell can be resolved

### Paths

The main paths exposed there are:

- the settings file
- `projects.json`
- `codex-remote.env`
- the real path to `Codex CLI`
- the real path to `git`
- the real path to `Shell`

If something works in Terminal but not in the Mac app, checking the path seen by the app here is often the fastest cut.

## What to inspect for each symptom

### A state close to `Codex CLI missing`

Look at `Codex CLI` in `Details`. Even if `which codex` works in Terminal, the Mac app may see a different PATH. The Mac app also checks the standard Homebrew / system install paths, so if restarting the app does not change the result, inspect the install path and PATH.

### `git missing`

This may not block ordinary thread use, but it does block branch creation and switching.

### `Another Bridge is already running on this port`

That means another Bridge already owns the same port. Suspect an old launchd entry or another conflicting process. Check the warning in `General` and the legacy launchd information in `Details`.

### `Bridge process is running, but the health check failed`

Bridge started, but it is not responding normally. Look for clues in `stderr` first.

### `Authentication failed`

This often appears on the iPhone, but the Mac-side place to check is `Pairing`. Confirm whether `Regenerate Token` was used recently.

## Information that is useful to keep when you are stuck

Whether you are narrowing it down yourself or reporting it later, this is usually enough:

- the `Runtime` visible in `General` on the Mac
- `Health`
- the relevant log lines
- the state of `Codex CLI` / `git` / `Shell` in `Details`
- the message shown on the iPhone

A few lines from just before and after the symptom are usually more useful than pasting the entire log.
