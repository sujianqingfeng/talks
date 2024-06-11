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
transition: fade
clicks: 3
---

<div v-click="1" h-full flex items-center justify-center>
  <Audio src="/audio.wav" tag='ChatTTS' text='四川美食确实以辣闻名，但也有不辣的选择。比如甜水面、赖汤圆、蛋烘糕、叶儿粑等，这些小吃口味温和，甜而不腻，也很受欢迎。' :start="$clicks ===2" />
</div>




---

<div h-full flex flex-col items-center justify-center>
  <div class="slide-text-primary text-20 color-primary font-bold">Thank your watching</div>
  <div w-full text-right mr-30 color-gray-300>
    <span>power by </span>
    <a href="https://github.com/sujianqingfeng/talks">
      sli.dev
    </a>
  </div>
</div>