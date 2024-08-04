---
title: Sider 
drawings:
  persist: false
transition: slide-left
layout: cover
---

<div flex items-center gap-4>
  <img class="h-14 inline-block" src="/logo.png"/> 

  <h1 class="!m-0" slide-text-primary font-500 flex items-end>
    Sider
    <p text-3 class="leading-none">/ Google Extension</p>
  </h1>
  
</div>



贺聂双 / <span text-3>AIS</span>   

<p class="fixed bottom-10 text-3 color-gray">
 14/8/2024
</p>




---

<h1 text-center>
  Get Faster, Smarter, and More Done
</h1>

<div h-100 flex class="justify-around">

  <div flex flex-col justify-center items-center>
   <div text-12 font-600>5M+</div>
   <div>Active Users</div>
  </div>

  <div flex flex-col justify-center items-center>
   <div text-12 font-600>40K+</div>
   <div>5-Star Ratings</div>
  </div>


  <div flex flex-col justify-center items-center>
    <div text-12 font-600>4.9</div>
    <div class="color-#F6C360" >
      <carbon-star-filled/>
      <carbon-star-filled/>
      <carbon-star-filled/>
      <carbon-star-filled/>
      <carbon-star-filled/>
    </div>
  </div>

</div>


---
transition:  fade
---

<h1   
  v-motion
  :initial="{ x: 50, y: 50 }"
  :enter="{ x: 0, y: 200 }"
  :click-1="{ x: 0, y: 0 }"
  slide-text-primary
  font-500
  text-center>
  Toolbox
</h1>


<div v-click="1" h-100 flex justify-around>
  <div flex flex-col justify-center items-center text-12>
    Chat
  </div>

  <div flex flex-col justify-center items-center text-12>
    Reading
  </div>

  <div flex flex-col justify-center items-center text-12>
    Writing
  </div>

  <div flex flex-col justify-center items-center text-12>
    Image
  </div>
</div>




---

<div   
  v-motion
  :initial="{ x: 35, y: 225 }"
  :enter="{ x: 0, y: 0, 'font-weight': 500 }"
  :click-1="{ x: 0, y: 0 }"
  :class="$nav.currentPage === 4 ? 'slide-text-primary':''"
  text-12
  inline-block
  >
  Chat
</div>


<div h-100 text-6 flex flex-col justify-center items-start>
  <div v-click="1">

  - 多模型 <span v-click="2" text-4>(gpt api 风格兼容)</span>
  </div>

  <div v-click="3">

  - GPTs
  </div>
</div>


---


<h1 slide-text-primary inline-block font-500>
  Reading
</h1>



<div h-100 text-6 flex flex-col justify-center items-start>
  <div v-click="1">

  - 总结 <span v-click="2" text-4>/网站、视频、文件</span>
  </div>

  <div v-click="3">

  - 翻译 <span v-click="4" text-4>/划词、对照翻译、TTS、PDF</span>
  </div>

  <div v-click="5">

  - OCR
  </div>
</div>



---


<h1 slide-text-primary inline-block font-500>
  Writing
</h1>



<div h-100 text-6 flex flex-col justify-center items-start>
  <div v-click="1">

  - 生成 
  </div>

  <div v-click="3">

  - 拼写、语法检测 
  </div>

  <div v-click="5">

  - 润色
  </div>
</div>



---


<h1 slide-text-primary inline-block font-500>
  Image
</h1>



<div h-100 text-6 flex flex-col justify-center items-start>
  <div v-click="1">

  - 图生文 
  </div>

  <div v-click="3">

  - 背景移除、替换
  </div>

  <div v-click="5">

  - 对象移除
  </div>


  <div v-click="5">

  - 文本移除
  </div>

  <div v-click="5">

  - 质量提升
  </div>
</div>




---

<div h-full flex flex-col items-center justify-center>
  <div class="slide-text-primary text-16 font-500">Thank your watching</div>
  <div w-full text-right mr-70 color-gray-300>
    <span>power by </span>
    <a href="https://github.com/sujianqingfeng/talks">
      sli.dev
    </a>
  </div>
</div>