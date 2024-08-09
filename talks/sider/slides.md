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
  :class="$nav.currentPage >= $page ? 'slide-text-primary':''"
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

  <div v-click="4">

  - Vision
  </div>
</div>


<div absolute top-0 right-0 z-1>
  <img v-if="$clicks===2" w-98 src="/chat-1.gif"/>
  <img v-if="$clicks===4" w-120 src="/chat-vision.gif"/>
</div>


---
clicks: 9
---


<h1 slide-text-primary inline-block font-500>
  Reading
</h1>



<div h-100 text-6 flex flex-col justify-center items-start>
  <div v-click="1">

  - 总结 <span v-click="2" text-4>/网站、视频、文件</span>
  </div>

  <div v-click="5">

  - 翻译 <span v-click="6" text-4>/划词、对照翻译、TTS、PDF</span>
  </div>

  <div v-click="8">

  - OCR
  </div>
</div>



<div absolute top-0 right-0 z-1>
  <img v-if="$clicks===2" w-105 src="/summary-page.gif"/>
  <img v-if="$clicks===3" w-120 src="/summary-video-1.gif"/>
  <img v-if="$clicks===4" w-120 src="/summary-video-2.gif"/>
  <video v-if="$clicks===6" w-120 src="/translate-p.mp4" autoPlay/>
  <img v-if="$clicks===7" w-130 src="/translate-page.gif" />
  <img v-if="$clicks===9" w-130 src="/ocr.gif" />
</div>




---


<h1 slide-text-primary inline-block font-500>
  Writing
</h1>



<div h-100 text-6 flex flex-col justify-center items-start>
  <div v-click="1">

  - 生成 
  </div>

  <div v-click="2">

  - 拼写、语法检测 
  </div>

  <div v-click="3">

  - 对内容处理（润色、翻译等）
  </div>
</div>

<div absolute top-0 right-0 z-1>
  <img v-if="$clicks===1" w-130 src="/text-generate.gif"/>
  <img v-if="$clicks===3" w-130 src="/text-replace.gif"/>
</div>




---
clicks: 7
---


<h1 slide-text-primary inline-block font-500>
  Image
</h1>



<div h-100 text-6 flex flex-col justify-center items-start>
  <div v-click="1">

  - 文生图
  </div>

  <div v-click="2">

  - 背景移除、替换
  </div>

  <div v-click="4">

  - 对象移除
  </div>


  <div v-click="5">

  - 文本移除
  </div>

  <div v-click="6">

  - 质量提升
  </div>
</div>

<div absolute top-40 right-20 z-1>
  <video v-if="$clicks===2" w-120 src="/remove-bg.mp4" autoPlay loop/>
  <video v-if="$clicks===3" w-120 src="/replace-bg.mp4" autoPlay loop/>
  <video v-if="$clicks===4" w-120 src="/remove-brushed-area.mp4" autoPlay loop/>
  <video v-if="$clicks===5" w-120 src="/remove-text.mp4" autoPlay loop/>
  <video v-if="$clicks===6" w-120 src="/upscale.mp4" autoPlay loop/>

</div>

<div v-click="7" slide-text-primary absolute top-60 right-40 font-500 text-20>
  Stability.AI
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