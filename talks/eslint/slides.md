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

<h1 v-click="1" font-500>Vue+js example</h1>


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


<div v-click="2">Array</div>
<div v-click="3">Configuration Object</div>



---


<h1>Rules/ <span>configuration object</span> </h1>




"off" or 0 - turn the rule off
"warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
"error" or 2 - turn the rule on as an error (exit code is 1 when triggered)



```
export default [
    {
        rules: {
            semi: ["error", "never"]
        }
    },
    {
        rules: {
            semi: ["warn", "always"]
        }
    }
];
```



---

recommended



```
import pluginJs from "@eslint/js";

pluginJs.configs.recommended,
```



---


```
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
      // 'vue/require-v-for-key': 'error',
    },
    processor: 'vue/vue'
  }

```


plugins  rules 对应



---

editor



```
{
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

<div h-full flex flex-col items-center justify-center>
  <div class="slide-text-primary text-20 color-primary">Thank your watching</div>
  <div w-full text-right mr-45 color-gray-300>
    <span>power by </span>
    <a href="https://github.com/sujianqingfeng/talks">
      sli.dev
    </a>
  </div>
</div>