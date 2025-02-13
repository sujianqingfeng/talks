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



# 国外的反应


## Andrej Karpathy
https://x.com/karpathy/status/1872362712958906460

Karpathy 是 OpenAI 的创始成员和研究员

<img src='Karpathy.webp'/>
<img src='react-Karpathy.png'/>




# 国外的反应

## Sam Altman
https://x.com/sama/status/1884066337103962416

<img src='react-Altman.png'/>

DeepSeek的R1模型性价比很高，表现令人印象深刻。


# 股市

nvdia
tsmc
美光


中芯
360
金山云



# dau


https://uniquecapital.feishu.cn/wiki/BBQMwlMfCitM1dkli9AcLWzanJb?table=blk6L0UGxdLEkLAH




# 它到底是怎么发生的啊，原因到底是什么？


# 推理模型 

那我们要解决的第一个问题就是。
什么是推理模型


# 语言大模型

提示词比较简单，没有准确描述的的时候容易出错

# 语言大模型 

model needs more tokens to think

# 例子




# Cot

当然你为你的每一个问题，都写思维链，也是可以的。
但是这样就有一个问题，你的认知是有限的，你不可能为每一个问题都写思维链。

所以我们需要一个推理模型来帮我写思维链。
比如 例子



# o1

第一个推理模型


<img src='o1-benchmarks.png'/>


# 为什么我们需要推理模型
通用&不使用场景


- 谜题&数字证明
- 复制的决策
- 开放式答案
- 显示的多步思考
- 。。。


- 1+1 想多了 容易错
- 常识性问题



# 如何去复现o1


过程激励模型


- 树搜索派系
- 蒸馏派系（r1-lite）


# 与此同时，一场精彩绝伦的探索之旅正在发生

 kimi & deepseek


# k1.5

https://x.com/Kimi_Moonshot/status/1882413059513471044


如何去找到灵感


We need to enable models to search on their own!
o1 doesn't restrict how the model thinks!


确定路线
Do RL with exact rewards! Don't be constrained by Reward Models.


# deepseek r1-zero


# 强化学习算法（Reinforcement Learning Algorithm）


GRPO (Group Relative Policy Optimization，组相对策略优化) 和 PPO (Proximal Policy Optimization，近端策略优化) 都是强化学习算法，用于优化策略模型，但它们在实现方式和结构上有所不同1. GRPO是PPO的一种变体，它通过在组内对奖励进行归一化来优化策略，提高了训练效率，



# 训练模板(Training Template) 


<img src='training-template.png'/>


# 奖励模型（Reward Modeling）

- 准确性奖励
- 格式奖励


举例说明


# 模型学会了思考


<img src='moment.png'/>

# benchmarks

<img src='zero-benchmarks.png'/>


验证可行


# 一些问题

- 可读性
- language mixing




<img src='r1-zero-drawback.png'/>



# r1

https://magazine.sebastianraschka.com/p/understanding-reasoning-llms

<img src='r1.webp'/>



