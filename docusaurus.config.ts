import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import  path from 'path';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  plugins: [
     'docusaurus-plugin-sass',
    path.resolve(__dirname, './webpack/webpack.config.js'),
    // require.resolve('docusaurus-lunr-search'),
    // require.resolve("@cmfcmf/docusaurus-search-local")
 

  ],



themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexPages: true,
        indexBlog: true,
        indexDocs: true,

        // For Docs using Chinese, it is recomended to set:
        language: ["en", "zh"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],

  // // ...其他配置
  // webpack: {
  //   alias: {
  //     '@': path.resolve(__dirname, '/src'),
  //     'src': path.resolve(__dirname, '/src'),
  //     // 添加更多别名...
  //   },
  // },
 
  title: '深圳以凡公司ui组件库',
  // tagline: '深圳以凡公司ui组件库文档',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here 网站生产地址
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // github 用户名
  organizationName: 'facebook', // Usually your GitHub org/user name.

  // 项目名称
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [

    // [
    //   '@docusaurus/babel/preset',
    //   {
    //     // ...其他配置
    //     babel: {
    //       plugins: [
    //         ['@babel/plugin-proposal-decorators', { legacy: true }], // 启用旧版装饰器语法:ml-citation{ref="4" data="citationList"}
    //         ['@babel/plugin-proposal-class-properties', { loose: true }]
    //       ],
    //     },
    //   },
    // ],

    [
      'classic',
      {
        
        // docs: {
        //   sidebarPath: './sidebars.ts',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '深圳以凡UI组件库',
      logo: {
        alt: '深圳以凡UI组件库',
        src: 'img/logo.svg',
      },
      // items: [
      //   {
      //     type: 'docSidebar',
      //     sidebarId: 'tutorialSidebar',
      //     position: 'left',
      //     label: 'Tutorial',
      //   },
      //   {to: '/blog', label: 'Blog', position: 'left'},
      //   {
      //     href: 'https://github.com/facebook/docusaurus',
      //     label: 'GitHub',
      //     position: 'right',
      //   },
      // ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'X',
      //         href: 'https://x.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `版权 © ${new Date().getFullYear()} 深圳以凡公司组件库`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
