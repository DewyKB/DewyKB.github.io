import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import { EnumChangefreq } from 'sitemap';
import type * as Preset from '@docusaurus/preset-classic';
import remarkDefList from 'remark-deflist';

const config: Config = {
  title: 'Dewy',
  tagline: 'The Knowledge Base API for GenAI',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://DewyKB.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DewyKB', // Usually your GitHub org/user name.
  projectName: 'dewy', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/DewyKB/DewyKB.github.io/tree/main/',
          docRootComponent: "@theme/DocRoot",
          docItemComponent: "@theme/ApiItem",
          remarkPlugins: [
            remarkDefList,
          ]
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/DewyKB/DewyKB.github.io/tree/main/',
          remarkPlugins: [
            remarkDefList,
          ]
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-EKMFC8FKD0',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: EnumChangefreq.DAILY,
        }
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Dewy',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/DewyKB/dewy',
          label: 'GitHub',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/DCcm4JEwPT',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/DewyKB/dewy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dewy Contributors.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  themes: ["docusaurus-theme-openapi-docs"], // export theme components
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
        config: {
          dewy: {
            specPath: "specs",
            outputDir: "docs/api",
            hideSendButton: true,
          },
        }
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        redirects: [
          // Redirect old pages (Getting Started) and (User Manual) to new pages
          // (GettingStarted) and (UserManual). We don't nede to redirect all pages
          // in these categories, only the ones that may have been linked by blog
          // posts written before we removed the space.
          { to: "/docs/GettingStarted/admin_ui", from: "/docs/Getting Started/admin_ui"},
          { to: "/docs/GettingStarted/clients", from: "/docs/Getting Started/clients"},
          { to: "/docs/GettingStarted/configuration", from: "/docs/Getting Started/configuration"},
          { to: "/docs/GettingStarted/installation", from: "/docs/Getting Started/installation"},
          { to: "/docs/UserManual/concepts", from: "/docs/User Manual/concepts"},
        ],
      },
    ]
  ],
};

export default config;
