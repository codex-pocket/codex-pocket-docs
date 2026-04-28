import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const repoOwner = 'codex-pocket';
const repoName = 'codex-pocket-docs';
const googleAnalyticsTrackingId = 'G-8BMDJKJ8PD';
const siteUrl = `https://${repoOwner}.github.io`;
const siteBaseUrl = `/${repoName}/`;

const config: Config = {
  title: 'CodexPocket',
  tagline: 'Resume the Codex running on your Mac from your iPhone without going back to your desk.',
  favicon: 'favicon.ico',

  future: {
    v4: true,
  },

  url: siteUrl,
  baseUrl: siteBaseUrl,

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
    stableVersion: '0.1.3',
    macReleaseUrl: 'https://github.com/codex-pocket/codex-pocket-releases/releases/tag/mac-v0.1.3',
    macDownloadUrl:
      'https://github.com/codex-pocket/codex-pocket-releases/releases',
    iphoneAppStoreUrl: '',
    iphoneTestFlightUrl: '',
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '48x48',
        href: `${siteBaseUrl}favicon-48x48.png`,
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: `${siteBaseUrl}favicon.svg`,
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: `${siteBaseUrl}apple-touch-icon.png`,
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: `${siteBaseUrl}site.webmanifest`,
      },
    },
  ],

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
              label: '0.1.3',
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
        gtag: {
          trackingID: googleAnalyticsTrackingId,
          anonymizeIP: true,
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
          'CodexPocket keeps the Codex running on your Mac within reach from your iPhone, with same-LAN QR pairing and lightweight Project and Thread control.',
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
          'CodexPocket helps you resume the Codex running on your Mac from your iPhone, with same-LAN QR pairing and lightweight follow-ups away from your desk.',
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
          className: 'navbar__docs-link',
        },
        {
          label: '目次',
          position: 'left',
          className: 'navbar__guide-menu',
          items: [
            {
              type: 'doc',
              docId: 'intro',
              label: 'はじめに',
            },
            {
              type: 'doc',
              docId: 'setup/overview',
              label: '準備と前提',
            },
            {
              type: 'doc',
              docId: 'mac/overview',
              label: 'Mac アプリ',
            },
            {
              type: 'doc',
              docId: 'iphone/overview',
              label: 'iPhone アプリ',
            },
            {
              type: 'doc',
              docId: 'shared/overview',
              label: 'Mac と iPhone の連携',
            },
            {
              type: 'doc',
              docId: 'usage/overview',
              label: '使い方',
            },
            {
              type: 'doc',
              docId: 'troubleshooting/overview',
              label: '困ったとき',
            },
            {
              type: 'doc',
              docId: 'reference/overview',
              label: 'リファレンス',
            },
          ],
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
            {
              label: 'プライバシーポリシー',
              to: '/privacy-policy',
            },
            {
              label: '特定商取引法に基づく表記',
              to: '/commercial-disclosure',
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
