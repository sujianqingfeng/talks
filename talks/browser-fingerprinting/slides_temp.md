---
theme: seriph
title: 揭秘浏览器指纹
info: |
  ## 揭秘浏览器指纹：你的隐形数字身份证
  互联网时代的隐私追踪技术解析
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
    
<div class="text-7xl font-light text-black mb-8 tracking-tight">
      揭秘浏览器指纹
    </div>
    
<div class="text-3xl font-light text-gray-600 mb-4">
      你的隐形数字身份证
    </div>
    
<div class="text-xl font-light text-gray-500">
      互联网时代的隐私追踪技术解析
    </div>
  </div>
</div>
<style>
.slidev-layout {
  background: white !important;
}
</style>
---
layout: center
clicks: 3
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-4xl">
    
<div class="text-5xl font-light text-black mb-16 tracking-tight">
      你以为你是匿名的吗？
    </div>
    
    
<div class="space-y-8 text-left">
      <div v-click="1" class="text-2xl font-light text-gray-700 flex items-center">
        <span class="text-4xl mr-4">❓</span>
        <span>清除Cookie后，网站还能认出你吗？</span>
      </div>
      
      <div v-click="2" class="text-2xl font-light text-gray-700 flex items-center">
        <span class="text-4xl mr-4">❓</span>
        <span>无痕模式真的能保护隐私吗？</span>
      </div>
      
      <div v-click="3" class="text-2xl font-light text-gray-700 flex items-center">
        <span class="text-4xl mr-4">❓</span>
        <span>为什么退出登录后还能看到相关广告？</span>
      </div>
    </div>
    
    <div v-click="4" class="mt-16 text-3xl font-medium text-blue-600">
      答案：浏览器指纹
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-6xl font-light text-black mb-12 tracking-tight">
      什么是浏览器指纹？
    </div>
    
    
<div class="space-y-8 text-left px-12">
      
<div class="text-2xl font-light text-gray-700 leading-relaxed">
        通过收集浏览器和设备的各种特征信息，组合成独特的"数字指纹"
      </div>
      
      
<div class="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 my-8">
        
<div class="text-xl font-light text-gray-600 italic">
          就像警察通过指纹识别罪犯，<br/>
          网站通过浏览器指纹识别访客
        </div>
      </div>
      
      
<div class="grid grid-cols-2 gap-8 mt-12">
        
<div class="text-center">
          
<div class="text-5xl font-light text-blue-600 mb-2">83.6%</div>
          
<div class="text-lg font-light text-gray-600">的浏览器指纹是独一无二的</div>
        </div>
        
<div class="text-center">
          
<div class="text-5xl font-light text-blue-600 mb-2">90%+</div>
          
<div class="text-lg font-light text-gray-600">更换IP后仍能被识别</div>
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-6xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      浏览器指纹 vs Cookie
    </div>
    
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b-2 border-gray-300">
          <th class="py-4 px-6 text-xl font-medium text-gray-700">特征</th>
          <th class="py-4 px-6 text-xl font-medium text-gray-700">Cookie</th>
          <th class="py-4 px-6 text-xl font-medium text-gray-700">浏览器指纹</th>
        </tr>
      </thead>
      <tbody class="text-lg">
        <tr class="border-b border-gray-200">
          <td class="py-4 px-6 font-light text-gray-600">可被删除</td>
          <td class="py-4 px-6"><span class="text-green-600 text-2xl">✓</span> 是</td>
          <td class="py-4 px-6"><span class="text-red-600 text-2xl">✗</span> 否</td>
        </tr>
        <tr class="border-b border-gray-200">
          <td class="py-4 px-6 font-light text-gray-600">需要同意</td>
          <td class="py-4 px-6"><span class="text-green-600 text-2xl">✓</span> 是（GDPR要求）</td>
          <td class="py-4 px-6"><span class="text-red-600 text-2xl">✗</span> 否</td>
        </tr>
        <tr class="border-b border-gray-200">
          <td class="py-4 px-6 font-light text-gray-600">用户感知</td>
          <td class="py-4 px-6"><span class="text-yellow-600">🟡</span> 中等</td>
          <td class="py-4 px-6"><span class="text-red-600 text-2xl">✗</span> 低</td>
        </tr>
        <tr class="border-b border-gray-200">
          <td class="py-4 px-6 font-light text-gray-600">跨浏览器追踪</td>
          <td class="py-4 px-6"><span class="text-red-600 text-2xl">✗</span> 否</td>
          <td class="py-4 px-6"><span class="text-green-600 text-2xl">✓</span> 可能</td>
        </tr>
        <tr>
          <td class="py-4 px-6 font-light text-gray-600">持久性</td>
          <td class="py-4 px-6"><span class="text-yellow-600">🟡</span> 中等</td>
          <td class="py-4 px-6"><span class="text-green-600 text-2xl">✓</span> 高</td>
        </tr>
      </tbody>
    </table>
    
    
<div class="mt-8 text-2xl font-medium text-blue-600">
      浏览器指纹是"删不掉的Cookie"
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-6xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      浏览器指纹包含什么信息？
    </div>
    
    
<div class="grid grid-cols-2 gap-8">
      
<div class="space-y-4">
        
<div class="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
          
<div class="text-2xl font-medium text-red-600 mb-3">🔴 高级层</div>
          
<div class="text-lg font-light text-gray-700">Canvas指纹、WebGL指纹<br/>AudioContext指纹</div>
          
<div class="text-sm font-light text-red-500 mt-2">高度独特 - 95%唯一性</div>
        </div>
        
        
<div class="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6">
          
<div class="text-2xl font-medium text-orange-600 mb-3">🟠 硬件层</div>
          
<div class="text-lg font-light text-gray-700">CPU核心、内存、显卡<br/>触摸屏、传感器</div>
          
<div class="text-sm font-light text-orange-500 mt-2">设备特征 - 90%唯一性</div>
        </div>
      </div>
      
      
<div class="space-y-4">
        
<div class="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
          
<div class="text-2xl font-medium text-green-600 mb-3">🟢 配置层</div>
          
<div class="text-lg font-light text-gray-700">已安装字体、插件<br/>扩展程序、浏览器设置</div>
          
<div class="text-sm font-light text-green-500 mt-2">因人而异 - 75%唯一性</div>
        </div>
        
        
<div class="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
          
<div class="text-2xl font-medium text-blue-600 mb-3">🔵 基础层</div>
          
<div class="text-lg font-light text-gray-700">浏览器类型、操作系统<br/>屏幕分辨率、时区、语言</div>
          
<div class="text-sm font-light text-blue-500 mt-2">人人都有 - 40%唯一性</div>
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
clicks: 3
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      Canvas指纹原理
    </div>
    
    
<div class="space-y-8">
      <div v-click="1" class="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
        
<div class="text-2xl font-light text-gray-700 mb-4">
          <span class="font-medium">步骤 1：</span> 用JavaScript在隐藏画布上绘制文本和图形
        </div>
      </div>
      
      <div v-click="2" class="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
        
<div class="text-2xl font-light text-gray-700 mb-4">
          <span class="font-medium">步骤 2：</span> 不同设备渲染结果有细微差异（亚像素级）
        </div>
        
<div class="text-lg font-light text-gray-600 mt-4 space-y-2">
          <div>• 操作系统的字体渲染引擎不同</div>
          <div>• 显卡的抗锯齿算法不同</div>
          <div>• 字体库版本差异</div>
        </div>
      </div>
      
      <div v-click="3" class="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
        
<div class="text-2xl font-light text-gray-700 mb-4">
          <span class="font-medium">步骤 3：</span> 将图像转换为hash值作为唯一标识
        </div>
        
<div class="grid grid-cols-2 gap-4 mt-4">
          
<div class="bg-white rounded-lg p-4 font-mono text-sm">
            设备A → a3f7c9e2...
          </div>
          
<div class="bg-white rounded-lg p-4 font-mono text-sm">
            设备B → b8d4f1a6...
          </div>
        </div>
      </div>
      
      <div v-click="4" class="text-xl font-light text-blue-600 italic mt-8">
        某电商平台使用Canvas指纹识别刷单账号，准确率达95%
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      浏览器指纹如何识别你？
    </div>
    
    
<div class="space-y-6">
      
<div class="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6">
        
<div class="text-2xl font-light text-gray-700">访问网站</div>
      </div>
      
      
<div class="text-4xl text-gray-400">↓</div>
      
      
<div class="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
        
<div class="text-2xl font-light text-gray-700">JS自动收集 → 20+ 项特征信息</div>
      </div>
      
      
<div class="text-4xl text-gray-400">↓</div>
      
      
<div class="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
        
<div class="text-2xl font-light text-gray-700">组合计算 → 生成唯一Hash值</div>
      </div>
      
      
<div class="text-4xl text-gray-400">↓</div>
      
      
<div class="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6">
        
<div class="text-2xl font-light text-gray-700">数据库比对 → 识别是否为同一用户</div>
      </div>
      
      
<div class="text-4xl text-gray-400">↓</div>
      
      
<div class="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
        
<div class="text-2xl font-light text-gray-700">关联历史行为</div>
      </div>
    </div>
    
    
<div class="mt-8 text-xl font-light text-gray-600">
      <span class="font-medium">数据：</span>一般浏览器的熵值达到18.1 bits，能从286,777人中识别出你
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-8 tracking-tight">
      真实案例：电商价格歧视
    </div>
    
    
<div class="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 mb-8">
      
<div class="text-2xl font-light text-gray-700 mb-6">
        某用户发现用<span class="font-medium text-blue-600">iPhone</span>浏览酒店预订网站
      </div>
      
<div class="text-6xl font-light text-red-600 mb-2">¥1200</div>
      
<div class="text-xl font-light text-gray-600 mb-8">同一房间</div>
      
<div class="text-2xl font-light text-gray-700 mb-6">
        用<span class="font-medium text-green-600">安卓手机</span>浏览
      </div>
      
<div class="text-6xl font-light text-green-600">¥980</div>
    </div>
    
    
<div class="text-left space-y-4">
      
<div class="text-xl font-light text-gray-700">
        <span class="font-medium">网站识别：</span>
      </div>
      
<div class="grid grid-cols-3 gap-4">
        
<div class="bg-blue-50 rounded-lg p-4">
          
<div class="text-lg font-light text-blue-600">设备类型</div>
          
<div class="text-sm font-light text-gray-600">iPhone（高端设备）</div>
        </div>
        
<div class="bg-blue-50 rounded-lg p-4">
          
<div class="text-lg font-light text-blue-600">浏览历史</div>
          
<div class="text-sm font-light text-gray-600">经常浏览高价位商品</div>
        </div>
        
<div class="bg-blue-50 rounded-lg p-4">
          
<div class="text-lg font-light text-blue-600">地理位置</div>
          
<div class="text-sm font-light text-gray-600">一线城市</div>
        </div>
      </div>
      
      
<div class="text-xl font-medium text-red-600 mt-6">
        结论：系统判断该用户支付能力强，显示更高价格
      </div>
    </div>
  </div>
</div>
---
layout: center
clicks: 4
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-8 tracking-tight">
      真实案例：广告追踪
    </div>
    
    
<div class="space-y-6">
      <div v-click="1" class="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6 flex items-center">
        
<div class="text-3xl mr-4">📅</div>
        
<div class="text-left">
          
<div class="text-sm font-medium text-blue-600">周一</div>
          
<div class="text-xl font-light text-gray-700">在A网站搜索"跑步鞋"</div>
        </div>
      </div>
      
      <div v-click="2" class="bg-green-50 border-2 border-green-300 rounded-2xl p-6 flex items-center">
        
<div class="text-3xl mr-4">📅</div>
        
<div class="text-left">
          
<div class="text-sm font-medium text-green-600">周二</div>
          
<div class="text-xl font-light text-gray-700">在B网站（完全不相关）看到跑步鞋广告</div>
        </div>
      </div>
      
      <div v-click="3" class="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6 flex items-center">
        
<div class="text-3xl mr-4">📅</div>
        
<div class="text-left">
          
<div class="text-sm font-medium text-orange-600">周三</div>
          
<div class="text-xl font-light text-gray-700">在C新闻网站继续看到相同广告</div>
        </div>
      </div>
      
      <div v-click="4" class="bg-red-50 border-2 border-red-300 rounded-2xl p-8">
        
<div class="text-2xl font-medium text-red-600 mb-4">它怎么知道是我？</div>
        
<div class="text-xl font-light text-gray-700 text-left space-y-2">
          <div>• 三个网站都接入了同一个广告联盟</div>
          <div>• 广告联盟通过<span class="font-medium">浏览器指纹</span>跨站识别</div>
          <div>• 建立了你的兴趣画像</div>
        </div>
      </div>
    </div>
    
    <div v-click="5" class="mt-8 bg-white border-2 border-gray-300 rounded-2xl p-6 font-mono text-left">
      
<div class="text-lg font-light text-gray-600 mb-2">你的指纹ID: a3f7c9e2</div>
      
<div class="text-base font-light text-gray-600 space-y-1 ml-4">
        <div>├─ A网站：搜索了跑步鞋</div>
        <div>├─ B网站：浏览了运动相关内容</div>
        <div>└─ C网站：推送跑步鞋广告</div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-8 tracking-tight">
      真实案例：反欺诈应用
    </div>
    
    
<div class="bg-green-50 border-2 border-green-300 rounded-2xl p-8 mb-8">
      
<div class="text-2xl font-light text-gray-700 mb-6">
        某银行使用浏览器指纹增强账户安全
      </div>
    </div>
    
    
<div class="grid grid-cols-3 gap-6">
      
<div class="bg-white border-2 border-green-300 rounded-2xl p-6">
        
<div class="text-4xl mb-4">✓</div>
        
<div class="text-xl font-medium text-green-600 mb-2">正常登录</div>
        
<div class="text-base font-light text-gray-600">指纹匹配 → 直接通过</div>
      </div>
      
      
<div class="bg-white border-2 border-yellow-300 rounded-2xl p-6">
        
<div class="text-4xl mb-4">⚠️</div>
        
<div class="text-xl font-medium text-yellow-600 mb-2">新设备登录</div>
        
<div class="text-base font-light text-gray-600">指纹不匹配 → 短信验证</div>
      </div>
      
      
<div class="bg-white border-2 border-red-300 rounded-2xl p-6">
        
<div class="text-4xl mb-4">✗</div>
        
<div class="text-xl font-medium text-red-600 mb-2">可疑登录</div>
        
<div class="text-base font-light text-gray-600">指纹与黑名单匹配 → 拒绝访问</div>
      </div>
    </div>
    
    
<div class="mt-8 bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
      
<div class="text-xl font-medium text-blue-600 mb-4">实际效果</div>
      
<div class="grid grid-cols-3 gap-6 text-center">
        <div>
          
<div class="text-3xl font-light text-blue-600 mb-2">98%</div>
          
<div class="text-base font-light text-gray-600">拦截账号盗用</div>
        </div>
        <div>
          
<div class="text-3xl font-light text-blue-600 mb-2">70%</div>
          
<div class="text-base font-light text-gray-600">减少验证码骚扰</div>
        </div>
        <div>
          
<div class="text-3xl font-light text-blue-600 mb-2">↑</div>
          
<div class="text-base font-light text-gray-600">提升用户体验</div>
        </div>
      </div>
    </div>
    
    
<div class="mt-6 text-xl font-light text-gray-600 italic">
      技术本身是中性的，关键在于如何使用
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-6xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      浏览器指纹的应用场景
    </div>
    
    
<div class="grid grid-cols-2 gap-8">
      
<div class="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-left">
        
<div class="text-3xl font-medium text-green-600 mb-6">✅ 正面应用</div>
        
<div class="space-y-4">
          <div>
            
<div class="text-xl font-medium text-gray-800 mb-2">安全防护</div>
            
<div class="text-base font-light text-gray-600 space-y-1">
              <div>• 检测异常登录行为</div>
              <div>• 防止账号批量注册</div>
              <div>• 识别恶意爬虫</div>
            </div>
          </div>
          <div>
            
<div class="text-xl font-medium text-gray-800 mb-2">用户体验</div>
            
<div class="text-base font-light text-gray-600 space-y-1">
              <div>• 记住用户偏好设置</div>
              <div>• 跨设备同步（部分场景）</div>
              <div>• 减少重复验证</div>
            </div>
          </div>
          <div>
            
<div class="text-xl font-medium text-gray-800 mb-2">反欺诈</div>
            
<div class="text-base font-light text-gray-600 space-y-1">
              <div>• 识别刷单行为</div>
              <div>• 检测薅羊毛账号</div>
              <div>• 防范虚假交易</div>
            </div>
          </div>
        </div>
      </div>
      
      
<div class="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-left">
        
<div class="text-3xl font-medium text-red-600 mb-6">❌ 负面应用</div>
        
<div class="space-y-4">
          <div>
            
<div class="text-xl font-medium text-gray-800 mb-2">隐私侵犯</div>
            
<div class="text-base font-light text-gray-600 space-y-1">
              <div>• 未经同意的行为追踪</div>
              <div>• 长期监控浏览习惯</div>
              <div>• 建立详细用户画像</div>
            </div>
          </div>
          <div>
            
<div class="text-xl font-medium text-gray-800 mb-2">不公平对待</div>
            
<div class="text-base font-light text-gray-600 space-y-1">
              <div>• 价格歧视（大数据杀熟）</div>
              <div>• 内容歧视（信息茧房）</div>
              <div>• 服务歧视</div>
            </div>
          </div>
          <div>
            
<div class="text-xl font-medium text-gray-800 mb-2">商业滥用</div>
            
<div class="text-base font-light text-gray-600 space-y-1">
              <div>• 过度的精准广告</div>
              <div>• 数据贩卖</div>
              <div>• 跨平台追踪</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      普通用户面临的风险
    </div>
    
    
<div class="space-y-6">
      
<div class="bg-red-50 border-4 border-red-400 rounded-2xl p-8">
        
<div class="text-3xl font-medium text-red-600 mb-4">🔴 高风险</div>
        
<div class="grid grid-cols-2 gap-6 text-left">
          <div>
            
<div class="text-xl font-medium text-gray-800 mb-2">经济损失</div>
            
<div class="text-base font-light text-gray-600">价格歧视、精准诈骗</div>
          </div>
          <div>
            
<div class="text-xl font-medium text-gray-800 mb-2">身份关联</div>
            
<div class="text-base font-light text-gray-600">匿名身份被识破</div>
          </div>
        </div>
      </div>
      
      
<div class="bg-orange-50 border-4 border-orange-400 rounded-2xl p-8">
        
<div class="text-3xl font-medium text-orange-600 mb-4">🟠 中风险</div>
        
<div class="grid grid-cols-2 gap-6 text-left">
          <div>
            
<div class="text-xl font-medium text-gray-800 mb-2">隐私泄露</div>
            
<div class="text-base font-light text-gray-600">浏览习惯被长期记录</div>
          </div>
          <div>
            
<div class="text-xl font-medium text-gray-800 mb-2">信息茧房</div>
            
<div class="text-base font-light text-gray-600">只看到算法想让你看的</div>
          </div>
        </div>
      </div>
      
      
<div class="bg-yellow-50 border-4 border-yellow-400 rounded-2xl p-8">
        
<div class="text-3xl font-medium text-yellow-600 mb-4">🟡 低风险</div>
        
<div class="grid grid-cols-2 gap-6 text-left">
          <div>
            
<div class="text-xl font-medium text-gray-800 mb-2">广告骚扰</div>
            
<div class="text-base font-light text-gray-600">精准但烦人的广告</div>
          </div>
          <div>
            
<div class="text-xl font-medium text-gray-800 mb-2">心理不适</div>
            
<div class="text-base font-light text-gray-600">被监视的感觉</div>
          </div>
        </div>
      </div>
    </div>
    
    
<div class="mt-8 bg-white border-2 border-gray-300 rounded-2xl p-6">
      
<div class="grid grid-cols-2 gap-6 text-center">
        <div>
          
<div class="text-4xl font-light text-blue-600 mb-2">73%</div>
          
<div class="text-base font-light text-gray-600">的用户遭遇过价格歧视</div>
        </div>
        <div>
          
<div class="text-4xl font-light text-blue-600 mb-2">20+</div>
          
<div class="text-base font-light text-gray-600">网站每天追踪你</div>
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      测试你的浏览器指纹
    </div>
    
    
<div class="grid grid-cols-3 gap-6">
      
<div class="bg-white border-2 border-blue-300 rounded-2xl p-8">
        
<div class="text-4xl mb-4">🔍</div>
        
<div class="text-2xl font-medium text-blue-600 mb-3">EFF Panopticlick</div>
        
<div class="text-base font-light text-gray-600 mb-4">panopticlick.eff.org</div>
        
<div class="text-sm font-light text-gray-500">测试指纹唯一性</div>
      </div>
      
      
<div class="bg-white border-2 border-green-300 rounded-2xl p-8">
        
<div class="text-4xl mb-4">📊</div>
        
<div class="text-2xl font-medium text-green-600 mb-3">AmIUnique</div>
        
<div class="text-base font-light text-gray-600 mb-4">amiunique.org</div>
        
<div class="text-sm font-light text-gray-500">详细分析各项特征</div>
      </div>
      
      
<div class="bg-white border-2 border-purple-300 rounded-2xl p-8">
        
<div class="text-4xl mb-4">🔐</div>
        
<div class="text-2xl font-medium text-purple-600 mb-3">BrowserLeaks</div>
        
<div class="text-base font-light text-gray-600 mb-4">browserleaks.com</div>
        
<div class="text-sm font-light text-gray-500">全面的隐私泄露检测</div>
      </div>
    </div>
    
    
<div class="mt-12 bg-blue-50 border-2 border-blue-300 rounded-2xl p-8">
      
<div class="text-2xl font-medium text-blue-600 mb-4">测试要点</div>
      
<div class="grid grid-cols-3 gap-6 text-left">
        
<div class="text-base font-light text-gray-700">
          ✓ 展示收集了哪些信息
        </div>
        
<div class="text-base font-light text-gray-700">
          ✓ 你的指纹有多独特
        </div>
        
<div class="text-base font-light text-gray-700">
          ✓ 与其他用户的对比
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-6xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      如何保护自己？
    </div>
    
    
<div class="grid grid-cols-3 gap-6">
      
<div class="bg-amber-50 border-2 border-amber-400 rounded-2xl p-8 text-left">
        
<div class="text-3xl mb-4">🥉</div>
        
<div class="text-2xl font-medium text-amber-600 mb-6">青铜级</div>
        
<div class="text-sm font-light text-gray-700 space-y-3 mb-6">
          <div>✓ 定期清除浏览器数据</div>
          <div>✓ 限制网站权限</div>
          <div>✓ 禁用第三方Cookie</div>
          <div>✓ 使用隐私模式</div>
        </div>
        
<div class="border-t-2 border-amber-200 pt-4">
          
<div class="text-base font-medium text-amber-600">效果：30%防护</div>
          
<div class="text-sm font-light text-gray-600">代价：几乎为零</div>
        </div>
      </div>
      
      
<div class="bg-gray-50 border-2 border-gray-400 rounded-2xl p-8 text-left">
        
<div class="text-3xl mb-4">🥈</div>
        
<div class="text-2xl font-medium text-gray-600 mb-6">白银级</div>
        
<div class="text-sm font-light text-gray-700 space-y-3 mb-6">
          <div>✓ 使用隐私浏览器</div>
          <div>✓ 安装反追踪扩展</div>
          <div>✓ 启用指纹保护</div>
          <div>✓ 不同用途不同浏览器</div>
        </div>
        
<div class="border-t-2 border-gray-200 pt-4">
          
<div class="text-base font-medium text-gray-600">效果：60%防护</div>
          
<div class="text-sm font-light text-gray-600">代价：轻微不便</div>
        </div>
      </div>
      
      
<div class="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 text-left">
        
<div class="text-3xl mb-4">🥇</div>
        
<div class="text-2xl font-medium text-yellow-600 mb-6">黄金级</div>
        
<div class="text-sm font-light text-gray-700 space-y-3 mb-6">
          <div>✓ 使用Tor浏览器</div>
          <div>✓ 虚拟机 + 定期重置</div>
          <div>✓ VPN + 代理组合</div>
          <div>✓ 禁用JavaScript</div>
        </div>
        
<div class="border-t-2 border-yellow-200 pt-4">
          
<div class="text-base font-medium text-yellow-600">效果：90%防护</div>
          
<div class="text-sm font-light text-gray-600">代价：明显影响体验</div>
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-6xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      浏览器厂商的反制措施
    </div>
    
    
<div class="grid grid-cols-2 gap-6">
      
<div class="bg-green-50 border-2 border-green-300 rounded-2xl p-6 text-left">
        
<div class="flex items-center justify-between mb-4">
          
<div class="text-2xl font-medium text-gray-800">Firefox</div>
          
<div class="text-3xl font-light text-green-600">9/10</div>
        </div>
        
<div class="text-sm font-light text-gray-600 space-y-2">
          <div>✓ 增强型追踪保护（默认开启）</div>
          <div>✓ Canvas指纹防护</div>
          <div>✓ 阻止超级Cookie</div>
        </div>
        
<div class="mt-3 text-sm font-medium text-green-600">领先者</div>
      </div>
      
      
<div class="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6 text-left">
        
<div class="flex items-center justify-between mb-4">
          
<div class="text-2xl font-medium text-gray-800">Safari</div>
          
<div class="text-3xl font-light text-blue-600">8/10</div>
        </div>
        
<div class="text-sm font-light text-gray-600 space-y-2">
          <div>✓ 智能防跟踪（ITP技术）</div>
          <div>✓ 指纹防护</div>
          <div>⚠️ 仅苹果设备可用</div>
        </div>
        
<div class="mt-3 text-sm font-medium text-blue-600">苹果生态</div>
      </div>
      
      
<div class="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6 text-left">
        
<div class="flex items-center justify-between mb-4">
          
<div class="text-2xl font-medium text-gray-800">Brave</div>
          
<div class="text-3xl font-light text-purple-600">9.5/10</div>
        </div>
        
<div class="text-sm font-light text-gray-600 space-y-2">
          <div>✓ 主动阻止指纹识别</div>
          <div>✓ 内置广告拦截</div>
          <div>✓ Tor集成</div>
        </div>
        
<div class="mt-3 text-sm font-medium text-purple-600">隐私专注</div>
      </div>
      
      
<div class="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6 text-left">
        
<div class="flex items-center justify-between mb-4">
          
<div class="text-2xl font-medium text-gray-800">Chrome</div>
          
<div class="text-3xl font-light text-orange-600">6/10</div>
        </div>
        
<div class="text-sm font-light text-gray-600 space-y-2">
          <div>⚠️ 基础保护（需手动开启）</div>
          <div>⚠️ 与Google商业模式冲突</div>
          <div>❌ 指纹防护较弱</div>
        </div>
        
<div class="mt-3 text-sm font-medium text-orange-600">市场主导</div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      推荐的隐私保护工具
    </div>
    
    
<div class="space-y-6">
      
<div class="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
        
<div class="text-2xl font-medium text-blue-600 mb-4">浏览器扩展</div>
        
<div class="grid grid-cols-2 gap-4">
          
<div class="bg-white rounded-lg p-4 text-left">
            
<div class="text-lg font-medium text-gray-800 mb-2">uBlock Origin</div>
            
<div class="text-sm font-light text-gray-600 mb-2">拦截广告和追踪器</div>
            
<div class="text-yellow-500">⭐⭐⭐⭐⭐</div>
          </div>
          
<div class="bg-white rounded-lg p-4 text-left">
            
<div class="text-lg font-medium text-gray-800 mb-2">Privacy Badger</div>
            
<div class="text-sm font-light text-gray-600 mb-2">自动学习并阻止追踪器（EFF出品）</div>
            
<div class="text-yellow-500">⭐⭐⭐⭐</div>
          </div>
          
<div class="bg-white rounded-lg p-4 text-left">
            
<div class="text-lg font-medium text-gray-800 mb-2">Canvas Defender</div>
            
<div class="text-sm font-light text-gray-600 mb-2">专门防护Canvas指纹</div>
            
<div class="text-yellow-500">⭐⭐⭐⭐</div>
          </div>
          
<div class="bg-white rounded-lg p-4 text-left">
            
<div class="text-lg font-medium text-gray-800 mb-2">Trace</div>
            
<div class="text-sm font-light text-gray-600 mb-2">随机化浏览器指纹</div>
            
<div class="text-yellow-500">⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
      
      
<div class="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
        
<div class="text-2xl font-medium text-green-600 mb-4">独立工具</div>
        
<div class="grid grid-cols-3 gap-4 text-left">
          
<div class="text-base font-light text-gray-700">
            <span class="font-medium">VPN服务</span><br/>隐藏真实IP
          </div>
          
<div class="text-base font-light text-gray-700">
            <span class="font-medium">DNS over HTTPS</span><br/>加密DNS查询
          </div>
          
<div class="text-base font-light text-gray-700">
            <span class="font-medium">容器标签页</span><br/>隔离不同网站
          </div>
        </div>
      </div>
      
      
<div class="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
        
<div class="text-xl font-medium text-red-600 mb-2">⚠️ 注意事项</div>
        
<div class="text-base font-light text-gray-700">
          扩展太多反而更独特 · 找到隐私和便利的平衡点
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-6xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      全球法律法规现状
    </div>
    
    
<div class="grid grid-cols-2 gap-6">
      
<div class="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 text-left">
        
<div class="flex items-center mb-4">
          
<div class="text-3xl mr-3">🇪🇺</div>
          
<div class="text-2xl font-medium text-gray-800">欧盟（最严格）</div>
        </div>
        
<div class="space-y-3 text-base font-light text-gray-700">
          <div><span class="font-medium">GDPR</span>（2018年生效）</div>
          <div>要求：明确同意才能收集指纹</div>
          <div>罚款：最高全球营收4%</div>
          
<div class="text-sm text-red-600 mt-2">
            案例：2023年某广告公司因违规被罚890万欧元
          </div>
        </div>
      </div>
      
      
<div class="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-left">
        
<div class="flex items-center mb-4">
          
<div class="text-3xl mr-3">🇺🇸</div>
          
<div class="text-2xl font-medium text-gray-800">美国（州级差异）</div>
        </div>
        
<div class="space-y-3 text-base font-light text-gray-700">
          <div><span class="font-medium">加州CCPA</span>：消费者有权退出</div>
          <div><span class="font-medium">弗吉尼亚VCDPA</span>：类似规定</div>
          <div>联邦层面：尚无统一立法</div>
        </div>
      </div>
      
      
<div class="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8 text-left">
        
<div class="flex items-center mb-4">
          
<div class="text-3xl mr-3">🇨🇳</div>
          
<div class="text-2xl font-medium text-gray-800">中国（快速完善）</div>
        </div>
        
<div class="space-y-3 text-base font-light text-gray-700">
          <div><span class="font-medium">个人信息保护法</span>（2021年）</div>
          <div><span class="font-medium">数据安全法</span></div>
          <div>要求：告知同意原则</div>
          <div>现状：执行力度逐渐加强</div>
        </div>
      </div>
      
      
<div class="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-left">
        
<div class="flex items-center mb-4">
          
<div class="text-3xl mr-3">🌏</div>
          
<div class="text-2xl font-medium text-gray-800">其他地区</div>
        </div>
        
<div class="space-y-3 text-base font-light text-gray-700">
          <div>日本、韩国、巴西等跟进立法</div>
          
<div class="text-lg font-medium text-green-600 mt-2">
            整体趋势：越来越严格
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      行业发展趋势
    </div>
    
    
<div class="space-y-6">
      
<div class="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-left">
        
<div class="text-2xl font-medium text-red-600 mb-4">📈 指纹技术发展</div>
        
<div class="grid grid-cols-3 gap-4 text-base font-light text-gray-700">
          <div>
            
<div class="font-medium mb-1">更隐蔽</div>
            
<div class="text-sm">新型硬件指纹（传感器噪声）</div>
          </div>
          <div>
            
<div class="font-medium mb-1">更精准</div>
            
<div class="text-sm">AI增强识别算法</div>
          </div>
          <div>
            
<div class="font-medium mb-1">更持久</div>
            
<div class="text-sm">跨浏览器追踪技术</div>
          </div>
        </div>
      </div>
      
      
<div class="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-left">
        
<div class="text-2xl font-medium text-green-600 mb-4">🛡️ 隐私保护发展</div>
        
<div class="grid grid-cols-3 gap-4 text-base font-light text-gray-700">
          <div>
            
<div class="font-medium mb-1">浏览器原生防护</div>
            
<div class="text-sm">成为标配功能</div>
          </div>
          <div>
            
<div class="font-medium mb-1">去中心化身份</div>
            
<div class="text-sm">Web3.0方向</div>
          </div>
          <div>
            
<div class="font-medium mb-1">隐私计算</div>
            
<div class="text-sm">联邦学习、差分隐私</div>
          </div>
        </div>
      </div>
      
      
<div class="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 text-left">
        
<div class="text-2xl font-medium text-blue-600 mb-4">⚖️ 监管趋势</div>
        
<div class="grid grid-cols-3 gap-4 text-base font-light text-gray-700">
          <div>全球立法加速</div>
          <div>执法力度加强</div>
          <div>用户意识提升</div>
        </div>
      </div>
      
      
<div class="bg-gray-50 border-2 border-gray-300 rounded-2xl p-6 mt-8">
        
<div class="text-xl font-light text-gray-700 italic">
          <span class="font-medium">预测：</span>2026年，主流浏览器将默认启用强力指纹防护<br/>
          但同时，新的追踪技术也会出现
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      给普通用户的建议
    </div>
    
    
<div class="space-y-6">
      
<div class="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-left">
        
<div class="text-2xl font-medium text-red-600 mb-4">🎯 今天就做</div>
        
<div class="grid grid-cols-2 gap-4 text-base font-light text-gray-700">
          <div>✓ 访问 amiunique.org 测试你的指纹</div>
          <div>✓ 安装 uBlock Origin 扩展</div>
          <div>✓ 开启浏览器的隐私保护功能</div>
          <div>✓ 清理不必要的浏览器插件</div>
        </div>
      </div>
      
      
<div class="bg-orange-50 border-2 border-orange-300 rounded-2xl p-8 text-left">
        
<div class="text-2xl font-medium text-orange-600 mb-4">📅 本周完成</div>
        
<div class="space-y-3 text-base font-light text-gray-700">
          <div>✓ 评估并更换隐私友好的浏览器</div>
          <div>✓ 设置不同浏览器用于不同目的
            
<div class="ml-6 mt-2 space-y-1 text-sm text-gray-600">
              <div>• Chrome：工作学习</div>
              <div>• Firefox：日常浏览</div>
              <div>• Brave：敏感操作</div>
            </div>
          </div>
          <div>✓ 检查并限制网站权限</div>
        </div>
      </div>
      
      
<div class="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 text-left">
        
<div class="text-2xl font-medium text-blue-600 mb-4">🎓 长期培养</div>
        
<div class="grid grid-cols-3 gap-4 text-base font-light text-gray-700">
          <div>✓ 关注隐私保护资讯</div>
          <div>✓ 定期更新防护措施</div>
          <div>✓ 向身边人普及知识</div>
        </div>
      </div>
      
      
<div class="bg-gray-50 border-2 border-gray-300 rounded-2xl p-6 mt-8">
        
<div class="text-xl font-light text-gray-700 italic">
          <span class="font-medium">核心原则：</span><br/>
          不要追求100%匿名（不现实）<br/>
          要提高追踪成本（够用就好）
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      常见误区澄清
    </div>
    
    
<div class="space-y-4">
      
<div class="bg-white border-2 border-gray-300 rounded-2xl p-6 text-left">
        
<div class="flex items-start">
          
<div class="text-3xl mr-4 mt-1">❌</div>
          
<div class="flex-1">
            
<div class="text-xl font-medium text-gray-800 mb-2">误区1：无痕模式完全安全</div>
            
<div class="text-base font-light text-gray-600">
              <span class="font-medium text-green-600">真相：</span>无痕模式只是不保存本地历史，网站仍能通过指纹追踪你
            </div>
          </div>
        </div>
      </div>
      
      
<div class="bg-white border-2 border-gray-300 rounded-2xl p-6 text-left">
        
<div class="flex items-start">
          
<div class="text-3xl mr-4 mt-1">❌</div>
          
<div class="flex-1">
            
<div class="text-xl font-medium text-gray-800 mb-2">误区2：换IP就能隐藏身份</div>
            
<div class="text-base font-light text-gray-600">
              <span class="font-medium text-green-600">真相：</span>浏览器指纹不依赖IP，换IP后仍能被识别
            </div>
          </div>
        </div>
      </div>
      
      
<div class="bg-white border-2 border-gray-300 rounded-2xl p-6 text-left">
        
<div class="flex items-start">
          
<div class="text-3xl mr-4 mt-1">❌</div>
          
<div class="flex-1">
            
<div class="text-xl font-medium text-gray-800 mb-2">误区3：只有大公司才会追踪</div>
            
<div class="text-base font-light text-gray-600">
              <span class="font-medium text-green-600">真相：</span>80%的网站都接入了第三方追踪服务
            </div>
          </div>
        </div>
      </div>
      
      
<div class="bg-white border-2 border-gray-300 rounded-2xl p-6 text-left">
        
<div class="flex items-start">
          
<div class="text-3xl mr-4 mt-1">❌</div>
          
<div class="flex-1">
            
<div class="text-xl font-medium text-gray-800 mb-2">误区4：我没做坏事，不怕被追踪</div>
            
<div class="text-base font-light text-gray-600">
              <span class="font-medium text-green-600">真相：</span>
              
<div class="space-y-1 mt-2">
                <div>• 隐私是基本权利，不是因为有秘密才需要</div>
                <div>• 今天合法的数据，明天可能被滥用</div>
                <div>• 价格歧视等不公平对待与"好坏"无关</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
<div class="bg-white border-2 border-gray-300 rounded-2xl p-6 text-left">
        
<div class="flex items-start">
          
<div class="text-3xl mr-4 mt-1">❌</div>
          
<div class="flex-1">
            
<div class="text-xl font-medium text-gray-800 mb-2">误区5：完全禁用JavaScript就安全了</div>
            
<div class="text-base font-light text-gray-600">
              <span class="font-medium text-green-600">真相：</span>很多网站无法正常使用，而且行为本身就是独特的指纹特征
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      思考与讨论
    </div>
    
    
<div class="space-y-8">
      
<div class="bg-purple-50 border-2 border-purple-300 rounded-2xl p-8 text-left">
        
<div class="text-2xl font-medium text-purple-600 mb-4">🤔 伦理思考</div>
        
<div class="space-y-3 text-lg font-light text-gray-700">
          <div>• 在隐私保护和个性化服务之间，你会如何选择？</div>
          <div>• 企业有权利追踪用户行为吗？界限在哪里？</div>
          <div>• 匿名权利在数字时代还存在吗？</div>
        </div>
      </div>
      
      
<div class="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 text-left">
        
<div class="text-2xl font-medium text-blue-600 mb-4">💡 实践讨论</div>
        
<div class="space-y-3 text-lg font-light text-gray-700">
          <div>• 你曾经遭遇过价格歧视吗？</div>
          <div>• 你愿意为隐私保护牺牲多少便利性？</div>
          <div>• 如果让你设计隐私法规，会包含哪些内容？</div>
        </div>
      </div>
      
      
<div class="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-left">
        
<div class="text-2xl font-medium text-green-600 mb-4">🔮 未来展望</div>
        
<div class="space-y-3 text-lg font-light text-gray-700">
          <div>• 5年后，浏览器指纹技术会发展到什么程度？</div>
          <div>• 量子计算会如何影响隐私保护？</div>
          <div>• Web3.0能否真正实现隐私自主？</div>
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
---
<div class="flex items-center justify-center h-full">
  
<div class="text-center max-w-5xl">
    
<div class="text-5xl font-light text-black mb-12 tracking-tight">
      总结要点
    </div>
    
    
<div class="space-y-6">
      
<div class="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 text-left">
        
<div class="text-2xl font-medium text-blue-600 mb-4">🔑 关键认知</div>
        
<div class="space-y-3 text-lg font-light text-gray-700">
          <div>✓ 浏览器指纹真实存在且难以消除</div>
          <div>✓ 它是比Cookie更持久的追踪手段</div>
          <div>✓ 83.6%的浏览器指纹是独一无二的</div>
          <div>✓ 技术本身中性，关键在于如何使用</div>
        </div>
      </div>
      
      
<div class="bg-green-50 border-2 border-green-300 rounded-2xl p-8 text-left">
        
<div class="text-2xl font-medium text-green-600 mb-4">🎯 行动建议</div>
        
<div class="space-y-3 text-lg font-light text-gray-700">
          <div>✓ 立即测试你的浏览器指纹</div>
          <div>✓ 采用适合自己的防护措施</div>
          <div>✓ 保持对隐私问题的关注</div>
          <div>✓ 在隐私和便利间找到平衡</div>
        </div>
      </div>
      
      
<div class="bg-purple-50 border-2 border-purple-300 rounded-2xl p-8 text-left">
        
<div class="text-2xl font-medium text-purple-600 mb-4">💭 深层思考</div>
        
<div class="space-y-3 text-lg font-light text-gray-700">
          <div>• 隐私保护是一场持久战</div>
          <div>• 技术进步不应以牺牲隐私为代价</div>
          <div>• 每个人都有权掌控自己的数字身份</div>
        </div>
      </div>
      
      
<div class="bg-gray-50 border-2 border-gray-300 rounded-2xl p-6 mt-8">
        
<div class="text-2xl font-light text-gray-700 italic text-center">
          你的浏览器可能记得你是谁<br/>
          但只有你自己决定想成为谁
        </div>
      </div>
    </div>
  </div>
</div>
---
layout: center
class: text-center
---
<div class="flex flex-col items-center justify-center h-full">
  
<div class="text-7xl font-light text-black mb-12 tracking-tight">
    谢谢聆听
  </div>
  
  
<div class="text-3xl font-light text-gray-600 mb-16">
    Q & A
  </div>
  
  
<div class="grid grid-cols-2 gap-12 max-w-3xl">
    
<div class="text-center">
      
<div class="text-lg font-light text-gray-600 mb-3">测试你的浏览器指纹</div>
      
<div class="bg-white border-2 border-gray-300 rounded-2xl p-8">
        
<div class="text-base font-mono text-gray-500">扫码测试</div>
        
<div class="text-sm font-light text-gray-500 mt-4">amiunique.org</div>
      </div>
    </div>
    
    
<div class="text-center">
      
<div class="text-lg font-light text-gray-600 mb-3">延伸阅读资源</div>
      
<div class="bg-white border-2 border-gray-300 rounded-2xl p-8">
        
<div class="text-base font-mono text-gray-500">扫码获取</div>
        
<div class="text-sm font-light text-gray-500 mt-4">演示文稿下载</div>
      </div>
    </div>
  </div>
</div>
