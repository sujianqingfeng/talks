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


<div h-full w-full flex justify-center items-center>
  <Range text="Eslint" :size="100" bg="250, 59%, 48%"/>
  <Range text="Biome" :size="100" bg="213, 94%, 68%"/>
  <Range text="Oxlint" :size="100" bg="177, 73%, 72%"/>
  <Range text="Other" :size="100" bg="342, 61%, 67%"/>
  
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
