---
title: Color
drawings:
  persist: false
transition: fade
overviewSnapshots: true
layout: cover
---

# 数字世界中的色彩表达


贺聂双 / <span text-3>AIS</span>   



<!-- 用强哥的话题引入 -->

---

# 三原色 <span v-click="2" class="color-red">(光)</span>

<div v-click="1" class="flex justify-around items-center h-100">
  <div class="w-50 h-50 rounded-full bg-[red] flex justify-center items-center text-white text-20">R</div>
  <div class="w-50 h-50 rounded-full bg-[green] flex justify-center items-center text-white text-20">G</div>
  <div class="w-50 h-50 rounded-full bg-[blue] flex justify-center items-center text-white text-20">B</div>
</div>



<!--
另外的版本: 红黄蓝 （颜料）
-->

---

<div class="flex justify-center items-center h-full">
  <img src="/intersection.jpg" class="w-100" />
</div>

<!-- 通过调整三原色的比例，可以得到不同的颜色，所以在计算机中的也可以这样表示 -->


---
layout: center
---

# RGB颜色模型


---

# 范围



<div class="flex flex-col justify-center items-center h-100">

<div v-click="1" class="text-14 flex items-center justify-center">
  <div  
    v-motion
    :initial="{ x: 40 }"
    :enter="{ x: 40 }"
    :click-1="{ x: 50 }"
    :click-2="{ x: -10 }"
    :leave="{ x: 50 }">0-255</div>
    <span v-click="2" class='text-10'>8bit</span>
  </div>
  <div v-click="3" class="text-10">
    0x11111111 = 255
  </div>
</div>


<!-- 早期的计算机和显示设备使用 8 位来表示每个颜色通道的数值，这是因为 8 位处理在硬件上比较高效，既能保持足够的颜色细节，也能减小存储和计算的复杂度。 -->

---

<div class="flex justify-between items-center h-100">
  <div class="flex flex-col items-center">
    <div class="text-30">R</div>
    <div v-click="1" class="bg-[rgb(255,0,0)] p-2 text-10 text-white rounded-lg">rgb(255,0,0)</div>
  </div>

  <div class="flex flex-col items-center">
    <div class="text-30">G</div>
    <div v-click="2" class="bg-[rgb(0,255,0)] p-2 text-10 text-white rounded-lg">rgb(0,255,0)</div>
  </div>

  <div class="flex flex-col items-center">
    <div class="text-30">B</div>
    <div v-click="3" class="bg-[rgb(0,0,255)] p-2 text-10 text-white rounded-lg">rgb(0,0,255)</div>
  </div>
</div>




---
clicks: 5
---

# RGB <span> {{ $clicks + 1 }} </span>

<div class="flex flex-col items-center justify-center h-100">
  <RandomColor :count="$clicks" />

  <div v-click="4" class="text-10 flex items-center">
  256 * 256 * 256 = <span v-click="5" class="text-20 text-red">16,777,216</span>
  </div>
</div>

---
clicks: 6
---

# 十六进制


<div class="flex flex-col justify-center h-100 gap-5">


<div class="text-10" v-click="1">
<span class="bg-[rgb(0,0,0)] text-white p-2 rounded-lg">rgb(0,0,0)</span> - <span class="bg-[rgb(255,255,255)] text-black p-2 rounded-lg border-1">rgb(255,255,255)</span>
</div>


<div class="text-10" v-click="2">
<span class="bg-[#000000] text-white p-2 rounded-lg">0x000000</span> - <span class="bg-[#FFFFFF] text-black p-2 rounded-lg border-1">0xFFFFFF</span>
</div>


<div v-click="3" class="text-10">
  # <span v-mark="{ at: 4, color: '#f87171' }">FF</span>
  <span v-mark="{ at: 5, color: '#f87171' }">FF</span>
  <span v-mark="{ at: 6, color: '#f87171' }">FF</span>
</div>

<div class="text-10">
  <span class="whitespace-pre-wrap" v-click="4"># R </span>
  <span class="whitespace-pre-wrap" v-click="5"> G </span>
  <span class="whitespace-pre-wrap" v-click="6"> B</span>
</div>

</div>


<!-- 十六进制表示法可以用更少的字符来表示相同的数值,可以减少数据量，同时二进制转换的效率更高 -->


---
clicks: 4
---

# 转换 <span> {{ $clicks+1 }} </span>


<div class="flex justify-center items-center h-100">
<Cover :count="$clicks" />
</div>


---

# Alpha 透明度
用于表示颜色的不透明度

<div class="flex justify-around items-center h-95 relative w-full">
  <div v-click="4" class="absolute top-50% left-50% translate-x-[-50%] translate-y-[-50%] text-60 tracking-[5rem] z--1">WXB</div>
  <div v-click="1" class="bg-[rgb(255,0,0)] text-10 text-white p-2 rounded-lg">rgb(255,0,0)</div>
  <div v-click="2" class="bg-[rgb(255,0,0)] bg-opacity-50 text-10 text-white p-2 rounded-lg">rgba(255,0,0,0.5)</div>
  <div v-click="3" class="bg-[#ff000080] text-10 text-white p-2 rounded-lg">#ff000080</div>

</div>


<!-- 复杂的视觉效果
层叠效果
创建出深度和层次感 -->

---
layout: center
---

# RGB模型的局限性

<div class="text-center text-gray-400">不符合人类对颜色的直观感知</div>

<!-- 我们看到一个颜色，我们并不知道它的RGB值，而是大概知道它的色相，饱和度和亮度。 -->


---

# 颜色的三要素


<div class="flex flex-col justify-center h-95">


<p v-click="1"> <span class="w-[11rem] inline-block">色相（Hue）</span> <solar-arrow-right-bold class="mr-2"/>  颜色的种类</p>
<p v-click="2"> <span class="w-[11rem] inline-block">饱和度（Saturation）</span> <solar-arrow-right-bold class="mr-2"/>  颜色的纯度</p>
<p v-click="3"> <span class="w-[11rem] inline-block">亮度（Lightness）</span> <solar-arrow-right-bold class="mr-2"/>  颜色的明暗</p>

</div>

---
layout: center
---

# RGB可以修改饱和度和亮度么？


---

# 可以, 但是需要额外的计算



<div v-click="1" class="h-100 flex flex-col justify-center">

```js
R' = R / 255
G' = G / 255
B' = B / 255

Cmax = max(R', G', B')
Cmin = min(R', G', B')
Δ = Cmax - Cmin

L = (Cmax + Cmin) / 2

if Δ = 0:
    S = 0
else:
    S = Δ / (1 - |2L - 1|)

```

</div>



---
layout: center
---

# HSL颜色模型


---


# 色相(Hue)
颜色的种类


<div class="flex justify-around items-center w-full">
<img v-if="$clicks === 1"  src="/12hue.jpg" class="w-55 h-55" />
<img v-else v-click="2" src="/hue.png" class="w-60" />
</div>



<div class="flex justify-center items-center gap-12">
  <div v-click="3" class="flex items-center text-10 gap-2">
  0 <div class="bg-[hsl(0,100%,50%)] h-10 w-10 inline-block rounded-full"></div>
  </div>

  <div v-click="4" class="flex items-center text-10 gap-2">
  180 <div class="bg-[hsl(180,100%,50%)] h-10 w-10 inline-block rounded-full"></div>
  </div>
</div>


<!-- 颜料混色理论，颜色是离散的 -->
<!-- 颜色分布是连续的、基于光谱的过渡 -->


---

# 饱和度(Saturation)
颜色的纯度


<div class="h-100 flex items-center gap-2" v-click="1">

<div class="bg-[hsl(180,100%,50%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center">100%</div>
<div class="bg-[hsl(180,90%,50%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center">90%</div>
<div class="bg-[hsl(180,80%,50%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center">80%</div>
<div class="bg-[hsl(180,70%,50%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center">70%</div>
<div class="bg-[hsl(180,60%,50%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center">60%</div>
<div class="bg-[hsl(180,50%,50%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center">50%</div>
<div class="bg-[hsl(180,40%,50%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center">40%</div>
<div class="bg-[hsl(180,30%,50%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center">30%</div>
<div class="bg-[hsl(180,20%,50%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center">20%</div>
<div class="bg-[hsl(180,10%,50%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center">10%</div>
<div class="bg-[hsl(180,0%,50%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center">0%</div>

</div>


---

# 亮度(Lightness)
颜色的明暗


<div v-click="1" class="h-100 flex items-center gap-2">
<div class="bg-[hsl(180,100%,100%)] h-full flex-1 inline-block rounded-full text-block flex justify-center items-center border-1">100%</div>
<div class="bg-[hsl(180,100%,90%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center border-1">90%</div>
<div class="bg-[hsl(180,100%,80%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center border-1">80%</div>
<div class="bg-[hsl(180,100%,70%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center border-1">70%</div>
<div class="bg-[hsl(180,100%,60%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center border-1">60%</div>
<div class="bg-[hsl(180,100%,50%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center border-1">50%</div>
<div class="bg-[hsl(180,100%,40%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center border-1">40%</div>
<div class="bg-[hsl(180,100%,30%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center border-1">30%</div>
<div class="bg-[hsl(180,100%,20%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center border-1">20%</div>
<div class="bg-[hsl(180,100%,10%)] h-full flex-1 inline-block rounded-full text-white flex justify-center items-center border-1">10%</div>
</div>


---
clicks: 5
---

# HSL <span> {{ $clicks + 1 }} </span>


<div class="flex justify-around items-center h-100">

<RandomHSLColor :count="$clicks" />

</div>


<!-- 360 * 256 * 256 = 23,592,960 -->

---

# 其他颜色模型


<div class="flex flex-col justify-center gap-2 h-100 text-8">

<v-clicks>

<p>CMYK颜色模型: 主要用于印刷和出版</p>
<p>YUV颜色模型: 用于视频压缩和传输</p>
<p>...</p>

</v-clicks>

</div>


<!-- 9种左右 -->


---

# 色深

每个像素使用多少位（bit）来表示其颜色信息


<div class="flex flex-col justify-center gap-2 h-100 text-8">

<v-clicks>

<p>1 位色深（单色）: 电子墨水屏</p>
<p>8 位色深（256色）: GIF 动画图像</p>
<p>16 位色深（约6万色）: 经典的卡通或漫画书颜色</p>
<p>24 位色深（约16千万色）: 大多数计算机显示器(8bit)</p>
<p>30 位色深（约10亿色）: 高端显示器(10bit)</p>
<p>32 位色深（约40亿色）: 专业图形工作站(12bit)</p>

</v-clicks>



</div>


<!-- 
每个像素的位数：色深定义每个像素使用多少位（bit）来表示其颜色信息。更多的位数意味着可以表示更多的颜色。
颜色模型：大多数现代设备使用的是 RGB 颜色模型，每个像素的颜色由红、绿、蓝（RGB）三种基本颜色通道的组合来表示。每个通道都有自己的位数，用于描述其强度。 -->


---
layout: center
---

# Thank you
