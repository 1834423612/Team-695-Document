import { defineThemeConfig } from 'vuepress-theme-plume'
import { Navbar } from './navbar'
import { Notes } from './notes.ts'

export default defineThemeConfig({
    // 在这里配置主题
    logo: '/images/logo.png',
    docsDir: 'docs',

    // 个人信息
    profile: {
        name: 'kjch',
    },

    social: [
        { icon: 'github', link: 'https://github.com/1834423612/Team-695-Document' },
        { icon: 'gitlab', link: '' },
        { icon: 'npm', link: '' },
        { icon: 'docker', link: '' },
        { icon: 'stackoverflow', link: '' },
        { icon: 'juejin', link: '' },
        { icon: 'discord', link: '' },
        { icon: 'instagram', link: '' },
        { icon: 'mastodon', link: '' },
        { icon: 'slack', link: '' },
        { icon: 'bilibili', link: '' },
        { icon: 'linkedin', link: '' },
        { icon: 'qq', link: '' },
        { icon: 'twitter', link: '' },
        { icon: 'x', link: '' },
        { icon: 'weibo', link: '' },
        { icon: 'youtube', link: '' },
        { icon: 'zhihu', link: '' },
        { icon: 'douban', link: '' },
        { icon: 'steam', link: '' },
        { icon: 'xbox', link: '' },
    ],
    navbarSocialInclude: ['github'],
    footer: { copyright: 'Copyright © 2024 Team 695 Bison Robotics' },

    navbar: Navbar,
    notes: Notes,

    notFound: {
        code: '404',
        title: 'Page not found',
        quote: 'The page you are looking for does not exist.',
    },
})