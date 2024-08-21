---
highlighter: shiki
title: Eslint
info: |
  ## Eslint
drawings:
  persist: false
mdc: true
fonts:
  sans: Noto Sans Simplified Chinese
layout: cover
transition: fade
---

<h1 color-primary text-16 font-500>Eslint</h1>

Hens / <span text-3>AIS Development</span>   



---
transition: fade
---

<div h-full flex flex-col justify-center items-center>
  <div >
    <div v-click="1" text-8 class="bg-primary/30 inline-block rounded-2 px-3 color-primary"  
      v-motion
      :initial="{ y: 10 }"
      :enter="{ y: 0 }">
      Javascript
    </div>
    <div text-16 font-500 leading-16  
      v-motion
      color-primary
      :initial="{ y: -10 }"       
      :enter="{ y: -30 }"
      :click-1="{ y: 0 }"
      >
      代码静态检查工具
    </div>
  </div>
</div>




---
clicks: 3
---



<div h-full w-full flex justify-center items-center>
  <div class="rounded-2 color-primary text-30 font-500 text-center"  
    v-motion
    :initial="{ x: 140 }"
    :enter="{ x: 150 }"
    :click-1="{ x: -20 }"
    >
    ？
  </div>

  <div leading-14>
    <div v-click="2" text-12 
      v-motion 
      :initial="{ y: 20 }" 
      :enter="{ y: 30 }"
      :click-3="{ y: 0 }"
      >
      潜在问题检测
    </div>
    <div v-click="3" text-12
      v-motion 
      :initial="{ y: -10 }" 
      :enter="{ y: 0 }"
    >
    代码一致性？
    </div>
  </div>
</div>




---
clicks: 1
---


<div h-full w-full relative>

  <div class="absolute top-10 w-full flex justify-center items-center gap-10">
    <Range text="Eslint" :size="$clicks>=1 ? 400: 100" bg="250, 59%, 48%" />
  </div>

  <div class="absolute bottom-40 w-full flex justify-center items-center gap-10" >
    <Range text="Biome" :size="100" bg="213, 94%, 68%"/>
    <Range text="Oxlint" :size="100" bg="177, 73%, 72%"/>
    <Range text="Other" :size="100" bg="342, 61%, 67%"/>
  </div>
</div>



---
class: text-center
layout: cover
---


<h1 color-primary text-16 font-500>Usage of ESLint</h1>


---


<div h-full w-full flex flex-col justify-center items-center relative>
  <div color-primary text-16 font-500
    v-motion 
    :initial="{ y: 20 }" 
    :enter="{ y: 40 }"
    :click-1="{ y: 0 }"
    >
    11 Years
  </div>
  <div 
    v-click="1" color-red text-16 font-500
    v-motion 
    :initial="{ y: -20 }" 
    :enter="{ y: 0 }"
    >
    v9.9.0
  </div>

  <div v-click="2" h-1 w-full absolute top-60 rounded-sm class="bg-blueGray">
    <div absolute right--1>
      <div absolute right-0 bottom-0 w-4 h-1 bg-blueGray rounded-sm rotate-45></div>
      <div absolute right-0 top-1 w-4 h-1 bg-blueGray rounded-sm rotate--45></div>
    </div>
  </div>
</div>




---

<h1 color-primary>变化</h1>



<div h-100 flex flex-col justify-center items-start leading-20>
  <div v-click="1" text-16>flat config</div>
  <div v-click="2" text-16>remove formatting rules</div>
</div>





--- 
layout: cover
class: text-center
---


<h1>ESLint v8.x end-of-life</h1>
<h1 v-click="1" color-red font-500>2024-10-05</h1>



---
layout: cover
class: text-center
---

<h1 color-primary text-16 font-500>Usage of flat config</h1>




---


<h1>eslint.config.{m|c}js</h1>


<div v-click="1">


```js 
export default [
  {
    rules: {
      semi: "error",
    }
  }
]
```
</div>



<v-clicks class="mt-10" at="+2" depth="2">

- Array
  - Configuration Object
</v-clicks>


---


<h1 color-primary>Rules <span text-6 color-black>/ configuration object</span> </h1>



<div v-click="1">

```js
export default [
  {
    rules: {
      semi: ["error", "never"]
      // semi: ["1", "always"]
    }
  }
]
```
</div>


<v-clicks class="mt-5" at="+2" depth="2">

- 第一个参数
  - "off" or 0 
  - "warn" or 1 
  - "error" or 2 

- 剩余参数
  - rule的options
</v-clicks>





---


<h1 color-primary>Plugins <span text-6 color-black>/ configuration object</span> </h1>




<div v-click="1">


```js
import example from "eslint-plugin-example"

export default [
  {
    plugins: {
      example
    },
    rules: {
      ...example.configs.recommended.rules,
      "example/rule1": "warn"
    },
    processor: "example/xxx"
    // processor: "eslint-plugin-example/xxx"
  }
]
```
</div>



<v-clicks at="+2" mt-10>

- 自定义规则
- 自定义配置
- 自定义Processor

</v-clicks>



---

<h1 color-primary>Plugins <span text-6 color-black>/ configuration object</span> </h1>


<div v-click="1">


```js
// eslint-plugin-markdown 

const plugin = {
  meta: {
    name: "@eslint/markdown",
    version: "5.1.0"
  },
  processors: {
    markdown: processor
  },
  configs: {
    "recommended": {
      ...
    }
  }
}

```
</div>



---

<h1 color-primary>Processor <span text-6 color-black>/ configuration object</span> </h1>



<div v-click="1">

```js
import markdown from "eslint-plugin-markdown"

export default [
  {
    files: ["**/*.md"],
    plugins: {
      markdown
    },
    processor: "markdown/markdown"
  }
]
```
</div>


<v-clicks at="+2" mt-10>

- 处理除js以外的文件（.vue, .md, .json, ...）

</v-clicks>



---

<h1 color-primary>Language Options <span text-6 color-black>/ configuration object</span> </h1>



<div flex gap-10>


  <div flex-auto v-click="1">

  ```js
  import globals from "globals"

  export default [
    {
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        globals: {
          Vue: "readonly",
          ...globals.browser
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      }
    }
  ]
  ```
  </div>


  <v-clicks at="+2" depth="2">

  - ecmaVersion  
  - sourceType
    - module
    - commonjs
    - script
  - globals
  - parserOptions(espree)
    - ecmaFeatures
  </v-clicks>

</div>



---

<h1 color-primary>Parser <span text-6 color-black>/ configuration object</span> </h1>


<div flex gap-10>


  <div flex-auto v-click="1">

  ```js
  import babelParser from "@babel/eslint-parser"

  export default [
    {
      languageOptions: {
        parser: babelParser,
        parserOptions: {
          requireConfigFile: false,
          babelOptions: {
            babelrc: false,
            configFile: false,
            presets: ["@babel/preset-env"]
          }
        }
      }
    }
  ]

  ```
  </div>

  <div>

  <v-clicks at="+2" depth="2">

  - 转变为ast
    - @babel/eslint-parser
    - @typescript-eslint/parser
    - vue-eslint-parser
    - ...
  
  </v-clicks>
  </div>
</div>



---

<h1 color-primary>Files & Ignores <span text-6 color-black>/ configuration object</span> </h1>



<div v-click="1">

```js
export default [
  {
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js", "!**/eslint.config.js"],
  }
]
```
</div>



<v-clicks mt-10 at="+2" depth="2">

- glob patterns ([online](https://globster.xyz/))
- ignores
  - default: **/node_modules/, .git/ 
  - .gitignore(@eslint/compat)

</v-clicks>


---

<h1 color-primary>Combine Configs</h1>



<div v-click="1">

```js

export default [
  {
    rules: {
      "no-unused-vars": "error"
    }
  },
  {
    rules: {
      "no-unused-vars": "warn"
    }
  }
]
```
</div>

<v-clicks mt-10 at="+2" depth="2">

- 覆盖
- 合并

</v-clicks>





---
layout: cover
class: text-center
---

<h1 color-primary text-16 font-500>Example: Vue</h1>




---
layout: cover
class: text-center
---

<div text-12>

  ```bash
  pnpm create @eslint/config@latest
  ```
</div>



<div v-click="1" absolute top-10 right-10 >
  <carbon-recommend color-green text-20/>
</div>


<style scoped>
  .slidev-code{
    --at-apply: bg-transparent;
    --prism-font-size: 2rem;
  }

</style>



---

<h1 color-primary>Recommended</h1>




```js
import pluginJs from "@eslint/js"
import globals from "globals"

export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
]
```




---

<h1 color-primary>Vue</h1>


````md magic-move

```js
import pluginJs from "@eslint/js"
import globals from "globals"
import vue from "eslint-plugin-vue"
import vueEslintParse from 'vue-eslint-parser'

export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    name: 'vue:base:setup-for-vue',
    files: ['*.vue', '**/*.vue'],
    plugins: {
      vue,
    },
    languageOptions: {
      parser: vueEslintParse,
      sourceType: 'module',
      globals: globals.browser
    },
    rules: {
      'vue/require-v-for-key': 'error',
    },
    processor: 'vue/vue'
  }
]
```

```js
import globals from "globals"
import pluginJs from "@eslint/js"
import vue from "eslint-plugin-vue"

export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...vue.configs["flat/recommended"],
]
```

````


---

<h1 color-primary>Prettier</h1>




<div v-click="1">


```js
import globals from "globals"
import pluginJs from "@eslint/js"
import vue from "eslint-plugin-vue"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...vue.configs["flat/essential"],
  eslintPluginPrettierRecommended,
]

```

</div>



<v-clicks mt-10 at="+2" depth="2">

- pnpm add -D eslint-plugin-prettier eslint-config-prettier prettier
- 冲突

</v-clicks>




---


<h1 color-primary>Editor(vscode)</h1>



```json
// .vscode/setting.json

{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "vue",
    "json",
    "jsonc",
    "json5",
    "yaml"
  ],
}
```



---

<h1 color-primary>eslint-config-wxb <a src="http://gitlab.wangxiaobao.com/npm/eslint-config" target="_black">link</a> </h1>


<v-clicks depth="2">

- 自动检测框架
- 可自定义配置
- 多配置
  - javascript
  - typescript
  - vue
  - react
  - json
  - yaml
  - sort
  - prettier

</v-clicks>




<div mt-5 v-click>


```bash
npx --registry http://nexus3.wangxiaobao.com/repository/wxbnpm/ eslint-config-wxb@latest 
```
</div>







---

<div h-full flex flex-col items-center justify-center>
  <div class="slide-text-primary text-20 color-primary">Thank your watching</div>
  <div w-full text-right mr-45 color-gray-300>
    <span>power by </span>
    <a href="https://github.com/sujianqingfeng/talks">
      sli.dev
    </a>
  </div>
</div>