#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

usage() {
  cat <<'EOF'
Usage:
  scripts/check-current-doc-frontmatter.sh --worktree
  scripts/check-current-doc-frontmatter.sh --staged
  scripts/check-current-doc-frontmatter.sh <base-ref> <head-ref>

Checks that changed current markdown docs include frontmatter with
non-empty title and description fields.
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

trim_value() {
  printf '%s' "$1" | sed -E 's/^[[:space:]]+//; s/[[:space:]]+$//'
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
  echo "No changed current docs frontmatter checks needed."
  exit 0
fi

for file in "${changed_docs[@]}"; do
  if [[ ! -f "$file" ]]; then
    failures+=("$file -> file does not exist in the current checkout")
    continue
  fi

  line_number=0
  has_frontmatter=0
  closed_frontmatter=0
  has_title=0
  has_description=0

  while IFS= read -r line || [[ -n "$line" ]]; do
    line_number=$((line_number + 1))

    if [[ $line_number -eq 1 ]]; then
      if [[ "$line" != "---" ]]; then
        failures+=("$file -> frontmatter must start on the first line")
        break
      fi

      has_frontmatter=1
      continue
    fi

    if [[ "$line" == "---" ]]; then
      closed_frontmatter=1
      break
    fi

    case "$line" in
      title:*)
        value="$(trim_value "${line#title:}")"
        if [[ -n "$value" && "$value" != "\"\"" && "$value" != "''" ]]; then
          has_title=1
        fi
        ;;
      description:*)
        value="$(trim_value "${line#description:}")"
        if [[ -n "$value" && "$value" != "\"\"" && "$value" != "''" ]]; then
          has_description=1
        fi
        ;;
    esac
  done <"$file"

  if [[ $has_frontmatter -eq 0 ]]; then
    continue
  fi

  if [[ $closed_frontmatter -eq 0 ]]; then
    failures+=("$file -> frontmatter is not closed with ---")
    continue
  fi

  if [[ $has_title -eq 0 ]]; then
    failures+=("$file -> frontmatter is missing a non-empty title")
  fi

  if [[ $has_description -eq 0 ]]; then
    failures+=("$file -> frontmatter is missing a non-empty description")
  fi
done

if [[ ${#failures[@]} -gt 0 ]]; then
  printf 'Current docs frontmatter check failed:\n' >&2
  printf '  - %s\n' "${failures[@]}" >&2
  exit 1
fi

echo "Current docs frontmatter check passed."
