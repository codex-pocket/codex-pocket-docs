#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

usage() {
  cat <<'EOF'
Usage:
  scripts/summarize-doc-changes.sh --worktree
  scripts/summarize-doc-changes.sh --staged
  scripts/summarize-doc-changes.sh <base-ref> <head-ref>

Prints a markdown summary of changed documentation-related files.
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

ja_current=()
en_current=()
versioned_docs=()
site_shell=()
assets=()
repo_meta=()
other=()

append_unique() {
  local value="$1"
  shift
  local -a existing=("$@")
  local item

  for item in "${existing[@]}"; do
    if [[ "$item" == "$value" ]]; then
      return 1
    fi
  done

  return 0
}

while IFS= read -r file; do
  [[ -z "$file" ]] && continue

  case "$file" in
    site/docs/*.md|site/docs/**/*.md)
      if append_unique "$file" "${ja_current[@]-}"; then
        ja_current+=("$file")
      fi
      ;;
    site/i18n/en/docusaurus-plugin-content-docs/current/*.md|site/i18n/en/docusaurus-plugin-content-docs/current/**/*.md)
      if append_unique "$file" "${en_current[@]-}"; then
        en_current+=("$file")
      fi
      ;;
    site/versioned_docs/*.md|site/versioned_docs/**/*.md)
      if append_unique "$file" "${versioned_docs[@]-}"; then
        versioned_docs+=("$file")
      fi
      ;;
    site/src/*|site/sidebars.ts|site/docusaurus.config.ts|site/package.json|site/package-lock.json)
      if append_unique "$file" "${site_shell[@]-}"; then
        site_shell+=("$file")
      fi
      ;;
    site/static/*|site/static/**/*)
      if append_unique "$file" "${assets[@]-}"; then
        assets+=("$file")
      fi
      ;;
    .github/*|README.md|CONTRIBUTING.md|SECURITY.md|scripts/*)
      if append_unique "$file" "${repo_meta[@]-}"; then
        repo_meta+=("$file")
      fi
      ;;
    *)
      if append_unique "$file" "${other[@]-}"; then
        other+=("$file")
      fi
      ;;
  esac
done <<<"$diff_output"

print_section() {
  local title="$1"
  shift
  local -a files=("$@")
  local -a filtered=()
  local file

  for file in "${files[@]-}"; do
    [[ -z "$file" ]] && continue
    filtered+=("$file")
  done

  echo "### $title"

  if [[ ${#filtered[@]} -eq 0 ]]; then
    echo "- none"
    echo
    return
  fi

  for file in "${filtered[@]}"; do
    echo "- \`$file\`"
  done

  echo
}

total_count=$(
  printf '%s\n' \
    "${ja_current[@]-}" \
    "${en_current[@]-}" \
    "${versioned_docs[@]-}" \
    "${site_shell[@]-}" \
    "${assets[@]-}" \
    "${repo_meta[@]-}" \
    "${other[@]-}" | awk 'NF' | wc -l | tr -d ' '
)

echo "## Changed Docs Summary"
echo
echo "- Total changed files: $total_count"
echo

print_section "Current Japanese Docs" "${ja_current[@]-}"
print_section "Current English Docs" "${en_current[@]-}"
print_section "Versioned Docs" "${versioned_docs[@]-}"
print_section "Docs Site Shell" "${site_shell[@]-}"
print_section "Assets" "${assets[@]-}"
print_section "Repo Workflow And Intake" "${repo_meta[@]-}"
print_section "Other Changed Files" "${other[@]-}"
