# H5 模板

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 3](https://github.com/vitejs/vite) - 打包更快！
- 💪 [Typescript](https://www.typescriptlang.org/) - 代码更健壮！
- 🎉 [Vant 4](https://vant-contrib.gitee.io/vant/#/zh-CN) - 基于 Vue.js 3 的轻量、可靠的移动端 Vue 组件库
- 🔥 [Axios 配置和封装](https://github.com/axios/axios) - 基于 Promise 的 HTTP 请求库
- 💡 [Vue Router 4](https://router.vuejs.org/zh/) - Vuejs 的官方路由
- 📦 [组件自动按需加载](https://github.com/antfu/unplugin-vue-components) - 自动按需注册组件, 无需 import
- 📥 [API 自动按需加载](https://github.com/antfu/unplugin-auto-import) - 无需手动 import 进行引入
- 🍍 [Pinia 状态管理](https://pinia.esm.dev/) - 你将会喜欢上的 Vue Store
- 😃 [iconify](https://github.com/antfu/unplugin-icons) - 强大的图标库，各种图标集为你所用!
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 功能强大且性能极高的 CSS 引擎，同时支持在 class 中使用 icon 图标
- 🌍 [I18n 国际化开箱即用](./locales) - 想要翻译？是的，都可以！
- 👩‍🎨 [NProgress](https://github.com/rstacruz/nprogress) - 页面加载进度反馈
- 📑 [Markdown 支持](https://github.com/antfu/vite-plugin-md) - 随意的在页面中嵌入 Markdown
- 🔑 完整支持的代码风格规范和代码提交规范

## 已配置

### CSS 引擎

- [UnoCSS](https://github.com/unocss/unocss) - 功能非常强大（完全可定制、属性化、纯 CSS 图标等功能）；性能更高，没有解析、AST、扫描，它是即时的（比
  Windi CSS 或 Tailwind JIT 快 200 倍）。

### UI 框架

- [Vant](https://vant-contrib.gitee.io/vant/#/zh-CN) - 基于 Vue.js 3 的轻量、可靠的移动端组件库，非常优雅的适配暗黑模式。

### Icons

- [🔍Icônes](https://icones.js.org/) - 使用任意的图标集
  - [unplugin-icons](https://github.com/antfu/unplugin-icons) - 自动按需引入你所需要的图标！
  - [unocss](https://github.com/antfu/unplugin-icons) - 直接在 class 中声明你所需要的图标！
  - [@iconify/vue](https://github.com/iconify/iconify/tree/main/components/vue) - 不再需要修改代码，根据名称动态加载！（注意：需要访问互联网加载 icon）

> @iconify/vue 不支持本地 svg 文件，如果需要使用本地 svg，请考虑优先使用 unplugin-icons 或者 unocss

### 插件

- [Vue Router 4](https://router.vuejs.org/zh/) - Vuejs 的官方路由
- [Pinia](https://pinia.esm.dev) - 新一代的 Vue Store 状态管理
- [Axios](https://github.com/axios/axios) - 基于 Promise 的 HTTP 请求库
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 自动按需加载组件
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动按需加载 API
- [UnoCSS](https://github.com/unocss/unocss) - 强大的 CSS 引擎
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md) - Markdown 作为组件，也可以让组件在 Markdown 中使用
  - [markdown-it-prism](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) 的语法高亮
  - [prism-theme-vars](https://github.com/antfu/prism-theme-vars) - 利用 CSS 变量自定义 Prism.js 的主题
  - [markdown-it-link-attributes](https://github.com/crookedneighbor/markdown-it-link-attributes) - 统一设置 Markdown
    里的超链接跳转方式
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - 国际化
  - [vite-plugin-vue-i18n](https://github.com/intlify/vite-plugin-vue-i18n) - Vue I18n 的 Vite 插件
- [vite-plugin-fonts](https://github.com/stafyniaksacha/vite-plugin-fonts) - Vite 的字体加载器
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [vite-plugin-optimize-persist](https://github.com/antfu/vite-plugin-optimize-persist) - 允许你在 vite 中显式设置依赖项
- [postcss-px-to-viewport-8-plugin](https://github.com/evrone/postcss-px-to-viewport) - 浏览器适配 Viewport 布局
- [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression) - 打包时再压缩一份 gzip 文件，配合 web 服务器使用，使用压缩后的资源加载速度更快

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)

## 清单

使用此模板时，请尝试按照清单正确更新你自己的信息

- [ ] 在 `package.json` 中改变作者名
- [ ] 在 `.env` 中改变标题
- [ ] 在 `public` 目录下改变 favicon
- [ ] 整理 `README `并删除路由

### 开发

只需要执行以下命令就可以在 http://localhost:端口号 中看到,端口号默认为 5000

```bash
npm run dev
```

### 构建

构建该应用只需要执行以下命令

```bash
npm run build
```

然后你会看到用于发布的 `dist` 文件夹被生成。
只需要执行以下命令就可以在 http://localhost:8080 中看到

## 工程文件目录

```
├─project
│  ├─.husky ------------------------ 代码提交校验脚本
│  ├─locales ------------------------ i18n
│  ├─presets ------------------------ vite插件管理配置
│  ├─dist ------------------------ 打包生成的目录，包含js,image,ttf等
│  ├─public ------------------------ 项目公共资源文件
│  │  ├─manifest.json ------------------------ 原生功能配置文件
│  ├─src —— 业务代码
│  │  ├─api --------------------- 接口api相关代码
│  │  ├─assets --------------------- 图片、css文件资源目录
│  │  ├─components --------------------- 通用组件
│  │  │─router --------------------- 路由文件
│  │  │─store
│  │  ├─utils ------------------------ 工具类代码
│  │  ├─views ----------------- 页面代码
│  │  │  ├─welcome ----- 欢迎页 （推荐定义方式）
│  │  │     ├─index.vue ----- 页面入口文件
│  ├─package.json ------------------ npm的配置文件，里面包含依赖配置、Scripts配置等
│  ├─README.md ------------- 项目说明文件
```

### manifest.json

> 原生功能配置项，在项目工程根目录 public 文件夹内

```json5
{
  deviceType: '0x13',
  // 品类码
  index: 'index.html',
  // 入口文件url
}
```

## 代码管理

> 通过 Eslint + Prettier + Husky + Commitlint + commitizen + Lint-staged 规范前端工程代码

### 编码风格

- .editorconfig 配置统一编辑器配置
- [ESLint](https://eslint.org/) 配置为 [Airbnb Style](https://github.com/airbnb/javascript)
- [Stylelint](https://stylelint.io/)

### 提交代码

```bash
git add .
npm run commit
```

### changelog

> 通过工具`conventional-changelog`来自动生成 changelog

```bash
npm run changelog
```

### 版本管理`standard-version`

> 会根据`pacakage.json`中的`version`更新版本号，升级版本，打包 tag，并更新`changelog`。

```bash
// 当前版本v1.0.0
standard-version // output v1.1.0
// 或者
npm run release // 相当于运行standard-version

// -r 指定版本
standard-version -r major // output v2.0.0
standard-version -r minor // output v1.1.0
standard-version -r patch // output v1.0.1
standard-version -r 3.0.0 // output v3.0.0
```

或者使用[bumpp](https://github.com/antfu/bumpp)这个 cli 进行打标签发版更加方便
