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
 25/6/2024
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
clicks: 6
---


<div h-full flex flex-col items-center justify-center gap-6>
  <Audio v-click="1" src="/introduce.wav" tag='ChatTTS' text='这个模型是专门为对话场景设计的,目前只支持英文跟中文。
最大的模型是使用了十万小时的一个中英文数据训练的。
然后在huggingface上开源了一个四万小时的未监督微调的模型。' :start="$clicks === 2" />


  <div class="flex justify-end items-center gap-10 w-full">
    <Play v-click="5" src="/introduce-detail-1.wav" :start="$clicks===6"/>
    <Play v-click="3" src="/introduce-detail-0.wav" :start="$clicks===4"/>
  </div>
</div>




---
clicks: 7
---

<h1 color-primary>Speaks</h1>


<div h-95 flex flex-col items-center justify-center gap-10>

  <div v-click="1" class="shadow-lg p-6 rounded-1">
    四川美食确实以辣闻名，但也有不辣的选择。比如甜水面、赖汤圆、蛋烘糕、叶儿粑等，这些小吃口味温和，甜而不腻，也很受欢迎。
  </div>

  <div flex justify-end w-full gap-10>
    <Play v-click="6" src="/speak-3.wav" :start="$clicks===7"/>
    <Play v-click="4" src="/speak-2.wav" :start="$clicks===5"/>
    <Play v-click="2" src="/speak-1.wav" :start="$clicks===3"/>
  </div>
</div>





---
clicks: 4
---

<h1 color-primary>多语言</h1>


<div h-90 flex flex-col items-center justify-center gap-10>

  <Audio v-click="1" class="w-160" src="/zh-chattts.wav" tag='ChatTTS' text='ChatTTS是一款强大的对话式文本转语音的模型.' :start="$clicks ===2" />

  <Audio v-click="3" class="w-160" src="/en-chattts.wav" tag='ChatTTS' text='ChatTTS is a text-to-speech model designed for dialogue applications.' :start="$clicks ===4" />
</div>


---
clicks: 4
---

<h1 color-primary>语言切换</h1>



<div h-90 flex flex-col items-center justify-center gap-10>

  <Audio v-click="1" class="w-160" src="/zh-switch.wav" tag='ChatTTS' text='这些元素其实是glam rock，然后加这种bling的感觉。我觉得像这个衣服有一些jacket，比如说那个oversized的那个丹宁的jacket，我觉得是可以offduty的model。' :start="$clicks ===2" />

  <Audio v-click="3" class="w-160" src="/en-switch.wav" tag='ChatTTS' text='These elements are in fact the 迷惑摇滚,combined with a little bit of 闪耀. I think that some 外套 among these clothes like the 大号的 denim 外套. I think i can 模特,下班着装.' :start="$clicks ===4" />
</div>



---
clicks: 4
---

<h1 color-primary>韵律特征</h1>


<div h-90 flex flex-col items-center justify-center gap-10>

  <Audio v-click="1" class="w-160" src="/zh-control.wav" tag='ChatTTS' text='那ChatTTS不仅能够生成自然流畅的语言[uv_break]，还能控制[laugh]笑声[laugh]，[uv_break]停顿啊和语气词啊等副语言现象[uv_break]。其这个韵律呢超越了许多开源模型。' :start="$clicks ===2" />

  <Audio v-click="3" class="w-160" src="/en-control.wav" tag='ChatTTS' text='It supports mixed language input [uv_break] and offers multi speaker capabilities with precise control over prosodic elements[uv_break] like [laugh]laughter[laugh],pauses,[uv_break]and intonation.' :start="$clicks ===4" />
</div>



---
transition: fade
---

<h1 color-primary>开源计划</h1>


<div h-90 flex  items-center justify-center gap-10>

  <div v-click="2" flex text-14 gap-4>
    <div>star</div>
    <div color-primary font-bold>25.7k</div>
  </div>

  <div v-click="1" flex text-14 gap-4>
    <div>month</div>
    <div color-primary font-bold>1</div>
  </div>


  <div v-click="3" flex text-14 gap-4>
    <div>fork</div>
    <div color-primary font-bold>2.8k</div>
  </div>

</div>




---

<h1 color-primary>开源计划</h1>


<div h-full flex items-center justify-center gap-10>
  
  [![Star History Chart](https://api.star-history.com/svg?repos=2noise/ChatTTS&type=Date)](https://star-history.com/#2noise/ChatTTS&Date)

</div>


<style scoped>
  img{
    --at-apply: w-80%;
  }
</style>

---

<h1 color-primary>应用场景</h1>


<div mt-30 text-6>

  <v-clicks>

  - 辅助技术
  - 客户服务
  - 教育娱乐
  - 智能家居
  - ...
  </v-clicks>
</div>


---

<h1 color-primary>不足</h1>



<div h-90 flex items-center justify-start gap-10 text-6>



<v-clicks>


- 吞音
- 音色
- 不稳定
- 音质
</v-clicks>



</div>


---


<h1 color-primary>安全</h1>



<div h-90 flex items-center justify-start gap-10 text-6>

  <ul>
    <li v-click="1">
      <div class="blur-sm">
        <img src="/curve.svg" h-13 w-30/>
      </div>
    </li>
    <li v-click="2">非法应用</li>
  </ul>



  <ul ml-50>
    <li v-click="3">少量高频噪声，压缩音频质量</li>
    <li v-click="4">30s</li>
    <li v-click="5">检测模型</li>
  </ul>

</div>




---
clicks: 3
---

<!-- <h1 color-primary>总结</h1> -->



<div h-90 flex flex-col items-center justify-center>
  <Audio v-click="1" src="/conclusion.wav" tag='ChatTTS' text='语音合成作为生成式AI的重要组成部分，不仅需关注其技术应用和发展，更需要在伦理和技术实现上找到平衡点。' :start="$clicks === 2" />
</div>



---

<div>
  <img h-80 m-auto src="/url.png"/>
  <p text-12 text-center color-primary>chattts.com</p>
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


<h1 color-primary>Refs</h1>

- https://github.com/2noise/ChatTTS
- https://www.bilibili.com/video/BV1hi421S7Qd