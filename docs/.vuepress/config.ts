import path from 'node:path'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
import iconifyPlugin from '@vuepress-plume/plugin-iconify'


export default defineUserConfig({
    lang: 'en-US',
    title: '695 Documentation',
    description: 'VuePress theme for documentation',

    theme: plumeTheme({
        configFile: path.join(__dirname, './plume.config.ts'),
    }),

    plugins: [
        iconifyPlugin({
            componentName: 'Iconify'
        })
    ],
    bundler: viteBundler(),
})