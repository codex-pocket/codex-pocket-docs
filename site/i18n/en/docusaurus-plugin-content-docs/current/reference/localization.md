---
title: Localization
---

# Localization

This site is configured with `ja` as the default locale and `en` as an additional locale.

## Where translations live

- Japanese source docs
  `docs/`
- English doc bodies
  `i18n/en/docusaurus-plugin-content-docs/`
- English UI copy
  `i18n/en/code.json`
  `i18n/en/docusaurus-theme-classic/`

## Development commands

```bash
npm run start:ja
npm run start:en
```

## Refreshing translation catalogs

```bash
npm run write-translations -- --locale en
```

## Editing note

Markdown and MDX pages stay as translated content files, while React and themeConfig strings are managed through translation catalogs.
