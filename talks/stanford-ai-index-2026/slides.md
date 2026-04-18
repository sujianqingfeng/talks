---
theme: seriph
title: 从斯坦福 AI 指数 2026 看，AI 到底改变了什么？
info: |
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
这一年，<br>AI 改变了什么？
</h1>
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
<div class="statement-kicker">为什么看这份报告</div>
<div class="statement-text">数据，<br>而非观点</div>
<div class="statement-support">Stanford HAI 自 2017 年起持续追踪 AI 的技术、产业与社会影响。</div>
</div>

---
layout: default
class: deck-page question-page
---

<div class="question-stage">
<div class="question-lead">
<div class="micro-label">今天回答什么</div>
<div class="question-manifesto">不追模型更新，<br>先看现实变化</div>
</div>
<div class="question-column">
<div v-click class="question-item">
<div class="question-index">01</div>
<div class="question-body">
<div class="question-title">强到哪了</div>
<div class="question-sub">能力边界</div>
</div>
</div>
<div v-click class="question-item question-item-shift">
<div class="question-index">02</div>
<div class="question-body">
<div class="question-title">改变了谁</div>
<div class="question-sub">渗透图景</div>
</div>
</div>
<div v-click class="question-item question-item-tight">
<div class="question-index">03</div>
<div class="question-body">
<div class="question-title">代价在哪</div>
<div class="question-sub">隐性成本</div>
</div>
</div>
<div v-click class="question-item question-item-accent">
<div class="question-index">04</div>
<div class="question-body">
<div class="question-title">怎么判断</div>
<div class="question-sub">个人应对</div>
</div>
</div>
</div>
</div>

---
layout: default
class: deck-page keyword-page
---

<div class="keyword-stage-v2">
<div class="keyword-v2-lead">
<div class="keyword-v2-thesis">AI 不是单线程演进<br>能力、普及、成本、治理，四线并行</div>
</div>

<div class="keyword-v2-grid">
<div v-click class="keyword-v2-card">
<div class="keyword-v2-number">01</div>
<div class="keyword-v2-word">更强</div>
<div class="keyword-v2-desc">推理、多模态、Agent 持续突破<br>高难度任务上接近人类表现</div>
</div>
<div v-click class="keyword-v2-card">
<div class="keyword-v2-number">02</div>
<div class="keyword-v2-word">更普及</div>
<div class="keyword-v2-desc">3 年达到 53% 人口采用率<br>扩散速度超越 PC 和互联网</div>
</div>
<div v-click class="keyword-v2-card">
<div class="keyword-v2-number">03</div>
<div class="keyword-v2-word">更昂贵</div>
<div class="keyword-v2-desc">资本、算力、电力、用水<br>成本正在显性化</div>
</div>
<div v-click class="keyword-v2-card keyword-v2-card-dark">
<div class="keyword-v2-number">04</div>
<div class="keyword-v2-word">更不可知</div>
<div class="keyword-v2-desc">治理边界、责任归属、公众信任<br>问题正在被放大</div>
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
</div>

---
layout: default
class: deck-page mood-page
---

<div class="editorial-split">
<div class="editorial-main">
<div class="micro-label">普及速度</div>
<div class="editorial-sentence">3 年超过 PC 用了 8 年的扩散</div>
<div class="editorial-note">生成式 AI 已不是科技圈玩具，而是快速进入主流社会的通用能力。</div>
</div>
<div class="comparison-board">
<div class="micro-label">对比</div>
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
</div>
</div>

---
layout: default
class: statement-page
---

<div class="statement-shell">
<div class="statement-kicker">用户价值</div>
<div class="statement-number"><AnimatedNumber :value="172" prefix="$" suffix="B" :duration="1200" :delay="120" /></div>
<div class="statement-text">生成式 AI 带来的估算年价值</div>
<div class="statement-support">以美国市场测算达 1720 亿美元，用户中位价值一年增长 3 倍。全球主要市场的采用曲线呈现相似趋势——很多人没意识到自己已在用 AI，节省时间、降低成本的价值往往体现在效率上，而非账单里。</div>
</div>

---
layout: default
class: deck-page
---

# 又看好，又担心

<div class="mood-stage">
<div class="mood-pair">
<div v-click class="mood-item mood-item-positive">
<div class="mood-number mood-number-positive"><AnimatedNumber :value="59" suffix="%" :duration="900" :delay="80" /></div>
<div class="mood-label">看好 AI 带来的效率提升</div>
</div>
<div v-click class="mood-item mood-item-alert">
<div class="mood-number mood-number-alert"><AnimatedNumber :value="52" suffix="%" :duration="900" :delay="160" /></div>
<div class="mood-label">对其风险感到担忧</div>
</div>
</div>
<div class="mood-body">
<div class="mood-ledger">
<div v-click class="mood-ledger-item">
<span class="mood-ledger-tag">喜欢的是</span>
<span class="mood-ledger-copy">搜索、翻译、写作、总结、编程辅助——这些立刻提升效率的能力</span>
</div>
<div v-click class="mood-ledger-item">
<span class="mood-ledger-tag">担心的是</span>
<span class="mood-ledger-copy">工作替代、深度伪造、隐私泄露、系统失控——这些现实后果</span>
</div>
</div>
</div>
</div>

---
layout: default
class: deck-page
---

# 不只是更会聊天

<div class="tri-upgrade">
<div v-click class="tri-upgrade-card">
<div class="micro-label">多模态</div>
<div class="tri-upgrade-title">从文本走向图像、音频、视频</div>
<div class="tri-upgrade-copy">前沿模型在博士级科学问题、多模态推理、竞赛数学等任务上持续进步</div>
</div>
<div v-click class="tri-upgrade-card">
<div class="micro-label">推理能力</div>
<div class="tri-upgrade-title">高难度任务接近人类表现</div>
<div class="tri-upgrade-copy">从"看似理解"到"真正推理"——可测量的进步，不只是感觉</div>
</div>
<div v-click class="tri-upgrade-card tri-upgrade-card-accent">
<div class="micro-label" style="color: rgba(255,253,249,0.45);">代理</div>
<div class="tri-upgrade-title" style="color: var(--deck-white);">从"会聊"走向"会做"</div>
<div class="tri-upgrade-copy" style="color: rgba(255,253,249,0.65);">真实任务中的 Agent 成功率从 20% 提升到 77%。AI 的角色正从聊天对象变成任务代理。</div>
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
<div class="shift-desc">真实任务中的<br>Agent 成功率</div>
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
<div class="shift-footer-copy">网络安全 Agent 成功率</div>
</div>
<div v-click class="shift-footer-note">过去更多是"问 AI 一个问题"，现在越来越像"让 AI 替我做一串事"</div>
</div>

</div>

---
layout: default
class: deck-page
---

# 清醒一下

<div class="reality-layout">
<div class="reality-hero">
<div class="reality-hero-label">现实检验</div>
<div class="reality-hero-number"><AnimatedNumber :value="12" suffix="%" :duration="900" :delay="100" /></div>
<div class="reality-hero-copy">机器人在真实家庭任务中的成功率</div>
</div>
<div class="reality-caveats">
<div class="micro-label">仍会出错的领域</div>
<div v-click class="reality-caveat-item">
<div class="reality-caveat-title">看时间、多步规划</div>
<div class="reality-caveat-copy">日常推理仍有盲区</div>
</div>
<div v-click class="reality-caveat-item">
<div class="reality-caveat-title">金融分析</div>
<div class="reality-caveat-copy">专家级判断尚未可靠</div>
</div>
<div v-click class="reality-caveat-item">
<div class="reality-caveat-title">真实物理世界</div>
<div class="reality-caveat-copy">机器人离通用还有很远的路</div>
</div>
<div class="reality-verdict">合理的态度不是盲信，而是学会协作、保留判断</div>
</div>
</div>

---
layout: center
class: chapter-page
---

<div class="chapter-shell">
<div class="chapter-rule"></div>
<div class="chapter-index">II</div>
<h1 class="chapter-title">工作、教育与专业流程</h1>
</div>

---
layout: default
class: deck-page
---

# 入门岗位，先被重写

<div class="impact-layout">
<div v-click class="impact-hero">
<div class="impact-hero-label">谁先受影响</div>
<div class="impact-hero-number"><AnimatedNumber :value="-20" suffix="%" :duration="950" :delay="120" /></div>
<div class="impact-hero-copy">22-25 岁软件开发者就业率下降</div>
</div>
<div class="impact-details">
<div v-click class="impact-item">
<div class="micro-label">任务迁移</div>
<div class="impact-item-copy">标准化、可拆分、可审计的初级知识工作——资料整理、初稿生成、信息汇总、重复沟通</div>
</div>
<div v-click class="impact-item">
<div class="micro-label">为什么先影响年轻人</div>
<div class="impact-item-copy">入门岗位承担的就是最容易被自动化的那一段工作流</div>
</div>
<div v-click class="impact-item">
<div class="micro-label">真正变了什么</div>
<div class="impact-item-copy">不是整份工作消失，而是岗位内部的任务分工先被重写</div>
</div>
</div>
</div>

---
layout: default
class: deck-page
---

# AI 先分走的是基础任务

<div class="two-panel">
<div v-click class="paper-card">
<div class="micro-label">任务分工</div>
<div class="section-heading">AI 不直接取代所有人，而是先改写任务分工</div>
<div class="chart-caption mt-5">原来由实习生、新人完成的工作，被 AI 分走一部分。这会改变团队结构，也会改变"从新手成长为专家"的路径。</div>
</div>

<div class="essay-stack">
<div v-click class="essay-item">
<div class="micro-label">团队结构</div>
<div class="small-copy">组织会更少为基础产出买单，更看重能统筹上下文和压住质量的人</div>
</div>
<div v-click class="essay-item">
<div class="micro-label">值钱的能力</div>
<div class="small-copy">定义问题、判断结果、整合复杂信息——而不是只做基础产出</div>
</div>
</div>
</div>

---
layout: default
class: statement-page
---

<div class="statement-shell">
<div class="statement-kicker">学生先用起来了</div>
<div class="statement-number"><AnimatedNumber :value="80" suffix="%" :duration="900" :delay="100" /></div>
<div class="statement-text">主流市场超 80% 学生已在学业中使用 AI</div>
<div class="statement-support">学生的采用速度比制度更新更快。AI 已进入作业、写作、复习和资料整理，甚至正在重新定义"会学习"这件事。这一趋势在多个国家的教育场景中同步发生。</div>
</div>

---
layout: default
class: deck-page
---

# 制度落后于现实

<div class="cascade-layout">
<div class="cascade-stats">
<div v-click class="cascade-row">
<div class="cascade-number cascade-number-amber"><AnimatedNumber :value="50" suffix="%" :duration="900" :delay="80" /></div>
<div class="cascade-desc">仅一半学校建立了 AI 使用政策</div>
</div>
<div v-click class="cascade-arrow-area">
<div class="cascade-arrow-down"></div>
</div>
<div v-click class="cascade-row cascade-row-highlight">
<div class="cascade-number cascade-number-alert"><AnimatedNumber :value="6" suffix="%" :duration="900" :delay="160" /></div>
<div class="cascade-desc">仅 6% 教师认为政策足够清晰</div>
</div>
<div v-click class="cascade-tension-note">学生已经往前走了，制度还在追——这不是单一国家的问题</div>
</div>

<div class="paper-card policy-question-card">
<div class="micro-label">真正的问题</div>
<div class="section-heading">当答案唾手可得，教育该评估什么？</div>
<div v-click class="policy-question-emphasis">未来更重要的，不是"会不会做题"，而是"会不会提问、会不会验证、会不会独立思考"</div>
</div>
</div>

---
layout: default
class: deck-page
---

# AI 正在成为科研基础设施

<div class="editorial-split">
<div class="editorial-main">
<div class="micro-label">科研</div>
<div class="editorial-sentence">AI 从工具变成参与者</div>
<div class="editorial-note">关键信号不是某篇爆款论文，而是多个学科都在把 AI 当成常规研究能力。AI 的下一阶段，不只是帮我们表达信息，而是可能帮助我们发现新知识。</div>
</div>

<div class="comparison-board">
<div class="micro-label">论文增长</div>
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
</div>
</div>

---
layout: default
class: deck-page
---

# 2025 年，AI 首次独立完成天气预测

<div class="weather-layout">
<div class="weather-flow">
<div v-click class="weather-step">
<div class="weather-step-label">原始观测</div>
<div class="weather-step-detail">实时气象数据</div>
</div>
<div v-click class="weather-connector"></div>
<div v-click class="weather-step weather-step-accent">
<div class="weather-step-label">AI 模型</div>
<div class="weather-step-detail">独立完成预测</div>
</div>
<div v-click class="weather-connector"></div>
<div v-click class="weather-step">
<div class="weather-step-label">最终输出</div>
<div class="weather-step-detail">天气预测结果</div>
</div>
</div>
<div v-click class="weather-note">
<span class="micro-label">里程碑</span>
AI 不再只是"辅助判断"，而是开始接管完整流程中的一整段。这类变化一旦发生在高价值场景里，影响通常会非常深。
</div>
</div>

---
layout: default
class: deck-page
---

# 不只是辅助判断

<div class="saving-layout">
<div class="saving-main">
<div class="micro-label">医疗场景</div>
<div class="saving-sentence">病历书写时间<br>最高减少</div>
<div class="saving-number"><AnimatedNumber :value="83" suffix="%" :duration="1000" :delay="100" /></div>
<div class="saving-bar-area">
<div class="saving-bar-track">
<AnimatedBar :value="83" fill-class="saving-bar-fill" :duration="1100" :delay="160" />
</div>
<div class="saving-bar-label">2025 年自动生成临床笔记工具开始进入医院</div>
</div>
</div>
<div class="saving-insight">
<div v-click class="saving-insight-item">
<div class="micro-label">AI 的角色</div>
<div class="saving-insight-copy">不是替代医生做判断，而是把大量重复、耗时、低附加值的工作先接过去</div>
</div>
<div v-click class="saving-insight-item">
<div class="micro-label">更大的画面</div>
<div class="saving-insight-copy">当 AI 进入医疗、科研、天气这些高价值领域，它才真正开始改变专业工作流</div>
</div>
</div>
</div>

---
layout: center
class: chapter-page
---

<div class="chapter-shell">
<div class="chapter-rule"></div>
<div class="chapter-index">III</div>
<h1 class="chapter-title">资本、竞争与代价</h1>
</div>

---
layout: default
class: deck-page
---

# 一边怀疑，一边押注

<div class="funding-layout">
<div class="funding-lead">
<div class="micro-label">资本</div>
<div class="editorial-sentence">资本在按"长期基础设施"下注</div>
<div class="editorial-note">如果市场只把 AI 当成短期噱头，不会出现企业和私人资金同时翻倍增长的局面。AI 竞争越来越像一场持久战。</div>
</div>
<div class="funding-pair">
<div v-click class="funding-card">
<div class="funding-card-label">企业 AI 投资</div>
<div class="funding-card-number"><AnimatedNumber :value="581.7" prefix="$" suffix="B" :decimals="1" :duration="1100" :delay="90" /></div>
<div class="funding-card-change">+130% YoY</div>
<div class="funding-card-copy">2025 年全球企业 AI 投资</div>
</div>
<div v-click class="funding-card">
<div class="funding-card-label">私人 AI 投资</div>
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

# 中美差距缩小，竞争格局分散

<div class="competition-stage">
<div class="competition-headline">
<div class="micro-label">全球竞赛</div>
<div class="competition-thesis">关键问题不再是领先多少，而是优势能否持续</div>
</div>

<div class="two-panel competition-panel">
<div v-click class="hero-stat hero-stat-dark competition-hero">
<div class="micro-label">领先幅度</div>
<div class="mega-number"><AnimatedNumber :value="2.7" suffix="%" :decimals="1" :duration="1000" :delay="120" /></div>
<div class="hero-stat-copy">截至 2026 年 3 月，顶级模型领先幅度</div>
</div>

<div class="stack-panel">
<div v-click class="paper-card paper-card-small competition-note-card">
<div class="micro-label">变化</div>
<div class="small-copy">自 2025 年以来，中美模型在性能榜上多次交替领先</div>
</div>
<div v-click class="paper-card paper-card-small competition-note-card">
<div class="micro-label">不过</div>
<div class="small-copy">美国仍在顶级模型和私人投资上占优，但差距在缩小</div>
</div>
<div v-click class="paper-card paper-card-small competition-note-card competition-note-card-final">
<div class="micro-label">为什么重要</div>
<div class="small-copy">AI 竞争已从单边领先，进入明显的多极化阶段</div>
</div>
</div>
</div>
</div>

---
layout: default
class: deck-page
---

# AI 竞争已是系统竞争

<div class="system-competition-layout">
<div v-click class="hero-stat hero-stat-dark">
<div class="micro-label">人才流动</div>
<div class="mega-number text-amber"><AnimatedNumber :value="-89" suffix="%" :duration="1000" :delay="120" /></div>
<div class="hero-stat-copy">流入美国的 AI 学者数量，自 2017 年以来的下降幅度</div>
</div>

<div class="system-map">
<div v-click class="system-node">
<div class="system-node-icon">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.2"/><rect x="6" y="6" width="3" height="3" rx="0.5" fill="currentColor"/><rect x="11" y="6" width="3" height="3" rx="0.5" fill="currentColor"/><rect x="6" y="11" width="3" height="3" rx="0.5" fill="currentColor"/><rect x="11" y="11" width="3" height="3" rx="0.5" fill="currentColor"/></svg>
</div>
<div class="system-node-body">
<div class="system-node-label">芯片</div>
<div class="system-node-copy">云、数据中心、电力——训练和部署的底座</div>
</div>
</div>
<div v-click class="system-node">
<div class="system-node-icon">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.2"/><path d="M10 3a7 7 0 0 1 0 14" stroke="currentColor" stroke-width="1.2"/><circle cx="10" cy="10" r="2.5" fill="currentColor"/></svg>
</div>
<div class="system-node-body">
<div class="system-node-label">资本</div>
<div class="system-node-copy">资金、人才、产业协同——留在牌桌的前提</div>
</div>
</div>
<div v-click class="system-node system-node-final">
<div class="system-node-icon">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" stroke="currentColor" stroke-width="1.2"/><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.2" stroke-dasharray="2 2"/></svg>
</div>
<div class="system-node-body">
<div class="system-node-label">系统</div>
<div class="system-node-copy">AI 竞争不是几个聊天机器人的比赛，而是系统能力竞争</div>
</div>
</div>
</div>
</div>

---
layout: default
class: statement-page statement-page-dark
---

<div class="statement-shell infra-shell">
<div class="statement-kicker">基础设施成本</div>
<div class="infra-topline">
<div class="infra-power-block">
<div class="statement-number"><AnimatedNumber :value="29.6" suffix="GW" :decimals="1" :duration="1100" :delay="100" /></div>
<div class="statement-text">AI 数据中心电力容量，相当于一座大型城市的峰值用电</div>
</div>
<div v-click class="infra-verdict">AI 已从软件变成基础设施</div>
</div>
<div class="statement-detail infra-detail-grid">
<div v-click class="infra-line infra-line-card">
<span class="infra-number"><AnimatedNumber :value="1200" suffix=" 万人" :duration="1000" :delay="160" /></span>
<span class="infra-desc">GPT-4o 一年推理用水，估算可超过这么多人的饮水需求</span>
</div>
<div v-click class="infra-line infra-line-card">
<span class="infra-number"><AnimatedNumber :value="72816" suffix=" 吨" :duration="1100" :delay="220" :use-grouping="true" /></span>
<span class="infra-desc">Grok 4 的估算训练排放，已是具体的基础设施成本</span>
</div>
</div>
<div v-click class="statement-support infra-support">AI 的成本不只体现在云账单里，也在水、电和碳排放里。讨论它时，不能只讨论模型。</div>
</div>

---
layout: center
class: closing-page
---

<div class="closing-shell">
<div class="closing-rule"></div>
<div class="closing-kicker">总结</div>
<h1 class="closing-title">
关心规则，而非模型
</h1>
<div class="closing-body">
<div v-click class="closing-item">
<span class="closing-index">01</span>
<span>AI 已渗透搜索、工作、学习、科研——它不再是未来</span>
</div>
<div v-click class="closing-item">
<span class="closing-index">02</span>
<span>真正的变化是规则重写：工作方式、教育评估、科研流程、基础设施</span>
</div>
<div v-click class="closing-item closing-item-final">
<span class="closing-index">03</span>
<span>核心能力是<strong>判断力</strong>：验证、质疑、协作——不只是会用 AI</span>
</div>
</div>
</div>
