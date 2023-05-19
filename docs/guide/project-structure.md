---
nav:
  title: 指南
  order: 1
group:
  title: 架构
  order: 2
  
toc: content
---

# 目录结构

目前我们的项目的结构大致如下：

```js
root
├── site               # 静态站点，demo，md 目录
│  
├── packages           # 存放各个子包
│   │                  
│   ├── utils          # utils 包
│   │   
│   ├── api            # api 包
│   │   
│   └── widget         # 组件
│
├── package.json   
└── .pnpm-workspace.yaml     
```

## site的目录结构

```js
site
├── docs               # 组件库文档目录
│   ├── index.md       # 组件库文档首页
│   ├── guide          # 组件库其他文档路由表（示意）
│   │   ├── index.md
│   │   └── help.md
├── .dumi              # dumi的runtime 可以忽略
│   
├── .dumirc.ts         # dumi 配置文件
```

## 组件的目录结构

```js
root
├── docs               # 组件库文档目录
│   ├── index.md       # 组件库文档首页
│   ├── guide          # 组件库其他文档路由表（示意）
│   │   ├── index.md
│   │   └── help.md
├── src                # 组件库源码目录
│   ├── Button         # 单个组件
│   │   ├── index.tsx  # 组件源码
│   │   ├── index.less # 组件样式
│   │   └── index.md   # 组件文档
│   └── index.ts       # 组件库入口文件
├── .dumirc.ts         # dumi 配置文件
└── .fatherrc.ts       # father-build 的配置文件，用于组件库打包
```

## utils(packages/utils)的目录结构

```js
root
├── docs               # 组件库文档目录
│   ├── index.md       # 组件库文档首页
│   ├── guide          # 组件库其他文档路由表（示意）
│   │   ├── index.md
│   │   └── help.md
├── src                # 组件库源码目录
│   ├── Button         # 单个组件
│   │   ├── index.tsx  # 组件源码
│   │   ├── index.less # 组件样式
│   │   └── index.md   # 组件文档
│   └── index.ts       # 组件库入口文件
├── .dumirc.ts         # dumi 配置文件
└── .fatherrc.ts       # father-build 的配置文件，用于组件库打包




如果是淡出

# 技术选型


# 如何贡献代码
