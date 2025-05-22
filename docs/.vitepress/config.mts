import { defineConfig } from 'vitepress'
import plantuml from 'markdown-it-plantuml'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/knowledge/",
  title: "凯博的文档管理",
  description: "这里不生产标准答案，只野蛮生长着各种学习碎片。🌱",
  head: [
    ['link', { rel: 'icon', href: 'https://KB-talk.github.io/picx-images-hosting/img/logo.1p5rqa10pxsw.webp' }] 
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://KB-talk.github.io/picx-images-hosting/img/logo.1p5rqa10pxsw.webp',

    nav: [
      { text: '主页', link: '/' },
      { text: 'RK3588', link: '/rk3588/0.开发环境搭建/0.前言.md' },
      { text: 'PyTorch', link: '/pytorch/0.前言/0.前言.md' },
      { text: '博客', link: 'https://kb-talk.github.io/' }
    ],

    sidebar:{
      '/rk3588/':[
        {
          text: '开发环境搭建',
          items: [
            { text: '前言', link: '/rk3588/0.开发环境搭建/0.前言.md' },
            { text: '虚拟机配置', link: '/rk3588/0.开发环境搭建/1.虚拟机配置.md' },
            { text: '开发工具', link: '/rk3588/0.开发环境搭建/2.开发工具.md' },
            { text: 'Linux常用指令', link: '/rk3588/0.开发环境搭建/3.Linux常用指令.md' },
          ]
        },
        {
          text: 'SDK',
          items: [
            { text: 'SDK介绍', link: '/rk3588/1.SDK/1.SDK介绍.md' },
            { text: 'SDK操作', link: '/rk3588/1.SDK/2.SDK操作.md' },
            { text: '屏幕及摄像头配置', link: '/rk3588/1.SDK/3.屏幕及摄像头配置.md' },
            { text: '升级固件', link: '/rk3588/1.SDK/4.升级固件.md' },
          ]
        },
        {
          text: '驱动开发',
          items: [
            { text: '驱动基本介绍', link: '/rk3588/2.驱动开发/驱动基本介绍.md' },
            { text: '摄像头驱动', link: '/rk3588/2.驱动开发/摄像头驱动.md' },
          ]
        },
      ],
      '/pytorch/':[
        {
          text: '前言',
          items: [
            { text: '前言', link: '/pytorch/0.前言/0.前言.md' },
            { text: '环境搭建', link: '/pytorch/0.前言/1.环境搭建.md' },
          ]
        },
        {
          text: '线性神经网络',
          items: [
            { text: '线性回归', link: '/pytorch/1.线性神经网络/1.线性回归.md' },
            { text: 'softmax回归', link: '/pytorch/1.线性神经网络/2.softmax回归.md' }
          ]
        },
        {
          text: '多层感知机',
          items: [
            { text: '多层感知机', link: '/pytorch/2.多层感知机/1.多层感知机.md' },
            { text: '模型选择、欠拟合、过拟合', link: '/pytorch/2.多层感知机/2.模型选择、欠拟合、过拟合.md' }
          ]
        },
      ]
    },

    outline: {
      level: 'deep', // 控制显示哪些级别的标题
      label: '本页目录' // 自定义标题
    },

    footer: {
      message: '基于<a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>许可发布',
      copyright: '版权所有 © 2025  <a href="https://github.com/KB-talk">KB-talk</a>'
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KB-talk' }
    ],

    lastUpdatedText: '上次更新', 
  },
  markdown: {
    math: true,
    toc: { level: [1, 2] },
    config: (md) => {
      // 使用更多的 Markdown-it 插件！
      container: true
      md.use(plantuml)
    }
  },
  lastUpdated: true
})
