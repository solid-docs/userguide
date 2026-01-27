import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/login-logout',
        'getting-started/navigation',
        'getting-started/creating-data',
      ],
    },
    {
      type: 'category',
      label: 'Views',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'views/overview',
      },
      items: [
        'views/addressbook',
        'views/chat',
        'views/longchat',
        'views/friends',
        'views/meeting',
        'views/notepad',
        'views/scheduledevent',
        'views/profile',
        'views/sharing',
        'views/source',
        'views/underthehood',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/user-roles',
        'reference/preferences',
        'reference/faq',
      ],
    },
  ],
};

export default sidebars;
