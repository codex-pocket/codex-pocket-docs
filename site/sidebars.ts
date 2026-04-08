import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'ガイド',
      items: [
        'guides/getting-started',
        'guides/pairing-and-bridge',
        'guides/thread-workflow',
      ],
    },
    {
      type: 'category',
      label: 'リファレンス',
      items: [
        'reference/architecture',
        'reference/release-policy',
        'reference/localization',
      ],
    },
  ],
};

export default sidebars;
