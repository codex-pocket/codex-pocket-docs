import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'iPhone',
      link: {
        type: 'doc',
        id: 'iphone/overview',
      },
      items: ['iphone/getting-started'],
    },
    {
      type: 'category',
      label: 'Mac',
      link: {
        type: 'doc',
        id: 'mac/overview',
      },
      items: ['mac/getting-started'],
    },
    {
      type: 'category',
      label: 'Mac と iPhone を一緒に使う',
      link: {
        type: 'doc',
        id: 'shared/overview',
      },
      items: ['shared/pairing-and-bridge', 'shared/thread-workflow'],
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
