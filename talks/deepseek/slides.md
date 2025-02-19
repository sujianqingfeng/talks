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
        <img src='/Karpathy.webp' class="avatar"/>
        <div class="info">
          <h2 class="name">Andrej Karpathy</h2>
          <div class="title">OpenAI 的创始成员和研究员</div>
        </div>
      </div>
      <div class="tweet-container">
        <img src='/react-Karpathy.png' class="tweet"/>
      </div>
    </div>
  </div>

  <div class="right-col">
    <div class="summary-section" v-click>
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
  @apply w-full object-contain rounded-lg;
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
        <img src='/altman.jpg' class="avatar"/>
        <div class="info">
          <h2 class="name">Sam Altman</h2>
          <div class="title">OpenAI CEO</div>
        </div>
      </div>
      <div class="tweet-container">
        <img src='/react-altman.png' class="tweet"/>
      </div>
    </div>
  </div>

  <div class="right-col">
    <div class="summary-section" v-click>
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
  <div class="market-card" v-click>
    <div class="market-header">
      <div class="market-title">NVIDIA</div>
    </div>
    <div class="chart-container">
      <img src='/nvidia-stock.png' class="chart"/>
    </div>
  </div>

  <div class="market-card" v-click>
    <div class="market-header">
      <div class="market-title">中芯国际</div>
    </div>
    <div class="chart-container">
      <img src='/smic-stock.png' class="chart"/>
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

# 日活跃用户

<div class="stats-container">
  <div class="stats-content">
    <img src='/dau.png' class="stats-image"/>
  </div>
  <div class="stats-source">
    来源：https://uniquecapital.feishu.cn/wiki/BBQMwlMfCitM1dkli9AcLWzanJb?table=blk6L0UGxdLEkLAH
  </div>
</div>

<style>
.stats-container {
  @apply flex flex-col items-center justify-center h-full gap-4;
}

.stats-content {
  @apply w-4/5 bg-gray-100 bg-opacity-5 rounded-xl p-6;
  @apply border border-gray-500 border-opacity-5;
  @apply backdrop-blur-sm;
  @apply transition-all duration-300;
  @apply hover:bg-opacity-10;
}

.stats-image {
  @apply w-full rounded-lg shadow-xl;
  @apply transition-transform duration-300;
  @apply hover:scale-102;
}

.stats-source {
  @apply text-xs opacity-50 text-center;
  @apply transition-opacity duration-300;
  @apply hover:opacity-80;
}
</style>

---

# 应用下载趋势

<div class="stats-container">
  <div class="stats-content">
    <img src='/download.png' class="stats-image"/>
  </div>
</div>

<style>
.stats-container {
  @apply flex flex-col items-center justify-center h-full gap-4;
}

.stats-content {
  @apply w-4/5 bg-gray-100 bg-opacity-5 rounded-xl p-6;
  @apply border border-gray-500 border-opacity-5;
  @apply backdrop-blur-sm;
  @apply transition-all duration-300;
  @apply hover:bg-opacity-10;
}

.stats-image {
  @apply h-full rounded-lg shadow-xl;
  @apply transition-transform duration-300;
  @apply hover:scale-102;
}
</style>

---
layout: cover
class: text-center
---

# 它到底是怎么发生的？


<!-- 原因到底是什么？ -->

---
layout: cover
class: text-center
---

# 什么是推理模型

<!-- 让我们从基础开始理解 -->

---

# 语言大模型的局限

<div class="flex gap-8">
  <div class="flex-1">
    <div class="mt-4">
      <div class="card p-4 mb-4" v-click='1'>
        <h3 class="font-bold mb-2">提示词不够精确</h3>
        <p class="opacity-80">当提示词比较简单，没有准确描述时容易出错</p>
      </div>
      <div class="card p-4" v-click='3'>
        <h3 class="font-bold mb-2">需要更多思考空间</h3>
        <p class="opacity-80">Model needs more tokens to think</p>
      </div>
    </div>
  </div>

  <div class="flex-1">
    <div v-click='2' class="">
      <img src='/chain-of-thought.png' class="rounded-lg shadow-xl"/>
    </div>
  </div>
</div>

<style>
.card {
  @apply bg-gray-100 bg-opacity-5 rounded-lg;
}
</style>

---
layout: default
---

# 语言大模型示例

<div class="flex gap-12 mt-12 px-4">
  <div class="flex-1 border border-opacity-10 rounded-xl p-8 backdrop-blur-sm backdrop-saturate-150">
    <div class="flex items-center gap-2 mb-6">
      <div class="i-carbon-code text-xl opacity-80"></div>
      <div class="font-bold text-lg">基础 Prompt</div>
    </div>
    <div class="bg-opacity-10 p-6 rounded-lg font-mono text-sm leading-6">
      <div class="mb-4">
        <span class="opacity-50">Q: </span>
        <span>昨天是星期三，后天是星期几？</span>
      </div>
      <div>
        <span class="opacity-50">A: </span>
        <span>星期五</span>
      </div>
    </div>
  </div>

  <div class="flex-1 border border-opacity-10 rounded-xl p-8 backdrop-blur-sm backdrop-saturate-150">
    <div class="flex items-center gap-2 mb-6">
      <div class="i-carbon-flow text-xl opacity-80"></div>
      <div class="font-bold text-lg">CoT Prompt</div>
    </div>
    <div class="bg-opacity-10 p-6 rounded-lg font-mono text-sm leading-6">
      <div class="mb-4">
        <span class="opacity-50">Q: </span>
        <span>昨天是星期三，后天是星期几？如果昨天是星期三，那么今天是星期四，如果是星期四，那么明天就是星期五，后天就是星期六</span>
      </div>
      <div>
        <span class="opacity-50">A: </span>
        <span>星期六</span>
      </div>
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

<!-- 为每个问题编写思维链是可行的 但我们的认知是有限的 我们需要一个推理模型来帮助我们构建思维链 -->

---


<div text-4xl h-full flex justify-center items-center>
<div v-motion :initial="{ x: 0 }" :enter="{ x: 0 }" :click-1="{ x: -10 }">
  第一个推理模型
</div>
<div text-red v-click='1' v-motion :initial="{ x: -10 }" :enter="{ x: 0 }">o1</div>
</div>




---

# o1 benchmarks

<div class="w-4/5 mx-auto mt-20">
  <img src='/o1-benchmarks.png' class="rounded-lg shadow-xl"/>
</div>

---
layout: default
---

# 推理模型的使用场景

<div class="grid grid-cols-2 gap-8 mt-12 px-8">
  <div v-click class="scenario-card">
    <div class="card-header">
      <div class="i-carbon-function-math text-3xl"></div>
      <div class="text-xl font-bold">谜题 & 数字证明</div>
    </div>
    <div class="card-content">处理复杂的数学问题和逻辑推理</div>
  </div>
  
  <div v-click class="scenario-card">
    <div class="card-header">
      <div class="i-carbon-decision-tree text-3xl"></div>
      <div class="text-xl font-bold">复杂决策</div>
    </div>
    <div class="card-content">在多个选项中进行深入分析和选择</div>
  </div>
  
  <div v-click class="scenario-card">
    <div class="card-header">
      <div class="i-carbon-text-creation text-3xl"></div>
      <div class="text-xl font-bold">开放式答案</div>
    </div>
    <div class="card-content">生成详细且有逻辑的解释</div>
  </div>
  
  <div v-click class="scenario-card">
    <div class="card-header">
      <div class="i-carbon-flow text-3xl"></div>
      <div class="text-xl font-bold">显式多步思考</div>
    </div>
    <div class="card-content">展示清晰的推理过程</div>
  </div>
</div>

<style>
.scenario-card {
  @apply relative p-6;
  @apply bg-gradient-to-br from-gray-100/10 to-gray-100/5;
  @apply backdrop-blur-sm rounded-xl;
  @apply border border-gray-500/10;
  @apply transition-all duration-300;
  @apply hover:scale-102 hover:shadow-lg;
  @apply hover:border-gray-500/20;
}

.card-header {
  @apply flex items-center gap-4 mb-4;
}

.card-content {
  @apply text-base opacity-80;
}
</style>


---
layout: center
class: text-center
---


# 如何去复现o1



--- 


# OpenAI 的最后公开的论文


<img class="w-4/5 mx-auto" src='/step-by-step.png'/>


---
transition: fade
---

# 过程激励模型

<div class="process-model-container">
  <div class="model-cards">
    <div v-click class="model-card">
      <div class="card-header">
        <div class="i-carbon-tree text-3xl"></div>
        <div class="header-text">树搜索派系</div>
      </div>
      <div class="card-content">
        <div class="content-wrapper">
          <div class="feature-list">
            <div class="feature-item">
              <div class="i-carbon-dot-mark text-sm"></div>
              <span>多路径探索</span>
            </div>
            <div class="feature-item">
              <div class="i-carbon-dot-mark text-sm"></div>
              <span>动态评估</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-click class="model-card">
      <div class="card-header">
        <div class="i-carbon-model text-3xl"></div>
        <div class="header-text">蒸馏派系</div>
      </div>
      <div class="card-content">
        <div class="content-wrapper">
          <div class="feature-list">
            <div class="feature-item">
              <div class="i-carbon-dot-mark text-sm"></div>
              <span>知识迁移</span>
            </div>
            <div class="feature-item">
              <div class="i-carbon-dot-mark text-sm"></div>
              <span>模型压缩</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.process-model-container {
  @apply w-full px-8 py-6;
}

.model-cards {
  @apply grid grid-cols-2 gap-8;
}

.model-card {
  @apply relative overflow-hidden;
  @apply bg-gradient-to-br from-gray-100/10 to-gray-100/5;
  @apply backdrop-blur-sm rounded-xl;
  @apply border border-gray-500/10;
  @apply transition-all duration-300;
  @apply hover:scale-102 hover:shadow-lg;
  @apply hover:border-gray-500/20;
}

.card-header {
  @apply flex items-center gap-4 p-6 pb-4;
  @apply border-b border-gray-500/10;
}

.header-text {
  @apply text-xl font-bold;
}

.card-content {
  @apply p-6;
}

.content-wrapper {
  @apply space-y-4;
}

.feature-list {
  @apply space-y-3;
}

.feature-item {
  @apply flex items-center gap-2;
  @apply text-base opacity-80;
}
</style>

---
layout: center
class: text-center
---

# 与此同时，一场精彩绝伦的探索之旅正在发生

 <!-- kimi & deepseek -->


---

# k1.5




<div flex justify-center items-center h-90>

<p text-4xl >
The Thought Process Behind Kimi k1.5 
</p>

</div>


<p text-center text-sm opacity-60>来源：https://x.com/Kimi_Moonshot/status/1882413059513471044</p>



---

# Kimi如何去找到灵感

<div class="grid grid-cols-1 gap-4">
  <div class="insight-card" v-click='1'>
    <div class="text-xl font-bold mb-2">Enable Self-Search</div>
    <div class="text-lg">We need to enable models to search on their own!</div>
    <div class="text-base opacity-80">我们需要让模型能够自主进行搜索！</div>
  </div>

  <div class="insight-card" v-click='2'>
    <div class="text-xl font-bold mb-2">Unrestricted Thinking</div>
    <div class="text-lg">o1 doesn't restrict how the model thinks!</div>
    <div class="text-base opacity-80">o1 并不限制模型的思考方式！</div>
  </div>

  <div class="insight-card" v-click='3'>
    <div class="text-xl font-bold mb-2">Exact Rewards</div>
    <div class="text-lg">Do RL with exact rewards! Don't be constrained by Reward Models.</div>
    <div class="text-base opacity-80">使用精确奖励进行强化学习！不要被奖励模型所束缚。</div>
  </div>
</div>

<style>
.insight-card {
  @apply bg-gray-100 bg-opacity-5 rounded-lg p-4 transition-all duration-300;
  @apply hover:bg-opacity-10 hover:scale-101;
  @apply border border-opacity-5;
}
</style>


---
layout: center
class: text-center
---

# DeepSeek R1 的论文


---
layout: center
class: text-center
---

# DeepSeek r1-zero


---

# 强化学习算法（Reinforcement Learning Algorithm）

<div class="grid grid-cols-1 gap-4 mt-8">
  <div class="algorithm-card">
    <div class="text-xl font-bold mb-4">GRPO</div>
    <div class="text-lg mb-2">Group Relative Policy Optimization</div>
    <div class="text-base opacity-80">组相对策略优化</div>
    <div class="mt-6 space-y-2">
      <div class="feature-item">
        <div class="i-carbon-arrow-right inline-block mr-2 opacity-80"></div>
        PPO的变体，通过组内奖励归一化来优化策略
      </div>
      <div class="feature-item">
        <div class="i-carbon-arrow-right inline-block mr-2 opacity-80"></div>
        提高训练效率和稳定性
      </div>
    </div>
  </div>
</div>

<style>
.algorithm-card {
  @apply bg-gray-100 bg-opacity-5 rounded-lg p-6;
  @apply border border-opacity-5;
}

.feature-item {
  @apply flex items-center text-base opacity-80;
}
</style>

---

# 训练模板(Training Template) 

<img src='/training-template.png'/>


<!-- 数字题、代码 -->


---

# 奖励模型（Reward Modeling）

<div class="flex gap-8 mt-8">
  <div class="reward-card flex-2" v-click='1'>
    <div class="text-xl font-bold mb-4">准确性奖励</div>
    <div class="reward-example">
      <div class="example-header mb-2">示例</div>
      <div class="example-content">
        <div class="mb-4">Q：1+1=?</div>
        <div class="flex flex-col gap-4">
          <div class="reward-item">
            <div class="flex items-center gap-2 mb-1">
              <div class="i-carbon-checkmark-outline inline-block opacity-80"></div>
              <div class="text-sm opacity-70">正确示例 (+1分)</div>
            </div>
            <div class="font-mono text-sm bg-gray-100 bg-opacity-5 p-3 rounded">
              A：2
            </div>
          </div>
          <div class="reward-item">
            <div class="flex items-center gap-2 mb-1">
              <div class="i-carbon-close-outline inline-block opacity-80"></div>
              <div class="text-sm opacity-70">错误示例 (0分)</div>
            </div>
            <div class="font-mono text-sm bg-gray-100 bg-opacity-5 p-3 rounded">
              A：3
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="reward-card flex-3" v-click='2'>
    <div class="text-xl font-bold mb-4">格式奖励</div>
    <div class="reward-example">
      <div class="example-header mb-2">示例</div>
      <div class="example-content">
        <div class="mb-4">Q：1+1=?</div>
        <div class="flex flex-col gap-4">
          <div class="reward-item">
            <div class="flex items-center gap-2 mb-1">
              <div class="i-carbon-checkmark-outline inline-block opacity-80"></div>
              <div class="text-sm opacity-70">正确示例 (+1分)</div>
            </div>
            <div class="font-mono text-sm bg-gray-100 bg-opacity-5 p-3 rounded">
              <span class="opacity-70">&lt;think&gt;</span>
              用户问我1+1等于几，这是一个简单的数学问题，.....
              <span class="opacity-70">&lt;/think&gt;</span>
              <br/>
              <span class="opacity-70">&lt;answer&gt;</span>2<span class="opacity-70">&lt;/answer&gt;</span>
            </div>
          </div>
          <div class="reward-item">
            <div class="flex items-center gap-2 mb-1">
              <div class="i-carbon-close-outline inline-block opacity-80"></div>
              <div class="text-sm opacity-70">错误示例 (0分)</div>
            </div>
            <div class="font-mono text-sm bg-gray-100 bg-opacity-5 p-3 rounded">
              <span class="opacity-70">&lt;think&gt;&lt;/think&gt;</span>
              <span class="opacity-70">&lt;answer&gt;</span>2<span class="opacity-70">&lt;/answer&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.reward-card {
  @apply bg-gray-100 bg-opacity-5 rounded-lg p-6;
  @apply border border-opacity-5;
}

.reward-example {
  @apply bg-gray-100 bg-opacity-5 rounded-lg p-4;
}

.example-header {
  @apply text-sm font-medium opacity-70;
}

.example-content {
  @apply text-base;
}

.flex-2 {
  flex: 2;
}

.flex-3 {
  flex: 3;
}
</style>

---

# 模型学会了"思考"

<div class="flex flex-col items-center gap-4">
  <div class="w-3/4 relative">
    <div class="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent opacity-10"></div>
    <div class="image-container p-4 bg-gray-100 bg-opacity-5 rounded-lg border border-opacity-5">
      <img src='/moment.png' class="w-full h-auto rounded shadow-sm"/>
    </div>
    <div class="absolute -right-4 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent opacity-10"></div>
  </div>
</div>

<style>
.image-container {
  @apply transition-all duration-300;
  @apply hover:bg-opacity-10;
}
</style>

---

# r1-zero benchmarks

<div class="flex flex-col items-center gap-6">
  <div class="w-4/5">
    <div class="image-container">
      <div class="p-4 bg-gray-100 bg-opacity-5 rounded-lg border border-opacity-5">
        <img src='/zero-benchmarks.png' class="w-full h-auto rounded"/>
      </div>
      <div class="glow-effect"></div>
    </div>
  </div>
    <div class="info-section flex items-center gap-2" v-click='1'>
                <div class="i-carbon-checkmark-filled inline-block text-lg"></div>
      <div class="info-text">
        验证可行
      </div>
    </div>
</div>

<style>
.image-container {
  @apply relative transition-all duration-500;
}

.image-container:hover .glow-effect {
  @apply opacity-30;
}

.glow-effect {
  @apply absolute inset-0 rounded-lg;
  @apply bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10;
  @apply opacity-0 transition-opacity duration-500;
  filter: blur(20px);
}

.verification-container {
  @apply relative mt-2;
}

.verification-badge {
  @apply relative flex items-center gap-2 px-6 py-2 rounded-full;
  @apply bg-gradient-to-r from-red-500/15 to-red-400/15;
  @apply backdrop-blur-sm;
  @apply border border-red-500/20;
  @apply text-base font-bold;
  @apply transform transition-all duration-300;
  @apply hover:scale-102;
}

.badge-glow {
  @apply absolute inset-0 rounded-full;
  @apply bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5;
  @apply opacity-0 transition-opacity duration-300;
  filter: blur(8px);
}

.verification-badge:hover .badge-glow {
  @apply opacity-100;
}

.verification-badge .i-carbon-checkmark-filled {
  @apply text-red-500 text-opacity-80;
}

.info-section {
  @apply bg-gray-100 bg-opacity-5 rounded-lg p-4;
  @apply border border-gray-500 border-opacity-5;
  @apply backdrop-blur-sm;
  @apply transition-all duration-300;
  @apply hover:bg-opacity-10;
}

.info-text {
  @apply text-lg opacity-80;
}
</style>

---

# r1-zero的一些问题

<div class="challenges-container">
  <div class="challenges-content">
    <div class="challenges-list">
      <div class="challenge-item">
        <div class="challenge-title">可读性</div>
        <div class="challenge-desc">输出内容的可读性和理解性需要提升</div>
      </div>
      <div class="challenge-item">
        <div class="challenge-title">Language Mixing</div>
        <div class="challenge-desc">多语言混合使用导致表达不够清晰</div>
      </div>
    </div>
    <div class="example-container">
      <div class="example-image">
        <img src='/r1-zero-drawback.png' class="w-full h-auto rounded-lg"/>
      </div>
    </div>
  </div>
</div>

<style>
.challenges-container {
  @apply w-full mt-8;
}

.challenges-content {
  @apply flex flex-col gap-8;
}

.challenges-list {
  @apply grid grid-cols-2 gap-6;
}

.challenge-item {
  @apply bg-gray-100 bg-opacity-5 rounded-lg p-6;
  @apply border border-gray-500 border-opacity-5;
  @apply backdrop-blur-sm;
  @apply transition-all duration-300;
  @apply hover:bg-opacity-10;
}

.challenge-title {
  @apply text-xl font-bold mb-2;
}

.challenge-desc {
  @apply text-base opacity-75;
}

.example-container {
  @apply mt-4 bg-gray-100 bg-opacity-5 rounded-lg p-6;
  @apply border border-gray-500 border-opacity-5;
}

.example-image {
  @apply overflow-hidden rounded-lg;
  @apply transition-all duration-300;
  @apply hover:shadow-lg;
}
</style>

---

# r1的实现

<div class="implementation-container">
  <div class="implementation-content">
    <div class="image-section h-100">
      <div class="image-wrapper">
        <img src='/r1.webp' class="main-image"/>
      </div>
    </div>
    <div class="info-section">
      <div class="source-info">
        来源：<a href="https://magazine.sebastianraschka.com/p/understanding-reasoning-llms" target="_blank" class="source-link">https://magazine.sebastianraschka.com/p/understanding-reasoning-llms</a>
      </div>
    </div>
  </div>
</div>

<style>
.implementation-container {
  @apply w-full mt-4 px-4;
}

.implementation-content {
  @apply flex flex-col gap-4;
}

.image-section {
  @apply bg-gray-100 bg-opacity-5 rounded-xl p-4;
  @apply border border-gray-500 border-opacity-5;
  @apply backdrop-blur-sm;
  @apply flex justify-center items-center;
}

.image-wrapper {
  @apply w-full h-full flex justify-center items-center;
  @apply overflow-hidden;
}

.main-image {
  @apply h-auto max-h-full;
  @apply object-contain;
  @apply transition-transform duration-300;
  @apply hover:scale-102;
}

.info-section {
  @apply flex justify-center items-center mt-2;
}

.source-info {
  @apply text-sm opacity-60;
  @apply transition-opacity duration-300;
  @apply hover:opacity-100;
}

.source-link {
  @apply transition-all duration-300;
  @apply hover:opacity-80;
}
</style>

---


# r1 benchmark


<img class="h-100 m-auto" src='/r1-benchmarks.png'/>

---

# 蒸馏

<div class="distillation-container">
  <div class="distillation-content">
    <div class="image-section h-80">
      <div class="image-wrapper">
        <img src='/r1-distill.png' class="main-image"/>
      </div>
    </div>
    <div class="info-section" v-click='1'>
      <div class="info-text">
        证明推理数据质量很高
      </div>
    </div>
  </div>
</div>

<style>
.distillation-container {
  @apply w-full mt-4 px-4;
}

.distillation-content {
  @apply flex flex-col gap-4;
}

.image-section {
  @apply bg-gray-100 bg-opacity-5 rounded-xl p-6;
  @apply border border-gray-500 border-opacity-5;
  @apply backdrop-blur-sm;
  @apply flex justify-center items-center;
}

.image-wrapper {
  @apply w-full h-full flex justify-center items-center;
  @apply overflow-hidden;
}

.main-image {
  @apply w-auto h-auto max-w-full max-h-full;
  @apply object-contain;
  @apply transition-transform duration-300;
  @apply hover:scale-102;
}

.info-section {
  @apply flex justify-center items-center mt-4;
}

.info-text {
  @apply text-lg opacity-80;
  @apply bg-gray-100 bg-opacity-5 rounded-lg px-6 py-3;
  @apply border border-gray-500 border-opacity-5;
  @apply backdrop-blur-sm;
  @apply transition-all duration-300;
  @apply hover:bg-opacity-10;
}
</style>

---

# pure rl（qwen）


<img src='/rl-qwen-32.png'/>


---

# deepseek v3 (不积跬步，无以至千里)

<div class="roadmap-container">
  <div class="timeline-grid">
    <div class="milestone-row">
      <div class="milestone-card" v-click='1'>
        <div class="milestone-header">
          <div class="date">2024.2</div>
          <div class="title">DeepSeekMath</div>
        </div>
        <div class="milestone-content">
          <div class="feature-item">GRPO</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div class="milestone-card" v-click='2'>
        <div class="milestone-header">
          <div class="date">2024.5</div>
          <div class="title">DeepSeek-V2</div>
        </div>
        <div class="milestone-content">
          <div class="feature-group">
            <div class="feature-title">DeepSeekMoE</div>
            <ul class="feature-list">
              <li>超大规模 21B/236B (37B/671B)</li>
              <li>前置FFN</li>
              <li>共享专家</li>
              <li>极致的通信效率（IB with NVLINK）</li>
            </ul>
          </div>
          <div class="feature-group">
            <div class="feature-title">MLA（时间换空间）</div>
            <ul class="feature-list">
              <li>减少KV cache</li>
              <li>训练时激活内存变小</li>
              <li>推理时承载更多的上下文</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="milestone-card" v-click='3'>
        <div class="milestone-header">
          <div class="date">2024.12</div>
          <div class="title">DeepSeek-V3</div>
        </div>
        <div class="milestone-content">
          <div class="feature-group">
            <div class="feature-title">FP8</div>
            <ul class="feature-list">
              <li>减少运算量和传输</li>
            </ul>
          </div>
          <div class="feature-group">
            <div class="feature-title">MTP</div>
            <ul class="feature-list">
              <li>让模型看的更远一点，提升推理的效率</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.roadmap-container {
  @apply w-full px-2 py-1;
}

.timeline-grid {
  @apply flex flex-col gap-2;
}

.milestone-row {
  @apply w-full;
}

.milestone-card {
  @apply bg-gray-100 bg-opacity-5 rounded-lg p-3;
  @apply border border-gray-500 border-opacity-5;
  @apply backdrop-blur-sm;
  @apply transition-all duration-300;
  @apply hover:bg-opacity-10;
}

.milestone-header {
  @apply flex items-center gap-2 mb-2;
}

.date {
  @apply text-sm font-bold opacity-80;
}

.title {
  @apply text-base font-bold;
}

.milestone-content {
  @apply space-y-1;
}

.feature-group {
  @apply space-y-0.5;
}

.feature-title {
  @apply text-sm font-semibold opacity-90;
}

.feature-list {
  @apply list-disc list-inside pl-2 opacity-80 text-xs leading-4;
}

.feature-item {
  @apply text-xs opacity-80;
}
</style>

---
layout: center
class: text-center
---

# 为什么要做这些创新



--- 
layout: center
class: text-center
---

# 没卡！！！



--- 

# R1 破圈的基础

<div class="foundation-container">
  <div class="foundation-grid">
    <div class="foundation-card" v-click='1'>
      <div class="card-icon i-carbon-chart-line-data"></div>
      <div class="card-content">
        <div class="card-title">强大的性能表现</div>
        <div class="card-desc">达到 o1 水平的推理能力</div>
      </div>
    </div>
    <div class="foundation-card" v-click='2'>
      <div class="card-icon i-carbon-development"></div>
      <div class="card-content">
        <div class="card-title">整个业界的难题</div>
        <div class="card-desc">解决推理模型的关键问题</div>
      </div>
    </div>
    <div class="foundation-card" v-click='3'>
      <div class="i-carbon-idea text-2xl opacity-80"></div>
      <div class="card-content">
        <div class="card-title">多个方向的验证</div>
        <div class="card-desc">PRM、PURE RL、Distillation</div>
      </div>
    </div>
    <div class="foundation-card" v-click='4'>
      <div class="card-icon i-carbon-deployment-policy"></div>
      <div class="card-content">
        <div class="card-title">开源 & 客户端</div>
        <div class="card-desc">完整的技术开放与应用支持</div>
      </div>
    </div>
  </div>
</div>

<style>
.foundation-container {
  @apply w-full px-8 py-6;
}

.foundation-grid {
  @apply grid grid-cols-2 gap-6;
}

.foundation-card {
  @apply flex items-start gap-4 p-6;
  @apply bg-gray-100 bg-opacity-5 rounded-xl;
  @apply border border-gray-500 border-opacity-5;
  @apply backdrop-blur-sm;
  @apply transition-all duration-300;
  @apply hover:bg-opacity-10;
}

.card-icon {
  @apply text-2xl opacity-80;
}

.card-content {
  @apply flex-1;
}

.card-title {
  @apply text-lg font-medium mb-2;
}

.card-desc {
  @apply text-sm opacity-70;
}
</style>

---

# R1 的未来

<div class="future-container">
  <div class="future-grid">
    <div class="future-card" v-click='1'>
      <div class="card-icon i-carbon-model-alt"></div>
      <div class="card-content">
        <div class="card-title">CoT 能够激发现有模型的能力</div>
        <div class="card-desc">通过思维链提升模型性能</div>
      </div>
    </div>
    <div class="future-card" v-click='2'>
      <div class="card-icon i-carbon-machine-learning"></div>
      <div class="card-content">
        <div class="card-title">RL 才刚刚开始</div>
        <div class="card-desc">强化学习的更多可能性</div>
      </div>
    </div>
    <div class="future-card" v-click='3'>
      <div class="i-carbon-cloud text-2xl opacity-80"></div>
      <div class="card-content">
        <div class="card-title">基础设施终于有一个值得部署的模型</div>
        <div class="card-desc">高性能与实用性的完美结合</div>
      </div>
    </div>
  </div>
  <div class="future-grid mt-6">
    <div class="future-card" v-click='4'>
      <div class="card-icon i-carbon-time"></div>
      <div class="card-content">
        <div class="card-title">思考时间延长</div>
        <div class="card-desc">更长的推理时间，更准确的结果</div>
      </div>
    </div>
    <div class="future-card" v-click='5'>
      <div class="i-carbon-text-creation text-2xl opacity-80"></div>
      <div class="card-content">
        <div class="card-title">Long2Short</div>
        <div class="card-desc">从长文本到精炼输出的转化</div>
      </div>
    </div>
  </div>
</div>

<style>
.future-container {
  @apply w-full px-8 py-6;
}

.future-grid {
  @apply grid grid-cols-3 gap-6;
}

.future-card {
  @apply flex items-start gap-4 p-6;
  @apply bg-gray-100 bg-opacity-5 rounded-xl;
  @apply border border-gray-500 border-opacity-5;
  @apply backdrop-blur-sm;
  @apply transition-all duration-300;
  @apply hover:bg-opacity-10;
}

.card-icon {
  @apply text-2xl opacity-80;
}

.card-content {
  @apply flex-1;
}

.card-title {
  @apply text-base font-medium mb-2;
}

.card-desc {
  @apply text-sm opacity-70;
}
</style>

---
layout: center
class: text-center
---

# Thank You

