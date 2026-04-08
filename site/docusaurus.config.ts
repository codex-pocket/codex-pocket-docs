import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repoOwner = 'ryusei-mogi';
const repoName = 'codex-pocket-docs';

const config: Config = {
  title: 'CodexPocket Docs',
  tagline: 'Versioned, bilingual docs for CodexPocket.',
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
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/codex-pocket-social-card.svg',
    metadata: [{name: 'theme-color', content: '#e85422'}],
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
      title: 'CodexPocket Docs',
      hideOnScroll: true,
      logo: {
        alt: 'CodexPocket Logo',
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
              label: '最新リリース',
              to: '/docs/',
            },
            {
              label: 'next',
              to: '/docs/next/',
            },
            {
              label: '多言語運用',
              to: '/docs/reference/localization',
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
