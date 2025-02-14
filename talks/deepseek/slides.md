---
title: DeepSeek-R1破圈
info: |
  DeepSeek 破圈
transition: slide-left
lineNumbers: false
fonts:
  sans: 'Inter'
  serif: 'Inter'
  mono: 'Fira Code'
layout: center
class: text-center
---


<div class="text-7xl mb-4">
  ai.com
</div>

---
layout: cover
class: text-center
---


# DeepSeek R1 破圈


<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/deepseek-ai" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: default
---

# 时间线

<div class="timeline-container">
  <div class="timeline-item" v-click>
    <div class="date-block">
      <div class="month">11月</div>
      <div class="day">20</div>
      <div class="year">2024</div>
    </div>
    <div class="content">
      <h3>DeepSeek-R1-Lite-Preview 发布</h3>
      <ul>
        <li>AIME & MATH benchmarks 达到 o1-preview 水平</li>
        <li>实时透明的思维过程</li>
        <li>开源模型与 API 即将推出</li>
      </ul>
    </div>
  </div>

  <div class="timeline-item" v-click>
    <div class="date-block">
      <div class="month">12月</div>
      <div class="day">26</div>
      <div class="year">2024</div>
    </div>
    <div class="content">
      <h3>DeepSeek-V3 发布</h3>
      <ul>
        <li>速度提升3倍 (60 tokens/second)</li>
        <li>增强的能力</li>
        <li>保持 API 兼容性</li>
        <li>完全开源的模型和论文</li>
      </ul>
    </div>
  </div>
</div>

<style>
.timeline-container {
  @apply relative pl-12 mt-8;
}

.timeline-item {
  @apply relative pb-6 flex gap-6;
}

.timeline-item::before {
  content: '';
  @apply absolute left-0 top-6 w-2.5 h-2.5 rounded-full bg-gray-400;
  transform: translateX(-50%);
}

.timeline-item::after {
  content: '';
  @apply absolute left-0 top-6 bottom-0 w-0.5 bg-gray-400 bg-opacity-50;
  transform: translateX(-50%);
}

.timeline-item:last-child::after {
  @apply hidden;
}

.date-block {
  @apply flex flex-col items-center min-w-[80px] bg-gray-100 bg-opacity-10 rounded-lg p-2;
}

.month {
  @apply text-sm font-medium;
}

.day {
  @apply text-2xl font-bold;
}

.year {
  @apply text-sm opacity-80;
}

.content {
  @apply bg-gray-100 bg-opacity-5 rounded-lg p-4 flex-1;
}

.content h3 {
  @apply text-lg font-bold mb-2;
}

.content ul {
  @apply space-y-1 text-base opacity-90;
}

.content li {
  @apply leading-normal;
}
</style>

---
layout: default
---

# 时间线

<div class="timeline-container">
  <div class="timeline-item" v-click>
    <div class="date-block">
      <div class="month">1月</div>
      <div class="day">15</div>
      <div class="year">2025</div>
    </div>
    <div class="content">
      <h3>DeepSeek App 发布</h3>
      <ul>
        <li>多平台登录支持</li>
        <li>跨平台聊天记录同步</li>
        <li>网页搜索和深度思考模式</li>
        <li>文件上传和文本提取</li>
      </ul>
    </div>
  </div>

  <div class="timeline-item" v-click>
    <div class="date-block">
      <div class="month">1月</div>
      <div class="day">20</div>
      <div class="year">2025</div>
    </div>
    <div class="content">
      <h3>DeepSeek-R1 正式发布</h3>
      <ul>
        <li>性能达到 OpenAI-o1 水平</li>
        <li>完全开源模型和技术报告</li>
        <li>MIT 许可：可自由使用和商业化</li>
      </ul>
    </div>
  </div>
</div>

<style>
.timeline-container {
  @apply relative pl-12 mt-8;
}

.timeline-item {
  @apply relative pb-6 flex gap-6;
}

.timeline-item::before {
  content: '';
  @apply absolute left-0 top-6 w-2.5 h-2.5 rounded-full bg-gray-400;
  transform: translateX(-50%);
}

.timeline-item::after {
  content: '';
  @apply absolute left-0 top-6 bottom-0 w-0.5 bg-gray-400 bg-opacity-50;
  transform: translateX(-50%);
}

.timeline-item:last-child::after {
  @apply hidden;
}

.date-block {
  @apply flex flex-col items-center min-w-[80px] bg-gray-100 bg-opacity-10 rounded-lg p-2;
}

.month {
  @apply text-sm font-medium;
}

.day {
  @apply text-2xl font-bold;
}

.year {
  @apply text-sm opacity-80;
}

.content {
  @apply bg-gray-100 bg-opacity-5 rounded-lg p-4 flex-1;
}

.content h3 {
  @apply text-lg font-bold mb-2;
}

.content ul {
  @apply space-y-1 text-base opacity-90;
}

.content li {
  @apply leading-normal;
}
</style>

---
layout: default
---

# 国外的反应

<div class="reaction-grid">
  <div class="left-col">
    <div class="person-card">
      <div class="person-info">
        <img src='./Karpathy.webp' class="avatar"/>
        <div class="info">
          <h2 class="name">Andrej Karpathy</h2>
          <div class="title">OpenAI 的创始成员和研究员</div>
        </div>
      </div>
      <div class="tweet-container">
        <img src='./react-Karpathy.png' class="tweet"/>
      </div>
    </div>
  </div>

  <div class="right-col">
    <div class="summary-section">
      <div class="quote">
        <div class="quote-text">这一成果展示了在数据和算法优化方面的卓越研究和工程能力，表明即使没有庞大的GPU集群，也能通过高效利用资源实现前沿模型的训练。同时，作者对技术报告的详细性表示赞赏。</div>
      </div>
    </div>
  </div>
</div>

<style>
.reaction-grid {
  @apply grid grid-cols-[1.2fr_1fr] gap-8 max-w-5xl mx-auto mt-8 px-4;
}

.left-col {
  @apply bg-gray-100 bg-opacity-5 rounded-xl p-6;
}

.person-card {
  @apply flex flex-col;
}

.person-info {
  @apply flex items-center gap-4 mb-6;
}

.avatar {
  @apply w-16 h-16 object-cover rounded-full shadow-md;
}

.info {
  @apply flex flex-col;
}

.name {
  @apply text-xl font-bold;
}

.title {
  @apply text-sm opacity-70;
}

.tweet-container {
  @apply bg-gray-100 bg-opacity-5 rounded-xl p-2;
}

.tweet {
  @apply w-full h-[180px] object-contain rounded-lg;
}

.right-col {
  @apply bg-gray-100 bg-opacity-5 rounded-xl p-6 flex flex-col justify-center;
}

.section-title {
  @apply text-2xl font-bold mb-6;
}

.quote {
  @apply bg-gray-100 bg-opacity-5 rounded-xl p-6;
}

.quote-text {
  @apply text-base leading-relaxed opacity-90;
}
</style>

---
layout: default
---

# 国外的反应

<div class="reaction-grid">
  <div class="left-col">
    <div class="person-card">
      <div class="person-info">
        <img src='./altman.jpg' class="avatar"/>
        <div class="info">
          <h2 class="name">Sam Altman</h2>
          <div class="title">OpenAI CEO</div>
        </div>
      </div>
      <div class="tweet-container">
        <img src='./react-altman.png' class="tweet"/>
      </div>
    </div>
  </div>

  <div class="right-col">
    <div class="summary-section">
      <div class="quote">
        <div class="quote-text">DeepSeek的R1模型性价比很高，表现令人印象深刻。</div>
      </div>
    </div>
  </div>
</div>

<style>
.reaction-grid {
  @apply grid grid-cols-[1.2fr_1fr] gap-8 max-w-5xl mx-auto mt-8 px-4;
}

.left-col {
  @apply bg-gray-100 bg-opacity-5 rounded-xl p-6;
}

.person-card {
  @apply flex flex-col;
}

.person-info {
  @apply flex items-center gap-4 mb-6;
}

.avatar {
  @apply w-16 h-16 object-cover rounded-full shadow-md;
}

.info {
  @apply flex flex-col;
}

.name {
  @apply text-xl font-bold;
}

.title {
  @apply text-sm opacity-70;
}

.tweet-container {
  @apply bg-gray-100 bg-opacity-5 rounded-xl p-2;
}

.tweet {
  @apply w-full h-[180px] object-contain rounded-lg;
}

.right-col {
  @apply bg-gray-100 bg-opacity-5 rounded-xl p-6 flex flex-col justify-center;
}

.section-title {
  @apply text-2xl font-bold mb-6;
}

.quote {
  @apply bg-gray-100 bg-opacity-5 rounded-xl p-6;
}

.quote-text {
  @apply text-base leading-relaxed opacity-90;
}
</style>

---
class: gap-4
---

# 市场反应

<div class="market-container">
  <div class="market-card">
    <div class="market-header">
      <div class="market-title">NVIDIA</div>
    </div>
    <div class="chart-container">
      <img src='./nvidia-stock.png' class="chart"/>
    </div>
  </div>

  <div class="market-card">
    <div class="market-header">
      <div class="market-title">中芯国际</div>
    </div>
    <div class="chart-container">
      <img src='./smic-stock.png' class="chart"/>
    </div>
  </div>
</div>

<style>
.market-container {
  @apply flex gap-8 mx-auto mt-8 w-full;
}

.market-card {
  @apply flex-1 bg-gray-100 bg-opacity-5 rounded-xl p-6;
}

.market-header {
  @apply mb-4;
}

.market-title {
  @apply text-2xl font-bold mb-1;
}

.market-subtitle {
  @apply text-sm text-gray-400;
}

.chart-container {
  @apply rounded-xl overflow-hidden bg-gray-100 bg-opacity-5 p-4;
}

.chart {
  @apply w-full h-[240px] object-contain;
}
</style>

---
layout: center
class: text-center
---

# 用户增长

<div class="w-4/5 mx-auto">
  <img src='./dau.png' class="rounded-lg shadow-xl"/>
</div>

<div class="text-xs text-gray-400 mt-4">
  来源：https://uniquecapital.feishu.cn/wiki/BBQMwlMfCitM1dkli9AcLWzanJb?table=blk6L0UGxdLEkLAH
</div>

---
layout: center
---

# 下载量

<div class="w-4/5 mx-auto">
  <img src='./download.png' class="rounded-lg shadow-xl"/>
</div>

---

# 它到底是怎么发生的？

<div class="pt-4 text-2xl tracking-widest text-blue-400">
  原因到底是什么？
</div>

---
layout: section
---

# 什么是推理模型

<div class="pt-4 text-lg opacity-80">
  让我们从基础开始理解
</div>

---
layout: two-cols
class: gap-8
---

# 语言大模型的局限

::left::

<div class="mt-4">
  <div class="card p-4 mb-4">
    <h3 class="font-bold mb-2">提示词不够精确</h3>
    <p class="opacity-80">当提示词比较简单，没有准确描述时容易出错</p>
  </div>

  <div class="card p-4">
    <h3 class="font-bold mb-2">需要更多思考空间</h3>
    <p class="opacity-80">Model needs more tokens to think</p>
  </div>
</div>

::right::

<div class="mt-8">
  <img src='./chain-of-thought.png' class="rounded-lg shadow-xl"/>
</div>

---
layout: default
---

# 语言大模型示例

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="card p-6">
    <div class="text-blue-400 font-bold mb-4">基础 Prompt:</div>
    <div class="bg-dark-100 bg-opacity-10 p-4 rounded">
      Q: 昨天是星期三，后天是星期几？<br>
      A: 星期五
    </div>
  </div>

  <div class="card p-6">
    <div class="text-blue-400 font-bold mb-4">Chain of Thought Prompt:</div>
    <div class="bg-dark-100 bg-opacity-10 p-4 rounded">
      Q: 昨天是星期三，后天是星期几？<br>
      让我们一步一步来思考：<br>
      1. 如果昨天是星期三，那么今天是星期四<br>
      2. 如果是星期四，那么明天就是星期五<br>
      3. 后天就是星期六<br>
      A: 星期六
    </div>
  </div>
</div>

<style>
.card {
  @apply bg-dark-50 bg-opacity-5 rounded-lg;
}
</style>

---
layout: center
class: text-center
---

# Chain of Thought (CoT)

<div class="w-2/3 mx-auto mt-8 space-y-4">
  <div class="text-xl opacity-80">
    为每个问题编写思维链是可行的
  </div>
  
  <div class="text-lg text-red-400">
    但我们的认知是有限的
  </div>
  
  <div class="text-xl opacity-80">
    我们需要一个推理模型来帮助我们构建思维链
  </div>
</div>

---
layout: center
---

# 第一个推理模型：O1

<div class="w-4/5 mx-auto mt-8">
  <img src='./o1-benchmarks.png' class="rounded-lg shadow-xl"/>
</div>

---
layout: default
---

# 为什么我们需要推理模型

<div class="grid grid-cols-2 gap-8 mt-8">
  <div v-click class="feature-card">
    <div class="text-xl font-bold text-blue-400 mb-2">谜题 & 数字证明</div>
    <p class="opacity-80">处理复杂的数学问题和逻辑推理</p>
  </div>
  
  <div v-click class="feature-card">
    <div class="text-xl font-bold text-blue-400 mb-2">复杂决策</div>
    <p class="opacity-80">在多个选项中进行深入分析和选择</p>
  </div>
  
  <div v-click class="feature-card">
    <div class="text-xl font-bold text-blue-400 mb-2">开放式答案</div>
    <p class="opacity-80">生成详细且有逻辑的解释</p>
  </div>
  
  <div v-click class="feature-card">
    <div class="text-xl font-bold text-blue-400 mb-2">显式多步思考</div>
    <p class="opacity-80">展示清晰的推理过程</p>
  </div>
</div>

<style>
.feature-card {
  @apply bg-dark-100 bg-opacity-10 rounded-lg p-6 transition-all duration-300;
}

.feature-card:hover {
  @apply bg-opacity-20 transform scale-105;
}
</style>

---

# 与此同时，一场精彩绝伦的探索之旅正在发生

 <!-- kimi & deepseek -->


---

# k1.5

The Thought Process Behind Kimi k1.5 

来源：https://x.com/Kimi_Moonshot/status/1882413059513471044


---

# Kimi如何去找到灵感

We need to enable models to search on their own!
我们需要让模型能够自主进行搜索！

o1 doesn't restrict how the model thinks!
o1 并不限制模型的思考方式！

确定路线
Do RL with exact rewards! Don't be constrained by Reward Models.
使用精确奖励进行强化学习！不要被奖励模型所束缚


---

# DeepSeek R1的论文


---

# deepseek r1-zero


---

# 强化学习算法（Reinforcement Learning Algorithm）


采用GRPO（Group Relative Policy Optimization，组相对策略优化）

<!-- GRPO (Group Relative Policy Optimization，组相对策略优化) 和 PPO (Proximal Policy Optimization，近端策略优化) 都是强化学习算法，用于优化策略模型，但它们在实现方式和结构上有所不同1. GRPO是PPO的一种变体，它通过在组内对奖励进行归一化来优化策略，提高了训练效率，
 -->

---

# 训练模板(Training Template) 

<img src='./training-template.png'/>


<!-- 数字题、代码 -->


---

# 奖励模型（Reward Modeling）

- 准确性奖励
- 格式奖励


--- 

# 准确性奖励 



Q：1+1=?

A：2 +1分
A：3 0分



---

# 格式奖励


Q：1+1=?


```
A：<think>用户问我1+1等于几，XXXXXX</think><answer>2</answer> +1分
```


```
A：<think></think><answer>2</answer> 0分
```


---


# 模型学会了思考

<img src='./moment.png'/>

---

# benchmarks

<img src='./zero-benchmarks.png'/>


验证可行


---

# 一些问题

- 可读性
- language mixing


<img src='./r1-zero-drawback.png'/>


---

# r1


<img src='./r1.webp'/>

来源：https://magazine.sebastianraschka.com/p/understanding-reasoning-llms


---


# r1 benchmarks


<img src='./r1-benchmarks.png'/>

---

# 蒸馏

<img src='./r1-distill.png'/>


证明推理数据质量很高


--- 

# pure rl（qwen）


<img src='./rl-qwen-32.png'/>


---

# deepseek v3

> 不积跬步，无以至千里


- 2024.2 DeepSeekMath 
 - GRPO
- 2024.5 DeepSeek-V2
 - DeepSeekMoE 
  - 超大规模 21B/236B (37B/671B)
  - 前置FFN
  - 共享专家
  - 极致的通信效率（IB with NVLINK）

 - MLA （时间换空间）
  - 减少KV cache
  - 训练时激活内存变小
  - 推理时承载更多的上下文
- 2024.12 DeepSeek-V3
 - FP8
  - 减少运算量和传输
 - MTP
  - 让模型看的更远一点，提升推理的效率



---


# 为什么要做这些创新



--- 

# 没卡！！！



--- 

# R1 破圈的基础

- 强大的性能表现
- 整个业界的难题
- 多个方向的验证
- 开源 

--- 

# 未来

- CoT 能够激发现有模型的能力
- RL 才刚刚开始
- 基础设施终于有一个值得部署的模型了
- 推理成本终于可以降下来了
- 思考时间变长
- Long2Short



--- 

# 如何去复现 O1

<div class="w-4/5 mx-auto mt-8">
  <img src='./step-by-step.png' class="rounded-lg shadow-xl"/>
</div>

---
layout: two-cols
class: gap-8
---

# 过程激励模型

::left::

<div class="mt-4 space-y-6">
  <div class="process-card">
    <h3 class="text-xl font-bold text-blue-400 mb-2">树搜索派系</h3>
    <p class="opacity-80">通过树搜索算法优化推理路径</p>
  </div>

  <div class="process-card">
    <h3 class="text-xl font-bold text-blue-400 mb-2">蒸馏派系（R1-Lite）</h3>
    <p class="opacity-80">通过知识蒸馏提升模型性能</p>
  </div>
</div>

::right::

<div class="mt-8 p-6 bg-dark-100 bg-opacity-10 rounded-lg">
  <div class="text-lg font-bold mb-4">技术路线</div>
  <ul class="space-y-2 opacity-80">
    <li>• 优化推理过程</li>
    <li>• 提升响应速度</li>
    <li>• 降低资源消耗</li>
    <li>• 保持推理质量</li>
  </ul>
</div>

---
layout: center
class: text-center
---

# 未来展望

<div class="grid grid-cols-3 gap-8 mt-12">
  <div v-click class="future-card">
    <div class="text-xl font-bold text-blue-400 mb-4">CoT 能力提升</div>
    <p class="opacity-80">激发现有模型的潜力</p>
  </div>

  <div v-click class="future-card">
    <div class="text-xl font-bold text-blue-400 mb-4">RL 新篇章</div>
    <p class="opacity-80">强化学习的广阔前景</p>
  </div>

  <div v-click class="future-card">
    <div class="text-xl font-bold text-blue-400 mb-4">基础设施升级</div>
    <p class="opacity-80">更高效的部署方案</p>
  </div>

  <div v-click class="future-card">
    <div class="text-xl font-bold text-blue-400 mb-4">推理成本优化</div>
    <p class="opacity-80">更低的运营成本</p>
  </div>

  <div v-click class="future-card">
    <div class="text-xl font-bold text-blue-400 mb-4">思考时间延长</div>
    <p class="opacity-80">更深入的推理能力</p>
  </div>

  <div v-click class="future-card">
    <div class="text-xl font-bold text-blue-400 mb-4">Long2Short</div>
    <p class="opacity-80">更高效的信息处理</p>
  </div>
</div>

<style>
.process-card {
  @apply bg-dark-100 bg-opacity-10 rounded-lg p-6 transition-all duration-300;
}

.future-card {
  @apply bg-dark-100 bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300;
}

.process-card:hover {
  @apply bg-opacity-20 transform scale-105;
}
</style>

---
layout: end
class: text-center
---

# Thank You

<div class="pt-8 text-xl tracking-widest text-blue-400">
  感谢观看
</div>

