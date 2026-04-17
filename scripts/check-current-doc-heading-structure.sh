#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

usage() {
  cat <<'EOF'
Usage:
  scripts/check-current-doc-heading-structure.sh --worktree
  scripts/check-current-doc-heading-structure.sh --staged
  scripts/check-current-doc-heading-structure.sh <base-ref> <head-ref>

Checks that changed current markdown docs do not skip heading levels.
The first markdown heading in a page must be H1 or H2, and later headings
cannot jump deeper by more than one level at a time.
EOF
}

mode=""
base_ref=""
head_ref=""

case "${1-}" in
  --worktree)
    mode="worktree"
    ;;
  --staged)
    mode="staged"
    ;;
  "")
    usage
    exit 1
    ;;
  *)
    if [[ $# -ne 2 ]]; then
      usage
      exit 1
    fi
    mode="range"
    base_ref="$1"
    head_ref="$2"
    ;;
esac

if [[ "$mode" == "worktree" ]]; then
  diff_output="$(
    {
      git diff --name-only --diff-filter=ACMR HEAD
      git ls-files --others --exclude-standard
    } | awk 'NF'
  )"
elif [[ "$mode" == "staged" ]]; then
  diff_output="$(git diff --cached --name-only --diff-filter=ACMR)"
else
  diff_output="$(git diff --name-only --diff-filter=ACMR "$base_ref" "$head_ref")"
fi

changed_docs=()
failures=()

append_unique() {
  local value="$1"
  shift
  local item

  for item in "$@"; do
    if [[ "$item" == "$value" ]]; then
      return 1
    fi
  done

  return 0
}

while IFS= read -r file; do
  [[ -z "$file" ]] && continue

  case "$file" in
    site/docs/*.md|site/docs/**/*.md|site/i18n/en/docusaurus-plugin-content-docs/current/*.md|site/i18n/en/docusaurus-plugin-content-docs/current/**/*.md)
      if append_unique "$file" "${changed_docs[@]-}"; then
        changed_docs+=("$file")
      fi
      ;;
  esac
done <<<"$diff_output"

if [[ ${#changed_docs[@]} -eq 0 ]]; then
  echo "No changed current docs heading checks needed."
  exit 0
fi

for file in "${changed_docs[@]}"; do
  if [[ ! -f "$file" ]]; then
    failures+=("$file -> file does not exist in the current checkout")
    continue
  fi

  line_number=0
  last_level=0
  in_code_fence=0

  while IFS= read -r line || [[ -n "$line" ]]; do
    line_number=$((line_number + 1))

    if [[ "$line" == '```'* ]]; then
      if [[ $in_code_fence -eq 0 ]]; then
        in_code_fence=1
      else
        in_code_fence=0
      fi
      continue
    fi

    if [[ $in_code_fence -eq 1 ]]; then
      continue
    fi

    if [[ "$line" =~ ^(#{1,6})[[:space:]]+ ]]; then
      heading_marks="${BASH_REMATCH[1]}"
      level=${#heading_marks}

      if [[ $last_level -eq 0 && $level -gt 2 ]]; then
        failures+=("$file:$line_number -> first heading must be H1 or H2")
      elif [[ $last_level -gt 0 && $level -gt $((last_level + 1)) ]]; then
        failures+=("$file:$line_number -> heading jumps from H$last_level to H$level")
      fi

      last_level=$level
    fi
  done <"$file"
done

if [[ ${#failures[@]} -gt 0 ]]; then
  printf 'Current docs heading structure check failed:\n' >&2
  printf '  - %s\n' "${failures[@]}" >&2
  exit 1
fi

echo "Current docs heading structure check passed."
