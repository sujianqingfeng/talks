---
# 保持主题简洁
theme: default
# 随机高品质背景图
background: https://source.unsplash.com/collection/94734566/1920x1080
# 演示文稿标题和信息
title: MCP - AI 的通用连接器
info: |
  ## MCP：AI 的通用连接器

  模型上下文协议 (MCP) 简介及其为何备受关注。
# 用于居中的基本类
class: text-center
# 过渡效果
transition: slide-left
# 启用 MDC 语法
mdc: true
# 自定义字体和颜色
themeConfig:
  primary: '#4F46E5'
---

# MCP：AI 的通用连接器

<div class="flex flex-col items-center justify-center h-full">
  <div class="text-xl opacity-80 mb-4 mt-6 animate-fade-in">
    理解模型上下文协议 (MCP) 为何引人注目
  </div>
  
  <div class="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mt-8 shadow-xl">
    <div class="text-6xl text-white font-bold">MCP</div>
  </div>
</div>

<div class="absolute bottom-5 right-5 flex items-center text-xl opacity-70">
  <div class="i-carbon-terminal-3270 mr-2"></div>
  <div>你的名字/公司</div>
</div>

---
layout: center
class: text-center
---

# 你是否曾经希望你的 AI 能够...

<div grid="~ cols-2 gap-8" class="mt-10">
<div class="space-y-4 text-left">

*   <div class="flex items-center"><div class="i-carbon-idea-filled text-2xl text-yellow-500 mr-2"></div> ...查找 <span class="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-bold">实时</span> 信息（而不仅仅是旧的训练数据）？</div>
*   <div class="flex items-center"><div class="i-carbon-folder-details text-2xl text-blue-500 mr-2"></div> ...访问你 <span class="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-bold">特定</span> 的文档或代码？</div>
*   <div class="flex items-center"><div class="i-carbon-database text-2xl text-green-500 mr-2"></div> ...连接到 <span class="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent font-bold">你公司</span> 的数据库？</div>
*   <div class="flex items-center"><div class="i-carbon-tools-alt text-2xl text-purple-500 mr-2"></div> ...代表你使用 <span class="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-bold">其他</span> 软件工具？</div>

</div>
<div class="flex flex-col items-center justify-center">

<div class="flex items-center justify-center flex-wrap gap-4">
  <div class="transform transition-all hover:scale-110">
    <logos-anthropic class="text-6xl shadow-lg rounded-xl p-2 bg-white/10 backdrop-blur-sm" />
  </div>
  <div class="i-carbon-add text-4xl mx-2 text-blue-400"></div>
  <div class="transform transition-all hover:scale-110">
    <logos-visual-studio-code class="text-6xl shadow-lg rounded-xl p-2 bg-white/10 backdrop-blur-sm" />
  </div>
  <div class="i-carbon-add text-4xl mx-2 text-blue-400"></div>
  <div class="transform transition-all hover:scale-110">
    <logos-github-icon class="text-6xl shadow-lg rounded-xl p-2 bg-white/10 backdrop-blur-sm" />
  </div>
</div>

<div class="flex items-center justify-center flex-wrap gap-4 mt-4">
  <div class="i-carbon-add text-4xl mx-2 text-blue-400"></div>
  <div class="transform transition-all hover:scale-110">
    <logos-postgresql class="text-6xl shadow-lg rounded-xl p-2 bg-white/10 backdrop-blur-sm" />
  </div>
  <div class="i-carbon-add text-4xl mx-2 text-blue-400"></div>
  <div class="transform transition-all hover:scale-110">
    <div class="i-carbon-earth-filled text-6xl shadow-lg rounded-xl p-2 bg-white/10 backdrop-blur-sm text-blue-500" />
  </div>
</div>

<div class="mt-6 text-gray-400 text-lg">...以及更多！</div>

</div>
</div>

<div v-click class="mt-10 relative py-3">
  <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-90 blur"></div>
  <div class="relative text-2xl font-bold text-white px-6 py-2">
    这就是 MCP 发挥作用的地方！
  </div>
</div>

---

# MCP 是什么？<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"> 模型上下文协议</span>

<div class="mt-4 text-xl text-indigo-700 dark:text-indigo-300 font-medium">可以把它想象成 <span class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-md text-indigo-800 dark:text-indigo-100">AI 的 USB-C 接口</span></div>

<div grid="~ cols-2 gap-12" class="mt-8 items-center">

<div class="space-y-6">
  <div class="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
    <div class="font-bold text-lg text-red-700 dark:text-red-300 mb-2 flex items-center">
      <div class="i-carbon-close-filled mr-2"></div>MCP 之前
    </div>
    <div class="text-red-600 dark:text-red-300">
      每个 AI 和每个工具都需要混乱的自定义连接。
      <br/><br/>
      <span class="italic">(想象一下每个设备都需要不同的充电器！)</span>
    </div>

```mermaid {scale: 0.7, theme: 'neutral'}
graph TD
    subgraph AI 模型
        A[AI 模型 1]
        B[AI 模型 2]
    end
    subgraph 工具与数据
        T1[数据库]
        T2[文件系统]
        T3[API X]
        T4[API Y]
    end
    A --> T1
    A --> T2
    A --> T3
    A --> T4
    B --> T1
    B --> T2
    B --> T3
    B --> T4
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#f9f,stroke:#333,stroke-width:2px
    style T1 fill:#ccf,stroke:#333,stroke-width:2px
    style T2 fill:#ccf,stroke:#333,stroke-width:2px
    style T3 fill:#ccf,stroke:#333,stroke-width:2px
    style T4 fill:#ccf,stroke:#333,stroke-width:2px
```
    <div class="text-center text-sm text-red-500 dark:text-red-300 mt-2 font-mono">M 个模型 x N 个工具 = M*N 个连接</div>
  </div>
</div>

<div class="space-y-6">
  <div class="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
    <div class="font-bold text-lg text-green-700 dark:text-green-300 mb-2 flex items-center">
      <div class="i-carbon-checkmark-filled mr-2"></div>使用 MCP
    </div>
    <div class="text-green-600 dark:text-green-300">
      一个 <span class="font-bold">标准协议</span> 允许任何兼容的 AI 连接到任何兼容的工具。
      <br/><br/>
      <span class="italic">(一个标准端口搞定一切！)</span>
    </div>

```mermaid {scale: 0.7, theme: 'neutral'}
graph TD
    subgraph AI 模型
        A[AI 模型 1]
        B[AI 模型 2]
    end
    subgraph MCP 标准
        MCP((MCP))
    end
    subgraph 工具与数据
        T1[数据库]
        T2[文件系统]
        T3[API X]
        T4[API Y]
    end
    A --> MCP
    B --> MCP
    MCP --> T1
    MCP --> T2
    MCP --> T3
    MCP --> T4
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#f9f,stroke:#333,stroke-width:2px
    style MCP fill:#cfc,stroke:#333,stroke-width:4px
    style T1 fill:#ccf,stroke:#333,stroke-width:2px
    style T2 fill:#ccf,stroke:#333,stroke-width:2px
    style T3 fill:#ccf,stroke:#333,stroke-width:2px
    style T4 fill:#ccf,stroke:#333,stroke-width:2px
```
    <div class="text-center text-sm text-green-500 dark:text-green-300 mt-2 font-mono">M 个模型 + N 个工具 = M+N 个连接</div>
  </div>
</div>

</div>

---
layout: image-right
image: https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3
class: "bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20"
---

# 为什么 MCP 突然无处不在？

<div class="space-y-5 mt-6">
  <div class="flex items-start gap-3">
    <div class="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      <div class="i-carbon-launch text-xl"></div>
    </div>
    <div>
      <div class="font-bold text-indigo-700 dark:text-indigo-300">由 Anthropic (Claude AI) 推出</div>
      <div class="text-gray-600 dark:text-gray-400">2024 年 11 月</div>
    </div>
  </div>

  <div class="flex items-start gap-3">
    <div class="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
      <div class="i-carbon-chart-line-smooth text-xl"></div>
    </div>
    <div>
      <div class="font-bold text-indigo-700 dark:text-indigo-300">快速普及</div>
      <div class="text-gray-600 dark:text-gray-400">主要 AI 参与者 (OpenAI, Google, Microsoft) 和开发者工具 (VS Code, Cursor, Zed, Cloudflare, GitHub...) 迅速加入</div>
    </div>
  </div>

  <div class="flex items-start gap-3">
    <div class="p-2 rounded-lg bg-gradient-to-br from-green-500 to-teal-400 text-white">
      <div class="i-carbon-task-complete text-xl"></div>
    </div>
    <div>
      <div class="font-bold text-indigo-700 dark:text-indigo-300">解决了实际问题</div>
      <div class="text-gray-600 dark:text-gray-400">通过将 AI 连接到现实世界和特定上下文，使其更加有用</div>
    </div>
  </div>

  <div class="flex items-start gap-3">
    <div class="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-400 text-white">
      <div class="i-carbon-unlock text-xl"></div>
    </div>
    <div>
      <div class="font-bold text-indigo-700 dark:text-indigo-300">开放标准</div>
      <div class="text-gray-600 dark:text-gray-400">任何人都可以构建使用它的工具 (MCP 服务器) 或应用程序 (MCP 客户端)</div>
    </div>
  </div>
</div>

<div class="mt-8 text-2xl relative">
  <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-10 blur-xl rounded-xl"></div>
  <div class="relative p-4 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-300">
    它正在快速构建一个生态系统！
  </div>
</div>

---

# 哪些工具支持 MCP？<span class="text-sm opacity-70 ml-2">客户端</span>

<div class="mt-6">
  <div class="grid grid-cols-3 gap-6">
    <div v-click="1" class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-blue-200 group-hover:dark:shadow-indigo-900/40 transition-all">
        <div class="flex items-center justify-center mb-3">
          <logos-visual-studio-code class="text-5xl"/>
        </div>
        <div class="text-center text-indigo-800 dark:text-indigo-200 font-medium">VS Code</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">(官方支持)</div>
      </div>
    </div>
    
    <div v-click="2" class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-blue-200 group-hover:dark:shadow-indigo-900/40 transition-all">
        <div class="flex items-center justify-center mb-3">
          <logos-cursor class="text-5xl"/>
        </div>
        <div class="text-center text-indigo-800 dark:text-indigo-200 font-medium">Cursor</div>
      </div>
    </div>
    
    <div v-click="3" class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-blue-200 group-hover:dark:shadow-indigo-900/40 transition-all">
        <div class="flex items-center justify-center mb-3">
          <logos-anthropic-icon class="text-5xl"/>
        </div>
        <div class="text-center text-indigo-800 dark:text-indigo-200 font-medium">Claude Desktop</div>
      </div>
    </div>
    
    <div v-click="4" class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-blue-200 group-hover:dark:shadow-indigo-900/40 transition-all">
        <div class="flex items-center justify-center mb-3">
          <logos-zed class="text-5xl"/>
        </div>
        <div class="text-center text-indigo-800 dark:text-indigo-200 font-medium">Zed Editor</div>
      </div>
    </div>
    
    <div v-click="5" class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-blue-200 group-hover:dark:shadow-indigo-900/40 transition-all">
        <div class="flex items-center justify-center mb-3">
          <logos-neovim class="text-5xl"/>
        </div>
        <div class="text-center text-indigo-800 dark:text-indigo-200 font-medium">Neovim</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">(通过插件)</div>
      </div>
    </div>
    
    <div v-click="6" class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-blue-200 group-hover:dark:shadow-indigo-900/40 transition-all">
        <div class="flex items-center justify-center mb-3">
          <logos-webstorm class="text-5xl"/>
        </div>
        <div class="text-center text-indigo-800 dark:text-indigo-200 font-medium">JetBrains IDEs</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">(即将支持)</div>
      </div>
    </div>
    
    <div v-click="7" class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-blue-200 group-hover:dark:shadow-indigo-900/40 transition-all">
        <div class="flex items-center justify-center mb-3">
          <simple-icons-openai class="text-5xl"/>
        </div>
        <div class="text-center text-indigo-800 dark:text-indigo-200 font-medium">OpenAI Agents SDK</div>
      </div>
    </div>
    
    <div v-click="8" class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-blue-200 group-hover:dark:shadow-indigo-900/40 transition-all">
        <div class="flex items-center justify-center mb-3">
          <div class="i-cib-google-cloud text-5xl" />
        </div>
        <div class="text-center text-indigo-800 dark:text-indigo-200 font-medium">Google</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">(Genkit 等)</div>
      </div>
    </div>
    
    <div v-click="9" class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-blue-200 group-hover:dark:shadow-indigo-900/40 transition-all">
        <div class="flex items-center justify-center mb-3">
          <div class="i-carbon-tool-kit text-5xl" />
        </div>
        <div class="text-center text-indigo-800 dark:text-indigo-200 font-medium">更多工具加入中...</div>
      </div>
    </div>
  </div>
</div>

<div class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 italic rounded-lg py-2 px-4 bg-gray-100 dark:bg-gray-800 inline-block mx-auto">
  具体支持程度（工具、资源、提示）可能因客户端而异
</div>

---
layout: two-cols
class: "bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20"
---

# 面临哪些挑战？

<div class="text-xl mb-6 text-amber-700 dark:text-amber-300 font-medium">MCP 功能强大，但仍处于早期阶段</div>

<div class="space-y-6 pr-6">
  <div v-click="1" class="p-4 rounded-xl bg-white dark:bg-gray-800 border-l-4 border-red-500 shadow-sm">
    <div class="text-lg font-bold text-red-600 dark:text-red-400 mb-2 flex items-center">
      <div class="i-carbon-security text-2xl mr-2"></div>
      安全性
      <div class="ml-2 px-2 py-0.5 text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full font-normal">最大挑战</div>
    </div>
    <div class="space-y-2 text-gray-700 dark:text-gray-300">
      <div class="flex items-start">
        <div class="i-carbon-warning-alt text-amber-500 mr-2 flex-shrink-0 mt-1"></div>
        <div>如何确保服务器不会访问不该访问的内容？</div>
      </div>
      <div class="ml-6 text-sm text-gray-600 dark:text-gray-400 italic">例：一个设计用来查天气的 MCP 服务器，是否可能被用来读取你的本地文件？</div>
      <div class="flex items-start mt-1">
        <div class="i-carbon-warning-alt text-amber-500 mr-2 flex-shrink-0 mt-1"></div>
        <div>特别是对于在你机器上运行的<span class="font-bold">本地</span>服务器，权限控制很重要。</div>
      </div>
      <div class="ml-6 text-sm text-gray-600 dark:text-gray-400 italic">例：AI 助手通过本地文件系统 MCP 读取了你的 SSH 私钥并泄露？</div>
    </div>
  </div>

  <div v-click="2" class="p-4 rounded-xl bg-white dark:bg-gray-800 border-l-4 border-amber-500 shadow-sm">
    <div class="text-lg font-bold text-amber-600 dark:text-amber-400 mb-2 flex items-center">
      <div class="i-carbon-growth text-2xl mr-2"></div>
      成熟度
    </div>
    <div class="text-gray-700 dark:text-gray-300">
      该标准仍在不断发展，可能会有变化。早期采用者需要适应这些变化和迭代。
    </div>
  </div>
</div>

::right::

<div class="space-y-6 pl-6 pt-20">
  <div v-click="3" class="p-4 rounded-xl bg-white dark:bg-gray-800 border-l-4 border-blue-500 shadow-sm">
    <div class="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center">
      <div class="i-carbon-search text-2xl mr-2"></div>
      发现机制
    </div>
    <div class="text-gray-700 dark:text-gray-300">
      如何找到并信任可靠、安全的 MCP 服务器？目前缺乏一个集中的可信任的工具目录。
    </div>
  </div>

  <div v-click="4" class="p-4 rounded-xl bg-white dark:bg-gray-800 border-l-4 border-purple-500 shadow-sm">
    <div class="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2 flex items-center">
      <div class="i-carbon-code text-2xl mr-2"></div>
      复杂性
    </div>
    <div class="text-gray-700 dark:text-gray-300">
      构建健壮且安全的服务器需要专业知识和谨慎。需要注意边界情况和错误处理。
    </div>
  </div>

  <div v-click="5" class="p-6 mt-10 rounded-xl bg-gradient-to-br from-amber-100 to-red-100 dark:from-amber-900/50 dark:to-red-900/50 shadow-md">
    <div class="text-center text-lg font-medium text-amber-800 dark:text-amber-200">
      行业正在努力寻找解决方案，但需要
      <span class="font-bold text-red-600 dark:text-red-400">保持谨慎</span>，
      尤其是在安全方面。
    </div>
  </div>
</div>

---

# AI 能做什么？<span class="text-sm opacity-70 ml-2">1/2 开发者篇</span>

<div class="text-xl mb-6 text-indigo-700 dark:text-indigo-300 font-medium">为开发者解锁超能力！</div>

<div class="grid grid-cols-2 gap-6">
  <div v-click="1" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-blue-500 dark:border-blue-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
      <div class="i-carbon-code text-2xl mr-2"></div>
      代码理解与生成
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-blue-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"解释一下这个复杂的 <code>legacy_function</code> 函数是做什么的？" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 读取本地代码)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-blue-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"根据 <code>api_spec.json</code> 文件，为这个 API 端点生成 Python 客户端代码。"</div>
      </div>
    </div>
  </div>
  
  <div v-click="2" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-purple-500 dark:border-purple-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center">
      <div class="i-logos-github-icon text-2xl mr-2"></div>
      版本控制 (Git/GitHub)
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-purple-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"我本地 <code>main</code> 分支比远程落后多少个提交？" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 查询 Git)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-purple-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"为我当前的工作创建一个 Pull Request，标题是'修复登录 Bug'。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 与 GitHub 交互)</span></div>
      </div>
    </div>
  </div>
  
  <div v-click="3" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-green-500 dark:border-green-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-green-600 dark:text-green-400 mb-3 flex items-center">
      <div class="i-carbon-database text-2xl mr-2"></div>
      数据库交互
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-green-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"查询 <code>users</code> 表中过去 7 天注册的用户数量。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 查询数据库)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-green-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"在 <code>products</code> 表中查找所有价格低于 50 美元的商品。"</div>
      </div>
    </div>
  </div>
  
  <div v-click="4" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-amber-500 dark:border-amber-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center">
      <div class="i-carbon-cloud text-2xl mr-2"></div>
      云服务与部署
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-amber-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"检查 Cloudflare 上 <code>my-website.com</code> 的 DNS 记录。"</div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-amber-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"列出 Heroku 上 'staging-app' 应用的最新部署日志。"</div>
      </div>
    </div>
  </div>
</div>

---

# AI 能做什么？<span class="text-sm opacity-70 ml-2">2/2 企业与生产力篇</span>

<div class="text-xl mb-6 text-indigo-700 dark:text-indigo-300 font-medium">提升工作效率，连接业务系统！</div>

<div class="grid grid-cols-2 gap-6">
  <div v-click="1" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-blue-500 dark:border-blue-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
      <div class="i-carbon-user-profile text-2xl mr-2"></div>
      客户支持 & CRM
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-blue-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"查找客户 ID 为 C12345 的最新支持工单记录。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 连接 Zendesk/Salesforce)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-blue-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"这位 VIP 客户的历史订单总额是多少？"</div>
      </div>
    </div>
  </div>
  
  <div v-click="2" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-teal-500 dark:border-teal-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-teal-600 dark:text-teal-400 mb-3 flex items-center">
      <div class="i-carbon-document text-2xl mr-2"></div>
      企业知识库 & 文档
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-teal-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"我们公司的报销政策是什么？请在内部 Confluence 页面查找。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 搜索内部文档)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-teal-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"总结一下上周 <code>Project Phoenix</code> 项目的会议纪要。"</div>
      </div>
    </div>
  </div>
  
  <div v-click="3" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-purple-500 dark:border-purple-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center">
      <div class="i-carbon-calendar text-2xl mr-2"></div>
      日常办公 & 协作
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-purple-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"帮我预定明天下午 2 点和张三的会议室。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 连接 Google Calendar/Outlook)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-purple-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"在 Trello/Jira 上创建一个新任务，内容是'准备下周演示文稿'，截止日期是周五。"</div>
      </div>
    </div>
  </div>
  
  <div v-click="4" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-green-500 dark:border-green-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-green-600 dark:text-green-400 mb-3 flex items-center">
      <div class="i-carbon-flow text-2xl mr-2"></div>
      自动化工作流
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-green-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"如果收到标记为'紧急'的邮件，自动在 Slack #urgent 频道提醒我。" <span class="text-xs text-gray-500 italic">(结合邮件和 Slack 的 MCP 服务器)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-green-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"当有新 Issue 分配给我时，自动在我的待办事项清单中创建任务。"</div>
      </div>
    </div>
  </div>
</div>

---
layout: center
class: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
---

# 在哪里可以找到 MCP 服务器？

<div grid="~ cols-2 gap-10" class="mt-10">
  <div>
    <div class="space-y-6">
      <div v-click="1" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 shadow-sm hover:shadow-lg transition-shadow">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <div class="i-carbon-globe text-2xl text-blue-600 dark:text-blue-400"></div>
          </div>
          <div class="font-semibold text-blue-700 dark:text-blue-300">官方 MCP 网站/文档</div>
        </div>
        <div class="ml-11 mt-2 text-gray-600 dark:text-gray-400">
          <a href="https://modelcontextprotocol.io/" target="_blank" class="text-blue-600 dark:text-blue-400 underline">modelcontextprotocol.io</a> 通常会列出一些核心或示例服务器
        </div>
      </div>
      
      <div v-click="2" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-800 shadow-sm hover:shadow-lg transition-shadow">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <div class="i-carbon-collaborate text-2xl text-purple-600 dark:text-purple-400"></div>
          </div>
          <div class="font-semibold text-purple-700 dark:text-purple-300">社区维护的列表</div>
        </div>
        <div class="ml-11 mt-2 text-gray-600 dark:text-gray-400">
          <div>Awesome Lists (在 GitHub 上搜索 "awesome-mcp")</div>
          <div>类似 Zapier 等平台可能维护的集成列表</div>
        </div>
      </div>
    </div>
  </div>
  
  <div>
    <div class="space-y-6">
      <div v-click="3" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 shadow-sm hover:shadow-lg transition-shadow">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
            <div class="i-carbon-store text-2xl text-green-600 dark:text-green-400"></div>
          </div>
          <div class="font-semibold text-green-700 dark:text-green-300">供应商/工具市场</div>
        </div>
        <div class="ml-11 mt-2 text-gray-600 dark:text-gray-400">
          <div>一些公司 (如 GitHub, Sentry, Cloudflare) 提供官方的 MCP 服务器</div>
          <div>像 Docker Hub 这样的平台也开始收录 MCP 服务器镜像</div>
        </div>
      </div>
      
      <div v-click="4" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-800 shadow-sm hover:shadow-lg transition-shadow">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg">
            <div class="i-carbon-code text-2xl text-amber-600 dark:text-amber-400"></div>
          </div>
          <div class="font-semibold text-amber-700 dark:text-amber-300">开源项目</div>
        </div>
        <div class="ml-11 mt-2 text-gray-600 dark:text-gray-400">
          许多开发者在 GitHub 等平台开源了他们自己构建的 MCP 服务器
        </div>
      </div>
    </div>
  </div>
</div>

<div v-click="5" class="mt-10 p-4 mx-auto max-w-3xl rounded-xl bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 shadow">
  <div class="flex items-start">
    <div class="i-carbon-warning text-2xl text-amber-600 dark:text-amber-400 mr-3 flex-shrink-0 mt-1"></div>
    <div>
      <div class="font-bold text-amber-800 dark:text-amber-200">重要提示：</div>
      <div class="text-amber-700 dark:text-amber-300">在使用非官方或社区提供的 MCP 服务器时，务必仔细评估其来源、可信度和安全性！优先选择官方或广泛使用的服务器，并检查其权限请求。</div>
    </div>
  </div>
</div>

---
layout: center
class: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"
---

# 关键要点

<div class="grid grid-cols-3 gap-6 mt-10">
  <div v-click="1" class="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-indigo-100 dark:border-indigo-800 transform transition-all hover:-translate-y-1 hover:shadow-lg">
    <div class="flex justify-center mb-4">
      <div class="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
        <div class="i-carbon-connect text-3xl text-indigo-600 dark:text-indigo-400"></div>
      </div>
    </div>
    <div class="text-center">
      <div class="font-bold text-indigo-700 dark:text-indigo-300 mb-2">标准化协议</div>
      <div class="text-gray-600 dark:text-gray-400 text-sm">类似 USB-C，用于将 AI 连接到外部工具和数据</div>
    </div>
  </div>
  
  <div v-click="2" class="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-blue-100 dark:border-blue-800 transform transition-all hover:-translate-y-1 hover:shadow-lg">
    <div class="flex justify-center mb-4">
      <div class="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
        <div class="i-carbon-idea text-3xl text-blue-600 dark:text-blue-400"></div>
      </div>
    </div>
    <div class="text-center">
      <div class="font-bold text-blue-700 dark:text-blue-300 mb-2">能力更强</div>
      <div class="text-gray-600 dark:text-gray-400 text-sm">使 AI 具备更强的上下文感知能力</div>
    </div>
  </div>
  
  <div v-click="3" class="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-purple-100 dark:border-purple-800 transform transition-all hover:-translate-y-1 hover:shadow-lg">
    <div class="flex justify-center mb-4">
      <div class="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
        <div class="i-carbon-growth text-3xl text-purple-600 dark:text-purple-400"></div>
      </div>
    </div>
    <div class="text-center">
      <div class="font-bold text-purple-700 dark:text-purple-300 mb-2">迅速普及</div>
      <div class="text-gray-600 dark:text-gray-400 text-sm">在 AI 和开发者工具行业中快速采用</div>
    </div>
  </div>
  
  <div v-click="4" class="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-green-100 dark:border-green-800 transform transition-all hover:-translate-y-1 hover:shadow-lg">
    <div class="flex justify-center mb-4">
      <div class="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
        <div class="i-carbon-connection text-3xl text-green-600 dark:text-green-400"></div>
      </div>
    </div>
    <div class="text-center">
      <div class="font-bold text-green-700 dark:text-green-300 mb-2">打破信息孤岛</div>
      <div class="text-gray-600 dark:text-gray-400 text-sm">实现激动人心的用例</div>
    </div>
  </div>
  
  <div v-click="5" class="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-amber-100 dark:border-amber-800 transform transition-all hover:-translate-y-1 hover:shadow-lg">
    <div class="flex justify-center mb-4">
      <div class="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
        <div class="i-carbon-security text-3xl text-amber-600 dark:text-amber-400"></div>
      </div>
    </div>
    <div class="text-center">
      <div class="font-bold text-amber-700 dark:text-amber-300 mb-2">安全性</div>
      <div class="text-gray-600 dark:text-gray-400 text-sm">随着生态系统的发展，是一个主要考虑因素</div>
    </div>
  </div>
  
  <div class="col-span-3">
    <div v-click="6" class="mt-8 text-center">
      <div class="relative inline-block">
        <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 blur-xl rounded-xl"></div>
        <div class="relative py-3 px-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-300 dark:to-purple-300">
          MCP 是下一代 AI 应用的基础
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: cover
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop
class: "text-center"
---

# 谢谢！

<div class="mt-10">
  <div class="inline-block py-2 px-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white shadow-xl">
    <div class="flex items-center justify-center text-2xl">
      <div class="i-carbon-help text-3xl mr-2"></div>
      提问环节
    </div>
  </div>
</div>

<div class="absolute bottom-5 right-5 flex items-center text-sm text-white/70">
  <div class="i-carbon-presentation-file mr-2"></div>
  演示文稿使用 <a href="https://sli.dev" target="_blank" class="text-white/90 hover:text-white">Slidev</a> 构建
</div>
