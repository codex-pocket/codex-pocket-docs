#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

current_hooks_path="$(git config --get core.hooksPath || true)"

if [[ -n "$current_hooks_path" && "$current_hooks_path" != ".githooks" ]]; then
  printf 'Refusing to override existing core.hooksPath: %s\n' "$current_hooks_path" >&2
  printf 'If you want to use this repo hook, run manually: git config core.hooksPath .githooks\n' >&2
  exit 1
fi

git config core.hooksPath .githooks
echo "Installed repo-local git hooks from .githooks."
