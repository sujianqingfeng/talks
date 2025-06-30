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

# 假设有三段话


- 促销！促销！速点链接！
- 促销！速点领取！
- 免费！ 速点链接！




---