---
title: Install Codex CLI
description: This page explains how to confirm that CodexPocketMac can find and use `codex`.
---

If you already use Codex on the Mac, this page is mostly about verification, not installation. What `CodexPocketMac` actually calls is the `codex` CLI, so first confirm that `codex` starts from Terminal and that the required subcommands are also available.

## 1. Confirm that `codex` starts in Terminal

Run these commands in Terminal:

```bash
codex --version
codex
```

The expected state is:

- `codex --version` prints a version
- running `codex` actually launches the Codex CLI

If you only want to confirm startup, it is fine to exit with `Ctrl+C` once the interface appears.

## 2. Confirm the command CodexPocketMac needs

Then check the command used by `CodexPocketMac`:

```bash
which codex
codex app-server --help
```

The two things you want here are:

- `which codex` prints the real path to `codex`
- `codex app-server --help` does not fail

If `codex` itself launches but `codex app-server --help` fails, the CLI may be outdated or broken.

## 3. Confirm that it is current, then update it

First, check where `codex` comes from:

```bash
which codex
```

Even when `codex` was installed with Homebrew, `which codex` may print a symlink under `bin`, such as `/opt/homebrew/bin/codex` or `/usr/local/bin/codex`. First check that path, then inspect the symlink target when there is one:

```bash
CODEX_PATH="$(which codex)"
printf '%s\n' "$CODEX_PATH"
ls -l "$CODEX_PATH"
```

If the `ls -l` target, or the `which codex` result itself, points into `/opt/homebrew/Caskroom/...` or `/usr/local/Caskroom/...`, it is installed as a Homebrew cask. In that case, update it like this:

```bash
brew update
brew info --cask codex
brew upgrade --cask codex
codex --version
codex app-server --help
```

Here is how to read the result:

- use `brew info --cask codex` to compare the installed version with the available version
- use `brew upgrade --cask codex` to update it
- run `codex --version` again after the upgrade and confirm the version you expected
- finish by running `codex app-server --help` again to confirm the feature CodexPocketMac needs is available too

If you installed it some other way, update it with the same method you used originally, then rerun `codex --version` and `codex app-server --help`.

## If it does not work

- if `which codex` is empty, revisit the Codex CLI installation or PATH
- if `codex --version` works but `codex` does not launch, revisit shell setup and execution permissions
- if `codex` launches but `codex app-server --help` fails, update the CLI and check again
- if Terminal works but the Mac app does not detect it, restart the Mac app
- you can also inspect the state on the `Codex CLI` row in `Details`
- if `General` shows `Bridge prerequisites are not satisfied`, this page is the first place to look

## What this unlocks

- starting Bridge
- fetching the `Thread` list for each `Project`
- using `Composer` and `Exec` from the iPhone

Even if you use Codex App, this check is still worth doing once. If the CLI cannot be found, you may get as far as connecting from the iPhone but not as far as doing real work.
