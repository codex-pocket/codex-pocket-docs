#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

usage() {
  cat <<'EOF'
Usage:
  scripts/run-current-doc-checks.sh --worktree
  scripts/run-current-doc-checks.sh --staged
  scripts/run-current-doc-checks.sh <base-ref> <head-ref>

Runs the current markdown docs quality checks in one command:
  - locale parity
  - frontmatter metadata
  - image alt text
  - heading structure
  - asset paths
EOF
}

if [[ $# -eq 0 ]]; then
  usage
  exit 1
fi

run_check() {
  local label="$1"
  shift

  echo "==> $label"
  "$@"
  echo
}

args=("$@")

run_check "Locale parity" ./scripts/check-doc-locale-parity.sh "${args[@]}"
run_check "Frontmatter metadata" ./scripts/check-current-doc-frontmatter.sh "${args[@]}"
run_check "Image alt text" ./scripts/check-current-doc-image-alt.sh "${args[@]}"
run_check "Heading structure" ./scripts/check-current-doc-heading-structure.sh "${args[@]}"
run_check "Asset paths" ./scripts/check-current-doc-asset-paths.sh "${args[@]}"

echo "All current docs checks passed."
