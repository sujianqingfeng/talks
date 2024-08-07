---
title: Sider 
drawings:
  persist: false
transition: slide-left
layout: cover
---


<div flex items-center justify-center>
  <img class="h-30 inline-block" src="/logo.png"/> 
</div>


---
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
 13/8/2024
</p>




---
transition:  fade
---

<h1 
  v-motion
  :initial="{ x: 0, y: 190 }"
  :enter="{ x: 0, y: 200 }"
  :click-1="{ x: 0, y: 0 }"
   slide-text-primary text-center font-500 text-12>
  Get Faster, Smarter, and More Done
</h1>

<div h-100 flex class="justify-around">

  <div v-click="1" flex flex-col justify-center items-center>
   <div text-12 font-600>5M+</div>
   <div>Active Users</div>
  </div>

  <div v-click="2" flex flex-col justify-center items-center>
   <div text-12 font-600>40K+</div>
   <div>5-Star Ratings</div>
  </div>


  <div v-click="3" flex flex-col justify-center items-center>
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
  :initial="{ x: 0, y: 190 }"
  :enter="{ x: 0, y: 200 }"
  :click-1="{ x: 0, y: 0 }"
  text-12
  font-500
  text-center>
  <span slide-text-primary>Toolbox</span>
</h1>


<div h-100 flex justify-around>
  <div v-click="1"  flex flex-col justify-center items-center text-12>
    Chat
  </div>

  <div v-click="2"  flex flex-col justify-center items-center text-12>
    Reading
  </div>

  <div v-click="3"  flex flex-col justify-center items-center text-12>
    Writing
  </div>

  <div v-click="4"  flex flex-col justify-center items-center text-12>
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

  <div v-click="2">

  - 背景移除、替换
  </div>

  <div v-click="3">

  - 对象移除
  </div>


  <div v-click="4">

  - 文本移除
  </div>

  <div v-click="5">

  - 质量提升
  </div>
</div>


--- 
transition:  fade
---

<div h-full flex flex-col items-center justify-center>
  <div class="slide-text-primary text-16 font-500">为什么是插件？</div>
</div>


--- 
transition:  fade
---

<div text-6 h-full flex flex-col items-start justify-center>

<div>

  <div>

  - 不离开上下文
  </div>


  <div v-click="1">

  - 做到极致 
  </div>

  <div v-click="2">

  - 跨平台
  </div>

</div>

</div>

---
clicks: 4
---

<div flex justify-center items-center>
  <h1 slide-text-primary>价格</h1>
</div>


<div h-100 flex items-center justify-around>
 <div v-click="1">
  <p text-10 font-500>Basic</p>
  <p text-6 font-500> 
    <span :class="{'line-through': $clicks=== 4}">¥70</span> <span slide-text-primary v-if="$clicks===4">¥49.9</span> /mo
  </p>
  <p><strong>3,600</strong> Basic Credits/mo</p>
  <p><strong>100</strong> Advanced Credits/mo</p>
 </div>


 <div v-click="3">
  <p text-10 font-500>Unlimited</p>
  <p text-6 font-500> 
    <span :class="{'line-through': $clicks=== 4}">¥210</span> <span slide-text-primary v-if="$clicks===4">¥83.3</span> /mo
  </p>
  <p><strong slide-text-primary>Unlimited </strong>Basic Credits/mo</p>
  <p><strong slide-text-primary>Unlimited </strong>Advanced Credits/mo</p>
 </div>

 <div v-click="2">
  <p text-10 font-500>Pro</p>
  <p text-6 font-500> 
    <span :class="{'line-through': $clicks=== 4}">¥140</span> <span slide-text-primary v-if="$clicks===4">¥83.3</span> /mo
  </p>
  <p><strong>12,000</strong> Basic Credits/mo</p>
  <p><strong>300</strong> Advanced Credits/mo</p>
 </div>
</div>


---

<div h-full flex flex-col items-center justify-center>
  <div v-motion
    :initial="{ x: 0 }"
    :enter="{ x: 0, y: 20 }"
    :click-1="{ x: 0, y: -30 }"
    :leave="{ x: 80 }" 
    class="slide-text-primary text-16 font-500">
    Sider支持自定义模型
  </div>

  <div  flex whitespace-pre>
   <p v-click="1" text-10>4o-mini</p>
   <p v-click="2" text-10> / deepseek</p>
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