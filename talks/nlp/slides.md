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
    +
  </div>
  
  <!-- 第二行文字 -->
  <div v-motion
    v-click="1"
    :initial="{ opacity: 0, y: 0 }"
    :enter="{ opacity: 1, y: 20, transition: { delay: 200, duration: 600 } }"
    class="text-6xl font-bold text-blue-600 text-center">
    这个词有多稀缺
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
clicks: 3
---

# 词频

<div class="flex h-full items-center px-8 gap-16">
  <!-- 左侧：句子列表 -->
  <div class="flex-1 space-y-4 max-w-md">
    <!-- 句子1 -->
    <div class="p-4 rounded-lg border-l-4 transition-all duration-500"
         :class="$clicks === 1 ? 'bg-gradient-to-r from-blue-200 to-blue-300 border-blue-500 shadow-lg transform scale-105' : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300'">
      <div class="text-lg font-medium flex flex-wrap gap-2">
        <span class="font-bold mr-2">长度 4：</span>
        <span class="bg-white px-2 py-1 rounded border">促销</span>
        <span class="bg-white px-2 py-1 rounded border">促销</span>
        <span class="bg-white px-2 py-1 rounded border">速点</span>
        <span class="bg-white px-2 py-1 rounded border">链接</span>
      </div>
    </div>
    <!-- 句子2 -->
    <div class="p-4 rounded-lg border-l-4 transition-all duration-500"
         :class="$clicks === 2 ? 'bg-gradient-to-r from-green-200 to-green-300 border-green-500 shadow-lg transform scale-105' : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300'">
      <div class="text-lg font-medium flex flex-wrap gap-2">
        <span class="font-bold mr-2">长度 3：</span>
        <span class="bg-white px-2 py-1 rounded border">促销</span>
        <span class="bg-white px-2 py-1 rounded border">速点</span>
        <span class="bg-white px-2 py-1 rounded border">领取</span>
      </div>
    </div>
    <!-- 句子3 -->
    <div class="p-4 rounded-lg border-l-4 transition-all duration-500"
         :class="$clicks === 3 ? 'bg-gradient-to-r from-purple-200 to-purple-300 border-purple-500 shadow-lg transform scale-105' : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300'">
      <div class="text-lg font-medium flex flex-wrap gap-2">
        <span class="font-bold mr-2">长度 3：</span>
        <span class="bg-white px-2 py-1 rounded border">免费</span>
        <span class="bg-white px-2 py-1 rounded border">速点</span>
        <span class="bg-white px-2 py-1 rounded border">链接</span>
      </div>
    </div>
  </div>
  
  <!-- 右侧：词表 -->
  <div class="flex-1 flex justify-center">
          <table class="border-collapse border-2 border-gray-400 text-lg">
        <thead>
          <tr class="bg-pink-100">
            <th class="border border-gray-400 p-3 font-bold">促销</th>
            <th class="border border-gray-400 p-3 font-bold">速点</th>
            <th class="border border-gray-400 p-3 font-bold">链接</th>
            <th class="border border-gray-400 p-3 font-bold">免费</th>
            <th class="border border-gray-400 p-3 font-bold">领取</th>
          </tr>
        </thead>
        <tbody>
          <!-- 句子1的计数 -->
          <tr>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="1">2/4=0.5</td>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="1">1/4=0.25</td>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="1">1/4=0.25</td>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="1">0/4=0</td>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="1">0/4=0</td>
          </tr>
          <!-- 句子2的计数 -->
          <tr>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="2">1/3=0.33</td>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="2">1/3=0.33</td>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="2">0/3=0</td>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="2">0/3=0</td>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="2">1/3=0.33</td>
          </tr>
          <!-- 句子3的计数 -->
          <tr>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="3">0/3=0</td>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="3">1/3=0.33</td>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="3">1/3=0.33</td>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="3">1/3=0.33</td>
            <td class="border border-gray-400 p-3 w-20 h-16 text-center font-bold text-red-600 text-sm"
                v-click="3">0/3=0</td>
          </tr>
        </tbody>
      </table>
  </div>
</div>

---
clicks: 1
---

# 稀有

<div class="flex flex-col items-center justify-center h-full space-y-8">
  <!-- 第一段 -->
  <div class="text-center">
    <div class="text-lg text-gray-600 mb-2">总文档数</div>
    <div class="text-4xl font-bold text-gray-800">10,000</div>
  </div>
  
  <!-- 第二段 -->
  <div class="text-center">
    <div class="text-lg text-gray-600 mb-2">含有这个词语的文档数</div>
    <div class="text-4xl font-bold text-gray-800">1</div>
  </div>
  
  <!-- 第三段 - 需要点击才显示，带背景颜色 -->
  <div v-click="1" class="text-center bg-blue-50 p-4 rounded-lg">
    <div class="text-lg text-gray-600 mb-2">稀有度</div>
    <div class="text-3xl font-bold text-gray-800">10,000 ÷ 1 = 10,000</div>
  </div>
</div>

---
clicks: 1
---

<div class="flex flex-col items-center justify-center h-full space-y-4">
  <!-- 公式展示 -->
  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl shadow-lg border border-blue-200">
    <div class="text-center">
      <div class="flex items-center justify-center text-2xl font-mono">
        <span class="text-blue-600 font-bold">稀有 = </span>
        <span v-if="$clicks >= 1" class="text-green-600 font-bold mx-1">log(</span>
        <div class="bg-white px-3 py-1 rounded-lg shadow-sm border mx-1">
          <div class="text-sm text-gray-700 text-center">总文档数</div>
          <div class="border-t border-gray-300 my-1"></div>
          <div class="text-sm text-gray-700 text-center">含有这个词语的文档数</div>
        </div>
        <span v-if="$clicks >= 1" class="text-green-600 font-bold mx-1">)</span>
      </div>
    </div>
  </div>
  
  <!-- 图表展示 -->
  <div class="w-full max-w-3xl h-64">
    <TfIdfChart />
  </div>
</div>

---
clicks: 2
---

# 稀有计算

<div class="flex h-full items-center px-8 gap-16">
  <!-- 左侧：句子列表 -->
  <div class="flex-1 space-y-4 max-w-md">
    <!-- 句子1 -->
    <div class="p-3 rounded-lg border-l-4 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-300">
      <div class="font-bold text-base mb-2">文档1：</div>
      <div class="flex flex-wrap gap-2">
        <span class="bg-white px-2 py-1 rounded border text-sm">促销</span>
        <span class="bg-white px-2 py-1 rounded border text-sm">促销</span>
        <span class="bg-white px-2 py-1 rounded border text-sm">速点</span>
        <span class="bg-white px-2 py-1 rounded border text-sm">链接</span>
      </div>
    </div>
    <!-- 句子2 -->
    <div class="p-3 rounded-lg border-l-4 bg-gradient-to-r from-green-50 to-green-100 border-green-300">
      <div class="font-bold text-base mb-2">文档2：</div>
      <div class="flex flex-wrap gap-2">
        <span class="bg-white px-2 py-1 rounded border text-sm">促销</span>
        <span class="bg-white px-2 py-1 rounded border text-sm">速点</span>
        <span class="bg-white px-2 py-1 rounded border text-sm">领取</span>
      </div>
    </div>
    <!-- 句子3 -->
    <div class="p-3 rounded-lg border-l-4 bg-gradient-to-r from-purple-50 to-purple-100 border-purple-300">
      <div class="font-bold text-base mb-2">文档3：</div>
      <div class="flex flex-wrap gap-2">
        <span class="bg-white px-2 py-1 rounded border text-sm">免费</span>
        <span class="bg-white px-2 py-1 rounded border text-sm">速点</span>
        <span class="bg-white px-2 py-1 rounded border text-sm">链接</span>
      </div>
    </div>
  </div>
  
  <!-- 右侧：稀有度计算表 -->
  <div class="flex-1 flex justify-center">
    <table class="border-collapse border-2 border-gray-400 text-lg">
      <thead>
        <tr class="bg-pink-100">
          <th class="border border-gray-400 p-3 font-bold">促销</th>
          <th class="border border-gray-400 p-3 font-bold">速点</th>
          <th class="border border-gray-400 p-3 font-bold">链接</th>
          <th class="border border-gray-400 p-3 font-bold">免费</th>
          <th class="border border-gray-400 p-3 font-bold">领取</th>
        </tr>
      </thead>
      <tbody>
        <!-- 文档统计 -->
        <tr class="bg-gray-50">
          <td class="border border-gray-400 p-3 text-center font-bold text-gray-600 text-sm"
              v-click="1">出现在2个文档</td>
          <td class="border border-gray-400 p-3 text-center font-bold text-gray-600 text-sm"
              v-click="1">出现在3个文档</td>
          <td class="border border-gray-400 p-3 text-center font-bold text-gray-600 text-sm"
              v-click="1">出现在2个文档</td>
          <td class="border border-gray-400 p-3 text-center font-bold text-gray-600 text-sm"
              v-click="1">出现在1个文档</td>
          <td class="border border-gray-400 p-3 text-center font-bold text-gray-600 text-sm"
              v-click="1">出现在1个文档</td>
        </tr>
        <!-- 稀有度计算 -->
        <tr>
          <td class="border border-gray-400 p-3 text-center font-bold text-red-600 text-sm"
              v-click="2">log(3/2)=0.2</td>
          <td class="border border-gray-400 p-3 text-center font-bold text-red-600 text-sm"
              v-click="2">log(3/3)=0</td>
          <td class="border border-gray-400 p-3 text-center font-bold text-red-600 text-sm"
              v-click="2">log(3/2)=0.2</td>
          <td class="border border-gray-400 p-3 text-center font-bold text-red-600 text-sm"
              v-click="2">log(3/1)=0.5</td>
          <td class="border border-gray-400 p-3 text-center font-bold text-red-600 text-sm"
              v-click="2">log(3/1)=0.5</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

---
clicks: 2
---


<div class="flex h-full items-center justify-center px-8 gap-8">
  <!-- 左侧：词频表 -->
  <div class="flex flex-col items-center">
    <table class="border-collapse border-2 border-gray-400 text-base">
      <thead>
        <tr class="bg-blue-100">
          <th class="border border-gray-400 p-2 font-bold text-sm">促销</th>
          <th class="border border-gray-400 p-2 font-bold text-sm">速点</th>
          <th class="border border-gray-400 p-2 font-bold text-sm">链接</th>
          <th class="border border-gray-400 p-2 font-bold text-sm">免费</th>
          <th class="border border-gray-400 p-2 font-bold text-sm">领取</th>
        </tr>
      </thead>
      <tbody>
        <!-- 句子1的词频 -->
        <tr>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0.5</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0.25</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0.25</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0</td>
        </tr>
        <!-- 句子2的词频 -->
        <tr>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0.33</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0.33</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0.33</td>
        </tr>
        <!-- 句子3的词频 -->
        <tr>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0.33</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0.33</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0.33</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-red-600 text-xs">0</td>
        </tr>
      </tbody>
    </table>
    <div class="mt-4 text-2xl font-bold text-blue-600">词频</div>
    <div v-click="1" class="mt-2 text-xl font-bold text-blue-800">TF</div>
  </div>
  
  <!-- 中间：乘号 -->
  <div class="flex flex-col items-center relative">
    <div class="text-6xl font-bold text-gray-700">×</div>
    <div v-click="2" class="text-8xl font-bold text-gray-700 absolute top-22">×</div>
  </div>
  
  <!-- 右侧：稀有度表 -->
  <div class="flex flex-col items-center">
    <table class="border-collapse border-2 border-gray-400 text-base">
      <thead>
        <tr class="bg-green-100">
          <th class="border border-gray-400 p-2 font-bold text-sm">促销</th>
          <th class="border border-gray-400 p-2 font-bold text-sm">速点</th>
          <th class="border border-gray-400 p-2 font-bold text-sm">链接</th>
          <th class="border border-gray-400 p-2 font-bold text-sm">免费</th>
          <th class="border border-gray-400 p-2 font-bold text-sm">领取</th>
        </tr>
      </thead>
      <tbody>
        <!-- 稀有度值 - 每一行都是相同的 -->
        <tr>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0.2</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0.2</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0.5</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0.5</td>
        </tr>
        <tr>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0.2</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0.2</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0.5</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0.5</td>
        </tr>
        <tr>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0.2</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0.2</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0.5</td>
          <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-green-600 text-xs">0.5</td>
        </tr>
      </tbody>
    </table>
    <div class="mt-4 text-2xl font-bold text-green-600">稀有</div>
    <div v-click="1" class="mt-2 text-xl font-bold text-green-800">IDF</div>
  </div>
</div>




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
    有多少这个词
  </div>
  
  <!-- 箭头 -->
  <div v-motion
    v-click="1"
    :initial="{ opacity: 0, scale: 0 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 500 } }"
    class="text-5xl text-gray-600 mb-8">
    +
  </div>
  
  <!-- 第二行文字 -->
  <div v-motion
    v-click="1"
    :initial="{ opacity: 0, y: 0 }"
    :enter="{ opacity: 1, y: 20, transition: { delay: 200, duration: 600 } }"
    class="text-6xl font-bold text-blue-600 text-center">
    这个词有多稀缺
  </div>
</div>




---


<div class="flex items-center justify-center h-full">
  <div class="text-6xl font-bold text-center text-gray-800">
    没有捕捉到语义
  </div>
</div>

---
clicks: 4
---

<div class="flex h-full items-center px-8 gap-16">
  <!-- 左侧：句子展示 -->
  <div class="flex-1 space-y-6">
    <div v-click="1" class="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md border-l-4 border-blue-400">
      <div class="text-3xl font-medium leading-relaxed">
        <span class="font-bold text-blue-600 mr-4">句子1：</span>
        <span class="text-gray-800">"这电影很好"</span>
      </div>
    </div>
    <div v-click="1" class="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-md border-l-4 border-green-400">
      <div class="text-3xl font-medium leading-relaxed">
        <span class="font-bold text-green-600 mr-4">句子2：</span>
        <span class="text-gray-800">"这电影很棒"</span>
      </div>
    </div>
  </div>
  <!-- 右侧：词语分析表格 -->
  <div class="flex-1 flex justify-center">
    <div v-click="2">
      <table class="border-collapse border-2 border-gray-400 text-lg">
        <thead>
          <tr class="bg-gradient-to-r from-pink-100 to-pink-200">
            <th class="border border-gray-400 p-4 font-bold text-gray-800">这</th>
            <th class="border border-gray-400 p-4 font-bold text-gray-800">电影</th>
            <th class="border border-gray-400 p-4 font-bold text-gray-800">很</th>
            <th class="border border-gray-400 p-4 font-bold text-gray-800">好</th>
            <th class="border border-gray-400 p-4 font-bold text-gray-800">棒</th>
          </tr>
        </thead>
        <tbody>
          <!-- 句子1的分析 -->
          <tr class="bg-blue-50">
            <td class="border border-gray-400 p-4 w-20 h-16 text-center font-bold text-blue-600">-</td>
            <td class="border border-gray-400 p-4 w-20 h-16 text-center font-bold text-blue-600">-</td>
            <td class="border border-gray-400 p-4 w-20 h-16 text-center font-bold text-blue-600">-</td>
            <td class="border border-gray-400 p-4 w-20 h-16 text-center font-bold text-blue-600">?</td>
            <td class="border border-gray-400 p-4 w-20 h-16 text-center font-bold text-blue-600">-</td>
          </tr>
          <!-- 句子2的分析 -->
          <tr class="bg-green-50">
            <td class="border border-gray-400 p-4 w-20 h-16 text-center font-bold text-green-600">-</td>
            <td class="border border-gray-400 p-4 w-20 h-16 text-center font-bold text-green-600">-</td>
            <td class="border border-gray-400 p-4 w-20 h-16 text-center font-bold text-green-600">-</td>
            <td class="border border-gray-400 p-4 w-20 h-16 text-center font-bold text-green-600">-</td>
            <td class="border border-gray-400 p-4 w-20 h-16 text-center font-bold text-green-600">?</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>




--- 

<div class="flex items-center justify-center h-full">
  <div class="flex flex-col items-center space-y-12">
    <div class="text-6xl font-bold text-center text-gray-800">
      <div v-motion
        :initial="{ opacity: 0, y: -30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        :click-1="{ y: -10, transition: { duration: 500 } }">
        Word Embedding
      </div>
      <div v-motion
        v-click="1"
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
        class="mt-4">
        词嵌入
      </div>
    </div>
    <div v-motion
      v-click="2"
      :initial="{ opacity: 0, scale: 0.5, y: 50 }"
      :enter="{ opacity: 1, scale: 1, y: 0, transition: { delay: 200, duration: 800 } }"
      class="flex flex-col items-center space-y-4">
      <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 24 24" class="w-10 h-10">
          <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>
      <div class="text-xl text-gray-600 font-medium">Google</div>
    </div>
  </div>
</div>


---
clicks: 1
---

<div class="flex items-center justify-center h-full relative">
  <!-- 两句话 -->
  <div class="flex flex-col items-center space-y-8">
    <div class="text-6xl font-medium text-center">
      <span class="text-black">这电影</span><span class="text-blue-400">很</span><span class="text-red-400">好</span>
    </div>
    <div class="text-6xl font-medium text-center">
      <span class="text-black">这电影</span><span class="text-blue-400">很</span><span class="text-red-400">棒</span>
    </div>
  </div>
  <!-- Word2Vec 覆盖层 -->
  <div v-click="1" v-motion
    :initial="{ opacity: 0, scale: 0.5 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
    class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
    <div class="text-8xl font-bold text-gray-800">
      Word2Vec
    </div>
  </div>
</div>




---

<div class="flex items-center justify-center h-full relative overflow-hidden">
  <!-- 背景模糊文字 -->
  <div class="absolute inset-0 text-gray-400 text-sm leading-relaxed p-8 opacity-40 blur-xs select-none">
    <div class="grid grid-cols-2 gap-4 h-full">
      <div class="space-y-2">
        <p>人工智能技术的发展正在改变我们的生活方式，从智能手机到自动驾驶汽车，从语音助手到机器翻译</p>
        <p>深度学习算法在图像识别、自然语言处理、语音识别等领域取得了突破性进展</p>
        <p>神经网络模型通过大量数据训练，能够学习复杂的模式和规律</p>
        <p>机器学习正在revolutionizing各个行业，包括医疗、金融、教育、娱乐等</p>
        <p>数据科学家利用统计学和计算机科学的方法来分析和解释复杂的数据集</p>
        <p>云计算平台为AI模型的训练和部署提供了强大的计算资源</p>
        <p>自然语言处理技术使得计算机能够理解和生成人类语言</p>
        <p>计算机视觉技术让机器能够识别和理解图像和视频内容</p>
        <p>强化学习算法通过与环境的交互来学习最优策略</p>
        <p>大数据技术处理和分析海量信息，发现隐藏的模式和趋势</p>
        <p>区块链技术为数据安全和隐私保护提供了新的解决方案</p>
        <p>物联网设备产生的数据为AI训练提供了丰富的素材</p>
        <p>边缘计算将AI推理能力部署到设备端，减少延迟和带宽需求</p>
        <p>联邦学习技术在保护数据隐私的同时实现模型的协作训练</p>
        <p>AutoML技术降低了机器学习的门槛，让更多人能够使用AI工具</p>
      </div>
      <div class="space-y-2">
        <p>量子计算有望在未来为AI提供更强大的计算能力</p>
        <p>生成式AI模型能够创造出逼真的图像、文本和音频内容</p>
        <p>多模态AI系统能够同时处理文本、图像、音频等多种类型的数据</p>
        <p>可解释AI技术让我们能够理解模型的决策过程</p>
        <p>AI伦理和公平性问题越来越受到关注和重视</p>
        <p>预训练语言模型在各种NLP任务中展现出了强大的能力</p>
        <p>迁移学习技术让模型能够将在一个任务上学到的知识应用到其他任务</p>
        <p>对抗性训练提高了模型的鲁棒性和安全性</p>
        <p>知识图谱技术帮助AI系统更好地理解和推理知识</p>
        <p>时间序列分析在金融预测、天气预报等领域有重要应用</p>
        <p>推荐系统利用用户行为数据为用户提供个性化的内容和服务</p>
        <p>异常检测技术在网络安全、质量控制等方面发挥重要作用</p>
        <p>优化算法帮助AI系统找到最优的参数和策略</p>
        <p>集成学习方法通过组合多个模型来提高预测性能</p>
        <p>无监督学习从未标记的数据中发现隐藏的结构和模式</p>
      </div>
    </div>
  </div>
  <!-- 前景标题 -->
  <div class="relative z-10 text-center">
    <div class="text-8xl font-bold text-gray-800 mb-4">
      语料库
    </div>
    <div class="text-2xl text-gray-600 font-medium">
      Corpus
    </div>
  </div>
</div>

---
clicks: 1
---

<div class="flex items-center justify-center h-full">
  <div class="w-full max-w-6xl px-8">
    <!-- 标题 -->
    <div v-click="1" class="text-center mb-12">
      <div class="text-5xl font-bold text-gray-800 mb-3 tracking-wide">这视频很棒</div>
    </div>
    <!-- 主要流程图 -->
    <div class="flex items-center justify-between">
      <!-- 左侧：输入词语 -->
      <div class="flex flex-col space-y-12">
        <div class="space-y-12">
          <div class="relative">
            <div v-click="1" class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              视频
            </div>
            <div class="bg-gradient-to-r from-amber-100 to-yellow-100 px-6 py-3 rounded-xl border border-amber-200 shadow-md text-center font-medium text-lg hover:shadow-lg transition-shadow">
              前一个词
            </div>
          </div>
          <div class="relative">
            <div v-click="1" class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              棒
            </div>
            <div class="bg-gradient-to-r from-amber-100 to-yellow-100 px-6 py-3 rounded-xl border border-amber-200 shadow-md text-center font-medium text-lg hover:shadow-lg transition-shadow">
              后一个词
            </div>
          </div>
        </div>
      </div>
      <!-- 箭头 -->
      <div class="flex flex-col items-center mx-10">
        <div class="text-lg font-semibold text-gray-600 mb-3">输入</div>
        <div class="text-3xl text-blue-500">→</div>
      </div>
      <!-- 中间：神经网络 -->
      <div class="flex flex-col items-center">
        <div class="text-lg font-semibold text-gray-700 mb-6">神经网络模型</div>
        <div class="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border border-blue-200 shadow-xl">
          <svg width="200" height="150" viewBox="0 0 200 150" class="mx-auto">
            <!-- 输入层 -->
            <circle cx="30" cy="30" r="10" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
            <circle cx="30" cy="60" r="10" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
            <circle cx="30" cy="90" r="10" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
            <circle cx="30" cy="120" r="10" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
            <!-- 隐藏层 -->
            <circle cx="100" cy="40" r="10" fill="#34d399" stroke="#059669" stroke-width="2"/>
            <circle cx="100" cy="70" r="10" fill="#34d399" stroke="#059669" stroke-width="2"/>
            <circle cx="100" cy="100" r="10" fill="#34d399" stroke="#059669" stroke-width="2"/>
            <!-- 输出层 -->
            <circle cx="170" cy="55" r="10" fill="#f87171" stroke="#dc2626" stroke-width="2"/>
            <circle cx="170" cy="85" r="10" fill="#f87171" stroke="#dc2626" stroke-width="2"/>
            <!-- 连接线 -->
            <line x1="40" y1="30" x2="90" y2="40" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="40" y1="30" x2="90" y2="70" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="40" y1="30" x2="90" y2="100" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="40" y1="60" x2="90" y2="40" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="40" y1="60" x2="90" y2="70" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="40" y1="60" x2="90" y2="100" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="40" y1="90" x2="90" y2="40" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="40" y1="90" x2="90" y2="70" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="40" y1="90" x2="90" y2="100" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="40" y1="120" x2="90" y2="40" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="40" y1="120" x2="90" y2="70" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="40" y1="120" x2="90" y2="100" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="110" y1="40" x2="160" y2="55" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="110" y1="40" x2="160" y2="85" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="110" y1="70" x2="160" y2="55" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="110" y1="70" x2="160" y2="85" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="110" y1="100" x2="160" y2="55" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
            <line x1="110" y1="100" x2="160" y2="85" stroke="#6b7280" stroke-width="1.5" opacity="0.7"/>
          </svg>
        </div>
      </div>
      <!-- 箭头 -->
      <div class="flex flex-col items-center mx-10">
        <div class="text-lg font-semibold text-gray-600 mb-3">输出</div>
        <div class="text-3xl text-green-500">→</div>
      </div>
      <!-- 右侧：输出 -->
      <div class="flex flex-col items-center">
        <div class="relative">
          <div v-click="1" class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            很
          </div>
          <div class="bg-gradient-to-r from-rose-100 to-pink-100 px-8 py-4 rounded-xl border border-rose-200 shadow-md text-center font-medium text-lg hover:shadow-lg transition-shadow">
            中间词
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---
clicks: 1
---

<div class="flex items-center justify-center h-full">
  <table class="border-collapse border-2 border-gray-400 text-sm">
    <tbody>
      <!-- 第一行：原表头内容 -->
      <tr class="bg-gradient-to-r from-pink-100 to-pink-200">
        <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">这</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.2</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.1</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">......</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.4</td>
      </tr>
      <!-- 第二行：很 -->
      <tr class="bg-green-50">
        <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">很</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.5</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.7</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">......</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.4</td>
      </tr>
      <!-- 第三行：省略号 -->
      <tr class="bg-yellow-50">
        <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">......</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.4</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.3</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">......</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.2</td>
      </tr>
      <!-- 第四行：视频 -->
      <tr class="bg-green-50">
        <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">视频</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.6</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.7</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">......</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.7</td>
      </tr>
      <!-- 第五行：棒 -->
      <tr class="bg-yellow-50">
        <td class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">棒</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.9</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.3</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">......</td>
        <td v-click="1" class="border border-gray-400 p-2 w-16 h-12 text-center font-bold text-gray-800">0.1</td>
      </tr>
    </tbody>
  </table>
</div>

---
clicks: 8
---

<div class="relative flex flex-col h-full">
  <!-- 第7步：前向传播指示器 -->
  <div v-click="7" class="absolute left-1/2 top-8 transform -translate-x-1/2 z-20">
    <div class="bg-blue-500 text-white px-16 py-6 rounded-3xl shadow-2xl text-3xl font-extrabold tracking-wider min-w-[320px] text-center">
      前向传播
    </div>
  </div>
  <!-- 第8步：反向传播指示器 -->
  <div v-click="8" class="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-20">
    <div class="bg-pink-500 text-white px-16 py-6 rounded-3xl shadow-2xl text-3xl font-extrabold tracking-wider min-w-[320px] text-center">
      反向传播
    </div>
  </div>
  <!-- 输入数据部分 -->
  <div class="flex-1 flex items-center justify-center">
    <div class="w-full max-w-6xl px-4">
      <!-- 输入数据表格 -->
      <div class="flex items-center justify-between mb-4">
        <!-- 左侧：输入数据 -->
        <div class="flex flex-col items-center">
          <div v-click="1" class="mb-2">
            <div class="text-sm font-bold mb-1 text-center" :class="$clicks >= 6 ? 'text-purple-600' : 'text-gray-700'">{{ $clicks >= 6 ? '更新后词表' : '输入数据' }}</div>
            <table class="border-collapse border-2 border-gray-400 text-xs">
              <tbody>
                <tr class="bg-gradient-to-r from-yellow-100 to-yellow-200">
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold text-gray-800">这</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.1' : '0.2' }}</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.2' : '0.1' }}</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">...</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.3' : '0.4' }}</td>
                </tr>
                <tr class="bg-gradient-to-r from-green-100 to-green-200">
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold text-gray-800">很</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.4' : '0.5' }}</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.8' : '0.7' }}</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">...</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.3' : '0.4' }}</td>
                </tr>
                <tr class="bg-gradient-to-r from-yellow-100 to-yellow-200">
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold text-gray-800">...</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.3' : '0.4' }}</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.4' : '0.3' }}</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">...</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.3' : '0.2' }}</td>
                </tr>
                <tr class="bg-gradient-to-r from-green-100 to-green-200">
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold text-gray-800">视频</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.7' : '0.6' }}</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.6' : '0.7' }}</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">...</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.8' : '0.7' }}</td>
                </tr>
                <tr class="bg-gradient-to-r from-yellow-100 to-yellow-200">
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold text-gray-800">棒</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.8' : '0.9' }}</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.4' : '0.3' }}</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">...</td>
                  <td class="border border-gray-400 p-1 w-12 h-8 text-center font-bold" :class="$clicks >= 6 ? 'text-blue-600' : 'text-red-600'">{{ $clicks >= 6 ? '0.2' : '0.1' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 箭头1 -->
        <div v-click="2" class="flex flex-col items-center mx-3">
          <div class="text-2xl text-blue-500">→</div>
        </div>
        <!-- 神经网络模型 -->
        <div class="flex flex-col items-center">
          <div v-click="2" class="mb-2">
            <div class="text-sm font-bold text-gray-700 mb-1 text-center">神经网络模型</div>
            <div class="bg-gradient-to-br from-blue-50 to-indigo-100 p-3 rounded-xl border border-blue-200 shadow-lg">
              <svg width="120" height="90" viewBox="0 0 160 120" class="mx-auto">
                <!-- 输入层 -->
                <circle cx="25" cy="25" r="8" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
                <circle cx="25" cy="45" r="8" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
                <circle cx="25" cy="65" r="8" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
                <circle cx="25" cy="85" r="8" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
                <circle cx="25" cy="105" r="8" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
                <!-- 隐藏层 -->
                <circle cx="80" cy="35" r="8" fill="#34d399" stroke="#059669" stroke-width="2"/>
                <circle cx="80" cy="55" r="8" fill="#34d399" stroke="#059669" stroke-width="2"/>
                <circle cx="80" cy="75" r="8" fill="#34d399" stroke="#059669" stroke-width="2"/>
                <!-- 输出层 -->
                <circle cx="135" cy="45" r="8" fill="#f87171" stroke="#dc2626" stroke-width="2"/>
                <circle cx="135" cy="65" r="8" fill="#f87171" stroke="#dc2626" stroke-width="2"/>
                <circle cx="135" cy="85" r="8" fill="#f87171" stroke="#dc2626" stroke-width="2"/>
                <!-- 连接线 -->
                <line x1="33" y1="25" x2="72" y2="35" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="25" x2="72" y2="55" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="25" x2="72" y2="75" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="45" x2="72" y2="35" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="45" x2="72" y2="55" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="45" x2="72" y2="75" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="65" x2="72" y2="35" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="65" x2="72" y2="55" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="65" x2="72" y2="75" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="85" x2="72" y2="35" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="85" x2="72" y2="55" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="85" x2="72" y2="75" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="105" x2="72" y2="35" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="105" x2="72" y2="55" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="33" y1="105" x2="72" y2="75" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="88" y1="35" x2="127" y2="45" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="88" y1="35" x2="127" y2="65" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="88" y1="35" x2="127" y2="85" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="88" y1="55" x2="127" y2="45" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="88" y1="55" x2="127" y2="65" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="88" y1="55" x2="127" y2="85" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="88" y1="75" x2="127" y2="45" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="88" y1="75" x2="127" y2="65" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
                <line x1="88" y1="75" x2="127" y2="85" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
              </svg>
            </div>
          </div>
        </div>
        <!-- 箭头2 -->
        <div v-click="3" class="flex flex-col items-center mx-3">
          <div class="text-2xl text-green-500">→</div>
        </div>
        <!-- 输出结果 -->
        <div class="flex flex-col items-center">
          <div v-click="3" class="mb-2">
            <div class="text-sm font-bold text-gray-700 mb-1 text-center">输出</div>
            <table class="border-collapse border-2 border-gray-400 text-xs">
              <tbody>
                <tr class="bg-gradient-to-r from-gray-100 to-gray-200">
                  <td class="border border-gray-400 p-1 w-10 h-6 text-center font-bold text-gray-800">这</td>
                  <td class="border border-gray-400 p-1 w-10 h-6 text-center font-bold text-gray-600">0.1</td>
                </tr>
                <tr class="bg-gradient-to-r from-red-100 to-red-200">
                  <td class="border border-gray-400 p-1 w-10 h-6 text-center font-bold text-gray-800">很</td>
                  <td class="border border-gray-400 p-1 w-10 h-6 text-center font-bold text-red-600">0.5</td>
                </tr>
                <tr class="bg-gradient-to-r from-gray-100 to-gray-200">
                  <td class="border border-gray-400 p-1 w-10 h-6 text-center font-bold text-gray-800">...</td>
                  <td class="border border-gray-400 p-1 w-10 h-6 text-center font-bold text-gray-600">0.1</td>
                </tr>
                <tr class="bg-gradient-to-r from-gray-100 to-gray-200">
                  <td class="border border-gray-400 p-1 w-10 h-6 text-center font-bold text-gray-800">视频</td>
                  <td class="border border-gray-400 p-1 w-10 h-6 text-center font-bold text-gray-600">0.1</td>
                </tr>
                <tr class="bg-gradient-to-r from-gray-100 to-gray-200">
                  <td class="border border-gray-400 p-1 w-10 h-6 text-center font-bold text-gray-800">棒</td>
                  <td class="border border-gray-400 p-1 w-10 h-6 text-center font-bold text-gray-600">0.2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- 损失计算部分 -->
      <div class="flex items-center justify-center space-x-4">
        <!-- 预测值 vs 真实值 -->
        <div v-click="4" class="flex flex-col items-center">
          <div class="text-sm font-bold text-gray-700 mb-1">预测值</div>
          <div class="bg-red-100 p-2 rounded-lg border border-red-200">
            <div class="text-sm font-bold text-red-600">很: 0.5</div>
          </div>
        </div>
        <div v-click="4" class="text-lg font-bold text-gray-600">vs</div>
        <div v-click="4" class="flex flex-col items-center">
          <div class="text-sm font-bold text-gray-700 mb-1">真实值</div>
          <div class="bg-green-100 p-2 rounded-lg border border-green-200">
            <div class="text-sm font-bold text-green-600">很: 1.0</div>
          </div>
        </div>
        <!-- 损失计算 -->
        <div v-click="5" class="flex flex-col items-center ml-4">
          <div class="text-sm font-bold text-gray-700 mb-1">损失</div>
          <div class="bg-red-50 p-2 rounded-lg border border-red-200">
            <div class="text-sm font-bold text-red-600">-log(0.5)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---
clicks: 2
---

<div class="flex items-center justify-center h-full w-full relative">
  <!-- 词表矩阵，初始居中，点击后左移 -->
  <div v-motion
    :initial="{ x: 0, opacity: 1 }"
    :click-1="{ x: -120, opacity: 1, transition: { duration: 700 } }"
    class="transition-all duration-700">
    <div class="flex flex-col items-center">
      <div class="bg-red-400 text-white text-3xl font-bold px-8 py-2 rounded-lg mb-4 shadow-lg tracking-widest">词表矩阵</div>
      <table class="border-collapse border-2 border-gray-400 text-lg shadow-xl">
        <tbody>
          <tr class="bg-yellow-50">
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-bold text-gray-800">这</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">0.2</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">0.1</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">...</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">0.4</td>
          </tr>
          <tr class="bg-green-50">
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-bold text-gray-800">很</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">0.5</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">0.7</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">...</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">0.4</td>
          </tr>
          <tr class="bg-yellow-50">
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-bold text-gray-800">......</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">0.4</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">0.3</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">...</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">0.2</td>
          </tr>
          <tr :class="[$clicks >= 1 ? 'bg-red-100 font-bold' : 'bg-green-50', 'transition-colors duration-500']">
            <td :class="[$clicks >= 1 ? 'text-white bg-red-400' : '', 'border border-gray-400 p-4 w-20 h-14 text-center font-bold']">视频</td>
            <td :class="[$clicks >= 1 ? 'text-red-600 bg-red-100' : '', 'border border-gray-400 p-4 w-20 h-14 text-center font-mono italic']">0.4</td>
            <td :class="[$clicks >= 1 ? 'text-red-600 bg-red-100' : '', 'border border-gray-400 p-4 w-20 h-14 text-center font-mono italic']">0.2</td>
            <td :class="[$clicks >= 1 ? 'text-red-600 bg-red-100' : '', 'border border-gray-400 p-4 w-20 h-14 text-center font-mono italic']">...</td>
            <td :class="[$clicks >= 1 ? 'text-red-600 bg-red-100' : '', 'border border-gray-400 p-4 w-20 h-14 text-center font-mono italic']">0.1</td>
          </tr>
          <tr class="bg-yellow-50">
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-bold text-gray-800">棒</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">0.3</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">0.6</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">...</td>
            <td class="border border-gray-400 p-4 w-20 h-14 text-center font-mono italic">0.1</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- 右侧：视频，点击后出现 -->
  <div v-motion
    :initial="{ opacity: 0, x: 100 }"
    :click-1="{ opacity: 1, x: 0, transition: { duration: 700 } }"
    class="absolute right-12 top-1/2 transform -translate-y-1/2 flex items-center">
    <div class="text-7xl font-bold text-yellow-700 tracking-widest select-none">视频</div>
  </div>
</div>