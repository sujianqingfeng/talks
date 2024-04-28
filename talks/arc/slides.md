---
title: Arc Browser
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: Noto Sans Simplified Chinese
layout: cover
---

<h1 slide-text-primary><logos-arc/> Arc 浏览器</h1>


贺聂双 / <span text-3>旺工牌</span>   

<p class="fixed bottom-10 text-3 color-gray">
 29/4/2024
</p>



---
transition: fade
---

<div h-full flex items-center justify-center>
  <div class="slide-text-primary text-16">
    一个<span v-mark="{ color: '#FF536A'}">现代化</span>的浏览器
  </div>
</div>


---


<div h-full flex items-center justify-center>
  <div class="slide-text-primary text-16">Features</div>
</div>



---

<div flex h-full>
  <div w-80 py-10 px-14 mr-10>
    <div class="slide-text-primary text-8 font-bold">Design</div>
    <div h-90 flex flex-col justify-center >
      <p v-click="1" text-6>UI</p>
      <p v-click="2" text-6>布局合理</p>
      <p v-click="3" text-6>操作收束</p>
    </div>
  </div>
  <div flex-1 h-full class="slide-right-to-left">
    <img v-click="1" w-full h-full object-contain src='/layout.gif' />
  </div>
</div>


<style scoped>
.slidev-layout {
  @apply p-0;
}
</style>


---

<div flex h-full>
  <div w-80 py-10 px-14 mr-10>
    <div class="text-8 font-bold slide-text-primary">传统标签设计</div>
    <div h-90 flex flex-col justify-center >
      <p v-click="2" text-6>标签</p>
      <p v-click="3" text-6>收藏</p>
    </div>
  </div>
  <div flex-1 h-full class="slide-right-to-left">
    <img v-click="1" h-full object-contain src='/label/old-1.png' />
  </div>
</div>

<Arrow v-click="2" x1="650" y1="100" x2="550" y2="140" color="#FF536A" />
<Arrow v-click="3" x1="800" y1="100" x2="550" y2="200" color="#FF536A" />


<style scoped>
.slidev-layout {
  @apply p-0;
}
</style>



---

<div flex h-full>
  <div w-80 py-10 px-14 mr-10>
    <div class="slide-text-primary text-8 font-bold">Label</div>
    <div h-100 flex flex-col justify-center >
      <p v-click="1" text-6>设计合二为一</p>
      <p v-click="2" text-6>位置区分功能</p>
      <p v-click="3" text-6 ml-4>今日标签<span text-4>(12h)</span> </p>
      <p v-click="4" text-6 ml-4>固定标签</p>
      <p v-click="5" text-6 ml-4>收藏区</p>
    </div>
  </div>
  <div flex-1 h-full class="slide-right-to-left">
    <img v-click="1" w-full src='/label/label.gif' />
  </div>
</div>


<style scoped>
.slidev-layout {
  @apply p-0;
}
</style>

---

<div flex h-full>
  <div w-80 py-10 px-14 mr-10>
    <div class="text-8 font-bold slide-text-primary">场景</div>
    <div h-90 flex flex-col justify-center >
      <p v-click="2" text-6>标签栏塞满</p>
      <p v-click="3" text-6>杂乱、不便查找</p>
    </div>
  </div>
  <div flex-1 h-full class="slide-right-to-left">
    <img v-click="1" w-full h-full object-contain src='/space/old-1.png' />
  </div>
</div>


<style>
.slidev-layout {
  @apply p-0;
}
</style>


---

<div flex h-full>
  <div w-80 py-10 px-14 mr-10>
    <div class="slide-text-primary text-8 font-bold">Space</div>
    <div h-90 flex flex-col justify-center >
      <p v-click="1" text-6>分类</p>
      <p v-click="2" text-6>视觉区分</p>
    </div>
  </div>
  <div flex-1 h-full class="slide-right-to-left">
    <img v-click="1" w-full h-full object-contain src='/space/space.gif' />
  </div>
</div>


<style scoped>
.slidev-layout {
  @apply p-0;
}
</style>

---


<div flex h-full>
  <div w-80 py-10 px-14 mr-10>
    <div class="slide-text-primary text-8 font-bold">Profile</div>
    <div h-90 flex flex-col justify-center >
      <p v-click="1" text-6>环境隔离</p>
      <p v-click="2" text-6>全新的浏览器</p>
    </div>
  </div>
  <div flex-1 h-full class="slide-right-to-left">
    <img v-click="1" w-full h-full object-contain src='/profile.gif' />
  </div>
</div>


<style scoped>
.slidev-layout {
  @apply p-0;
}
</style>

---

<div h-full flex items-center justify-center>
  <div class="slide-text-primary text-16 ">
    Split
  </div>
</div>



---

<img class="h-full" src="/split.gif"/>

<style>
.slidev-layout {
  @apply p-0;
}
</style>


---


<img class="h-full" src="/split2.gif"/>

<style>
.slidev-layout {
  @apply p-0;
}
</style>

---

<div h-full>
  <div class="slide-text-primary text-8 font-bold">Preview</div>
  <div  class="slide-right-to-left mt-2">
    <img v-click="1" w-full h-full object-contain src='/preview.gif' />
  </div>
</div>



---



<div h-full>
  <div class="slide-text-primary text-8 font-bold">Little <span text-4>随用随走</span></div>
  <div  class="slide-right-to-left mt-2">
    <img v-click="1" w-full h-full object-contain src='/little.gif' />
  </div>
</div>


---



<div flex h-full>
  <div w-90 py-10 px-14 mr-10>
    <div class="slide-text-primary text-8 font-bold">Command panel</div>
    <div h-90 flex flex-col justify-center >
      <p v-click="1" text-6>历史记录</p>
      <p v-click="2" text-6>命令</p>
    </div>
  </div>
  <div flex-1 h-full class="slide-right-to-left">
    <img v-click="1" w-full h-full object-cover src='/command.gif' />
  </div>
</div>


<style scoped>
.slidev-layout {
  @apply p-0;
}
</style>



---



<div flex h-full>
  <div w-90 py-10 px-14 mr-10>
    <div class="slide-text-primary text-8 font-bold">Boost</div>
    <div h-90 flex flex-col justify-center >
      <p v-click="1" text-6>颜色、背景、文本大小</p>
      <p v-click="2" text-6>Zap</p>
      <p v-click="3" text-6>Code</p>
      <p v-click="4" text-6>分享</p>
    </div>
  </div>
  <div flex-1 h-full class="slide-right-to-left">
    <img v-click="1" w-full h-full object-cover src='/boost.gif' />
  </div>
</div>


<style scoped>
.slidev-layout {
  @apply p-0;
}
</style>



---


<div flex h-full>
  <div w-90 py-10 px-14 mr-10>
    <div class="slide-text-primary text-8 font-bold">Built-in AI</div>
    <div h-90 flex flex-col justify-center >
      <p v-click="1" text-6>重命名Title</p>
      <p v-click="2" text-6>重命名File</p>
      <p v-click="3" text-6>总结Link</p>
    </div>
  </div>
  <div flex-1 h-full class="slide-right-to-left">
    <img v-if="$clicks === 1" w-full h-full object-cover src='/ai/rename.gif' />
    <img v-if="$clicks === 2" w-full h-full object-contain src='/ai/rename-file.gif' />
    <img v-if="$clicks === 3" w-full h-full object-cover src='/ai/summary.gif' />
  </div>
</div>


<style scoped>
.slidev-layout {
  @apply p-0;
}
</style>


---


<div flex h-full>
  <div w-100 py-10 px-14 mr-10>
    <div class="slide-text-primary text-8 font-bold">Other Features</div>
    <div h-90 flex flex-col justify-center >
      <p v-click="1" text-6 font-bold>自定义快捷键</p>
      <p v-click="2" text-6>播放提示</p>
      <p v-click="3" text-6>笔记</p>
      <p v-click="4" text-6>画板</p>
      <p v-click="5" text-8>. . .</p>
    </div>
  </div>
  <div flex-1 h-full class="slide-right-to-left">
    <img v-if="$clicks === 2" w-full h-full object-contain src='/play.png' />
  </div>
</div>


<style scoped>
.slidev-layout {
  @apply p-0;
}
</style>





---

<div h-full flex flex-col items-center justify-center>
  <div class="slide-text-primary text-16">Thank your watching</div>
  <div w-full text-right mr-80 color-gray-300>
    <span>power by </span>
    <a href="https://github.com/sujianqingfeng/talks">
      sli.dev
    </a>
  </div>
</div>