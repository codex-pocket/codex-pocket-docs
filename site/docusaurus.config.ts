import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repoOwner = 'codex-pocket';
const repoName = 'codex-pocket-docs';

const config: Config = {
  title: 'CodexPocket',
  tagline: 'Control the Codex environment running on your Mac from your iPhone.',
  favicon: 'img/codex-pocket-icon.png',

  future: {
    v4: true,
  },

  url: `https://${repoOwner}.github.io`,
  baseUrl: `/${repoName}/`,

  organizationName: repoOwner,
  projectName: repoName,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: {
        label: '日本語',
        htmlLang: 'ja-JP',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  customFields: {
    releaseVersion: '0.1.0',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          lastVersion: '0.1.0',
          versions: {
            current: {
              label: 'next',
              path: 'next',
              banner: 'unreleased',
            },
            '0.1.0': {
              label: '0.1.0',
              banner: 'none',
            },
          },
          editUrl: `https://github.com/${repoOwner}/${repoName}/tree/main/`,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          filename: 'sitemap.xml',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/codex-pocket-social-card.svg',
    metadata: [
      {name: 'theme-color', content: '#e85422'},
      {
        name: 'description',
        content:
          'CodexPocket turns your iPhone into a lightweight control surface for the Codex environment running on your Mac.',
      },
      {
        name: 'keywords',
        content:
          'CodexPocket, Codex, iPhone app, macOS companion app, bridge, pairing, remote coding assistant, docs',
      },
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'CodexPocket'},
      {
        property: 'og:description',
        content:
          'Pair once, pick a project, and continue threads on your iPhone while Codex keeps running on your Mac.',
      },
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'CodexPocket',
      hideOnScroll: true,
      logo: {
        alt: 'CodexPocket logo',
        src: 'img/logo-mark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: `https://github.com/${repoOwner}/${repoName}`,
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'iPhone を始める',
              to: '/docs/iphone/',
            },
            {
              label: 'Mac を始める',
              to: '/docs/mac/',
            },
            {
              label: 'ペアリングと bridge',
              to: '/docs/shared/pairing-and-bridge',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: `https://github.com/${repoOwner}/${repoName}`,
            },
            {
              label: 'Issues',
              href: `https://github.com/${repoOwner}/${repoName}/issues`,
            },
          ],
        },
        {
          title: 'Build',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io/',
            },
            {
              label: '公開フロー',
              to: '/docs/reference/release-policy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodexPocket.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['swift', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
