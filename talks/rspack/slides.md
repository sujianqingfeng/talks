---
layout: cover
highlighter: shiki
colorSchema: dark
transition: fade-out
title: Rspack
mdc: true
---

<h1 text-center>Rspack</h1>



---
layout: center
growX: 50
growY: 50
---

# Rspack 是什么

<div text-center text-4 v-click>
  rust写的webpack
</div>


---
---
# Webpack

<img v-click src='/webpack.png' />


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
  </v-clicks>
</div>


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


---
growX: 0
growY: 50
---

# 为什么选择rspack


<div h-90 flex justify-start items-center text-8>
  <v-clicks>

  - 代码修改量小
  - 生态较为完善
  - 扩展门槛比较低
  </v-clicks>
</div>


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


---
layout: center
growX: 50
growY: 50
---

# Rspack vs Webpack


---
---

# Dev stage

<img v-click src="/dev.gif" />


---
---

# Build stage


<img v-click src="/build.gif" />


---
layout: center
growX: 50
growY: 50
---

# 迁移实战


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


---
layout: center
---

# 留条退路


<p v-click text-center>升级到vue-cli5</p>





---
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



---
---

# 依赖更新



<div h-90 flex justify-between items-center gap-4>

  <div flex-1>

  ``` json
  "@vue/composition-api": "^1.0.0-rc.8",
  ```
  </div>

  <carbon-arrow-right/>

  <div flex-1>

  ```json
  "@vue/composition-api": "^1.7.2",
  ```
  </div>

</div>



---
layout: center
---

# 结语 


---
layout: center
class: text-center
growX: 55
growY: 50
---

# Thank you
Power by [slidev](https://sli.dev) [PPT](https://github.com/sujianqingfeng/talks)