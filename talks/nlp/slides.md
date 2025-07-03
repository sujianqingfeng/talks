---
theme: seriph
background: https://cover.sli.dev
title: 词向量如何演进
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# 词向量如何演进

---


# 什么是文本向量化？

将人类语言文本转换为计算机可以理解的数字向量的过程

<div class="mt-6 p-4 bg-blue-50 rounded-lg">
<h3 class="text-lg font-semibold mb-3">📧 实际应用场景</h3>

**识别这是否垃圾邮件：**

<div class="bg-gray-100 p-3 rounded mt-2 mb-3 font-mono text-sm">
"我爷爷种了一片茶园，你愿意买茶么"
</div>

<div class="flex items-center justify-center my-4">
<div class="text-2xl">⬇️</div>
</div>

<div class="bg-green-100 p-3 rounded font-mono text-sm">
[0.2, 0.8, 0.1, 0.9, 0.3, 0.7, 0.4, ...]
</div>

</div>

<div class="mt-4 text-sm text-gray-600">
💡 向量化后，就可以处理和分析文本了
</div>


---

# 文本向量化方法

<div class="h-full flex flex-col justify-center">

<div class="relative w-full h-80 flex items-center">
  <!-- Timeline line -->
  <div class="absolute left-10 right-10 top-1/2 h-1 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 rounded-full shadow-lg"></div>
  
  <!-- Timeline points -->
  <div class="absolute left-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
    <div class="w-4 h-4 bg-pink-400 rounded-full border-2 border-white shadow-lg z-10"></div>
    <div class="mt-4 text-center">
      <div class="font-bold text-lg">词袋法</div>
      <div class="text-sm text-gray-600">1990年代</div>
    </div>
  </div>
  
  <div class="absolute left-1/4 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
    <div class="w-4 h-4 bg-pink-400 rounded-full border-2 border-white shadow-lg z-10"></div>
    <div class="mt-4 text-center">
      <div class="font-bold text-lg">TF-IDF</div>
      <div class="text-sm text-gray-600">2000年代</div>
    </div>
  </div>
  
  <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
    <div class="w-4 h-4 bg-pink-400 rounded-full border-2 border-white shadow-lg z-10"></div>
    <div class="mt-4 text-center">
      <div class="font-bold text-lg">WORD2VEC</div>
      <div class="text-sm text-gray-600">2013年</div>
    </div>
  </div>
  
  <div class="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
    <div class="w-4 h-4 bg-pink-400 rounded-full border-2 border-white shadow-lg z-10"></div>
    <div class="mt-4 text-center">
      <div class="font-bold text-lg">BGE</div>
      <div class="text-sm text-gray-600">2023年</div>
    </div>
  </div>
</div>

</div>

---


# 词袋法（bag of words）


--- 
clicks: 1
---

# 假设有三段话

<div class="flex flex-col justify-center h-full">

<!-- 第一段话 -->
<div v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
  class="relative mb-8">
  <div class="flex items-center">
    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 text-sm">1</div>
    <div class="flex-1 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md border-l-4 border-blue-400">
      <div class="text-2xl font-medium leading-relaxed">
        <span v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          :class="{ 'bg-yellow-200 px-2 py-1 rounded': $clicks >= 1 }"
          class="transition-all duration-300">促销</span><span v-if="$clicks === 0" class="text-red-500 text-xl">！</span><span v-if="$clicks >= 1" class="mx-1 text-gray-400">|</span><span v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
          :class="{ 'bg-yellow-200 px-2 py-1 rounded': $clicks >= 1 }"
          class="transition-all duration-300">促销</span><span v-if="$clicks === 0" class="text-red-500 text-xl">！</span><span v-if="$clicks >= 1" class="mx-1 text-gray-400">|</span><span v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
          :class="{ 'bg-green-200 px-2 py-1 rounded': $clicks >= 1 }"
          class="transition-all duration-300">速点</span><span v-if="$clicks >= 1" class="mx-1 text-gray-400">|</span><span v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 700 } }"
          :class="{ 'bg-purple-200 px-2 py-1 rounded': $clicks >= 1 }"
          class="transition-all duration-300">链接</span><span v-if="$clicks === 0" class="text-red-500 text-xl">！</span>
      </div>
    </div>
  </div>
</div>

<!-- 第二段话 -->
<div v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
  class="relative mb-8">
  <div class="flex items-center">
    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4 text-sm">2</div>
    <div class="flex-1 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-md border-l-4 border-green-400">
      <div class="text-2xl font-medium leading-relaxed">
        <span v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 800 } }"
          :class="{ 'bg-yellow-200 px-2 py-1 rounded': $clicks >= 1 }"
          class="transition-all duration-300">促销</span><span v-if="$clicks === 0" class="text-red-500 text-xl">！</span><span v-if="$clicks >= 1" class="mx-1 text-gray-400">|</span><span v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 900 } }"
          :class="{ 'bg-green-200 px-2 py-1 rounded': $clicks >= 1 }"
          class="transition-all duration-300">速点</span><span v-if="$clicks >= 1" class="mx-1 text-gray-400">|</span><span v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 1000 } }"
          :class="{ 'bg-pink-200 px-2 py-1 rounded': $clicks >= 1 }"
          class="transition-all duration-300">领取</span><span v-if="$clicks === 0" class="text-red-500 text-xl">！</span>
      </div>
    </div>
  </div>
</div>

<!-- 第三段话 -->
<div v-motion
  :initial="{ opacity: 0, x: -50 }"
  :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
  class="relative mb-8">
  <div class="flex items-center">
    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 text-sm">3</div>
    <div class="flex-1 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl shadow-md border-l-4 border-purple-400">
      <div class="text-2xl font-medium leading-relaxed">
        <span v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 1200 } }"
          :class="{ 'bg-orange-200 px-2 py-1 rounded': $clicks >= 1 }"
          class="transition-all duration-300">免费</span><span v-if="$clicks === 0" class="text-red-500 text-xl">！</span><span v-if="$clicks >= 1" class="mx-1 text-gray-400">|</span><span v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 1300 } }"
          :class="{ 'bg-green-200 px-2 py-1 rounded': $clicks >= 1 }"
          class="transition-all duration-300">速点</span><span v-if="$clicks >= 1" class="mx-1 text-gray-400">|</span><span v-motion
          :initial="{ opacity: 0, y: 10 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 1400 } }"
          :class="{ 'bg-purple-200 px-2 py-1 rounded': $clicks >= 1 }"
          class="transition-all duration-300">链接</span><span v-if="$clicks === 0" class="text-red-500 text-xl">！</span>
      </div>
    </div>
  </div>
</div>
</div>





---


# 词表

<div class="flex justify-center items-center h-full">
  <table class="border-collapse border-2 border-gray-400 text-lg">
    <tr>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center font-medium">促销</td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center font-medium">速点</td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center font-medium">链接</td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center font-medium">免费</td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center font-medium">领取</td>
    </tr>
    <tr>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
    </tr>
    <tr>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
    </tr>
    <tr>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
    </tr>
    <tr>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
      <td class="border border-gray-400 p-3 w-16 h-16 text-center"></td>
    </tr>
  </table>
</div>

---
clicks: 3
---

# 词袋法统计

<BagOfWordsTable mode="binary" />




---
clicks: 1
---

<div class="flex flex-col items-center justify-center h-full">
  <!-- 第一句话，默认居中，点击后上移 -->
  <div v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    :click-1="{ y: -50, transition: { duration: 600 } }"
    class="text-6xl font-bold text-center text-gray-800 leading-relaxed mb-8">
    有没有这个词
  </div>
  
  <!-- 第二句话，点击后在中央显示 -->
  <div v-motion
    v-click="1"
    :initial="{ opacity: 0, y: 100, scale: 0.8 }"
    :enter="{ opacity: 1, y: 50, scale: 1, transition: { duration: 800, delay: 200 } }"
    class="text-3xl text-center text-blue-600 max-w-4xl leading-relaxed absolute">
    对于一些特定的场景，有没有这个词就可以鉴别了
  </div>
</div>



---

<div class="flex items-center justify-center h-full">
  <div class="text-6xl font-bold text-center text-gray-800">
    词频
  </div>
</div>


---
clicks: 3
---

# 词袋法统计（词频版）

<BagOfWordsTable mode="frequency" />




---
clicks: 1
---

<div class="flex flex-col items-center justify-center h-full">
  <!-- 第一行文字 -->
  <div v-motion
    :initial="{ opacity: 0, y: 0 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
    :click-1="{ y: -20, transition: { duration: 500 } }"
    class="text-6xl font-bold text-gray-800 text-center mb-8">
    有没有这个词
  </div>
  
  <!-- 箭头 -->
  <div v-motion
    v-click="1"
    :initial="{ opacity: 0, scale: 0 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 500 } }"
    class="text-5xl text-gray-600 mb-8">
    ↓
  </div>
  
  <!-- 第二行文字 -->
  <div v-motion
    v-click="1"
    :initial="{ opacity: 0, y: 0 }"
    :enter="{ opacity: 1, y: 20, transition: { delay: 200, duration: 600 } }"
    class="text-6xl font-bold text-blue-600 text-center">
    有多少这个词
  </div>
</div>


---
clicks: 1
---

# 分词演示

<div class="flex flex-col items-center justify-center h-full">
  <div class="text-3xl leading-relaxed mb-8">
    <p>人工智能<span v-if="$clicks >= 1" class="text-blue-500">-</span><span v-if="$clicks >= 1" class="text-red-500">的</span><span v-if="$clicks === 0">的</span><span v-if="$clicks >= 1" class="text-blue-500">-</span>技术<span v-if="$clicks >= 1" class="text-blue-500">-</span>飞速<span v-if="$clicks >= 1" class="text-blue-500">-</span>发展<span v-if="$clicks >= 1" class="text-blue-500">-</span>人们<span v-if="$clicks >= 1" class="text-blue-500">-</span><span v-if="$clicks >= 1" class="text-red-500">的</span><span v-if="$clicks === 0">的</span><span v-if="$clicks >= 1" class="text-blue-500">-</span>生活</p>
    <p class="mt-4">正在<span v-if="$clicks >= 1" class="text-blue-500">-</span>变化<span v-if="$clicks >= 1" class="text-blue-500">-</span>未来<span v-if="$clicks >= 1" class="text-blue-500">-</span>将有<span v-if="$clicks >= 1" class="text-blue-500">-</span>全新<span v-if="$clicks >= 1" class="text-blue-500">-</span><span v-if="$clicks >= 1" class="text-red-500">的</span><span v-if="$clicks === 0">的</span><span v-if="$clicks >= 1" class="text-blue-500">-</span>体验</p>
  </div>
</div>


---
clicks: 3
---

<div class="flex flex-col items-center justify-center h-full space-y-8">
  <!-- 虚假的关键词 -->
  <div class="w-full max-w-4xl">
    <div :class="{ 
      'bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 shadow-lg': $clicks >= 3 
    }" class="rounded-xl p-6 transition-all duration-800">
      <div v-click="3" v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-lg inline-block mb-4 font-bold text-lg shadow-md">
        虚假的关键词
      </div>
      <div v-click="1" class="grid grid-cols-3 gap-6">
        <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="text-2xl font-bold text-gray-800 mb-2">常见</div>
          <div class="text-sm text-gray-500">频繁出现</div>
        </div>
        <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="text-2xl font-bold text-gray-800 mb-2">像路人甲</div>
          <div class="text-sm text-gray-500">缺乏特色</div>
        </div>
        <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="text-2xl font-bold text-gray-800 mb-2">不特别</div>
          <div class="text-sm text-gray-500">无区分度</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 真实的关键词 -->
  <div class="w-full max-w-4xl">
    <div :class="{ 
      'bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 shadow-lg': $clicks >= 3 
    }" class="rounded-xl p-6 transition-all duration-800">
      <div v-click="3" v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-2 rounded-lg inline-block mb-4 font-bold text-lg shadow-md">
        真实的关键词
      </div>
      <div v-click="2" class="grid grid-cols-3 gap-6">
        <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="text-2xl font-bold text-gray-800 mb-2">稀有</div>
          <div class="text-sm text-gray-500">出现较少</div>
        </div>
        <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="text-2xl font-bold text-gray-800 mb-2">有区分度</div>
          <div class="text-sm text-gray-500">独特性强</div>
        </div>
        <div class="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="text-2xl font-bold text-gray-800 mb-2">代表性</div>
          <div class="text-sm text-gray-500">能够标识</div>
        </div>
      </div>
    </div>
  </div>
</div>



---
clicks: 1
---

<div class="flex items-center justify-center h-full">
  <!-- 词频 - 默认居中，点击后向左移动 -->
  <div v-motion
    :initial="{ opacity: 1, x: 0 }"
    :click-1="{ x: -100, transition: { duration: 800 } }"
    class="text-8xl font-bold text-gray-700">
    词频
  </div>
  
  <!-- 稀有 - 点击后从左侧移动到右侧 -->
  <div v-motion
    v-click="1"
    :initial="{ opacity: 0, x: -100 }"
    :enter="{ opacity: 1, x: 100, transition: { duration: 800 } }"
    class="text-8xl font-bold text-gray-700">
    稀有
  </div>
</div>

---





