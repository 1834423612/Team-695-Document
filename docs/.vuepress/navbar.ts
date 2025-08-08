import type NavbarType from 'vuepress-theme-plume'
import NavItem from 'vuepress-theme-plume'
// import { version } from '../../package.json'

export const Navbar = [
  { text: 'Home', link: '/', icon: 'material-symbols:home-outline' },
  { text: 'Intro', link: '/guide/intro/', icon: 'material-symbols:info-outline' },
  { text: 'Scouting', link: '/scouting/', icon: 'mdi:robot' },
  { text: 'Website', link: '/official-website/', icon: 'mdi:web' },
  // { text: 'notes', link: '/notes/sub1/', icon: 'material-symbols:article-outline' },
  { text: 'Rules', link: '/rules/handbook/', icon: 'carbon:rule-locked' },
  // {
  //   text: 'test',
  //   icon: 'icon-park-outline:guide-board',
  //   // link: '/guide/intro/',
  //   link: '/notes/example/guide/介绍.md',
  //   activeMatch: '^/test/',
  // },
  {
    text: 'Links',
    icon: 'line-md:link',
    items: [
      {
        text: 'Team 695',
        items: [
          { text: 'Official Website', link: 'https://www.team695.com/' },
          { text: 'Team API', link: 'https://api.team695.com/' },
          { text: 'Scoutify Site', link: 'https://scoutify.team695.com/' },
        ],
      },
    ],
  },
  // {
  //   text: `${version}`,
  //   icon: 'codicon:versions',
  //   items: [
  //     { text: 'Changelog', link: '/changelog/' },
  //     { text: 'Contributing', link: '/contributing/' },
  //   ],
  // },
]
