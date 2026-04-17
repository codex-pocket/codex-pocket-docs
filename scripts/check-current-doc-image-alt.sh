#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

usage() {
  cat <<'EOF'
Usage:
  scripts/check-current-doc-image-alt.sh --worktree
  scripts/check-current-doc-image-alt.sh --staged
  scripts/check-current-doc-image-alt.sh <base-ref> <head-ref>

Checks that changed current markdown docs do not include images with
empty alt text in markdown or HTML image syntax.
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
  echo "No changed current docs image alt checks needed."
  exit 0
fi

for file in "${changed_docs[@]}"; do
  if [[ ! -f "$file" ]]; then
    failures+=("$file -> file does not exist in the current checkout")
    continue
  fi

  while IFS=: read -r line_number _; do
    [[ -z "${line_number:-}" ]] && continue
    failures+=("$file:$line_number -> markdown image is missing alt text")
  done < <(grep -nE '!\[[[:space:]]*\]\(' "$file" || true)

  while IFS=: read -r line_number line_text; do
    [[ -z "${line_number:-}" ]] && continue

    if [[ "$line_text" != *"<img"* || "$line_text" != *"src="* ]]; then
      continue
    fi

    if [[ "$line_text" =~ alt[[:space:]]*=[[:space:]]*\"[[:space:]]*\" ]] || \
       [[ "$line_text" =~ alt[[:space:]]*=[[:space:]]*\'[[:space:]]*\' ]] || \
       [[ ! "$line_text" =~ alt[[:space:]]*= ]]; then
      failures+=("$file:$line_number -> HTML img is missing alt text")
    fi
  done < <(grep -n '<img[^>]*src=' "$file" || true)
done

if [[ ${#failures[@]} -gt 0 ]]; then
  printf 'Current docs image alt check failed:\n' >&2
  printf '  - %s\n' "${failures[@]}" >&2
  exit 1
fi

echo "Current docs image alt check passed."
