# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
## Project

### React Template

Umi 3.X

TypeScript 4.1.2

Ant-Design 4.15.6


基于UMI构建的react 项目基础模板

*   `pages` 模块统一使用  `.tsx`

*   `js` 模块统一使用 `.ts`

*   umi 内置 dva 参考:https://umijs.org/plugins/plugin-dva

*   复杂数组类型的组件使用HOOK

*   定义TS数据类型,统一放置 `src/types` 目录下

### Umi js v3 约定文件夹
- dist 目录
执行 `umi build` 后，产物默认会存放在这里。

- mock 目录
存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。

- public 目录
此目录下所有文件会被 copy 到输出路径。


