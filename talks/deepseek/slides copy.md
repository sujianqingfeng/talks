---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
# some information about your slides (markdown enabled)
title: DeepSeek - AI 编程的新时代
info: |
  DeepSeek 破圈
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

#  DeepSeek 破圈



---


时间线


DeepSeek
@deepseek_ai
·
Nov 20, 2024
🚀 DeepSeek-R1-Lite-Preview is now live: unleashing supercharged reasoning power!

🔍 o1-preview-level performance on AIME & MATH benchmarks.
💡 Transparent thought process in real-time.
🛠️ Open-source models & API coming soon!



DeepSeek
@deepseek_ai
·
Dec 26, 2024
🚀 Introducing DeepSeek-V3!

Biggest leap forward yet:
⚡ 60 tokens/second (3x faster than V2!)
💪 Enhanced capabilities
🛠 API compatibility intact
🌍 Fully open-source models & papers



DeepSeek
@deepseek_ai
·
Jan 15
🎉 Introducing DeepSeek App!

🔐 Easy login: E-mail/Google Account/Apple ID
☁️ Cross-platform chat history sync
🔍 Web search & Deep-Think mode
📄 File upload & text extraction



DeepSeek
@deepseek_ai
·
Jan 20
🚀 DeepSeek-R1 is here!

⚡ Performance on par with OpenAI-o1
📖 Fully open-source model & technical report
🏆 MIT licensed: Distill & commercialize freely!

🌐 Website & API are live now! Try DeepThink at http://chat.deepseek.com today!


---

# 国外的反应


## Andrej Karpathy

> Karpathy 是 OpenAI 的创始成员和研究员

<img src='Karpathy.webp'/>
<img src='react-Karpathy.png'/>

来源：https://x.com/karpathy/status/1872362712958906460


---

# 国外的反应

## Sam Altman

<img src='react-Altman.png'/>

DeepSeek的R1模型性价比很高，表现令人印象深刻。


来源：https://x.com/sama/status/1884066337103962416

---

# 股市

nvdia

<img src='nvidia-stock.png'/>


中芯

<img src='smic-stock.png'/>


---


# dau

<img src='dau.png'/>

来源：https://uniquecapital.feishu.cn/wiki/BBQMwlMfCitM1dkli9AcLWzanJb?table=blk6L0UGxdLEkLAH


---

# download


<img src='download.png'/>


---

# 它到底是怎么发生的啊，原因到底是什么？


---

# 什么是推理模型 


<!-- 那我们要解决的第一个问题就是。 -->


---

# 语言大模型

提示词比较简单，没有准确描述的的时候容易出错

---

# 语言大模型 

model needs more tokens to think


<img src='chain-of-thought.png'/>


---

# 语言大模型 例子

prompt:
Q: 昨天是星期三，后天是星期几？
A: 星期五

CoT prompt:
Q: 昨天是星期三，后天是星期几？让我们一步一步来思考：如果昨天是星期三，那么今天是星期四。如果是星期四，那么明天就是星期五，后天就是星期六。所以，后天是星期几？
A: 星期六


---


# CoT

todo:这里可以用一个动画来表达我们的认知有限


<!-- 当然你为你的每一个问题，都写思维链，也是可以的。
但是这样就有一个问题，你的认知是有限的，你不可能为每一个问题都写思维链。

所以我们需要一个推理模型来帮我写思维链。 -->


---

第一个推理模型：o1

---

# o1

<img src='o1-benchmarks.png'/>


---

# 为什么我们需要推理模型
通用&不使用场景


- 谜题&数字证明
- 复制的决策
- 开放式答案
- 显示的多步思考
- 。。。


- 1+1 想多了 容易错
- 常识性问题


---

# 如何去复现o1




--- 

<img src='step-by-step.png'/>


---

# 过程激励模型

- 树搜索派系
- 蒸馏派系（r1-lite）


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

<img src='training-template.png'/>


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

<img src='moment.png'/>

---

# benchmarks

<img src='zero-benchmarks.png'/>


验证可行


---

# 一些问题

- 可读性
- language mixing


<img src='r1-zero-drawback.png'/>


---

# r1


<img src='r1.webp'/>

来源：https://magazine.sebastianraschka.com/p/understanding-reasoning-llms


---


# r1 benchmarks


<img src='r1-benchmarks.png'/>

---

# 蒸馏

<img src='r1-distill.png'/>


证明推理数据质量很高


--- 

# pure rl（qwen）


<img src='rl-qwen-32.png'/>


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






