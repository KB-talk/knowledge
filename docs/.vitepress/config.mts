import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/knowledge/",
  title: "凯博的文档管理",
  description: "这里不生产标准答案，只野蛮生长着各种学习碎片。🌱",
  head: [
    ['link', { rel: 'icon', href: 'https://KB-talk.github.io/picx-images-hosting/img/log.png' }] // 指向 public/favicon.ico
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'RK3588', link: '/rk3588/0.前言/0.前言.md' },
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
          ]
        },
        {
          text: 'SDK',
          items: [
            { text: '前言', link: '/rk3588/1.SDK/1.SDK介绍.md' },
          ]
        },
      ],
      '/pytorch/':[
        {
          text: '前言',
          items: [
            { text: '前言', link: '/pytorch/0.前言/0.前言.md' },
            { text: '环境搭建', link: '/pytorch/0.前言/1.环境搭建.md' },
            { text: '新建工程', link: '/pytorch/0.前言/2.新建工程.md' }
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KB-talk' }
    ]
  }
})
