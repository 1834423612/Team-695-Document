import path from 'node:path'
import { defineUserConfig } from 'vuepress'
import { viteBundler, ViteBundlerOptions } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
import iconifyPlugin from '@vuepress-plume/plugin-iconify'
import { markdownPowerPlugin } from 'vuepress-plugin-md-power'

export default defineUserConfig({
    lang: 'en-US',
    title: '695 Documentation',
    description: 'A documentation site for Team 695 Bison Robotics',

    // Add head option to insert script
    head: [
        ['script', { defer: true, src: 'https://tj.fastbirdcdn.online/kjchtj_main.js', 'data-website-id': '1b57433c-4d88-40d2-8782-98a44190eae1' }]
    ],

    theme: plumeTheme({
        configFile: path.join(__dirname, './plume.config.ts'),
        plugins: {
            markdownEnhance: ({
                hint: true, // Notice Box Container
                codetabs: true, // Code Tabs Container
                tabs: true, // Tabs Container
                align: true, // Align content
                mark: true, // Mark Tag Syntax
                tasklist: true, // Tasklists
                attrs: true, // Attributes Syntax
                sup: true, // Superscript Syntax
                sub: true, // Subscript Syntax
                alert: true, // Alert Block Syntax
                footnote: true, // Footnote Syntax
                katex: true, // KaTeX Syntax

                // Beside the default options, you can add more options below
                // Please add the options you need
                
                include: true, // Markdown Import Support
                figure: true, // Enable image Figure support
                imgLazyload: true, // Lazy load page images using native way
                imgMark: true, // Light/Dark image mark
                imgSize: true, // Image size support
                // obsidianImgSize: true, // Obsidian image size support
                mathjax: true, // Math Jax math formula syntax support
                chart: true, // Chart support
                echarts: true, // ECharts chart support
                flowchart: true, // Flowchart support
                // markmap: true, // Markmap chart support
                // stylize: true, // Style inline syntax to create code snippets
                // playground: true, // Interactive demo
                // kotlinPlayground: true, // Kotlin interactive demo
                vuePlayground: true, // Vue interactive demo
                // sandpack: true, // Sandpack interactive demo
                demo: true, // Code example
                revealJs: true, // Slide support
            }),
        },
    }),

    plugins: [
        iconifyPlugin({
            componentName: 'Iconify'
        }),
        markdownPowerPlugin({
            pdf: true,
            caniuse: true,
            plot: true,
            bilibili: true,
            youtube: true,
            icons: true,
            codepen: true,
            replit: true,
            codeSandbox: true,
            jsfiddle: true,
            repl: {
                go: true,
                rust: true,
                kotlin: true,
            },
        }),
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
