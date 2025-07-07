---
theme: seriph
title: 词向量如何演进
info: |
  ## 词向量如何演进

class: text-center
drawings:
  persist: false
transition: fade
mdc: true
layout: cover
background: '#ffffff'
---

<div class="flex items-center justify-center h-full w-full">
  <div class="text-center">
    <div class="text-6xl font-light text-black mb-8 tracking-tight">
      词向量如何演进
    </div>
    <div class="text-2xl font-normal text-gray-600">
      从统计到语义的技术变革
    </div>
  </div>
</div>

<style>
.slidev-layout {
  background: white !important;
}
</style>

---
clicks: 5
---

<div class="flex items-center justify-center h-full">
  <div class="text-center">
    <!-- 第一步：默认展示 NLP -->
    <div v-if="$clicks === 0" v-motion
      :initial="{ opacity: 1, scale: 1 }"
      class="text-6xl font-light text-black tracking-tight">
      NLP
    </div>
    <!-- 第二步：点击后出现 自然语言处理 -->
    <div v-if="$clicks === 1" v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-6xl font-light text-black tracking-tight">
      自然语言处理
    </div>
    <!-- 第三步：点击后出现具体应用 -->
    <div v-if="$clicks >= 2" v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="flex items-center justify-center text-4xl font-light text-black">
      <!-- 可切换的应用名称 -->
      <div class="mr-4 relative">
        <transition name="fade" mode="out-in">
          <span v-if="$clicks === 2" key="classify" class="text-black inline-block">文本分类</span>
          <span v-else-if="$clicks === 3" key="translate" class="text-black inline-block">文本翻译</span>
          <span v-else-if="$clicks === 4" key="search" class="text-black inline-block">信息检索</span>
          <span v-else-if="$clicks >= 5" key="semantic" class="text-black inline-block">语义搜索</span>
        </transition>
      </div>
      <!-- 固定的后缀 -->
      <div class="text-2xl font-normal text-gray-600">
        等文字处理相关工作
      </div>
    </div>
  </div>
</div>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

---


<div class="flex items-center justify-center h-full">
  <div class="text-center max-w-4xl">
    <!-- 主标题 -->
    <div class="text-6xl font-light text-black mb-12 tracking-tight">
      文本向量化
    </div>
    <!-- 副标题 -->
    <div class="text-2xl font-normal text-gray-600 mb-16 leading-relaxed">
      将人类语言转换为计算机可理解的数字向量
    </div>
    <!-- 示例展示 -->
    <div class="space-y-8">
      <!-- 文本示例 -->
      <div class="bg-white border border-black rounded-lg p-8 shadow-sm">
        <div class="text-lg font-normal text-black mb-6">
          "我爷爷种了一片茶园，你愿意买茶么"
        </div>
        <!-- 转换箭头 -->
        <div class="flex items-center justify-center my-8">
          <div class="w-12 h-px bg-black"></div>
          <div class="mx-6 text-black font-medium">转换</div>
          <div class="w-12 h-px bg-black"></div>
        </div>
        <!-- 向量结果 -->
        <div class="bg-black text-white px-6 py-3 rounded font-mono text-sm">
          [0.2, 0.8, 0.1, 0.9, 0.3, 0.7, 0.4, ...]
        </div>
      </div>
      <!-- 说明文字 -->
      <div class="text-lg font-normal text-gray-600 mt-8">
        向量化后，计算机就能处理和分析文本了
      </div>
    </div>
  </div>
</div>


---

# 文本向量化方法

<div class="h-full flex flex-col justify-center">

<div class="relative w-full h-80 flex items-center">
  <!-- Timeline line -->
  <div class="absolute left-10 right-10 top-1/2 h-1 bg-black rounded-full"></div>
  
  <!-- Timeline points -->
  <div class="absolute left-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
    <div class="w-4 h-4 bg-black rounded-full border-2 border-white shadow-lg z-10"></div>
    <div class="mt-6 text-center">
      <div class="font-medium text-lg text-black">词袋法</div>
      <div class="text-sm text-gray-600">1990年代</div>
    </div>
  </div>
  
  <div class="absolute left-1/4 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
    <div class="w-4 h-4 bg-black rounded-full border-2 border-white shadow-lg z-10"></div>
    <div class="mt-6 text-center">
      <div class="font-medium text-lg text-black">TF-IDF</div>
      <div class="text-sm text-gray-600">2000年代</div>
    </div>
  </div>
  
  <div class="absolute left-1/2 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
    <div class="w-4 h-4 bg-black rounded-full border-2 border-white shadow-lg z-10"></div>
    <div class="mt-6 text-center">
      <div class="font-medium text-lg text-black">WORD2VEC</div>
      <div class="text-sm text-gray-600">2013年</div>
    </div>
  </div>
  
  <div class="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
    <div class="w-4 h-4 bg-black rounded-full border-2 border-white shadow-lg z-10"></div>
    <div class="mt-6 text-center">
      <div class="font-medium text-lg text-black">BGE</div>
      <div class="text-sm text-gray-600">2023年</div>
    </div>
  </div>
</div>

</div>




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
  <WordTable 
    :data="[
      ['促销', '速点', '链接', '免费', '领取'],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ]"
    :show-header="false"
  />
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
    class="text-6xl font-light text-center text-black leading-relaxed mb-8 tracking-tight">
    有没有这个词
  </div>
  
  <!-- 第二句话，点击后在中央显示 -->
  <div v-motion
    v-click="1"
    :initial="{ opacity: 0, y: 100, scale: 0.8 }"
    :enter="{ opacity: 1, y: 50, scale: 1, transition: { duration: 800, delay: 200 } }"
    class="text-2xl text-center text-gray-600 max-w-4xl leading-relaxed absolute font-normal">
    对于一些特定的场景，有没有这个词就可以鉴别了
  </div>
</div>



---

<div class="flex items-center justify-center h-full">
  <div class="text-6xl font-light text-center text-black tracking-tight">
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
    class="text-6xl font-light text-black text-center mb-8 tracking-tight">
    有没有这个词
  </div>
  
  <!-- 箭头 -->
  <div v-motion
    v-click="1"
    :initial="{ opacity: 0, scale: 0 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 500 } }"
    class="text-5xl text-gray-600 mb-8">
    →
  </div>
  
  <!-- 第二行文字 -->
  <div v-motion
    v-click="1"
    :initial="{ opacity: 0, y: 0 }"
    :enter="{ opacity: 1, y: 20, transition: { delay: 200, duration: 600 } }"
    class="text-6xl font-light text-black text-center tracking-tight">
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

<div class="flex flex-col items-center justify-center h-full space-y-12">
  <!-- 虚假的关键词 -->
  <div class="w-full max-w-4xl">
    <div :class="{ 
      'bg-gray-50 border border-black shadow-sm': $clicks >= 3 
    }" class="rounded-lg p-6 transition-all duration-500">
      <div v-click="3" v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="bg-gray-600 text-white px-4 py-2 rounded inline-block mb-6 font-medium text-lg tracking-tight">
        虚假的关键词
      </div>
      <div v-click="1" class="grid grid-cols-3 gap-6">
        <div class="text-center p-4 bg-white border border-gray-100 rounded-lg transition-all duration-300 hover:shadow-sm">
          <div class="text-2xl font-light text-black mb-2 tracking-tight">常见</div>
          <div class="text-base font-normal text-gray-600">频繁出现</div>
        </div>
        <div class="text-center p-4 bg-white border border-gray-100 rounded-lg transition-all duration-300 hover:shadow-sm">
          <div class="text-2xl font-light text-black mb-2 tracking-tight">像路人甲</div>
          <div class="text-base font-normal text-gray-600">缺乏特色</div>
        </div>
        <div class="text-center p-4 bg-white border border-gray-100 rounded-lg transition-all duration-300 hover:shadow-sm">
          <div class="text-2xl font-light text-black mb-2 tracking-tight">不特别</div>
          <div class="text-base font-normal text-gray-600">无区分度</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 真实的关键词 -->
  <div class="w-full max-w-4xl">
    <div :class="{ 
      'bg-white border border-black shadow-sm': $clicks >= 3 
    }" class="rounded-lg p-6 transition-all duration-500">
      <div v-click="3" v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="bg-black text-white px-4 py-2 rounded inline-block mb-6 font-medium text-lg tracking-tight">
        真实的关键词
      </div>
      <div v-click="2" class="grid grid-cols-3 gap-6">
        <div class="text-center p-4 bg-white border border-gray-100 rounded-lg transition-all duration-300 hover:shadow-sm">
          <div class="text-2xl font-light text-black mb-2 tracking-tight">稀有</div>
          <div class="text-base font-normal text-gray-600">出现较少</div>
        </div>
        <div class="text-center p-4 bg-white border border-gray-100 rounded-lg transition-all duration-300 hover:shadow-sm">
          <div class="text-2xl font-light text-black mb-2 tracking-tight">有区分度</div>
          <div class="text-base font-normal text-gray-600">独特性强</div>
        </div>
        <div class="text-center p-4 bg-white border border-gray-100 rounded-lg transition-all duration-300 hover:shadow-sm">
          <div class="text-2xl font-light text-black mb-2 tracking-tight">代表性</div>
          <div class="text-base font-normal text-gray-600">能够标识</div>
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
    class="text-6xl font-light text-black tracking-tight">
    词频
  </div>
  
  <!-- 稀有 - 点击后从左侧移动到右侧 -->
  <div v-motion
    v-click="1"
    :initial="{ opacity: 0, x: -100 }"
    :enter="{ opacity: 1, x: 100, transition: { duration: 800 } }"
    class="text-6xl font-light text-black tracking-tight">
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
    <SentenceCard variant="blue" :is-active="$clicks === 1">
      <div class="text-lg font-medium flex flex-wrap gap-2">
        <span class="font-bold mr-2">长度 4：</span>
        <span class="bg-white px-2 py-1 rounded border">促销</span>
        <span class="bg-white px-2 py-1 rounded border">促销</span>
        <span class="bg-white px-2 py-1 rounded border">速点</span>
        <span class="bg-white px-2 py-1 rounded border">链接</span>
      </div>
    </SentenceCard>
    <!-- 句子2 -->
    <SentenceCard variant="green" :is-active="$clicks === 2">
      <div class="text-lg font-medium flex flex-wrap gap-2">
        <span class="font-bold mr-2">长度 3：</span>
        <span class="bg-white px-2 py-1 rounded border">促销</span>
        <span class="bg-white px-2 py-1 rounded border">速点</span>
        <span class="bg-white px-2 py-1 rounded border">领取</span>
      </div>
    </SentenceCard>
    <!-- 句子3 -->
    <SentenceCard variant="purple" :is-active="$clicks === 3">
      <div class="text-lg font-medium flex flex-wrap gap-2">
        <span class="font-bold mr-2">长度 3：</span>
        <span class="bg-white px-2 py-1 rounded border">免费</span>
        <span class="bg-white px-2 py-1 rounded border">速点</span>
        <span class="bg-white px-2 py-1 rounded border">链接</span>
      </div>
    </SentenceCard>
  </div>
  
  <!-- 右侧：词表 -->
  <div class="flex-1 flex justify-center">
    <div v-click="1">
      <WordTable 
        :data="[
          ['2/4=0.5', '1/4=0.25', '1/4=0.25', '0/4=0', '0/4=0'],
          ['1/3=0.33', '1/3=0.33', '0/3=0', '0/3=0', '1/3=0.33'],
          ['0/3=0', '1/3=0.33', '1/3=0.33', '1/3=0.33', '0/3=0']
        ]"
        cell-size="w-20 h-16"
        table-class="text-lg"
        text-color="text-red-600"
        :row-colors="['bg-white', 'bg-white', 'bg-white']"
      />
    </div>
  </div>
</div>

---
clicks: 1
---

# 稀有
<div class="flex flex-col items-center justify-center h-full space-y-12">
  <!-- 第一段 -->
  <div class="text-center">
    <div class="text-lg font-normal text-gray-600 mb-4">总文档数</div>
    <div class="text-6xl font-light text-black tracking-tight">10,000</div>
  </div>
  <!-- 第二段 -->
  <div class="text-center">
    <div class="text-lg font-normal text-gray-600 mb-4">含有这个词语的文档数</div>
    <div class="text-6xl font-light text-black tracking-tight">1</div>
  </div>
  <!-- 第三段 - 需要点击才显示 -->
  <div v-click="1" class="text-center">
    <div class="text-lg font-normal text-gray-600 mb-4">稀有度</div>
    <div class="text-4xl font-light text-black tracking-tight">10,000 ÷ 1 = 10,000</div>
  </div>
</div>

---
clicks: 1
---

<div class="flex flex-col items-center justify-center h-full space-y-12">
  <!-- 公式展示 -->
  <div class="bg-white border border-black p-8 rounded-lg shadow-sm">
    <div class="text-center">
      <div class="flex items-center justify-center text-3xl font-light">
        <span class="text-black font-medium tracking-tight">稀有度 = </span>
        <span v-if="$clicks >= 1" class="text-black font-light mx-2">log(</span>
        <div class="bg-gray-50 border border-gray-200 px-4 py-3 rounded mx-2">
          <div class="text-lg font-normal text-black text-center">总文档数</div>
          <div class="border-t border-gray-300 my-2"></div>
          <div class="text-lg font-normal text-black text-center">含有词语的文档数</div>
        </div>
        <span v-if="$clicks >= 1" class="text-black font-light mx-2">)</span>
      </div>
    </div>
  </div>
  <!-- 图表展示 -->
  <div class="w-full max-w-4xl h-72">
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
<div v-motion
:initial="{ opacity: 1, y: 0 }"
:enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
:click-1="{ y: -30, transition: { duration: 800 } }"
class="text-6xl font-light text-black text-center mb-8 tracking-tight">
有多少这个词
</div>
<div v-motion
v-click="1"
:initial="{ opacity: 0, scale: 0.8 }"
:enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
class="text-5xl font-light text-black mb-8">
+
</div>
<div v-motion
v-click="1"
:initial="{ opacity: 0, y: 40 }"
:enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
class="text-6xl font-light text-black text-center tracking-tight">
这个词有多稀缺
</div>
</div>




---


<div class="flex items-center justify-center h-full">
  <div class="text-6xl font-light text-center text-black tracking-tight">
    没有捕捉到语义
  </div>
</div>

---
clicks: 2
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
    <div class="flex flex-col items-center space-y-8">
      <div class="text-8xl font-bold text-gray-800">
        Word2Vec
      </div>
      <div class="flex flex-col items-center space-y-4">
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
</div>




---

<div class="flex items-center justify-center h-full relative overflow-hidden">
  <!-- 背景模糊文字 -->
  <div class="absolute inset-0 text-gray-400 text-sm leading-relaxed p-8 opacity-20 blur-xs select-none">
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
    <div class="text-6xl font-light text-black mb-6 tracking-tight">
      语料库
    </div>
    <div class="text-2xl text-gray-600 font-normal">
      Corpus
    </div>
  </div>
</div>

---
clicks: 1
---

<!-- 26页 -->

<div class="flex items-center justify-center h-full">
  <div class="w-full max-w-6xl">
    <!-- 标题 -->
    <div v-click="1" class="text-center mb-16">
      <div class="text-6xl font-light text-black tracking-tight">这视频很棒</div>
    </div>
    <!-- 主要流程图 -->
    <div class="flex items-center justify-between px-8">
      <!-- 左侧：输入词语 -->
      <div class="flex flex-col space-y-16">
        <div class="relative">
          <div v-click="1" class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded text-sm font-normal">
            视频
          </div>
          <div class="bg-white border border-black px-8 py-4 text-center font-normal text-lg">
            前一个词
          </div>
        </div>
        <div class="relative">
          <div v-click="1" class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded text-sm font-normal">
            棒
          </div>
          <div class="bg-white border border-black px-8 py-4 text-center font-normal text-lg">
            后一个词
          </div>
        </div>
      </div>
      <!-- 箭头 -->
      <div class="flex flex-col items-center mx-12">
        <div class="text-lg font-normal text-black mb-4">输入</div>
        <div class="text-4xl text-black">→</div>
      </div>
      <!-- 中间：神经网络 -->
      <NeuralNetwork 
        title="神经网络模型"
        :width="200"
        :height="150"
        container-class="p-8"
      />
      <!-- 箭头 -->
      <div class="flex flex-col items-center mx-12">
        <div class="text-lg font-normal text-black mb-4">输出</div>
        <div class="text-4xl text-black">→</div>
      </div>
      <!-- 右侧：输出 -->
      <div class="flex flex-col items-center">
        <div class="relative">
          <div v-click="1" class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded text-sm font-normal">
            很
          </div>
          <div class="bg-white border border-black px-8 py-4 text-center font-normal text-lg">
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
  <table class="border-collapse border border-black bg-white text-lg">
    <tbody>
      <!-- 第一行：这 -->
      <tr class="bg-white">
        <td class="border border-black p-4 w-20 h-16 text-center font-medium text-black">这</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.2</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.1</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-400">···</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.4</td>
      </tr>
      <!-- 第二行：很 -->
      <tr class="bg-white">
        <td class="border border-black p-4 w-20 h-16 text-center font-medium text-black">很</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.5</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.7</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-400">···</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.4</td>
      </tr>
      <!-- 第三行：省略号 -->
      <tr class="bg-white">
        <td class="border border-black p-4 w-20 h-16 text-center font-medium text-black">···</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.4</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.3</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-400">···</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.2</td>
      </tr>
      <!-- 第四行：视频 -->
      <tr class="bg-white">
        <td class="border border-black p-4 w-20 h-16 text-center font-medium text-black">视频</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.6</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.7</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-400">···</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.7</td>
      </tr>
      <!-- 第五行：棒 -->
      <tr class="bg-white">
        <td class="border border-black p-4 w-20 h-16 text-center font-medium text-black">棒</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.9</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.3</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-400">···</td>
        <td v-click="1" class="border border-black p-4 w-20 h-16 text-center font-normal text-gray-600">0.1</td>
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
    <div class="bg-black text-white px-12 py-4 rounded text-2xl font-light tracking-tight">
      前向传播
    </div>
  </div>
  <!-- 第8步：反向传播指示器 -->
  <div v-click="8" class="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-20">
    <div class="bg-black text-white px-12 py-4 rounded text-2xl font-light tracking-tight">
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
          <div v-click="1" class="mb-4">
            <div class="text-lg font-normal mb-2 text-center text-black">{{ $clicks >= 6 ? '更新后词表' : '输入数据' }}</div>
            <table class="border-collapse border border-black bg-white text-sm">
                              <tbody>
                  <tr class="bg-white">
                    <td class="border border-black p-2 w-14 h-10 text-center font-medium text-black">这</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.1' : '0.2' }}</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.2' : '0.1' }}</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-400">···</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.3' : '0.4' }}</td>
                  </tr>
                  <tr class="bg-white">
                    <td class="border border-black p-2 w-14 h-10 text-center font-medium text-black">很</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.4' : '0.5' }}</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.8' : '0.7' }}</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-400">···</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.3' : '0.4' }}</td>
                  </tr>
                  <tr class="bg-white">
                    <td class="border border-black p-2 w-14 h-10 text-center font-medium text-black">···</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.3' : '0.4' }}</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.4' : '0.3' }}</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-400">···</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.3' : '0.2' }}</td>
                  </tr>
                  <tr class="bg-white">
                    <td class="border border-black p-2 w-14 h-10 text-center font-medium text-black">视频</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.7' : '0.6' }}</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.6' : '0.7' }}</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-400">···</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.8' : '0.7' }}</td>
                  </tr>
                  <tr class="bg-white">
                    <td class="border border-black p-2 w-14 h-10 text-center font-medium text-black">棒</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.8' : '0.9' }}</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.4' : '0.3' }}</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-400">···</td>
                    <td class="border border-black p-2 w-14 h-10 text-center font-normal text-gray-600">{{ $clicks >= 6 ? '0.2' : '0.1' }}</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 箭头1 -->
        <div v-click="2" class="flex flex-col items-center mx-6">
          <div class="text-3xl text-black">→</div>
        </div>
        <!-- 神经网络模型 -->
        <div v-click="2">
          <NeuralNetwork 
            title="神经网络模型"
            :width="120"
            :height="90"
            :viewBoxWidth="160"
            :viewBoxHeight="120"
            :inputCount="5"
            :hiddenCount="3"
            :outputCount="3"
            :nodeRadius="7"
            container-class="p-3"
          />
        </div>
        <!-- 箭头2 -->
        <div v-click="3" class="flex flex-col items-center mx-6">
          <div class="text-3xl text-black">→</div>
        </div>
        <!-- 输出结果 -->
        <div class="flex flex-col items-center">
          <div v-click="3" class="mb-4">
            <div class="text-lg font-normal text-black mb-2 text-center">输出</div>
            <table class="border-collapse border border-black bg-white text-sm">
              <tbody>
                <tr class="bg-white">
                  <td class="border border-black p-2 w-12 h-8 text-center font-medium text-black">这</td>
                  <td class="border border-black p-2 w-12 h-8 text-center font-normal text-gray-600">0.1</td>
                </tr>
                <tr class="bg-white">
                  <td class="border border-black p-2 w-12 h-8 text-center font-medium text-black">很</td>
                  <td class="border border-black p-2 w-12 h-8 text-center font-normal text-black">0.5</td>
                </tr>
                <tr class="bg-white">
                  <td class="border border-black p-2 w-12 h-8 text-center font-medium text-black">···</td>
                  <td class="border border-black p-2 w-12 h-8 text-center font-normal text-gray-600">0.1</td>
                </tr>
                <tr class="bg-white">
                  <td class="border border-black p-2 w-12 h-8 text-center font-medium text-black">视频</td>
                  <td class="border border-black p-2 w-12 h-8 text-center font-normal text-gray-600">0.1</td>
                </tr>
                <tr class="bg-white">
                  <td class="border border-black p-2 w-12 h-8 text-center font-medium text-black">棒</td>
                  <td class="border border-black p-2 w-12 h-8 text-center font-normal text-gray-600">0.2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- 损失计算部分 -->
      <div class="flex items-center justify-center space-x-8 mt-8">
        <!-- 预测值 vs 真实值 -->
        <div v-click="4" class="flex flex-col items-center">
          <div class="text-lg font-normal text-black mb-2">预测值</div>
          <div class="bg-white border border-black p-3 rounded">
            <div class="text-lg font-normal text-black">很: 0.5</div>
          </div>
        </div>
        <div v-click="4" class="text-2xl font-light text-black">vs</div>
        <div v-click="4" class="flex flex-col items-center">
          <div class="text-lg font-normal text-black mb-2">真实值</div>
          <div class="bg-white border border-black p-3 rounded">
            <div class="text-lg font-normal text-black">很: 1.0</div>
          </div>
        </div>
        <!-- 损失计算 -->
        <div v-click="5" class="flex flex-col items-center ml-8">
          <div class="text-lg font-normal text-black mb-2">损失</div>
          <div class="bg-black text-white p-3 rounded">
            <div class="text-lg font-normal">-log(0.5)</div>
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
    :click-1="{ x: -80, opacity: 1, transition: { duration: 800 } }"
    class="transition-all duration-800">
    <div class="flex flex-col items-center">
      <div class="bg-black text-white text-2xl font-light px-8 py-3 mb-8 tracking-tight">词表矩阵</div>
      <table class="border-collapse border border-black bg-white shadow-sm">
        <tbody>
          <tr class="bg-white">
            <td class="border border-black p-6 w-24 h-16 text-center font-medium text-black">这</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-600">0.2</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-600">0.1</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-400">···</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-600">0.4</td>
          </tr>
          <tr class="bg-white">
            <td class="border border-black p-6 w-24 h-16 text-center font-medium text-black">很</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-600">0.5</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-600">0.7</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-400">···</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-600">0.4</td>
          </tr>
          <tr class="bg-white">
            <td class="border border-black p-6 w-24 h-16 text-center font-medium text-black">···</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-600">0.4</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-600">0.3</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-400">···</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-600">0.2</td>
          </tr>
          <tr :class="[$clicks >= 1 ? 'bg-black transition-colors duration-800' : 'bg-white']">
            <td :class="[$clicks >= 1 ? 'text-white' : 'text-black', 'border border-black p-6 w-24 h-16 text-center font-medium transition-colors duration-800']">视频</td>
            <td :class="[$clicks >= 1 ? 'text-white' : 'text-gray-600', 'border border-black p-6 w-24 h-16 text-center font-normal transition-colors duration-800']">0.4</td>
            <td :class="[$clicks >= 1 ? 'text-white' : 'text-gray-600', 'border border-black p-6 w-24 h-16 text-center font-normal transition-colors duration-800']">0.2</td>
            <td :class="[$clicks >= 1 ? 'text-gray-300' : 'text-gray-400', 'border border-black p-6 w-24 h-16 text-center font-normal transition-colors duration-800']">···</td>
            <td :class="[$clicks >= 1 ? 'text-white' : 'text-gray-600', 'border border-black p-6 w-24 h-16 text-center font-normal transition-colors duration-800']">0.1</td>
          </tr>
          <tr class="bg-white">
            <td class="border border-black p-6 w-24 h-16 text-center font-medium text-black">棒</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-600">0.3</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-600">0.6</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-400">···</td>
            <td class="border border-black p-6 w-24 h-16 text-center font-normal text-gray-600">0.1</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- 右侧：视频，点击后出现 -->
  <div v-motion
    :initial="{ opacity: 0, x: 100 }"
    :click-1="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    class="absolute right-16 top-1/2 transform -translate-y-1/2 flex items-center">
    <div class="text-6xl font-light text-black tracking-tight select-none">视频</div>
  </div>
</div>

---
clicks: 2
---

# 词语相似度分析

<div class="flex items-center justify-center h-full w-full">
  <div class="flex w-full max-w-6xl items-center justify-between px-12">
    <!-- 左侧：对比词组 -->
    <div class="flex-1 flex flex-col justify-center space-y-16">
      <div class="text-6xl font-light text-black leading-tight tracking-tight">葡萄 VS 香蕉</div>
      <div class="text-6xl font-light text-black leading-tight tracking-tight">葡萄 VS 高兴</div>
    </div>
    <!-- 右侧：相似度条 -->
    <div class="flex-1 flex flex-col justify-center space-y-16 ml-20">
      <div v-click="1" class="flex items-center space-x-8">
        <div class="flex-1 bg-white border border-black h-6 overflow-hidden">
          <div v-motion
            :initial="{ width: '0%' }"
            :enter="{ width: '85%', transition: { duration: 1200, delay: 300 } }"
            class="h-full bg-black"></div>
        </div>
        <div v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 600, delay: 800 } }"
          class="text-3xl font-light text-black min-w-[80px] text-right">85%</div>
      </div>
      <div v-click="2" class="flex items-center space-x-8">
        <div class="flex-1 bg-white border border-black h-6 overflow-hidden">
          <div v-motion
            :initial="{ width: '0%' }"
            :enter="{ width: '15%', transition: { duration: 800, delay: 300 } }"
            class="h-full bg-gray-600"></div>
        </div>
        <div v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 600, delay: 600 } }"
          class="text-3xl font-light text-black min-w-[80px] text-right">15%</div>
      </div>
    </div>
  </div>
</div>


---
clicks: 4
---


<div class="flex items-center justify-center h-full w-full">
<div class="w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
<div
v-motion
:initial="{ opacity: 1, y: 0 }"
:click-1="{ opacity: 0, y: -30, transition: { duration: 600 } }"
class="text-8xl font-light text-black text-center transition-all duration-600 tracking-tight"
>
Word2Vec 理念
</div>
<div
v-motion
v-click="1"
:initial="{ opacity: 0, y: 40 }"
:enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
:click-2="{ opacity: 0, y: -30, transition: { duration: 600 } }"
class="text-8xl font-light text-black text-center absolute transition-all duration-600 tracking-tight"
>
了解一个人
</div>
<div
v-motion
v-click="2"
:initial="{ opacity: 0, y: 40 }"
:enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
:click-3="{ opacity: 0, y: -30, transition: { duration: 600 } }"
class="text-8xl font-light text-black text-center absolute transition-all duration-600 tracking-tight"
>
不听Ta说了什么
</div>
<div
v-motion
v-click="3"
:initial="{ opacity: 0, y: 40 }"
:enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
:click-4="{ opacity: 0, y: -30, transition: { duration: 600 } }"
class="text-8xl font-light text-black text-center absolute transition-all duration-600 tracking-tight"
>
看周围的朋友
</div>
<div
v-motion
v-click="4"
:initial="{ opacity: 0, y: 40 }"
:enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
class="text-8xl font-light text-black text-center absolute transition-all duration-600 tracking-tight"
>
信息流
</div>
</div>
</div>




---


<div class="flex items-center justify-center h-full w-full">
<div class="text-6xl font-light text-black text-center leading-tight tracking-tight">
新增维度：语义相似度
</div>
</div>



---

<div class="flex items-center justify-center h-full w-full">
<div class="w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
<div
v-motion
:initial="{ opacity: 1, y: 0 }"
:click-1="{ opacity: 0, y: -40, transition: { duration: 500 } }"
class="text-7xl font-bold text-black text-center transition-all duration-500"
>
问题
</div>
<div
v-motion
v-click="1"
:initial="{ opacity: 0, y: 40 }"
:enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
:click-2="{ opacity: 0, y: -40, transition: { duration: 500 } }"
class="text-7xl font-bold text-black text-center absolute transition-all duration-500"
>
词序
</div>
</div>
</div>

---
clicks: 3
---

<div class="flex items-center justify-center h-full w-full relative">
<!-- 主要内容区域 -->
<div class="flex w-full max-w-5xl items-center justify-center gap-24">
<!-- 左侧：我爱你 -->
<div class="flex flex-col items-center">
<div class="text-6xl font-light text-black mb-8 tracking-tight">我爱你</div>
<div v-click="1" class="w-full flex justify-center">
<table class="border-collapse border border-black text-lg bg-white shadow-sm">
<tr>
<td class="border border-black p-3 font-normal text-black">0.6</td>
<td class="border border-black p-3 font-normal text-black">0.7</td>
<td class="border border-black p-3 font-normal text-gray-600">···</td>
<td class="border border-black p-3 font-normal text-black">0.7</td>
</tr>
</table>
</div>
</div>
<!-- 右侧：你爱我 -->
<div class="flex flex-col items-center">
<div class="text-6xl font-light text-gray-600 mb-8 tracking-tight">你爱我</div>
<div v-click="1" class="w-full flex justify-center">
<table class="border-collapse border border-gray-400 text-lg bg-gray-50 shadow-sm">
<tr>
<td class="border border-gray-400 p-3 font-normal text-gray-700">0.7</td>
<td class="border border-gray-400 p-3 font-normal text-gray-700">0.7</td>
<td class="border border-gray-400 p-3 font-normal text-gray-500">···</td>
<td class="border border-gray-400 p-3 font-normal text-gray-700">0.6</td>
</tr>
</table>
</div>
</div>
</div>
<!-- 等号，点击2时出现 -->
<div v-click="2" class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
<div class="text-5xl font-medium text-black select-none">=</div>
</div>
<!-- 叉号，点击3时出现，覆盖全局 -->
<div v-click="3" class="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
<div class="text-8xl font-medium text-black select-none">×</div>
</div>
</div>




---
clicks: 3
---

<div class="flex items-center justify-center h-full w-full gap-24 bg-white relative">
<!-- 左侧内容 -->
<div class="flex flex-col items-center justify-center min-w-[180px]">
<div class="mb-12 flex flex-col items-center">
<div class="text-[6rem]">🍎</div>
<div class="text-3xl font-semibold tracking-widest mt-2 text-gray-800">苹果</div>
</div>
<div class="flex flex-col items-center">
<div class="text-[4.5rem] text-gray-500">📱</div>
<div class="text-3xl font-semibold tracking-widest mt-2 text-gray-800">苹果</div>
</div>
</div>

<!-- 右侧词表，点击后出现 -->
<div v-click="1" class="transition-all duration-500">
<table class="border border-gray-300 text-lg min-w-[420px]">
<thead>
<tr class="bg-gray-50">
<th class="border border-gray-300 p-3 font-medium text-gray-700">梨子</th>
<th class="border border-gray-300 p-3 font-medium text-gray-700">0.2</th>
<th class="border border-gray-300 p-3 font-medium text-gray-700">0.1</th>
<th class="border border-gray-300 p-3 font-medium text-gray-700">...</th>
<th class="border border-gray-300 p-3 font-medium text-gray-700">0.4</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium text-gray-700">葡萄</td>
<td class="border border-gray-300 p-3 text-gray-700">0.5</td>
<td class="border border-gray-300 p-3 text-gray-700">0.7</td>
<td class="border border-gray-300 p-3 text-gray-700">...</td>
<td class="border border-gray-300 p-3 text-gray-700">0.4</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium text-gray-700">......</td>
<td class="border border-gray-300 p-3 text-gray-700">0.4</td>
<td class="border border-gray-300 p-3 text-gray-700">0.3</td>
<td class="border border-gray-300 p-3 text-gray-700">...</td>
<td class="border border-gray-300 p-3 text-gray-700">0.2</td>
</tr>
<tr :class="[$clicks === 2 ? 'bg-red-100' : 'bg-white']">
<td class="border border-gray-300 p-3 font-semibold text-gray-800">
苹果
</td>
<td class="border border-gray-300 p-3 font-semibold" :class="$clicks === 2 ? 'text-red-600' : 'text-gray-800'">0.4</td>
<td class="border border-gray-300 p-3 font-semibold" :class="$clicks === 2 ? 'text-red-600' : 'text-gray-800'">0.2</td>
<td class="border border-gray-300 p-3 font-semibold" :class="$clicks === 2 ? 'text-red-600' : 'text-gray-800'">...</td>
<td class="border border-gray-300 p-3 font-semibold" :class="$clicks === 2 ? 'text-red-600' : 'text-gray-800'">0.1</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium text-gray-700">汽车</td>
<td class="border border-gray-300 p-3 text-gray-700">0.3</td>
<td class="border border-gray-300 p-3 text-gray-700">0.6</td>
<td class="border border-gray-300 p-3 text-gray-700">...</td>
<td class="border border-gray-300 p-3 text-gray-700">0.1</td>
</tr>
</tbody>
</table>
</div>

<!-- 覆盖层：参考Word2Vec覆盖层效果 -->
<div v-click="3" v-motion
  :initial="{ opacity: 0, scale: 0.5 }"
  :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
  class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
  <div class="text-6xl font-bold text-gray-800 text-center leading-tight">
    根据语境动态<br>计算词向量
  </div>
</div>
</div>



---
clicks: 1
---

<div class="flex items-center justify-center h-full w-full">
  <div class="w-full max-w-6xl flex items-center justify-center gap-20">
    <!-- 左侧：极简Transformer架构图 -->
    <div class="flex-1 flex justify-center">
      <svg width="280" height="420" viewBox="0 0 360 560" class="bg-white">
        <!-- 输入嵌入 -->
        <rect x="40" y="480" width="110" height="35" fill="white" stroke="black" stroke-width="1"/>
        <text x="95" y="502" text-anchor="middle" class="text-xs font-normal">Input Embedding</text>
        <!-- 位置编码 -->
        <rect x="210" y="480" width="110" height="35" fill="white" stroke="black" stroke-width="1"/>
        <text x="265" y="495" text-anchor="middle" class="text-xs font-normal">Positional</text>
        <text x="265" y="507" text-anchor="middle" class="text-xs font-normal">Encoding</text>
        <!-- 加法符号 -->
        <circle cx="180" cy="497" r="12" fill="white" stroke="black" stroke-width="1"/>
        <text x="180" y="502" text-anchor="middle" class="text-sm font-light">+</text>
        <!-- 连接线 -->
        <line x1="150" y1="497" x2="168" y2="497" stroke="black" stroke-width="1"/>
        <line x1="192" y1="497" x2="210" y2="497" stroke="black" stroke-width="1"/>
        <line x1="180" y1="485" x2="180" y2="450" stroke="black" stroke-width="1"/>
        <!-- 多头注意力机制 -->
        <rect x="110" y="415" width="140" height="35" fill="white" stroke="black" stroke-width="1"/>
        <text x="180" y="430" text-anchor="middle" class="text-xs font-normal">Multi-Head</text>
        <text x="180" y="442" text-anchor="middle" class="text-xs font-normal">Attention</text>
        <!-- Add & Norm -->
        <rect x="110" y="365" width="140" height="35" fill="white" stroke="black" stroke-width="1"/>
        <text x="180" y="387" text-anchor="middle" class="text-xs font-normal">Add & Norm</text>
        <!-- 前馈网络 -->
        <rect x="110" y="315" width="140" height="35" fill="white" stroke="black" stroke-width="1"/>
        <text x="180" y="330" text-anchor="middle" class="text-xs font-normal">Feed</text>
        <text x="180" y="342" text-anchor="middle" class="text-xs font-normal">Forward</text>
        <!-- Add & Norm -->
        <rect x="110" y="265" width="140" height="35" fill="white" stroke="black" stroke-width="1"/>
        <text x="180" y="287" text-anchor="middle" class="text-xs font-normal">Add & Norm</text>
        <!-- 线性层 -->
        <rect x="110" y="215" width="140" height="35" fill="white" stroke="black" stroke-width="1"/>
        <text x="180" y="237" text-anchor="middle" class="text-xs font-normal">Linear</text>
        <!-- Softmax -->
        <rect x="110" y="165" width="140" height="35" fill="white" stroke="black" stroke-width="1"/>
        <text x="180" y="187" text-anchor="middle" class="text-xs font-normal">Softmax</text>
        <!-- 输出概率 -->
        <rect x="110" y="115" width="140" height="35" fill="white" stroke="black" stroke-width="1"/>
        <text x="180" y="130" text-anchor="middle" class="text-xs font-normal">Output</text>
        <text x="180" y="142" text-anchor="middle" class="text-xs font-normal">Probabilities</text>
        <!-- 连接线 -->
        <line x1="180" y1="415" x2="180" y2="400" stroke="black" stroke-width="1"/>
        <line x1="180" y1="365" x2="180" y2="350" stroke="black" stroke-width="1"/>
        <line x1="180" y1="315" x2="180" y2="300" stroke="black" stroke-width="1"/>
        <line x1="180" y1="265" x2="180" y2="250" stroke="black" stroke-width="1"/>
        <line x1="180" y1="215" x2="180" y2="200" stroke="black" stroke-width="1"/>
        <line x1="180" y1="165" x2="180" y2="150" stroke="black" stroke-width="1"/>
        <!-- 残差连接 -->
        <path d="M 85 432 Q 70 432 70 382 Q 70 332 85 332" stroke="black" stroke-width="1" fill="none"/>
        <line x1="85" y1="332" x2="110" y2="332" stroke="black" stroke-width="1"/>
        <line x1="85" y1="432" x2="110" y2="432" stroke="black" stroke-width="1"/>
        <!-- 输入输出标签 -->
        <text x="180" y="85" text-anchor="middle" class="text-lg font-light">Outputs</text>
        <text x="180" y="545" text-anchor="middle" class="text-lg font-light">Inputs</text>
        <!-- 箭头 -->
        <polygon points="175,110 180,100 185,110" fill="black"/>
        <polygon points="175,455 180,445 185,455" fill="black"/>
      </svg>
    </div>
    <!-- 右侧：文字内容 -->
    <div class="flex-1 flex flex-col items-center justify-center space-y-12">
      <!-- Transformer文字 - 点击后向上移动 -->
      <div v-motion
        :initial="{ y: 0 }"
        :click-1="{ y: -50, transition: { duration: 800 } }"
        class="text-8xl font-light text-black text-center tracking-tight">
        Transformer
      </div>
      <!-- Attention文字 - 点击后出现 -->
      <div v-motion
        v-click="1"
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-8xl font-light text-black text-center tracking-tight">
        Attention
      </div>
    </div>
  </div>
</div>

---
clicks: 2
---

<div class="flex items-center justify-center h-full w-full">
  <div class="w-full max-w-7xl flex items-center justify-between px-12">
    <!-- 左侧：两个苹果 -->
    <div class="flex-1 flex flex-col items-center justify-center space-y-8">
      <!-- 第一个苹果 -->
      <div class="flex flex-col items-center">
        <div class="text-[5rem]">🍎</div>
        <div class="text-2xl font-medium tracking-tight mt-3 text-black">苹果</div>
        <div class="text-lg font-normal text-gray-600 mt-2">水果</div>
      </div>
      <!-- 第二个苹果 -->
      <div class="flex flex-col items-center">
        <div class="text-[5rem] text-gray-500">📱</div>
        <div class="text-2xl font-medium tracking-tight mt-3 text-black">苹果</div>
        <div class="text-lg font-normal text-gray-600 mt-2">手机</div>
      </div>
    </div>
    <!-- 左到中的箭头 -->
    <div class="flex items-center justify-center px-6">
      <div class="text-4xl text-black font-light">→</div>
    </div>
    <!-- 中间：Embedding模型标识 + Transformer模型 -->
    <div class="flex-1 flex flex-col items-center justify-center space-y-6">
      <!-- Embedding模型标识 - 第二次点击后出现 -->
      <div v-click="2" class="text-center">
        <div class="bg-white border border-black px-8 py-4">
          <div class="text-xl font-medium text-black">Embedding 模型</div>
        </div>
      </div>
      <!-- Transformer模型 -->
      <svg width="220" height="360" viewBox="0 0 300 480" class="bg-white">
        <!-- 输入嵌入 -->
        <rect x="30" y="420" width="90" height="30" fill="white" stroke="black" stroke-width="1"/>
        <text x="75" y="439" text-anchor="middle" class="text-xs font-normal">Input Embedding</text>
        <!-- 位置编码 -->
        <rect x="180" y="420" width="90" height="30" fill="white" stroke="black" stroke-width="1"/>
        <text x="225" y="433" text-anchor="middle" class="text-xs font-normal">Positional</text>
        <text x="225" y="444" text-anchor="middle" class="text-xs font-normal">Encoding</text>
        <!-- 加法符号 -->
        <circle cx="150" cy="435" r="10" fill="white" stroke="black" stroke-width="1"/>
        <text x="150" y="439" text-anchor="middle" class="text-sm font-light">+</text>
        <!-- 连接线 -->
        <line x1="120" y1="435" x2="140" y2="435" stroke="black" stroke-width="1"/>
        <line x1="160" y1="435" x2="180" y2="435" stroke="black" stroke-width="1"/>
        <line x1="150" y1="425" x2="150" y2="390" stroke="black" stroke-width="1"/>
        <!-- 多头注意力机制 -->
        <rect x="90" y="360" width="120" height="30" fill="white" stroke="black" stroke-width="1"/>
        <text x="150" y="373" text-anchor="middle" class="text-xs font-normal">Multi-Head</text>
        <text x="150" y="383" text-anchor="middle" class="text-xs font-normal">Attention</text>
        <!-- Add & Norm -->
        <rect x="90" y="315" width="120" height="30" fill="white" stroke="black" stroke-width="1"/>
        <text x="150" y="333" text-anchor="middle" class="text-xs font-normal">Add & Norm</text>
        <!-- 前馈网络 -->
        <rect x="90" y="270" width="120" height="30" fill="white" stroke="black" stroke-width="1"/>
        <text x="150" y="283" text-anchor="middle" class="text-xs font-normal">Feed</text>
        <text x="150" y="293" text-anchor="middle" class="text-xs font-normal">Forward</text>
        <!-- Add & Norm -->
        <rect x="90" y="225" width="120" height="30" fill="white" stroke="black" stroke-width="1"/>
        <text x="150" y="243" text-anchor="middle" class="text-xs font-normal">Add & Norm</text>
        <!-- 线性层 -->
        <rect x="90" y="180" width="120" height="30" fill="white" stroke="black" stroke-width="1"/>
        <text x="150" y="198" text-anchor="middle" class="text-xs font-normal">Linear</text>
        <!-- Softmax -->
        <rect x="90" y="135" width="120" height="30" fill="white" stroke="black" stroke-width="1"/>
        <text x="150" y="153" text-anchor="middle" class="text-xs font-normal">Softmax</text>
        <!-- 输出概率 -->
        <rect x="90" y="90" width="120" height="30" fill="white" stroke="black" stroke-width="1"/>
        <text x="150" y="103" text-anchor="middle" class="text-xs font-normal">Output</text>
        <text x="150" y="113" text-anchor="middle" class="text-xs font-normal">Probabilities</text>
        <!-- 连接线 -->
        <line x1="150" y1="360" x2="150" y2="345" stroke="black" stroke-width="1"/>
        <line x1="150" y1="315" x2="150" y2="300" stroke="black" stroke-width="1"/>
        <line x1="150" y1="270" x2="150" y2="255" stroke="black" stroke-width="1"/>
        <line x1="150" y1="225" x2="150" y2="210" stroke="black" stroke-width="1"/>
        <line x1="150" y1="180" x2="150" y2="165" stroke="black" stroke-width="1"/>
        <line x1="150" y1="135" x2="150" y2="120" stroke="black" stroke-width="1"/>
        <!-- 残差连接 -->
        <path d="M 70 375 Q 55 375 55 330 Q 55 285 70 285" stroke="black" stroke-width="1" fill="none"/>
        <line x1="70" y1="285" x2="90" y2="285" stroke="black" stroke-width="1"/>
        <line x1="70" y1="375" x2="90" y2="375" stroke="black" stroke-width="1"/>
        <!-- 输入输出标签 -->
        <text x="150" y="70" text-anchor="middle" class="text-sm font-light">Outputs</text>
        <text x="150" y="470" text-anchor="middle" class="text-sm font-light">Inputs</text>
        <!-- 箭头 -->
        <polygon points="145,85 150,75 155,85" fill="black"/>
        <polygon points="145,395 150,385 155,395" fill="black"/>
      </svg>
    </div>
    <!-- 中到右的箭头 -->
    <div class="flex items-center justify-center px-6">
      <div class="text-4xl text-black font-light">→</div>
    </div>
    <!-- 右侧：两段向量输出结果 -->
    <div class="flex-1 flex flex-col items-center justify-center space-y-8">
      <!-- 第一个向量输出 -->
      <table class="border-collapse border border-black bg-white">
        <thead>
          <tr class="bg-white">
            <th class="border border-black p-3 text-sm font-medium text-black" colspan="5">苹果（水果）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-black p-2 w-12 h-10 text-center text-xs font-normal text-gray-600">0.6</td>
            <td class="border border-black p-2 w-12 h-10 text-center text-xs font-normal text-gray-600">0.7</td>
            <td class="border border-black p-2 w-12 h-10 text-center text-xs font-normal text-gray-600">0.2</td>
            <td class="border border-black p-2 w-12 h-10 text-center text-xs font-normal text-gray-400">···</td>
            <td class="border border-black p-2 w-12 h-10 text-center text-xs font-normal text-gray-600">0.4</td>
          </tr>
        </tbody>
      </table>
      <!-- 说明文字 - 放在两个向量中间 -->
      <div v-click="1" class="text-center py-6">
        <div class="bg-white border border-black px-8 py-4">
          <div class="text-2xl font-light text-black">根据上下文</div>
          <div class="text-2xl font-light text-black">生成不同向量</div>
        </div>
      </div>
      <!-- 第二个向量输出 -->
      <table class="border-collapse border border-black bg-white">
        <thead>
          <tr class="bg-white">
            <th class="border border-black p-3 text-sm font-medium text-black" colspan="5">苹果（手机）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-black p-2 w-12 h-10 text-center text-xs font-normal text-gray-600">0.1</td>
            <td class="border border-black p-2 w-12 h-10 text-center text-xs font-normal text-gray-600">0.3</td>
            <td class="border border-black p-2 w-12 h-10 text-center text-xs font-normal text-gray-600">0.8</td>
            <td class="border border-black p-2 w-12 h-10 text-center text-xs font-normal text-gray-400">···</td>
            <td class="border border-black p-2 w-12 h-10 text-center text-xs font-normal text-gray-600">0.9</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

---

# 方法对比总结


<div class="flex items-center justify-center h-full relative">
  <table class="border-collapse border-2 border-black text-base bg-white shadow-sm rounded-lg overflow-hidden">
    <thead>
      <tr class="bg-black text-white">
        <th class="border border-black p-4 w-32 font-medium text-lg">方法</th>
        <th class="border border-black p-4 w-40 font-medium text-lg">信息量表达</th>
        <th class="border border-black p-4 w-40 font-medium text-lg">优点</th>
        <th class="border border-black p-4 w-40 font-medium text-lg">缺点</th>
        <th class="border border-black p-4 w-40 font-medium text-lg">适用场景</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white hover:bg-gray-50 transition-colors">
        <td class="border border-black p-4 font-medium text-black text-center">词袋法</td>
        <td class="border border-black p-4 text-center">有多少这个词</td>
        <td class="border border-black p-4 text-center">简单易实现</td>
        <td class="border border-black p-4 text-center">忽略稀有性和语义</td>
        <td class="border border-black p-4 text-center">垃圾邮件分类</td>
      </tr>
      <tr class="bg-white hover:bg-gray-50 transition-colors">
        <td class="border border-black p-4 font-medium text-black text-center">TF-IDF</td>
        <td class="border border-black p-4 text-center">有多稀缺</td>
        <td class="border border-black p-4 text-center">考虑词频和稀有性</td>
        <td class="border border-black p-4 text-center">无语义信息</td>
        <td class="border border-black p-4 text-center">关键词提取</td>
      </tr>
      <tr class="bg-white hover:bg-gray-50 transition-colors">
        <td class="border border-black p-4 font-medium text-black text-center">Word2Vec</td>
        <td class="border border-black p-4 text-center">文本语义</td>
        <td class="border border-black p-4 text-center">捕捉词间关系</td>
        <td class="border border-black p-4 text-center">不考虑词序<br/>和一词多义</td>
        <td class="border border-black p-4 text-center">语义搜索</td>
      </tr>
      <tr class="bg-white hover:bg-gray-50 transition-colors">
        <td class="border border-black p-4 font-medium text-black text-center">BGE</td>
        <td class="border border-black p-4 text-center">语境化语义</td>
        <td class="border border-black p-4 text-center">动态生成<br/>上下文向量</td>
        <td class="border border-black p-4 text-center">训练复杂</td>
        <td class="border border-black p-4 text-center">RAG等</td>
      </tr>
    </tbody>
  </table>
  <!-- 点击后出现的覆盖层 -->
  <div v-click="1" v-motion
    :initial="{ opacity: 0, scale: 0.5 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
    class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
    <div class="text-6xl font-light text-black text-center leading-tight tracking-tight">
      信息量的不断提升
    </div>
  </div>
</div>