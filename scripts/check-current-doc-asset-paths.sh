#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

usage() {
  cat <<'EOF'
Usage:
  scripts/check-current-doc-asset-paths.sh --worktree
  scripts/check-current-doc-asset-paths.sh --staged
  scripts/check-current-doc-asset-paths.sh <base-ref> <head-ref>

Checks that local image assets referenced by changed current markdown docs
resolve to files in the repository.
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

normalize_target() {
  local raw_target="$1"
  raw_target="${raw_target%%\#*}"
  raw_target="${raw_target%%\?*}"
  printf '%s' "$raw_target"
}

should_skip_target() {
  local target="$1"

  case "$target" in
    ""|\#*|http://*|https://*|data:*|mailto:*|tel:*)
      return 0
      ;;
  esac

  return 1
}

resolve_target_path() {
  local doc_file="$1"
  local target="$2"
  local doc_dir

  if [[ "$target" == /* ]]; then
    printf '%s/site/static%s' "$repo_root" "$target"
    return
  fi

  doc_dir="$(cd "$(dirname "$doc_file")" && pwd)"
  printf '%s/%s' "$doc_dir" "$target"
}

extract_markdown_targets() {
  local file="$1"
  perl -ne 'while (/!\[[^\]]*\]\(([^)[:space:]]+)/g) { print "$1\n"; }' "$file"
}

extract_html_img_targets() {
  local file="$1"
  perl -ne 'while (/<img[^>]*\ssrc=["'"'"'"'"'"']([^"'"'"'"'"'"']+)["'"'"'"'"'"']/g) { print "$1\n"; }' "$file"
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
  echo "No changed current docs asset path checks needed."
  exit 0
fi

for file in "${changed_docs[@]}"; do
  if [[ ! -f "$file" ]]; then
    failures+=("$file -> file does not exist in the current checkout")
    continue
  fi

  targets="$(
    {
      extract_markdown_targets "$file"
      extract_html_img_targets "$file"
    } | awk 'NF'
  )"

  while IFS= read -r target; do
    [[ -z "$target" ]] && continue

    normalized_target="$(normalize_target "$target")"

    if should_skip_target "$normalized_target"; then
      continue
    fi

    resolved_path="$(resolve_target_path "$file" "$normalized_target")"

    if [[ ! -e "$resolved_path" ]]; then
      failures+=("$file -> referenced asset does not exist: $normalized_target")
    fi
  done <<<"$targets"
done

if [[ ${#failures[@]} -gt 0 ]]; then
  printf 'Current docs asset path check failed:\n' >&2
  printf '  - %s\n' "${failures[@]}" >&2
  exit 1
fi

echo "Current docs asset path check passed."
