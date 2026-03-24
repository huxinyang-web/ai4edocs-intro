import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'
import mermaid from 'markdown-it-mermaid-plugin'

export default defineConfig({
  title: 'Ai4Energy',
  description: 'Ai4Energy 文档 - 入门基础部分',
  base: '/ai4edocs-intro/',
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'Ai4Energy',
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Ai4E 文档', icon: 'book', link: '/docs/' },
      { text: '专业领域', link: 'https://huxinyang-web.github.io/ai4edocs-energy/' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'CS 基础',
          collapsed: false,
          items: [
            { text: '简介', link: '/docs/01CSBase/1-Windows 命令提示符介绍.md' },
            { text: 'Windows 命令提示符介绍', link: '/docs/01CSBase/1-Windows 命令提示符介绍.md' },
            { text: 'PowerShell 和 Windows Terminal', link: '/docs/01CSBase/2-PowerShell 和 WindowsTerminal.md' },
            { text: '环境变量及其设置', link: '/docs/01CSBase/3-环境变量及其设置.md' },
            { text: 'Windows 下安装 gcc 编译器和 CLion', link: '/docs/01CSBase/4-Windows 下安装 gcc 编译器和 CLion.md' },
            { text: 'make 和 Makefile 介绍', link: '/docs/01CSBase/5-make 和 Makefile 介绍.md' },
            { text: '静态链接库和动态链接库', link: '/docs/01CSBase/6-静态链接库和动态链接库.md' },
            { text: '以 SAM 为例整体实操一下', link: '/docs/01CSBase/7-以 SAM 为例整体实操一下.md' },
            { text: '以 CoolProp 为例的实操', link: '/docs/01CSBase/8-以 CoolProp 为例的实操.md' },
            { text: 'dll 生成与调用实操', link: '/docs/01CSBase/9-dll 生成与调用实操.md' }
          ]
        },
        {
          text: 'Julia 入门',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/02JuliaIntro/0010-julia 的安装.md' },
            { text: 'julia 的 REPL', link: '/docs/02JuliaIntro/0020-julia 的 REPL.md' },
            { text: 'julia 的语法要点', link: '/docs/02JuliaIntro/0030-julia 的语法要点.md' },
            { text: 'julia 的包管理', link: '/docs/02JuliaIntro/0040-julia 的包管理.md' },
            { text: 'julia 的环境', link: '/docs/02JuliaIntro/0050-julia 的环境.md' },
            { text: '创建 julia 包', link: '/docs/02JuliaIntro/0060-创建 Julia 包.md' },
            { text: 'julia 的类型系统', link: '/docs/02JuliaIntro/0070-julia 的类型系统.md' },
            { text: 'julia 代码编译成 app', link: '/docs/02JuliaIntro/0090-julia 代码编译成 app.md' },
            { text: 'julia 编译成 library', link: '/docs/02JuliaIntro/0091-julia 编译成 library.md' },
            { text: 'julia 编译自定义系统镜像', link: '/docs/02JuliaIntro/0092-julia 编译自定义系统镜像.md' },
            { text: 'julia 的元编程', link: '/docs/02JuliaIntro/0110-julia 的元编程.md' },
            { text: 'julia-binary-wrappers', link: '/docs/02JuliaIntro/0120- julia-binary-wrappers.md' },
            { text: 'ijulia', link: '/docs/02JuliaIntro/0130-ijulia.md' },
            { text: 'julia 的 http 服务', link: '/docs/02JuliaIntro/1001-julia 的 http 服务.md' },
            { text: 'julia 与 grpc', link: '/docs/02JuliaIntro/1002-julia 与 grpc.md' },
            { text: 'julia 的前后端分离', link: '/docs/02JuliaIntro/1003-julia 的前后端分离.md' }
          ]
        },
        {
          text: 'CS 进阶',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/03CSAdv/1-过程抽象.md' },
            { text: '过程抽象', link: '/docs/03CSAdv/1-过程抽象.md' },
            { text: '数据抽象', link: '/docs/03CSAdv/2-数据抽象.md' },
            { text: '再说说递归', link: '/docs/03CSAdv/3-再说说递归.md' },
            { text: '从符号到模型', link: '/docs/03CSAdv/4-从符号到模型.md' },
            { text: '抽象语法树', link: '/docs/03CSAdv/5-抽象语法树.md' },
            { text: '代码生成', link: '/docs/03CSAdv/6-代码生成.md' },
            { text: '领域特定语言', link: '/docs/03CSAdv/7-领域特定语言.md' },
            { text: '写个库还是创个语言', link: '/docs/03CSAdv/8-写个库还是创个语言.md' },
            { text: 'Ascend 等解构', link: '/docs/03CSAdv/9-Ascend 等解构.md' },
            { text: 'OpenFoam 解构', link: '/docs/03CSAdv/91-OpenFoam 解构.md' }
          ]
        },
        {
          text: 'Go 语言简介',
          collapsed: true,
          items: [
            { text: 'golang 的安装', link: '/docs/12GolangIntro/01-golang 的安装.md' },
            { text: 'golang 的特点', link: '/docs/12GolangIntro/02-golang 的特点.md' }
          ]
        },
        {
          text: '工具',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/91Tools/vscode_git.md' },
            { text: 'VSCode 和 Git', link: '/docs/91Tools/vscode_git.md' },
            { text: 'CoolProp', link: '/docs/91Tools/CoolProp.md' },
            { text: 'CSV_jl_use', link: '/docs/91Tools/CSV_jl_use.md' },
            { text: 'ssh-git 实操', link: '/docs/91Tools/3-ssh-git 实操.md' }
          ]
        },
        {
          text: '工作流',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/92Workflow/julia 的安装.md' },
            { text: 'julia 的安装', link: '/docs/92Workflow/julia 的安装.md' },
            { text: 'REPL-of-Julia', link: '/docs/92Workflow/REPL-of-Julia.md' },
            { text: 'julia_change_pkgserve', link: '/docs/92Workflow/julia_change_pkgserve.md' },
            { text: 'gitworkflow', link: '/docs/92Workflow/gitworkflow.md' },
            { text: '1-thinkaboutstudy', link: '/docs/92Workflow/1-thinkaboutstudy.md' },
            { text: 'vscodePlugin', link: '/docs/92Workflow/vscodePlugin.md' },
            { text: 'DocStructure', link: '/docs/92Workflow/DocStructure.md' }
          ]
        },
        {
          text: 'go-zero 教程',
          collapsed: true,
          items: [
            { text: '简介', link: '/docs/tutorial/01-docker-compose 环境准备.md' },
            { text: 'docker-compose 环境准备', link: '/docs/tutorial/01-docker-compose 环境准备.md' },
            { text: 'emqx 消息服务器准备', link: '/docs/tutorial/02-emqx 消息服务器准备.md' },
            { text: 'mysql 数据库准备', link: '/docs/tutorial/03-mysql 数据库准备.md' },
            { text: 'go-zero 环境准备', link: '/docs/tutorial/04-go-zero 环境准备.md' },
            { text: 'gateway 设置', link: '/docs/tutorial/05-gateway 设置.md' },
            { text: 'goctl 生成 api 服务', link: '/docs/tutorial/06-goctl 生成 api 服务.md' },
            { text: 'goctl 处理数据库模型', link: '/docs/tutorial/07-goctl 处理数据库模型.md' }
          ]
        }
      ]
    },

    footer: {
      message: '陕 ICP 备 19000424 号 -2 | 陕公网安备 61010302001034 号',
      copyright: 'Copyright © 2024 Ai4Energy'
    },

    editLink: {
      pattern: 'https://github.com/huxinyang-web/ai4edocs-intro/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: 2
    }
  },

  markdown: {
    config: (md) => {
      md.use(katex)
      md.use(mermaid)
    }
  },

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }]
  ]
})
