---
layout: center
highlighter: shiki
colorSchema: dark
transition: fade-out
title: Rspack
mdc: true
growX: 50
growY: 50
---



<div w-full h-full flex-center text-30 position-relative>
  <p c-gray opacity-5 tracking-10 uppercase>check In</p>
  <div position-absolute border p-2 rounded-2 border-gray  class="left-50% top-50% translate--50%">
    <img src="/check-in.png" h-70 w-70 rounded-2 />
  </div>
</div>


---
layout: center
growX: 50
growY: 50
---

<h1 text-center>Rspack</h1>

<!--
今天要聊的主题是rspack，为什么要聊这个？

其实这个东西在发布的时候就看了一下，没有怎么关注。
在上个月，有一篇名为`作为前端开发者，你没有必要学 Rust`的博客，里面有提到一个案例，有人把50w+项目转换为rspack，性能得到了10x+提升。

所以我又重新关注了一下，所以有了这个主题。
-->

---
layout: center
growX: 50
growY: 50
---

# Rspack 是什么


---
layout: center
growX: 50
growY: 50
---

# Rust + Webpack

<!--
对于前端的同学，不会陌生， 今天还存在其他的同学，所以我们先简单聊一聊webpack。
-->

---

# Webpack

<img v-click src='/webpack.png' />

<!--
webpack是一个静态模块打包工具，将多个模块（js、css、image....），打包成静态资源，以便在浏览器中加载。
主要解决前端开发中模块化的问题，让我们更好组织代码，提供代码的维护和复用性。
-->

---
growX: 0
growY: 50
---

# Webpack

<div h-90 flex justify-start items-center text-8>

  <v-clicks>

  - Loader
  - Plugin
  </v-clicks>
</div>

<!--
webpack中有两个重要的概览，loader和plugin。

loader的主要作用是将非javascript模块转换为可使用的模块。比如vue-loader  babel-loader css-loader file-loader 等等。

plugin则是一系列钩子来扩展webpack的功能。
-->

---
growX: 0
growY: 50
---

# Rust

<div h-90 flex justify-start items-center text-8>
  <v-clicks>

  - 开发语言
  - 内存安全
  - 并发性能
  </v-clicks>
</div>

<!--
rust 是一门开发语言，媲美c++的性能，并且具有更好的内存安全和并发性能。
-->

---
growX: 0
growY: 50
---

# Trend


<div h-90 flex justify-start items-center text-8>
  <v-clicks>

  - SWC
  - Light CSS
  - DPrint
  - Oxlint
  - Rustify Prettier
  </v-clicks>
</div>

<!--
近年来，在前端领域出现了基础设施用rust重写的趋势。

比如：
- 用来转义的babel，出现了用rust写的替代品SWC。
- postcss的替代品lightcss。
- 格式化工具DPrint & rustify prettier。
- 类似eslint代码检测的oxlint.。

- and so on
-->

---
growX: 0
growY: 50
---

# Pack Tools
 
<div h-90 flex justify-start items-center text-8>
  <v-clicks>

  - Vite
  - Turbopack
  - Rspack
  </v-clicks>
</div>

<!--
当然打包工具也不例外

- 比如vite，目前虽然不是rust实现的，现在的方案是esbuild+rollup，在今年的viteconf大会上，vite团队将会rust化里面的一些内部实现。

- 还有turbopack，也是有rust实现的，但是这个是跟next框架深度绑定的，其他的框架基本上用不到它的能力。虽然自称为webpack的接任者，但是它其实没有去兼容webpack的生态的，所以大家对它没有保持太多的关注。

- 还有一个就是rspack，它也是用rust实现的。
-->

---
growX: 0
growY: 50
---

# 为什么重写打包器

<div h-90 flex justify-start items-center text-8>
  <v-clicks>

  - 性能瓶颈
  - 臃肿、并不好用及易用
  </v-clicks>
</div>

<!--
webpack 从出现以来，就作为前端的重要基石，发挥着不可磨灭的作用。

但是，也伴随着其他的问题。

- 最主要的性能瓶颈，随着功能的增长，build time 和 hmr time的时间也会变长。
- 现在的webpack已经经历了5个版本，比较臃肿，并不好用及易用
-->

---
growX: 0
growY: 50
---

# 为什么选择rspack


<div h-90 flex justify-start items-center text-8>
  <v-clicks>

  - 代码侵入比较小
  - 生态较为完善
  - 扩展门槛比较低
  </v-clicks>
</div>

<!--
为什么不选择vite呢，我也很喜欢vite，vite里面也有很多生态，其实最主要的原因还是迁移到vite的成本有些高。

迁移成本高这个是迁移的第一个问题
如果你能够控制迁移的成本，我还是比较推荐

迁移到 vite:

- 自定义的扩展需要迁移，在公司这个应该没有
- 代码的改动量比较大

迁移还需要考虑两个问题

- 生态是否完善
- 扩展的门槛

rspack兼容了主流的loader和plugin，所以生态较为完善，扩展的门槛比较低。



所以，目前来说，从webpack迁移到rspack，是一件性价比比较高的事情。
能够提升开发者体验，以及在build time获得提升。
-->

---
growX: 0
growY: 50
---

# Rspack vs Vite

<div h-90 flex justify-start items-center text-8>
  <v-clicks>

  - 开发阶段，vite快
  - 构建阶段，rspack快
  - vite的生态比rspack更为完善
  </v-clicks>
</div>

<!--
现在这两个都是不错的选择，他们目前各有优劣，个人来说，我还是喜欢vite一些。

- 开发阶段，vite还是比rspack更快，如果还是rspack会全量构建，vite是按需构建。
- 构建阶段，肯定是rspack更快，因为vite在构建阶段采用的ruollup来构建的。
- 生态方面，vite起步很早，发展也很快，vite肯定强于rspack。而且现在rspack还是有一些问题的



如果大家有需求，想要做迁迁移，这两个都可以，只是需要做权衡。

而且，以后rspack和vite，会共建一些生态，我相信未来从rspack迁移到vite，可能更加容易。
-->

---
layout: center
growX: 50
growY: 50
---

# Rspack vs Webpack

<!--
项目采用的是运营平台
-->

---

# Dev stage

<img v-click src="/dev.gif" />

<!--
- rspack  10s
- webapck 20s
-->

---

# Build stage


<img v-click src="/build.gif" />

<!--
- rspack 10s
- webapck 40s  主要需要构建两次，一次modern包，一次legacy包。
-->

---
layout: center
growX: 50
growY: 50
---

# 迁移实践

<!--
其实迁移过程其实就是不断解决报错的过程
-->

---
growX: 10
growY: 0
---

# Config file


<div h-90 flex justify-between items-center>
  <div v-click flex-1 text-10>
    rspack.config.{js,ts,mjs,cjs}
  </div>


  <div class='large-code' v-click flex-1>

  ```js
  module.exports = {
    context: __dirname,
    mode: isProd ? 'production': 'development',
    // ...options
  }
  ```
  </div>
</div>

<!--
首先，从配置文件开始
-->

---
growX: 10
growY: 0
---

# Entry


<div v-click class='large-code'>

  ```js
  entry: {
    app: './src/main.js',
  },
  ```
</div>

<!--
打包入口文件
-->

---
growX: 10
growY: 0
---
# Resolve

<div v-click class="large-code">


  ```js
  const path = require('path')
  const r = (...p) => path.resolve(__dirname, ...p)

  resolve: {
    alias: {
      '@': r('src'),
    },
    extensions: ['.vue', '.js', '.json'],
    fallback: {
      // os: require.resolve('os-browserify/browser'),
      // tty: require.resolve('tty-browserify'),
    },
  },

  ```
</div>


---
growX: 10
growY: 0
---

# Plugin


<div class="large-code">

  ```js
  const { VueLoaderPlugin } = require('vue-loader')

  plugins: [new VueLoaderPlugin()],
  ```
</div>

---
growX: 10
growY: 0
---

# Loader

<div flex justify-between items-start gap-4>

  <div v-click flex-1>

  ```js
  rules: [
    {
      test: /\.vue$/,
      use: [
        {
          loader: 'vue-loader',
          options: {
            experimentalInlineMatchResource: true,
          },
        },
      ],
    },
    {
      test: /\.scss$/,
      loader: 'sass-loader',
      type: 'css',
    },
    {
      test: /\.(png|jpg|gif)$/i,
      type: 'asset/resource',
    },
  ],
    
  ```
  </div>

  <div v-click flex-1>

  ```js
  rules: [
    {
      test: /\.xlsx$/,
      type: 'asset/resource',
      generator: {
        filename: 'file/[name].[hash:8][ext]',
      },
    },
    {
      test: /\.(svg)(\?.*)?$/,
      type: 'asset',
      generator: {
        filename: '[name].[hash:8][ext]',
      },
    },
  ],
  ```
  </div>
</div>


---
growX: 10
growY: 0
---

# Builtin


<div class="large-code" v-click>

```js
builtins: {
  presetEnv: {
    targets: ['> 1%', 'last 2 versions'],
  },
  define: {
    'process.env': {},
  },
  html: [{
      template: r('./public/index.html'),
    },
  ],
},
```
</div>


---
growX: 10
growY: 0
---

# Dev proxy


<div v-click class="large-code">

```js
devServer: {
  port: 8081,
  historyApiFallback: true,
  proxy: {
    '/api': {
      target: 'http://test.com/api/',
      changeOrigin: true,
      ws: false,
    },
  },
},
```
</div>


---
growX: 10
growY: 0
---

# Output

<div v-click class="large-code">

```js
output: {
  publicPath: '/',
  chunkFilename: 'js/[name].[hash].js',
  assetModuleFilename: 'asset/[name][ext]',
  cssChunkFilename: 'css/[name].[hash].css',
}
```
</div>


---
layout: center
growX: 50
growY: 50
---

# Tips

<!--
下面基本上就是对代码有一些侵入的地方。
-->

---
layout: center
---

# 留条退路


<p v-click text-center>升级到vue-cli5</p>

<!--
webpack和rspack共存，当意外出现的时候，至少有一个备用方案。
-->



---

# Export Webpack Config



<div class='large-code' h-90 flex justify-center items-center  v-click>

```sh
npx vue-cli-service inspect > output.js
```
</div>

<!--
vue-cli 提供了一个inspect命令能够导出基于vue.config.js的webpack配置，根据这份配置，你可以大致了解当前项目webpack的工作流程，可以做一个迁移参考。
-->

---

# 不支持 require.ensure



<div h-90 flex justify-between items-center gap-4>

  <div flex-1>

  ``` js
  require.ensure([], function () {
    require('element-ui/lib/theme-chalk/index.css')
    require('../assets/css/style.scss')
  )
  ```
  </div>

  <carbon-arrow-right/>

  <div flex-1>

  ```js
  import 'element-ui/lib/theme-chalk/index.css'
  import '../assets/css/style.scss'
  ```
  </div>

</div>

<!--
require.ensure这个api已经很老了，改成新的写法就可以了。
-->

---

# 依赖更新



<div h-90 flex justify-between items-center gap-4>

  <div flex-1>

  ``` json
  "@vue/composition-api": "^1.0.0-rc.8",
  //...
  ```
  </div>

  <carbon-arrow-right/>

  <div flex-1>

  ```json
  "@vue/composition-api": "^1.7.2",
  // ...
  ```
  </div>

</div>

<!--
有一些依赖报错的时候，尝试升级一下。
-->



---

# Issue


<div h-90 flex justify-center items-center text-10 v-click>

[https://github.com/web-infra-dev/rspack/issues](https://github.com/web-infra-dev/rspack/issues)
</div>

<!--
不可避免会遇到问题，但是我们遇到的问题，大概也是其他人遇到到，所以，可以去官方的issues上面看一看有没有提供解决方案。
-->

---
layout: center
---

# 结语

<!--
今天在这里，主要是给大家一点点概念，大家有兴趣的可以去看一看，尝试一下。

rspack发展的时间还是比较短，仍然有不足的地方，我相信后面会发展的越来越好。

- 更新比较频繁，项目很活跃，上周又发布了一个基于rspack的构建工具叫rsbuild，跟现在的vite有一定的竞争关系。
- 切入的点比较好，对webpack的兼容，能够得到基于webpack项目的青睐。

还有一点，我觉得挺重要的。
在分享的最开始，我还分享了一些趋势，我觉得大家可以去关注一下。提升自己的认知，不要掉队了。
-->

---
layout: center
class: text-center
growX: 55
growY: 50
---

# Thank you
Power by [slidev](https://sli.dev) [PPT](https://github.com/sujianqingfeng/talks)



---
layout: center
growX: 50
growY: 50
---



<div w-full h-full flex-center text-40 position-relative>
  <p c-gray opacity-5 tracking-10 uppercase>Review</p>
  <div position-absolute border p-2 rounded-2 border-gray  class="left-50% top-50% translate--50%">
    <img src="/score.png" h-70 w-70 rounded-2 />
  </div>
</div>
