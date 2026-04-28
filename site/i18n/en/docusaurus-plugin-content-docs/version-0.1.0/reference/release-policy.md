---
title: Release Versioning
description: How to read stable and next in this documentation site.
---

# Release Versioning

This site uses Docusaurus docs versioning so the stable release and `next` can be published in parallel. Moving to platform-first navigation does not change the versioning model.

## Current rules

- `/docs/`
  latest stable release `0.1.4`
- `/docs/next/`
  next unreleased version

## Cut a new version

```bash
npm run docs:version -- 0.2.0
```

## Places to inspect after versioning

- `versioned_docs/version-0.2.0/`
- `versioned_sidebars/version-0.2.0-sidebars.json`
- `lastVersion` in `docusaurus.config.ts`

## Site-specific notes

- keep the `docs/iphone/`, `docs/mac/`, and `docs/shared/` shape intact in versioned docs too
- do not let older versions fall back to the old generic guides structure
- when editing an older version, update the matching `versioned_sidebars` and versioned English docs too
