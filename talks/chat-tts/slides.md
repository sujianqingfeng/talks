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


贺聂双 / <span text-3>AIS</span>   

<p class="fixed bottom-10 text-3 color-gray">
 26/6/2024
</p>


---
transition: fade
---

<div h-full flex items-center justify-center color-primary>
  <div class="slide-text-primary text-20"><strong class="inline-block color-red">T</strong>ext-<strong class="inline-block color-red">t</strong>o-<strong class="inline-block color-red">S</strong>peech</div>
</div>


---
transition: fade
---

<div h-full flex items-center justify-center color-primary text-20 >
  <p relative v-motion :initial="{ x: 60 }" :enter="{ x: 60 }" :click-2="{x: 0}">
    文本转语音
    <div v-click="1" class="chat absolute  text-8 left-0">
      用于对话场景的
    </div>
  </p>

  <div v-click="2" v-motion :initial="{ x: -30 }" :enter="{ x: 0 }">模型</div>
</div>


<style scoped>

.chat.slidev-vclick-target {
  --at-apply: top--15 transition-all duration-500;
}

.chat.slidev-vclick-hidden {
  --at-apply: top--10;
}
</style>




---
clicks: 3
---



<div v-click="1" h-full flex items-center justify-center>
  <Audio src="/audio.wav" tag='ChatTTS' text='这个模型是专门为对话场景设计的,目前只支持英文跟中文。
最大的模型是使用了十万小时的一个中英文数据训练的。
然后在huggingface上开源了一个四万小时的未监督微调的模型.' :start="$clicks === 2" />
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

# 不足

- 音质
- 音色
- 不稳定





---


# 安全


- 低音质
- fff 
- 应用上面


<div class="blur-sm">
 <img src="/curve.svg" h-20/>
</div>



---

# 总结


语音合成作为生成式AI的重要组成部分，不仅需关注其技术应用和发展，更需要在伦理和技术实现上找到平衡点。

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


---

refs

https://www.bilibili.com/video/BV1hi421S7Qd