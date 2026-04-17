#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

usage() {
  cat <<'EOF'
Usage:
  scripts/run-doc-review-checks.sh --worktree
  scripts/run-doc-review-checks.sh --staged
  scripts/run-doc-review-checks.sh <base-ref> <head-ref>

Runs the current docs review checks in one command:
  - current markdown docs quality checks
  - full site validate
EOF
}

if [[ $# -eq 0 ]]; then
  usage
  exit 1
fi

args=("$@")

echo "==> Current docs checks"
./scripts/run-current-doc-checks.sh "${args[@]}"
echo

echo "==> Full site validate"
npm --prefix site run validate
echo

echo "All doc review checks passed."
