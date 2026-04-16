---
title: Release Policy
---

# Release Policy

This site uses Docusaurus docs versioning so the stable release and `next` can be published in parallel. CodexPocket does not flip public docs to stable until the iPhone build is through App Review and the Mac release is ready too.

## Stable and next

- `/docs/`
  latest fully published release `0.1.3`
- `/docs/next/`
  next unreleased or review-pending version

Use `stable` when you are using the public App Store / public Mac release. Use `next` only when you are testing unreleased changes, looking at a review-pending build, or following instructions from the team.

## How a release moves

The release order is fixed:

1. upload the iPhone build to App Store Connect
2. submit that build for App Review
3. keep docs changes in `next` while review is pending
4. after approval, publish the Mac release, flip docs stable, and release the iPhone app together

Because of that, `next` can describe a version that exists internally or is already in App Review, but is not public yet.

## Contributor workflow

The source repos use short-lived `release/<version>` branches. Final public source tags use `v<version>`. App Review submission points can use `v<version>-rcN`. The public Mac distribution repo keeps using `mac-v<version>` for release assets and Sparkle URLs.

## Cut a new stable docs version

```bash
npm run docs:version -- 0.2.0
```

## Places to inspect after versioning

- `versioned_docs/version-0.2.0/`
- `versioned_sidebars/version-0.2.0-sidebars.json`
- `lastVersion` in `docusaurus.config.ts`
- stable version and download URLs in `docusaurus.config.ts`

## Site-specific notes

- keep the `docs/iphone/`, `docs/mac/`, and `docs/shared/` shape intact in versioned docs too
- do not let older versions fall back to the old generic guides structure
- when editing an older version, update the matching `versioned_sidebars` and versioned English docs too
- do not switch `stable` before the iPhone release is approved and ready to go public
