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
<div class="question-item">
<div class="question-index">01</div>
<div class="question-body">
<div class="question-title">强到哪了</div>
<div class="question-sub">能力边界</div>
</div>
</div>
<div class="question-item question-item-shift">
<div class="question-index">02</div>
<div class="question-body">
<div class="question-title">改变了谁</div>
<div class="question-sub">渗透图景</div>
</div>
</div>
<div class="question-item question-item-tight">
<div class="question-index">03</div>
<div class="question-body">
<div class="question-title">代价在哪</div>
<div class="question-sub">隐性成本</div>
</div>
</div>
<div class="question-item question-item-accent">
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
<div class="keyword-v2-card">
<div class="keyword-v2-number">01</div>
<div class="keyword-v2-word">更强</div>
<div class="keyword-v2-desc">推理、多模态、Agent 持续突破<br>高难度任务上接近人类表现</div>
</div>
<div class="keyword-v2-card">
<div class="keyword-v2-number">02</div>
<div class="keyword-v2-word">更普及</div>
<div class="keyword-v2-desc">3 年达到 53% 人口采用率<br>扩散速度超越 PC 和互联网</div>
</div>
<div class="keyword-v2-card">
<div class="keyword-v2-number">03</div>
<div class="keyword-v2-word">更昂贵</div>
<div class="keyword-v2-desc">资本、算力、电力、用水<br>成本正在显性化</div>
</div>
<div class="keyword-v2-card keyword-v2-card-dark">
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

<div class="adoption-stage">
<div class="adoption-hero">
<div class="adoption-hero-label">普及速度</div>
<div class="adoption-hero-number"><AnimatedNumber :value="53" suffix="%" :duration="1100" :delay="80" /></div>
<div class="adoption-hero-copy">生成式 AI 仅用 <strong>3 年</strong>就达到的人口采用率</div>
<div class="adoption-hero-note">已不是科技圈玩具，而是快速进入主流社会的通用能力</div>
</div>
<div class="adoption-race">
<div class="adoption-race-item adoption-race-winner">
<div class="adoption-race-head">
<div class="adoption-race-name">生成式 AI</div>
<div class="adoption-race-tag">3 年</div>
</div>
<div class="adoption-race-track">
<AnimatedBar :value="92" fill-class="adoption-race-fill adoption-race-fill-hero" />
</div>
</div>
<div class="adoption-race-item">
<div class="adoption-race-head">
<div class="adoption-race-name">互联网</div>
<div class="adoption-race-tag">5 年仍在扩散</div>
</div>
<div class="adoption-race-track">
<AnimatedBar :value="61" fill-class="adoption-race-fill adoption-race-fill-dim" :delay="80" />
</div>
</div>
<div class="adoption-race-item">
<div class="adoption-race-head">
<div class="adoption-race-name">个人电脑</div>
<div class="adoption-race-tag">8 年仍在扩散</div>
</div>
<div class="adoption-race-track">
<AnimatedBar :value="54" fill-class="adoption-race-fill adoption-race-fill-dim" :delay="140" />
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
<div class="mood-item mood-item-positive">
<div class="mood-number mood-number-positive"><AnimatedNumber :value="59" suffix="%" :duration="900" :delay="80" /></div>
<div class="mood-label">看好 AI 带来的效率提升</div>
</div>
<div class="mood-item mood-item-alert">
<div class="mood-number mood-number-alert"><AnimatedNumber :value="52" suffix="%" :duration="900" :delay="160" /></div>
<div class="mood-label">对其风险感到担忧</div>
</div>
</div>
<div class="mood-body">
<div v-click class="mood-ledger">
<div class="mood-ledger-item">
<span class="mood-ledger-tag">喜欢的是</span>
<span class="mood-ledger-copy">搜索、翻译、写作、总结、编程辅助——这些立刻提升效率的能力</span>
</div>
<div class="mood-ledger-item">
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

<div class="evolution-stage">
<div class="evolution-trail">
<div class="evolution-step">
<div class="evolution-step-marker"></div>
<div class="evolution-step-body">
<div class="micro-label">多模态</div>
<div class="evolution-step-title">从文本走向图像、音频、视频</div>
<div class="evolution-step-copy">前沿模型在博士级科学问题、多模态推理、竞赛数学等任务上持续进步</div>
</div>
</div>
<div class="evolution-step">
<div class="evolution-step-marker"></div>
<div class="evolution-step-body">
<div class="micro-label">推理能力</div>
<div class="evolution-step-title">高难度任务接近人类表现</div>
<div class="evolution-step-copy">从"看似理解"到"真正推理"——可测量的进步，不只是感觉</div>
</div>
</div>
</div>
<div v-click class="evolution-destination">
<div class="evolution-dest-badge">关键跃迁</div>
<div class="evolution-dest-title">从"会聊"走向"会做"</div>
<div class="evolution-dest-copy">真实任务中的 Agent 成功率从 20% 提升到 77%。AI 的角色正从聊天对象变成任务代理。</div>
<div class="evolution-dest-number"><AnimatedNumber :value="77" suffix="%" :duration="1000" :delay="120" /></div>
</div>
</div>

---
layout: default
class: deck-page
---

# 从"会聊"走向"会做"

<div class="leap-stage">
<div class="leap-pair">
<div class="leap-card leap-card-before">
<div class="leap-card-year">2025</div>
<div class="leap-card-number"><AnimatedNumber :value="20" suffix="%" :duration="900" :delay="60" /></div>
<div class="leap-card-desc">真实任务中的<br>Agent 成功率</div>
</div>
<div class="leap-bridge">
<div class="leap-bridge-line"></div>
<div class="leap-bridge-body">
<div class="leap-bridge-label">一年之间</div>
<div class="leap-bridge-caption">从单轮回答<br>到连续执行</div>
</div>
</div>
<div class="leap-card leap-card-after">
<div class="leap-card-year">2026</div>
<div class="leap-card-number"><AnimatedNumber :value="77.3" suffix="%" :decimals="1" :duration="1000" :delay="160" /></div>
<div class="leap-card-desc">同样的任务，<br>成功率大幅跃升</div>
</div>
</div>
<div v-click class="leap-footer">
<div class="leap-stat">
<div class="leap-stat-number"><AnimatedNumber :value="93" suffix="%" :duration="900" :delay="220" /></div>
<div class="leap-stat-copy">网络安全 Agent 成功率</div>
</div>
<div class="leap-footer-note">过去更多是"问 AI 一个问题"，现在越来越像"让 AI 替我做一串事"</div>
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
<div class="reality-checks">
<div class="micro-label">仍会出错的领域</div>
<div class="reality-check-row">
<div class="reality-check-num">01</div>
<div class="reality-check-body">
<div class="reality-check-title">看时间、多步规划</div>
<div class="reality-check-copy">日常推理仍有盲区</div>
</div>
</div>
<div class="reality-check-row">
<div class="reality-check-num">02</div>
<div class="reality-check-body">
<div class="reality-check-title">金融分析</div>
<div class="reality-check-copy">专家级判断尚未可靠</div>
</div>
</div>
<div class="reality-check-row">
<div class="reality-check-num">03</div>
<div class="reality-check-body">
<div class="reality-check-title">真实物理世界</div>
<div class="reality-check-copy">机器人离通用还有很远的路</div>
</div>
</div>
<div v-click class="reality-verdict-block">
<div class="reality-verdict-lead">合理的态度</div>
<div class="reality-verdict-text">不是盲信，而是学会协作、保留判断</div>
</div>
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
<div class="impact-hero">
<div class="impact-hero-label">谁先受影响</div>
<div class="impact-hero-number"><AnimatedNumber :value="-20" suffix="%" :duration="950" :delay="120" /></div>
<div class="impact-hero-copy">22-25 岁软件开发者就业率下降</div>
</div>
<div v-click class="impact-details">
<div class="impact-item">
<div class="micro-label">任务迁移</div>
<div class="impact-item-copy">标准化、可拆分、可审计的初级知识工作——资料整理、初稿生成、信息汇总、重复沟通</div>
</div>
<div class="impact-item">
<div class="micro-label">为什么先影响年轻人</div>
<div class="impact-item-copy">入门岗位承担的就是最容易被自动化的那一段工作流</div>
</div>
<div class="impact-item">
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
<div class="paper-card">
<div class="micro-label">任务分工</div>
<div class="section-heading">AI 不直接取代所有人，而是先改写任务分工</div>
<div class="chart-caption mt-5">原来由实习生、新人完成的工作，被 AI 分走一部分。这会改变团队结构，也会改变"从新手成长为专家"的路径。</div>
</div>

<div v-click class="essay-stack">
<div class="essay-item">
<div class="micro-label">团队结构</div>
<div class="small-copy">组织会更少为基础产出买单，更看重能统筹上下文和压住质量的人</div>
</div>
<div class="essay-item">
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

<div class="chasm-layout">
<div class="chasm-drop">
<div class="chasm-top">
<div class="chasm-top-number"><AnimatedNumber :value="50" suffix="%" :duration="900" :delay="80" /></div>
<div class="chasm-top-desc">仅一半学校建立了 AI 使用政策</div>
</div>
<div class="chasm-gorge">
<div class="chasm-gorge-line"></div>
<div class="chasm-gorge-label">落差</div>
<div class="chasm-gorge-caption">学生已经往前走了，制度还在追</div>
</div>
<div class="chasm-bottom">
<div class="chasm-bottom-number"><AnimatedNumber :value="6" suffix="%" :duration="900" :delay="160" /></div>
<div class="chasm-bottom-desc">仅 6% 教师认为政策足够清晰</div>
</div>
</div>
<div class="chasm-question">
<div class="chasm-question-label">真正的问题</div>
<div class="chasm-question-title">当答案唾手可得，<br>教育该评估什么？</div>
<div v-click class="chasm-question-answer">未来更重要的，不是"会不会做题"，而是"会不会提问、会不会验证、会不会独立思考"</div>
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
<div class="comparison-item">
<div class="comparison-head">
<span>自然科学</span>
<span>+26%</span>
</div>
<AnimatedBar :value="76" fill-class="comparison-fill comparison-fill-strong" />
</div>
<div class="comparison-item">
<div class="comparison-head">
<span>物理科学</span>
<span>+28%</span>
</div>
<AnimatedBar :value="82" fill-class="comparison-fill comparison-fill-soft" :delay="80" />
</div>
<div class="comparison-item">
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

<div class="milestone-stage">
<div class="milestone-flow">
<div v-click class="milestone-input">
<div class="milestone-input-label">原始观测</div>
<div class="milestone-input-detail">实时气象数据输入</div>
</div>
<div v-click class="milestone-center">
<div class="milestone-center-ring"></div>
<div class="milestone-center-body">
<div class="milestone-center-label">AI 模型</div>
<div class="milestone-center-title">独立完成预测</div>
<div class="milestone-center-copy">不再辅助判断，而是接管完整流程的一整段</div>
</div>
</div>
<div v-click class="milestone-output">
<div class="milestone-output-label">最终输出</div>
<div class="milestone-output-detail">天气预测结果</div>
</div>
</div>
<div class="milestone-footer">
<div class="milestone-impact">
<span class="micro-label">里程碑意义</span>
<span class="milestone-impact-copy">这类变化一旦发生在高价值场景里，影响通常会非常深。AI 的角色正在从"工具"变成"流程中的独立环节"。</span>
</div>
</div>
</div>

---
layout: default
class: deck-page
---

# 不只是辅助判断

<div class="clinical-stage">
<div class="clinical-hero">
<div class="clinical-hero-label">医疗场景</div>
<div class="clinical-hero-sentence">病历书写时间最高减少</div>
<div class="clinical-hero-number"><AnimatedNumber :value="83" suffix="%" :duration="1000" :delay="100" /></div>
<div class="clinical-hero-bar">
<AnimatedBar :value="83" fill-class="clinical-bar-fill" :duration="1100" :delay="160" />
</div>
<div class="clinical-hero-caption">2025 年自动生成临床笔记工具开始进入医院</div>
</div>
<div v-click class="clinical-side">
<div class="clinical-insight">
<div class="clinical-insight-label">AI 的角色</div>
<div class="clinical-insight-copy">不是替代医生做判断，而是把大量重复、耗时、低附加值的工作先接过去</div>
</div>
<div class="clinical-insight clinical-insight-final">
<div class="clinical-insight-label">更大的画面</div>
<div class="clinical-insight-copy">当 AI 进入医疗、科研、天气这些高价值领域，它才真正开始改变专业工作流</div>
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
<div class="funding-card">
<div class="funding-card-label">企业 AI 投资</div>
<div class="funding-card-number"><AnimatedNumber :value="581.7" prefix="$" suffix="B" :decimals="1" :duration="1100" :delay="90" /></div>
<div class="funding-card-change">+130% YoY</div>
<div class="funding-card-copy">2025 年全球企业 AI 投资</div>
</div>
<div class="funding-card">
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

<div class="gap-stage">
<div class="gap-hero">
<div class="gap-hero-label">领先幅度</div>
<div class="gap-hero-number"><AnimatedNumber :value="2.7" suffix="%" :decimals="1" :duration="1000" :delay="120" /></div>
<div class="gap-hero-copy">截至 2026 年 3 月，顶级模型领先幅度</div>
<div class="gap-hero-thesis">关键问题不再是领先多少，而是优势能否持续</div>
</div>
<div class="gap-cards">
<div class="gap-card">
<div class="gap-card-index">01</div>
<div class="gap-card-body">
<div class="gap-card-label">变化</div>
<div class="gap-card-copy">自 2025 年以来，中美模型在性能榜上多次交替领先</div>
</div>
</div>
<div class="gap-card">
<div class="gap-card-index">02</div>
<div class="gap-card-body">
<div class="gap-card-label">不过</div>
<div class="gap-card-copy">美国仍在顶级模型和私人投资上占优，但差距在缩小</div>
</div>
</div>
<div class="gap-card gap-card-conclusion">
<div class="gap-card-index">03</div>
<div class="gap-card-body">
<div class="gap-card-label">为什么重要</div>
<div class="gap-card-copy">AI 竞争已从单边领先，进入明显的多极化阶段</div>
</div>
</div>
</div>
</div>

---
layout: default
class: deck-page
---

# AI 竞争已是系统竞争

<div class="syscomp-layout">
<div class="syscomp-hero">
<div class="syscomp-hero-label">人才流动</div>
<div class="syscomp-hero-number"><AnimatedNumber :value="-89" suffix="%" :duration="1000" :delay="120" /></div>
<div class="syscomp-hero-copy">流入美国的 AI 学者数量，自 2017 年以来的下降幅度</div>
</div>
<div v-click class="syscomp-layers">
<div class="syscomp-layer">
<div class="syscomp-layer-icon">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" stroke-width="1.3"/><rect x="8" y="8" width="5" height="5" rx="1" fill="currentColor"/><rect x="15" y="8" width="5" height="5" rx="1" fill="currentColor"/><rect x="8" y="15" width="5" height="5" rx="1" fill="currentColor"/><rect x="15" y="15" width="5" height="5" rx="1" fill="currentColor"/></svg>
</div>
<div class="syscomp-layer-body">
<div class="syscomp-layer-title">芯片</div>
<div class="syscomp-layer-copy">云、数据中心、电力——训练和部署的底座</div>
</div>
</div>
<div class="syscomp-layer">
<div class="syscomp-layer-icon">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="1.3"/><path d="M14 4a10 10 0 0 1 0 20" stroke="currentColor" stroke-width="1.3"/><circle cx="14" cy="14" r="3.5" fill="currentColor"/></svg>
</div>
<div class="syscomp-layer-body">
<div class="syscomp-layer-title">资本</div>
<div class="syscomp-layer-copy">资金、人才、产业协同——留在牌桌的前提</div>
</div>
</div>
<div class="syscomp-layer syscomp-layer-culmination">
<div class="syscomp-layer-icon">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="4" stroke="currentColor" stroke-width="1.3"/><circle cx="14" cy="14" r="10" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 3"/></svg>
</div>
<div class="syscomp-layer-body">
<div class="syscomp-layer-title">系统能力</div>
<div class="syscomp-layer-copy">AI 竞争不是几个聊天机器人的比赛，而是系统能力竞争</div>
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
<div class="infra-line infra-line-card">
<span class="infra-number"><AnimatedNumber :value="1200" suffix=" 万人" :duration="1000" :delay="160" /></span>
<span class="infra-desc">GPT-4o 一年推理用水，估算可超过这么多人的饮水需求</span>
</div>
<div class="infra-line infra-line-card">
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
<div class="closing-item">
<span class="closing-index">01</span>
<span>AI 已渗透搜索、工作、学习、科研——它不再是未来</span>
</div>
<div class="closing-item">
<span class="closing-index">02</span>
<span>真正的变化是规则重写：工作方式、教育评估、科研流程、基础设施</span>
</div>
<div class="closing-item closing-item-final">
<span class="closing-index">03</span>
<span>核心能力是<strong>判断力</strong>：验证、质疑、协作——不只是会用 AI</span>
</div>
</div>
</div>
