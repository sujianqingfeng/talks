---
theme: seriph
background: https://source.unsplash.com/random/1920x1080/?internet
title: Domain Names Deep Dive
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: Noto Sans Simplified Chinese
---

# 域名：互联网的数字门牌

从原理到实践全面解析

<div class="absolute bottom-10 right-10 text-sm opacity-50">
  演讲人：Your Name
</div>

---
transition: fade
layout: two-cols
---

# 域名简史

<v-clicks>

- **1985年**：第一个.com域名诞生（symbolics.com）
- **1998年**：互联网名称管理中心成立
- **2000年**：支持中文域名（如 淘宝.com）
- **2012年**：新后缀开放（.app/.blog等）
- **2021年**：全球注册量超3.7亿

</v-clicks>

::right::
<v-click at="1">
<div class="p-4 border rounded">
  <img src="https://source.unsplash.com/random/600x400/?old-computer" class="rounded">
  <div class="text-sm mt-2">早期的计算机设备</div>
</div>
</v-click>

---
layout: image
image: https://source.unsplash.com/random/1920x1080/?network
class: text-white
---

<div class="absolute top-20 left-20 bg-black/50 p-6 rounded-xl">
# 域名有什么用？
<v-clicks>

- 网站地址（如 taobao.com）
- 企业邮箱（name@company.com）
- 品牌保护（防止抢注）
- 数字资产（可交易投资）
- 应用入口（微信小程序关联）

</v-clicks>
</div>

---
clicks: 2
---

# 如何选择好域名？

<v-clicks>

1. 容易记忆（short.com）
2. 发音清晰（meituan.com）
3. 避免数字混淆（5vs五）
4. 选择合适后缀（.com优先）
5. 检查商标冲突

<div v-click class="mt-4 p-2 bg-yellow-100 rounded">
  🚩 案例：京东300万收购JD.com
</div>

<div v-click class="text-sm text-gray-500 mt-2">
  💡 小技巧：尝试说出域名看对方是否能正确拼写
</div>
</v-clicks>

---
layout: image-right
image: https://source.unsplash.com/random/800x600/?dns
---

# 常见问题

<v-clicks>

1. 域名会过期吗？  
   → 需要每年续费（最多注册10年）
   
2. 能转让吗？  
   → 支持买卖交易（需转移码）
   
3. 中文域名靠谱吗？  
   → 2010年后全面支持
   
4. 被抢注怎么办？  
   → 仲裁或协商购买

</v-clicks>

---
layout: center
class: text-center
---

# 未来趋势

<div flex="~ col gap-4" items-center>
  <span v-click class="text-xl">🌐 国际化域名（如 微信.中国）</span>
  <span v-click class="text-xl">🔗 Web3域名（用户自主管理）</span>
  <span v-click class="text-xl">🛡️ 智能解析（根据位置优化）</span>
</div>

---
layout: quote
background: https://source.unsplash.com/random/1920x1080/?future
---

> 域名不仅是网络地址，  
> 更是数字时代的品牌资产

---
layout: center
class: text-center
---

# 互动小测试

<div class="text-xl mb-4">
哪些是有效域名？
</div>

<div grid="~ cols-2 gap-4" class="w-80 mx-auto">
  <div v-click class="p-2 rounded" :class="$clicks >=1 ? 'bg-green-100' : ''">
    🍔 burger.com
  </div>
  <div v-click class="p-2 rounded" :class="$clicks >=2 ? 'bg-red-100' : ''">
    ❤️ love.you
  </div>
  <div v-click class="p-2 rounded" :class="$clicks >=2 ? 'bg-green-100' : ''">
    🏪 便利店.中国
  </div>
  <div v-click class="p-2 rounded" :class="$clicks >=3 ? 'bg-red-100' : ''">
    2024.奥运
  </div>
</div>

::right::
<v-click at="3">
<div class="p-4 border rounded mt-8">
  <div class="text-sm text-gray-500">答案说明：</div>
  <ul class="text-xs mt-2">
    <li>✅ 标准英文+通用后缀</li>
    <li>❌ 非标准后缀</li>
    <li>✅ 中文+国家代码</li>
    <li>❌ 保留特殊后缀</li>
  </ul>
</div>
</v-click>

---
layout: image
image: https://source.unsplash.com/random/1920x1080/?internet
class: text-white
---

<div class="absolute top-20 left-20 bg-black/50 p-6 rounded-xl">
# 为什么需要域名？
<v-clicks>

- 替代难记的IP地址（如 142.250.189.46）
- 建立品牌网络身份
- 保护数字资产
- 统一企业形象（网站+邮箱）

</v-clicks>
</div>

---
layout: image-right
image: https://source.unsplash.com/random/800x600/?contract
---

# 真实案例

<v-clicks>

1. **JD.com** 京东300万收购
2. **mi.com** 小米2243万收购
3. **weibo.com** 新浪800万收购
4. **平安.com** 平安集团保护性注册

<div v-click class="text-4xl font-bold text-green-500 animate-bounce">
  ¥30,000,000
</div>

<div v-click class="mt-4 text-sm text-yellow-300">
💡 域名价值 = 品牌价值 × 易用性 × 稀缺性
</div>
</v-clicks>

---
layout: quote
background: https://source.unsplash.com/random/1920x1080/?digital
---

> 好域名是数字时代的  
> 「黄金地段」和「品牌门面」

---
layout: thank-you
---


thank you