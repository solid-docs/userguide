import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SolidOS User Guide',
  tagline: 'Learn to use the SolidOS Databrowser',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://solid-docs.github.io',
  baseUrl: '/userguide/',

  organizationName: 'solid-docs',
  projectName: 'userguide',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/solid-docs/userguide/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/userguide-social-card.png',
    metadata: [
      {name: 'keywords', content: 'SolidOS, Solid, databrowser, user guide, pod, decentralized web'},
      {name: 'description', content: 'User guide for SolidOS - learn to manage your data with the Solid databrowser'},
      {name: 'author', content: 'SolidOS Community'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: 'SolidOS User Guide'},
      {name: 'twitter:description', content: 'Learn to use the SolidOS Databrowser'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'SolidOS User Guide'},
      {property: 'og:description', content: 'User guide for SolidOS - learn to manage your data with the Solid databrowser'},
      {property: 'og:site_name', content: 'SolidOS User Guide'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'contribute',
      content: 'Help improve this guide! <a href="https://github.com/solid-docs/userguide">Contribute on GitHub</a>',
      backgroundColor: '#7C4DFF',
      textColor: '#fff',
      isCloseable: true,
    },
    navbar: {
      title: 'SolidOS User Guide',
      logo: {
        alt: 'SolidOS Logo',
        src: 'img/logo.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          to: '/getting-started/introduction',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: '/views/overview',
          label: 'Views',
          position: 'left',
        },
        {
          to: '/reference/user-roles',
          label: 'Reference',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Ecosystem',
          position: 'left',
          items: [
            {
              label: 'SolidOS Monorepo',
              href: 'https://github.com/SolidOS/solidos',
            },
            {
              label: 'Developer Docs',
              href: 'https://solid-docs.github.io/docs/',
            },
            {
              type: 'html',
              value: '<hr style="margin: 0.5rem 0;">',
            },
            {
              label: 'Solid Project',
              href: 'https://solidproject.org/',
            },
            {
              label: 'Community Solid Server',
              href: 'https://github.com/CommunitySolidServer/CommunitySolidServer',
            },
            {
              label: 'Data Kitchen (Desktop)',
              href: 'https://github.com/SolidOS/data-kitchen',
            },
          ],
        },
        {
          href: 'https://github.com/solid-docs/userguide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Getting Started', to: '/getting-started/introduction'},
            {label: 'Views', to: '/views/overview'},
            {label: 'User Roles', to: '/reference/user-roles'},
          ],
        },
        {
          title: 'Views',
          items: [
            {label: 'Address Book', to: '/views/addressbook'},
            {label: 'Chat', to: '/views/chat'},
            {label: 'Profile', to: '/views/profile'},
            {label: 'Sharing', to: '/views/sharing'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Solid Project', href: 'https://solidproject.org/'},
            {label: 'Solid Forum', href: 'https://forum.solidproject.org/'},
            {label: 'Matrix Chat', href: 'https://matrix.to/#/#solid_solidos:gitter.im'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'SolidOS GitHub', href: 'https://github.com/SolidOS'},
            {label: 'Developer Docs', href: 'https://solid-docs.github.io/docs/'},
            {label: 'Contribute', href: 'https://github.com/solid-docs/userguide'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SolidOS Contributors. Licensed under CC BY-SA 4.0. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'turtle'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
