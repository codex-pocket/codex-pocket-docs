---
title: What You Need Before You Start
description: This page explains the things you should have ready before setup.
---

Before you start using CodexPocket, make sure the following are ready.

## Required devices

- a Mac running `macOS 26` or later
- an iPhone running `iOS 26` or later

The current iPhone app is for iPhone only. iPad is out of scope.

## What the Mac side needs

- a Mac environment where Codex already works normally
- `CodexPocketMac`

CodexPocket controls the Codex environment on the Mac from the iPhone. That means the Mac-side Codex environment must already work.

### `codex` must work from Terminal

Open Terminal and run:

```bash
codex --version
codex
```

Confirm these two points:

- `codex --version` prints a version
- running `codex` launches the Codex CLI

If you only want to confirm startup, it is fine to exit with `Ctrl+C` once the interface opens.

Then confirm the subcommand that `CodexPocketMac` uses:

```bash
codex app-server --help
```

If this prints without error, there is a good chance `CodexPocketMac` can call `codex` correctly. The detailed check flow is in [Install Codex CLI](../mac/install-codex-cli).

### You can confirm whether `codex` is current and update it

After checking the current version with `codex --version`, update it according to how it was installed. If you are not sure whether it came from Homebrew, start with:

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
```

Use `brew info --cask codex` to compare the installed and available versions, then run `codex --version` again after the update. If it was installed another way, update it with that same method, then rerun `codex --version` and `codex app-server --help`.

### At least one `Project` is ready to open

Here, a `Project` means a working folder shown on the iPhone. A workspace open in Codex App on the Mac, or a working directory added manually in `Projects` inside `CodexPocketMac`, becomes a `Project`.

- if you use Codex App, the folder you want must already be in its workspace list
- the same folder must be visible in `Projects` inside `CodexPocketMac`

If you are unsure which folder should be a `Project`, choosing just one repository where you usually keep working with Codex is enough. The add flow is explained in [Create a Project](../mac/create-project).

## What you need only if you use Git features

You need `git` only for features such as:

- showing the current branch
- switching branches
- creating a new branch

If all you want is reading threads and sending normal requests, CodexPocket can still be useful without Git.

## Network and permissions

- during first setup, the Mac and iPhone must be on the same local network
- local network access must be allowed on the iPhone
- the Host you want to use from another Wi-Fi network or mobile data must have Managed Relay information saved
- if you add the Host with QR, the iPhone camera must be available

## Nice to have before you start

- at least one item is visible in `Projects` inside `CodexPocketMac`
- Bridge is already running
- you can open the `Pairing` screen immediately

Pairing itself can still finish even if there are zero projects, but if you want to start using the iPhone right away after connecting, seeing at least one `Project` first is much easier.
