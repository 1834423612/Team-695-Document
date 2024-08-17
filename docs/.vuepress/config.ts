import path from 'node:path'
import { defineUserConfig } from 'vuepress'
import { viteBundler, ViteBundlerOptions } from '@vuepress/bundler-vite'
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
    
    // Use viteBundler and pass the correct options
    bundler: viteBundler({
        viteOptions: {
            plugins: [
                // Some Vite plugins might need
            ],
            build: {
                rollupOptions: {
                    // Put Rollup specific settings
                    external: [
                        '.cache',
                        '.temp',
                        '/images/logo.png',
                    ],
                },
            },
        },
    }),
});