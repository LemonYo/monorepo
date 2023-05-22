---
nav:
  title: 指南
  order: 1
group:
  title: 架构
  order: 2
  
toc: content
---
# 项目架构
项目采用 基于 pnpm + workspace 的monorepo 架构，就是一个代码库里包含很多的项目,而这些项目虽然是相关联的,但是在逻辑上是独立的,可以由不同人或者团队来维护
## monorepo 的工程项目结构
```js
  packages
    pkg1
        package.json
    pkg2
        package.json
package.json
pnpm-workspace.yaml

```
其中 packages 为工作区目录，里面可创建多个项目，项目里面需包含package.json文件，package.json里的name为项目名需要必填
## 为所有包安装依赖
```js
    pnpm install
```
## 安装全局的公共依赖包
```js
    pnpm install react -w -D
```
-w，--workspace-root 可以将依赖包安装到工程的根目录下，作为所有 package 的公共依赖。
## 给某个package 单独安装指定依赖 或者 执行某个命令
pnpm 提供了 --filter 参数，可以用来对特定的package进行某些操作。
```js
    pnpm install react -S --filter @dipeak/widget
```
需要注意的是，--filter 参数跟着的是package下的 package.json 的 name 字段，并不是目录名。

也可进入到对应项目下执行以下代码 或者执行 package scripts
```js
    pnpm install react -S 
```
## 模块之间相互安装依赖
将package下的pkg1包安装到pkg2中
```js
    pnpm install @dipeak/api --filter @dipeak/widget
```
# 目录结构

目前我们的项目的结构大致如下：

```js
root
├── docs               # 静态站点，demo，md 目录
│  
├── packages           # 存放各个子包
│   │                   
│   ├── api            # api 包
│   │   
│   └── widget         # 组件 和一些utils
│
├── .dumirc.js         # 文档构建配置
│
│── .fatherrc.base.js         # 组件库构建的配置
│
├── package.json  
│
└── .pnpm-workspace.yaml     
```

## docs的目录结构

文档站点采用dumi构建，ant 系基本都在采用。支持react demo 引入，而且ui也漂亮。淘汰 docz 和 vitePress

```js
root
├── docs               # 组件库文档目录
│   ├── index.md       # 组件库文档首页
│   ├── guide          # 组件库其他文档路由表（示意）
│   │   ├── index.md
│   │   └── help.md
├── .dumi              # dumi的runtime 可以忽略
│   
├── .dumirc.ts         # dumi 配置文件
```

## 组件库目录

```js
packageA
├── src                # 组件库源码位置
│   ├── index.ts       # 组件库暴露出的入口
│   ├── Components     # 组件（比如Button 组件）
│   │   ├── index.md
│   │   └── index.ts   # 组件的源码
│   │   └── index.less # 组件的样式（目前只支持less）
├── package.json       # 该组件库的 一些 依赖
│   
└── .fatherrc.ts       # 该组件库的打包配置
└── dist               # 组件构建的产物
    ├── es             # esm 模块，tree shaking
    ├── lib            # commonjs
```




如果是淡出

# 技术选型


# 如何贡献代码
