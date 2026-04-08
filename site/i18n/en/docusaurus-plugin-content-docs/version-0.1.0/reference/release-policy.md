---
title: Release Versioning
---

# Release Versioning

This site enables Docusaurus docs versioning so that stable releases and `next` can live side by side.

## Current rule

- `/docs/`
  latest stable release `0.1.0`
- `/docs/next/`
  next unreleased version

## How to cut a new version

```bash
npm run docs:version -- 0.2.0
```

## Files to inspect after versioning

- `versioned_docs/version-0.2.0/`
- `versioned_sidebars/version-0.2.0-sidebars.json`
- `docusaurus.config.ts` entry for `lastVersion`

## Editing note

If release notes or migration guides are added later, this page can become the index that points to version-specific pages.
