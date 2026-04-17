#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

usage() {
  cat <<'EOF'
Usage:
  scripts/check-doc-locale-parity.sh --worktree
  scripts/check-doc-locale-parity.sh --staged
  scripts/check-doc-locale-parity.sh <base-ref> <head-ref>

Checks that markdown doc changes under site/docs/ and
site/i18n/en/docusaurus-plugin-content-docs/current/ are mirrored in both locales.
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
  diff_output="$(git diff --name-only --diff-filter=ACMR HEAD)"
elif [[ "$mode" == "staged" ]]; then
  diff_output="$(git diff --cached --name-only --diff-filter=ACMR)"
else
  diff_output="$(git diff --name-only --diff-filter=ACMR "$base_ref" "$head_ref")"
fi

ja_prefix="site/docs/"
en_prefix="site/i18n/en/docusaurus-plugin-content-docs/current/"

ja_changed=()
en_changed=()
missing_pairs=()

contains_exact() {
  local needle="$1"
  shift

  local item
  for item in "$@"; do
    if [[ "$item" == "$needle" ]]; then
      return 0
    fi
  done

  return 1
}

while IFS= read -r file; do
  [[ -z "$file" ]] && continue

  case "$file" in
    ${ja_prefix}*.md)
      ja_changed+=("$file")
      ;;
    ${en_prefix}*.md)
      en_changed+=("$file")
      ;;
  esac
done <<<"$diff_output"

if [[ ${#ja_changed[@]} -eq 0 && ${#en_changed[@]} -eq 0 ]]; then
  echo "No current Japanese/English markdown doc parity checks needed."
  exit 0
fi

for ja_file in "${ja_changed[@]}"; do
  relative_path="${ja_file#"$ja_prefix"}"
  en_file="${en_prefix}${relative_path}"

  if [[ ! -f "$en_file" ]]; then
    missing_pairs+=("$ja_file -> missing English counterpart $en_file")
    continue
  fi

  if ! contains_exact "$en_file" "${en_changed[@]}"; then
    missing_pairs+=("$ja_file -> update matching English file $en_file")
  fi
done

for en_file in "${en_changed[@]}"; do
  relative_path="${en_file#"$en_prefix"}"
  ja_file="${ja_prefix}${relative_path}"

  if [[ ! -f "$ja_file" ]]; then
    missing_pairs+=("$en_file -> missing Japanese counterpart $ja_file")
    continue
  fi

  if ! contains_exact "$ja_file" "${ja_changed[@]}"; then
    missing_pairs+=("$en_file -> update matching Japanese file $ja_file")
  fi
done

if [[ ${#missing_pairs[@]} -gt 0 ]]; then
  printf 'Locale parity check failed:\n' >&2
  printf '  - %s\n' "${missing_pairs[@]}" >&2
  exit 1
fi

echo "Locale parity check passed."
