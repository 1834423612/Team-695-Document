import type NavbarType from 'vuepress-theme-plume'
import type { NavItem } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const Navbar = [
  { text: 'Home', link: '/', icon: 'material-symbols:home-outline' },
  { text: 'Intro', link: '/guide/intro/', icon: 'material-symbols:info-outline' },
  { text: 'notes', link: '/notes/sub1/', icon: 'material-symbols:article-outline' },
  { text: 'About', link: '/about/', icon: 'mdi:alert-box-outline' },
  {
    text: '指南(test)',
    icon: 'icon-park-outline:guide-board',
    // link: '/guide/intro/',
    link: '/notes/example/guide/介绍.md',
    activeMatch: '^/test/',
  },
  {
    text: 'More',
    icon: 'icon-park-outline:more-three',
    items: [
      {
        text: 'Vuepress',
        items: [
          { text: 'Official Docs', link: 'https://v2.vuepress.vuejs.org' },
          { text: 'Ecosystem', link: 'https://ecosystem.vuejs.press/' },
        ],
      },
    ],
  },
  {
    text: `${version}`,
    icon: 'codicon:versions',
    items: [
      { text: 'Changelog', link: '/changelog/' },
      { text: 'Contributing', link: '/contributing/' },
    ],
  },
]
