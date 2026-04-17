---
theme: seriph
title: 从斯坦福 AI 指数 2026 看，AI 到底改变了什么？
info: |
  面向大众的 AI 趋势分享
  基于 Stanford HAI《AI Index 2026》
transition: slide-left
layout: default
lineNumbers: false
mdc: true
drawings:
  persist: false
fonts:
  sans: Manrope
  serif: Source Serif 4
  mono: JetBrains Mono
class: cover-page
---

<div class="cover-shell">
  <div class="cover-left">
    <div class="cover-kicker">Stanford HAI · AI Index</div>
    <h1 class="cover-title">
      从斯坦福 AI 指数看，<br>AI 到底改变了什么？
    </h1>
    <div class="cover-sub">面向大众的 AI 趋势分享</div>
  </div>
  <div class="cover-right">
    <div class="cover-year">20<br>26</div>
    <div class="cover-date">04.13</div>
  </div>
</div>

<style>
@import url('./style.css');
</style>

---
layout: default
class: statement-page
---

<div class="statement-shell">
  <div class="statement-kicker">Why This Report</div>
  <div class="statement-text">斯坦福 AI 指数更像一份年度体检，<br>而不是一场产品发布会。</div>
  <div class="statement-support">它不给情绪化结论，而是把 AI 的能力、普及和代价，放进同一张时间轴里看。</div>
</div>

---
layout: default
class: deck-page question-page
---

# 今天只回答 4 个问题

<div class="question-stage">
  <div class="question-lead">
    <div class="micro-label">Agenda</div>
    <div class="question-manifesto">这不是一场模型巡礼，<br>而是一次现实检查。</div>
    <div class="question-footnote">后面所有数据都只服务于 4 个问题：能力、影响、代价、判断。</div>
  </div>

  <div class="question-grid question-grid-stagger">
  <div v-click class="question-card">
    <div class="question-num">01</div>
    <div class="question-title">AI 到底强了多少</div>
    <div class="question-sub">能力、推理与 agent 的进展</div>
  </div>
  <div v-click class="question-card">
    <div class="question-num">02</div>
    <div class="question-title">它正在改变谁的生活和工作</div>
    <div class="question-sub">工作、教育与专业流程的变化</div>
  </div>
  <div v-click class="question-card">
    <div class="question-num">03</div>
    <div class="question-title">它带来了哪些新的代价和风险</div>
    <div class="question-sub">资本、竞争与基础设施的代价</div>
  </div>
  <div v-click class="question-card question-card-accent">
    <div class="question-num">04</div>
    <div class="question-title">普通人最该关心什么变化</div>
    <div class="question-sub">不是模型，而是正在改写的规则</div>
  </div>
  </div>
</div>

---
layout: default
class: deck-page keyword-page
---

# 2026 年的四个关键词

<div class="keyword-stage">
  <div class="keyword-lead">
    <div class="micro-label">Verdict</div>
    <div class="keyword-thesis">AI 不是单向进步。<br>它正在同时放大能力、普及、成本与治理压力。</div>
    <div class="keyword-footnote">后面 20 页，其实都在解释为什么这四个词必须一起看。</div>
  </div>

  <div class="keyword-column">
  <div v-click class="keyword-block">
    <span class="keyword-number">01</span>
    <span class="keyword-word">更强</span>
    <span class="keyword-desc">推理、多模态和 agent 继续上升</span>
  </div>
  <div v-click class="keyword-block">
    <span class="keyword-number">02</span>
    <span class="keyword-word">更普及</span>
    <span class="keyword-desc">正在以主流社会的速度扩散，而不是科技圈速度</span>
  </div>
  <div v-click class="keyword-block">
    <span class="keyword-number">03</span>
    <span class="keyword-word">更贵</span>
    <span class="keyword-desc">资金、算力、电力和用水，都在一起变成成本</span>
  </div>
  <div v-click class="keyword-block keyword-block-dark">
    <span class="keyword-number">04</span>
    <span class="keyword-word">更不透明</span>
    <span class="keyword-desc">治理边界、责任归属和公众信任，已经不能再靠乐观带过</span>
  </div>
  </div>
</div>

---
layout: center
class: chapter-page
---

<div class="chapter-shell">
  <div class="chapter-rule"></div>
  <div class="chapter-index">I</div>
  <h1 class="chapter-title">AI 变强与普及</h1>
  <p class="chapter-copy">能力在变强，扩散在加速，但真正重要的是它开始进入大众日常。</p>
</div>

---
layout: default
class: deck-page mood-page
---

# AI 扩散速度，已经超过个人电脑和互联网

<div class="editorial-split">
  <div class="editorial-main">
    <div class="micro-label">Adoption</div>
    <div class="editorial-sentence">AI 的扩散速度，<em>碾压了</em>历史上所有通用技术。</div>
    <div class="editorial-note">生成式 AI 只用了 3 年就达到 53% 的人口采用率——个人电脑和互联网都没能做到。速度快到制度、教育和就业政策都来不及跟上。</div>
  </div>
  <div class="comparison-board">
    <div class="micro-label">Diffusion Speed</div>
    <div class="comparison-list">
      <div v-click class="comparison-item">
        <div class="comparison-head">
          <span>生成式 AI</span>
          <span>3 年 → 53%</span>
        </div>
        <AnimatedBar :value="88" fill-class="comparison-fill comparison-fill-strong" />
      </div>
      <div v-click class="comparison-item">
        <div class="comparison-head">
          <span>个人电脑</span>
          <span>8 年仍在扩散</span>
        </div>
        <AnimatedBar :value="54" fill-class="comparison-fill comparison-fill-soft" :delay="80" />
      </div>
      <div v-click class="comparison-item">
        <div class="comparison-head">
          <span>互联网</span>
          <span>5 年仍在扩散</span>
        </div>
        <AnimatedBar :value="61" fill-class="comparison-fill comparison-fill-muted" :delay="140" />
      </div>
    </div>
    <div v-click class="comparison-caption">AI 已经不是科技爱好者的玩具，而是以主流社会的速度快速进入日常。</div>
  </div>
</div>

---
layout: default
class: statement-page
---

<div class="statement-shell">
  <div class="statement-kicker">Consumer Value</div>
  <div class="statement-number"><AnimatedNumber :value="172" prefix="$" suffix="B" :duration="1200" :delay="120" /></div>
  <div class="statement-text">到 2026 年初，生成式 AI 给美国消费者带来的估算年价值</div>
  <div class="statement-support">用户中位价值在一年间增长了 3 倍。很多人以为自己"没为 AI 花钱"，其实已经在从 AI 里获得价值。</div>
</div>

---
layout: default
class: deck-page
---

# AI 是典型的"又爱又怕"

<div class="mood-stage">
  <div class="mood-pair">
    <div v-click class="mood-item mood-item-positive">
      <div class="mood-number mood-number-positive"><AnimatedNumber :value="59" suffix="%" :duration="900" :delay="80" /></div>
      <div class="mood-label">对 AI 的好处持乐观态度</div>
    </div>
    <div v-click class="mood-item mood-item-alert">
      <div class="mood-number mood-number-alert"><AnimatedNumber :value="52" suffix="%" :duration="900" :delay="160" /></div>
      <div class="mood-label">同时也对 AI 感到紧张</div>
    </div>
  </div>
  <div class="mood-body">
    <div v-click class="mood-verdict">
      <div class="micro-label">Public Sentiment</div>
      <div class="mood-verdict-title">公众对 AI 的真实态度，不是赞成或反对，而是边用边担心。</div>
    </div>
    <div class="mood-ledger">
      <div v-click class="mood-ledger-item">
        <span class="mood-ledger-tag">喜欢的是</span>
        <span class="mood-ledger-copy">搜索、翻译、写作、总结、编程辅助这些立刻提升效率的能力。</span>
      </div>
      <div v-click class="mood-ledger-item">
        <span class="mood-ledger-tag">担心的是</span>
        <span class="mood-ledger-copy">工作替代、深度伪造、隐私泄露和系统失控这些现实后果。</span>
      </div>
      <div v-click class="mood-ledger-item mood-ledger-item-final">
        <span class="mood-ledger-tag">所以结论</span>
        <span class="mood-ledger-copy">它不是一个统一结论，而是一种复杂、长期、会反复摇摆的社会情绪。</span>
      </div>
    </div>
  </div>
</div>

---
layout: default
class: deck-page
---

# AI 真的更强了

<div class="tri-upgrade">
  <div v-click class="tri-upgrade-card">
    <div class="micro-label">多模态</div>
    <div class="tri-upgrade-title">从文本走向图像、音频、视频</div>
    <div class="tri-upgrade-copy">AI 不只会读文字，也越来越会理解真实世界的复杂输入。</div>
  </div>
  <div v-click class="tri-upgrade-card">
    <div class="micro-label">推理能力</div>
    <div class="tri-upgrade-title">数学与复杂推理继续上升</div>
    <div class="tri-upgrade-copy">从"像在理解"走向"在部分任务里确实能推理"。</div>
  </div>
  <div v-click class="tri-upgrade-card tri-upgrade-card-accent">
    <div class="micro-label" style="color: rgba(255,253,249,0.45);">博士级任务</div>
    <div class="tri-upgrade-title" style="color: var(--deck-white);">接近甚至超过人类表现</div>
    <div class="tri-upgrade-copy" style="color: rgba(255,253,249,0.65);">前沿模型在高难度 benchmark 上持续进步。重点不是某家模型赢了谁，而是整体都在往更高复杂度推进。</div>
  </div>
</div>

---
layout: default
class: deck-page
---

# 从"会聊"走向"会做"

<div class="shift-stage">
<div class="shift-layout">
  <div v-click class="shift-before">
    <div class="micro-label">2025</div>
    <div class="shift-number"><AnimatedNumber :value="20" suffix="%" :duration="900" :delay="60" /></div>
    <div class="shift-desc">真实任务中的<br>agent 成功率</div>
  </div>
  <div v-click class="shift-bridge">
    <div class="shift-arrow-line"></div>
    <div class="shift-arrow-label">一年之间</div>
    <div class="shift-arrow-caption">从单轮回答到连续执行</div>
  </div>
  <div v-click class="shift-after">
    <div class="micro-label">2026</div>
    <div class="shift-number shift-number-accent"><AnimatedNumber :value="77.3" suffix="%" :decimals="1" :duration="1000" :delay="160" /></div>
    <div class="shift-desc">同样的任务，<br>成功率大幅跃升</div>
  </div>
</div>

<div class="shift-footer">
  <div v-click class="shift-footer-stat">
    <div class="shift-footer-number"><AnimatedNumber :value="93" suffix="%" :duration="900" :delay="220" /></div>
    <div class="shift-footer-copy">处理网络安全问题的 AI agent 成功率</div>
  </div>
  <div v-click class="shift-footer-note">过去更多是"我问 AI 一个问题"，现在越来越像"我把一段任务交给 AI"。</div>
</div>

<div v-click class="shift-callout">Agent 的变化，不是"会不会聊天更像人"，而是开始能把一段任务真正办完。</div>
</div>

---
layout: default
class: statement-page
---

<div class="statement-shell">
  <div class="statement-kicker">Reality Check</div>
  <div class="statement-number"><AnimatedNumber :value="12" suffix="%" :duration="900" :delay="100" /></div>
  <div class="statement-text">机器人在真实家庭任务中的成功率</div>
  <div class="statement-support">AI 很强，但"现实世界的最后一公里"仍然非常难。它仍然会在看时间、多步规划、金融分析和部分专家级考试中出错。</div>
</div>

---
layout: center
class: chapter-page
---

<div class="chapter-shell">
  <div class="chapter-rule"></div>
  <div class="chapter-index">II</div>
  <h1 class="chapter-title">工作、教育与专业流程</h1>
  <p class="chapter-copy">变化最先出现在那些可拆解、可计量、可重复的专业流程里。</p>
</div>

---
layout: default
class: deck-page
---

# 最先被影响的，往往是年轻人和入门岗位

<div class="impact-layout">
  <div v-click class="impact-hero">
    <div class="impact-hero-label">Employment Impact</div>
    <div class="impact-hero-number"><AnimatedNumber :value="-20" suffix="%" :duration="950" :delay="120" /></div>
    <div class="impact-hero-copy">22-25 岁开发者就业下降幅度</div>
  </div>
  <div class="impact-details">
    <div v-click class="impact-item">
      <div class="micro-label">先被改写的任务</div>
      <div class="impact-item-copy">标准化、可拆分、可审计、可模板化复用的初级工作，最容易先被 AI 接管。</div>
    </div>
    <div v-click class="impact-item">
      <div class="micro-label">为什么先是年轻人</div>
      <div class="impact-item-copy">入门岗位往往承担的正是最容易被自动化的一段工作流。</div>
    </div>
    <div v-click class="impact-item">
      <div class="micro-label">真正发生了什么</div>
      <div class="impact-item-copy">不是整份工作立刻消失，而是岗位内部的任务分工先被重写。</div>
    </div>
  </div>
</div>

---
layout: default
class: deck-page
---

# 不是取代所有人，而是先分走一部分基础任务

<div class="two-panel">
  <div v-click class="paper-card">
    <div class="micro-label">Task Shift</div>
    <div class="section-heading">AI 先分走的是基础任务，不是整份工作</div>
    <div class="chart-caption mt-5">更常见的变化不是岗位突然消失，而是原本由实习生、新人或初级员工完成的工作，被 AI 拿走了一截。这意味着"怎么从新手成长为专家"的传统路径，也在被改写。</div>
  </div>

  <div class="essay-stack">
    <div v-click class="essay-item">
      <div class="micro-label">先被分走的工作</div>
      <div class="small-copy">资料整理、信息汇总、初稿生成和重复沟通，最容易先被自动化。</div>
    </div>
    <div v-click class="essay-item">
      <div class="micro-label">团队结构怎么变</div>
      <div class="small-copy">组织会更少为基础产出买单，更看重能统筹上下文和压住质量的人。</div>
    </div>
    <div v-click class="essay-item">
      <div class="micro-label">更值钱的能力</div>
      <div class="small-copy">定义问题、判断结果、整合复杂信息，而不是只做基础产出。</div>
    </div>
  </div>
</div>

---
layout: default
class: statement-page
---

<div class="statement-shell">
  <div class="statement-kicker">Student Adoption</div>
  <div class="statement-number"><AnimatedNumber :value="4" suffix=" / 5" :duration="900" :delay="100" /></div>
  <div class="statement-text">美国高中生和大学生中，五分之四已在学校相关任务中使用 AI</div>
  <div class="statement-support">学生的采用速度，往往比学校制度更新的速度更快。</div>
</div>

---
layout: default
class: deck-page
---

# 学校和老师还没完全准备好

<div class="cascade-layout">
  <div class="cascade-stats">
    <div v-click class="cascade-row">
      <div class="cascade-number cascade-number-amber"><AnimatedNumber :value="50" suffix="%" :duration="900" :delay="80" /></div>
      <div class="cascade-desc">只有一半中学和高中有 AI 政策</div>
    </div>
    <div v-click class="cascade-arrow-area">
      <div class="cascade-arrow-down"></div>
    </div>
    <div v-click class="cascade-row cascade-row-highlight">
      <div class="cascade-number cascade-number-alert"><AnimatedNumber :value="6" suffix="%" :duration="900" :delay="160" /></div>
      <div class="cascade-desc">只有 6% 教师认为这些政策足够清晰</div>
    </div>
    <div v-click class="cascade-tension-note">学生已经往前走了，制度还在追。</div>
  </div>

  <div class="paper-card policy-question-card">
    <div class="micro-label">The Real Question</div>
    <div class="section-heading">当"像样的答案"可以一键生成，学校到底应该评估什么？</div>
    <div v-click class="policy-question-emphasis">未来更重要的，可能不是会不会做题，而是会不会提问、会不会验证、会不会独立思考。</div>
    <div v-click class="policy-question-meta">教育真正落后的，不是学生，而是规则更新速度。</div>
  </div>
</div>

---
layout: default
class: deck-page
---

# AI 正在进入科研流程

<div class="editorial-split">
  <div class="editorial-main">
    <div class="micro-label">Research</div>
    <div class="editorial-sentence">AI 开始进入科研，不只是写摘要。</div>
    <div class="editorial-note">更关键的信号不是某篇爆款论文，而是多个学科都在把 AI 当成常规研究能力。</div>
  </div>

  <div class="comparison-board">
    <div class="micro-label">Paper Growth</div>
    <div class="comparison-list">
      <div v-click class="comparison-item">
        <div class="comparison-head">
          <span>自然科学</span>
          <span>+26%</span>
        </div>
        <AnimatedBar :value="76" fill-class="comparison-fill comparison-fill-strong" />
      </div>
      <div v-click class="comparison-item">
        <div class="comparison-head">
          <span>物理科学</span>
          <span>+28%</span>
        </div>
        <AnimatedBar :value="82" fill-class="comparison-fill comparison-fill-soft" :delay="80" />
      </div>
      <div v-click class="comparison-item">
        <div class="comparison-head">
          <span>生命科学</span>
          <span>+26%</span>
        </div>
        <AnimatedBar :value="76" fill-class="comparison-fill comparison-fill-muted" :delay="140" />
      </div>
    </div>
    <div v-click class="comparison-caption">AI 正在从科研工具，逐渐变成科研参与者。</div>
  </div>
</div>

---
layout: default
class: deck-page
---

# 2025 年，AI 首次跑通端到端天气预测

<div class="weather-layout">
  <div class="weather-flow">
    <div v-click class="weather-step">
      <div class="weather-step-label">原始观测</div>
      <div class="weather-step-detail">实时气象数据</div>
    </div>
    <div v-click class="weather-connector"></div>
    <div v-click class="weather-step weather-step-accent">
      <div class="weather-step-label">AI 模型</div>
      <div class="weather-step-detail">端到端处理</div>
    </div>
    <div v-click class="weather-connector"></div>
    <div v-click class="weather-step">
      <div class="weather-step-label">最终输出</div>
      <div class="weather-step-detail">天气预测结果</div>
    </div>
  </div>
  <div v-click class="weather-note">
    <span class="micro-label">Milestone</span>
    AI 不再只是"给出建议"，而是开始压缩一整段原本由复杂建模支撑的中间流程。这类变化一旦发生在高价值场景里，影响通常会非常深。
  </div>
  <div v-click class="weather-implication">
    <div class="weather-implication-item">
      <span class="weather-implication-label">这意味着什么</span>
      <span class="weather-implication-copy">过去需要一整支气象团队和数小时建模才能完成的工作，AI 可以在更短时间内端到端跑通。</span>
    </div>
  </div>
</div>

---
layout: default
class: statement-page
---

<div class="statement-shell">
  <div class="statement-kicker">Clinical Notes</div>
  <div class="statement-number"><AnimatedNumber :value="83" suffix="%" :duration="1000" :delay="100" /></div>
  <div class="statement-text">医生写病历时间最高减少</div>
  <div class="statement-support">AI 最现实的价值之一，不是替代医生做判断，而是把大量重复、耗时、低附加值的工作先接过去。</div>
</div>

---
layout: center
class: chapter-page
---

<div class="chapter-shell">
  <div class="chapter-rule"></div>
  <div class="chapter-index">III</div>
  <h1 class="chapter-title">资本、竞争与代价</h1>
  <p class="chapter-copy">最后看资本、全球竞争和基础设施成本，它们决定 AI 会走到哪里。</p>
</div>

---
layout: default
class: deck-page
---

# 一边怀疑 AI，一边继续投 AI

<div class="funding-layout">
  <div class="funding-lead">
    <div class="micro-label">Capital</div>
    <div class="editorial-sentence">资本在按"长期基础设施"下注。</div>
    <div class="editorial-note">如果市场只把 AI 当成一次性风口，不会出现企业和私人资金同时翻倍式增长的局面。</div>
  </div>
  <div class="funding-pair">
    <div v-click class="funding-card">
      <div class="funding-card-label">Enterprise AI</div>
      <div class="funding-card-number"><AnimatedNumber :value="581.7" prefix="$" suffix="B" :decimals="1" :duration="1100" :delay="90" /></div>
      <div class="funding-card-change">+130% YoY</div>
      <div class="funding-card-copy">2025 年全球企业 AI 投资</div>
    </div>
    <div v-click class="funding-card">
      <div class="funding-card-label">Private AI</div>
      <div class="funding-card-number"><AnimatedNumber :value="344.7" prefix="$" suffix="B" :decimals="1" :duration="1100" :delay="170" /></div>
      <div class="funding-card-change">+127.5% YoY</div>
      <div class="funding-card-copy">2025 年全球私人 AI 投资</div>
    </div>
  </div>
</div>

---
layout: default
class: deck-page
---

# 中美差距在缩小，AI 进入多极化竞争

<div class="competition-stage">
<div class="competition-headline">
  <div class="micro-label">Global Race</div>
  <div class="competition-thesis">问题已经不是谁遥遥领先，而是谁还能稳定拉开差距。</div>
</div>

<div class="two-panel competition-panel">
  <div v-click class="hero-stat hero-stat-dark competition-hero">
    <div class="micro-label">Lead Margin</div>
    <div class="mega-number"><AnimatedNumber :value="2.7" suffix="%" :decimals="1" :duration="1000" :delay="120" /></div>
    <div class="hero-stat-copy">截至 2026 年 3 月，Anthropic 顶级模型领先幅度</div>
    <div class="hero-stat-note">这个数字本身就说明，曾经一边倒的格局已经不再成立。</div>
  </div>

  <div class="stack-panel">
    <div v-click class="paper-card paper-card-small competition-note-card">
      <div class="micro-label">What Changed</div>
      <div class="small-copy">自 2025 年以来，中美模型在性能榜上多次交替领先。</div>
    </div>
    <div v-click class="paper-card paper-card-small competition-note-card">
      <div class="micro-label">Still True</div>
      <div class="small-copy">美国仍在顶级模型和私人投资上占优，但差距在缩小。</div>
    </div>
    <div v-click class="paper-card paper-card-small competition-note-card competition-note-card-final">
      <div class="micro-label">Why It Matters</div>
      <div class="small-copy">AI 竞争已经从单边领先，进入明显的多极化阶段。</div>
    </div>
  </div>
</div>
</div>

---
layout: default
class: deck-page
---

# AI 竞争，已经是系统竞争

<div class="editorial-split">
  <div v-click class="hero-stat hero-stat-dark">
    <div class="micro-label">Talent Flow</div>
    <div class="mega-number text-amber"><AnimatedNumber :value="-89" suffix="%" :duration="1000" :delay="120" /></div>
    <div class="hero-stat-copy">流入美国的 AI 学者数量，自 2017 年以来的下降幅度</div>
  </div>

  <div class="essay-stack">
    <div v-click class="essay-item">
      <div class="micro-label">不只看模型榜单</div>
      <div class="small-copy">芯片、云、数据中心和电力，决定了谁能长期训练和部署更强模型。</div>
    </div>
    <div v-click class="essay-item">
      <div class="micro-label">不只看单次领先</div>
      <div class="small-copy">谁能持续拿到资金、人才和产业协同，谁才更可能留在牌桌上。</div>
    </div>
    <div v-click class="essay-item">
      <div class="micro-label">最终结论</div>
      <div class="small-copy">AI 竞争不是几个聊天机器人之间的比赛，而是一场系统能力竞争。</div>
    </div>
  </div>
</div>

---
layout: default
class: statement-page statement-page-dark
---

<div class="statement-shell infra-shell">
  <div class="statement-kicker">Infrastructure Cost</div>
  <div class="infra-topline">
    <div class="infra-power-block">
      <div class="statement-number"><AnimatedNumber :value="29.6" suffix="GW" :decimals="1" :duration="1100" :delay="100" /></div>
      <div class="statement-text">AI 数据中心电力容量，约等于纽约州峰值用电</div>
    </div>
    <div v-click class="infra-verdict">AI 不只是软件升级，它已经越来越像一场基础设施扩张。</div>
  </div>
  <div class="statement-detail infra-detail-grid">
    <div v-click class="infra-line infra-line-card">
      <span class="infra-number"><AnimatedNumber :value="1200" suffix=" 万人" :duration="1000" :delay="160" /></span>
      <span class="infra-desc">GPT-4o 一年推理用水，估算可超过这么多人的饮水需求</span>
    </div>
    <div v-click class="infra-line infra-line-card">
      <span class="infra-number"><AnimatedNumber :value="72816" suffix=" 吨" :duration="1100" :delay="220" :use-grouping="true" /></span>
      <span class="infra-desc">Grok 4 的估算训练排放，已经是具体的基础设施成本</span>
    </div>
  </div>
  <div v-click class="statement-support infra-support">AI 的代价，开始越来越像水、电、路，也越来越像需要被公开讨论的社会账本。</div>
</div>

---
layout: center
class: closing-page
---

<div class="closing-shell">
  <div class="closing-rule"></div>
  <div class="closing-kicker">Takeaway</div>
  <h1 class="closing-title">
    普通人最该关心 AI 的，<br>不是最新模型，而是它正在怎样改写生活
  </h1>
  <div class="closing-summary">如果只记住一句话：AI 变得更强、更快、更普及了，但它也更贵、更耗资源、更不透明了。</div>
  <div class="closing-body">
    <div v-click class="closing-item">
      <span class="closing-index">01</span>
      <span>AI 已经不是未来，它已经进入搜索、工作、学习和专业流程</span>
    </div>
    <div v-click class="closing-item">
      <span class="closing-index">02</span>
      <span>真正的变化是规则变化：工作、教育、科研和社会基础设施都在被重写</span>
    </div>
    <div v-click class="closing-item closing-item-final">
      <span class="closing-index">03</span>
      <span>最重要的能力是<strong>判断力</strong>：会用 AI 只是起点，会验证、会质疑、会协作更重要</span>
    </div>
  </div>
</div>
