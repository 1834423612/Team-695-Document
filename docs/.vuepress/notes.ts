import { defineNotesConfig } from 'vuepress-theme-plume'

export const Notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    {
      dir: 'menu/guide/',
      link: '/guide/',
      sidebar: [
        {
          text: 'Quick Start',
          collapsed: false,
          icon: 'carbon:idea',
          items: ['intro'],
        },
        {
          text: 'Write a document',
          icon: 'fluent-mdl2:edit-create',
          collapsed: false,
          items: [
            {
              text: 'markdown',
              collapsed: true,
              icon: 'material-symbols:markdown-outline',
              dir: 'markdown',
              items: ['Basics', 'Extended', 'Advanced'],
            },
          ],
        },
        {
          text: 'Something else',
          icon: 'lucide:box',
          collapsed: false,
          dir: 'test',
          items: ['1'],
        },
      ],
    },
    // {
    //   dir: 'theme/config',
    //   link: '/config/',
    //   sidebar: [
    //     {
    //       text: '配置',
    //       collapsed: false,
    //       items: [
    //         '配置说明',
    //         '多语言配置',
    //         '主题配置',
    //         '导航栏配置',
    //         'notes配置',
    //       ],
    //     },
    //     {
    //       text: 'frontmatter',
    //       dir: 'frontmatter',
    //       collapsed: false,
    //       items: ['basic', 'home', 'post', 'friend'],
    //     },
    //     {
    //       text: '内置插件',
    //       dir: 'plugins',
    //       collapsed: false,
    //       items: ['', '代码高亮', '搜索', '阅读统计', 'markdown增强', 'markdownPower', '百度统计', '水印'],
    //     },
    //   ],
    // },
    // {
    //   dir: 'plugins',
    //   link: '/plugins/',
    //   sidebar: [
    //     {
    //       text: '插件',
    //       items: [
    //         // 'caniuse',
    //         'iconify',
    //         'shiki',
    //         'md-power',
    //         'content-updated',
    //         {
    //           text: 'plugin-netlify-functions',
    //           dir: 'netlify-functions',
    //           link: '/plugins/plugin-netlify-functions/',
    //           collapsed: true,
    //           items: [
    //             '介绍',
    //             '使用',
    //             '功能',
    //             'api',
    //             'functions',
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   dir: 'tools',
    //   link: '/tools/',
    //   sidebar: [
    //     {
    //       text: '工具',
    //       icon: 'tabler:tools',
    //       items: ['home-hero-tint-plate', 'caniuse'],
    //     },
    //   ],
    // },
  ],
})

// export const enNotes = definePlumeNotesConfig({
//   dir: 'en/notes',
//   link: '/',
//   notes: [],
// })
