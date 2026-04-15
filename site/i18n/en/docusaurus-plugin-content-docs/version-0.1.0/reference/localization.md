---
title: Localization
---

# Localization

This site uses `ja` as the default locale and `en` as the additional locale. The `iPhone`, `Mac`, `shared`, and `reference` structure stays aligned across both languages so the starting paths do not drift.

## Homepage locale routing

- When a visitor opens the site homepage, browsers with a primary `ja` language stay on Japanese.
- Browsers with a primary `en` language, or any other language, are shown English.
- Visitors can still switch manually from the language menu in the navbar.

## Where content lives

- Japanese source docs
  `docs/`
- English doc bodies
  `i18n/en/docusaurus-plugin-content-docs/`
- English UI copy
  `i18n/en/code.json`
  `i18n/en/docusaurus-theme-classic/`

## Commands to check each locale

```bash
npm run start:ja
npm run start:en
```

## Update translation scaffolding

```bash
npm run write-translations -- --locale en
```

## Rules for the platform-first structure

- keep `docs/iphone/` and `i18n/en/.../iphone/` in the same shape
- do the same for `docs/mac/` and `i18n/en/.../mac/`
- keep `shared` limited to flows that involve both devices
- keep sidebar category ordering aligned across locales
