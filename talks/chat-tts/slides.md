---
title: Chat TTS 
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: Noto Sans Simplified Chinese
layout: cover
---

<h1 class="flex items-center gap-4 color-primary"><img class="h-14 inline-block" src="/logo.svg"/> Chat TTS</h1>


贺聂双 / <span text-3>旺工牌</span>   

<p class="fixed bottom-10 text-3 color-gray">
 29/4/2024
</p>


---


<div h-full flex items-center justify-center>
  <div class="slide-text-primary text-20"><strong class="inline-block color-primary">T</strong>ext-<strong class="inline-block color-primary">t</strong>o-<strong class="inline-block color-primary">S</strong>peech</div>
</div>


---

# 技术原理

<div class="flex justify-around items-center">
  <div v-click="1" shadow rounded-2 text-6 h-35 w-35 leading-35 text-center>文本分析</div>
  <div v-click="2" class="relative">
    <div w-40 h-2px relative class="bg-#013C5E">
      <i class="i-material-symbols:arrow-forward-ios text-5 absolute right--2 top--2.5 color-primary" />
      <div absolute>
        <p class="text-3 !m-0">词法分析、语法分析、音素</p>
      </div>
    </div>
  </div>
  <div v-click="2" shadow rounded-2 text-6 h-35 w-35 leading-35 text-center>语音合成</div>
</div>



<div class="flex flex-col justify-center items-end mr-35 my-5">
  <div v-click="3" class="flex items-center gap-4">
    <div h-20 w-2px relative class="bg-#013C5E">
      <i class="i-material-symbols:arrow-forward-ios text-5 absolute right--2.4 bottom--2 color-primary rotate-90" />
      <div absolute left--20 text-right>
        <p class="text-3 !m-0">音韵学规则</p>
        <p class="text-3 !m-0">语调</p>
        <p class="text-3 !m-0">停顿</p>
      </div>
    </div>
  </div>
</div>


<div flex justify-around items-center class="flex-row-reverse">

  <div v-click="3" shadow rounded-2 text-6 h-35 w-35 leading-35 text-center>个性化调整</div>

  <div v-click="4" class="relative">
    <div w-40 h-2px relative class="bg-#013C5E">
      <i class="i-material-symbols:arrow-forward-ios text-5 absolute left--2 top--2.5 color-primary rotate-180" />
      <div absolute right-0>
        <p class="text-3 !m-0">语音风格、语速、音色</p>
      </div>
    </div>
  </div>
  
  <div v-click="4" shadow rounded-2 text-6 h-35 w-35 leading-35 text-center>输出语音</div>
</div>

  

---

# 应用场景


<div mt-30 text-6>

  <v-clicks>

  - 辅助技术：为视障人士提供阅读帮助，使网络内容更加无障碍。
  - 客户服务：在智能客服系统中的应用，提升用户体验。
  - 教育娱乐：有声读物、语言学习软件，使学习更有趣味性。
  - 智能家居：智能音箱、车载导航等，通过语音交互实现家居控制和导航。
  </v-clicks>
</div>




--- 

# 特点

- 多语言
- 大规模数据训练
- 对话任务兼容
- 开源
- 控制和安全性
- 易用




---

# 多语言 




ChatTTS is a text-to-speech model designed for dialogue applications.


<div v-click="1" h-full flex items-center justify-center>
  <Audio src="/audio.wav" tag='ChatTTS' text='ChatTTS是一款强大的对话式文本转语音的模型.' :start="$clicks ===2" />
</div>


---

# 语言切换





---
transition: fade
clicks: 3
---

<div v-click="1" h-full flex items-center justify-center>
  <Audio src="/audio.wav" tag='ChatTTS' text='四川美食确实以辣闻名，但也有不辣的选择。比如甜水面、赖汤圆、蛋烘糕、叶儿粑等，这些小吃口味温和，甜而不腻，也很受欢迎。' :start="$clicks ===2" />
</div>


---

<div>
  <img h-80 m-auto src="/url.png"/>
  <p text-12 text-center>chattts.com</p>
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