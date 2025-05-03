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

---
layout: center
class: text-center
---

# 你是否曾经希望你的 AI 能够...

<div class="mt-10 flex justify-center">
<div class="space-y-4 text-left max-w-2xl">

*   <div class="flex items-center"><div class="i-carbon-idea-filled text-2xl text-yellow-500 mr-2"></div> 查找 <span class="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-bold">实时</span> 信息（而不仅仅是旧的训练数据）？</div>
*   <div class="flex items-center"><div class="i-carbon-folder-details text-2xl text-blue-500 mr-2"></div> 访问你 <span class="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-bold">特定</span> 的文档或代码？</div>
*   <div class="flex items-center"><div class="i-carbon-database text-2xl text-green-500 mr-2"></div> 连接到 <span class="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent font-bold">你公司</span> 的数据库？</div>
*   <div class="flex items-center"><div class="i-carbon-tools-alt text-2xl text-purple-500 mr-2"></div> 代表你使用 <span class="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-bold">其他</span> 软件工具？</div>

</div>
</div>

---
layout: center
class: text-center
---

<div class="mt-10 relative py-3">
  <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-90 blur"></div>
  <div class="relative text-2xl font-bold text-white px-6 py-2">
    这就是 MCP 发挥作用的地方！
  </div>
</div>

---
layout: center
class: "bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-900/30"
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



# 关键前提：模型需支持 MCP

<div class="text-xl mb-6 text-gray-700 dark:text-gray-300 font-medium">MCP 只是"桥梁"，模型是"大脑"</div>

<div class="mt-8 max-w-2xl mx-auto space-y-6 text-left">
  <div class="flex items-start p-4 rounded-lg bg-white dark:bg-gray-800 shadow border-l-4 border-indigo-500">
    <div class="i-carbon-cognitive text-4xl text-indigo-600 dark:text-indigo-400 mr-4 mt-1 flex-shrink-0"></div>
    <div>
      <div class="font-bold text-indigo-800 dark:text-indigo-200 mb-1">AI 模型是核心</div>
      <div class="text-gray-700 dark:text-gray-300">仅仅有 MCP 服务器是不够的。AI 模型本身必须具备理解和使用外部工具的能力（通常称为 Tool Use 或 Function Calling）。</div>
    </div>
  </div>

  <div class="flex items-start p-4 rounded-lg bg-white dark:bg-gray-800 shadow border-l-4 border-blue-500">
    <div class="i-carbon-connect-source text-4xl text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0"></div>
    <div>
      <div class="font-bold text-blue-800 dark:text-blue-200 mb-1">需要协议实现</div>
      <div class="text-gray-700 dark:text-gray-300">模型（或其代理/框架）需要实现 MCP 协议，才能与 MCP 服务器进行通信和交互。</div>
    </div>
  </div>
  
  <div class="flex items-start p-4 rounded-lg bg-white dark:bg-gray-800 shadow border-l-4 border-green-500">
    <div class="i-carbon-machine-learning-model text-4xl text-green-600 dark:text-green-400 mr-4 mt-1 flex-shrink-0"></div>
    <div>
      <div class="font-bold text-green-800 dark:text-green-200 mb-1">支持情况各异</div>
      <div class="text-gray-700 dark:text-gray-300">不同模型对工具使用的支持程度不同。一些新模型原生支持，一些则需要通过特定的框架（如 LangChain, Genkit）或客户端集成（如 VS Code 的 Copilot）来实现。</div>
    </div>
  </div>
</div>

<div class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
  所以，选择 AI 工具时，也要看其背后的模型是否支持你需要的 MCP 功能。
</div>

---

# 哪些工具支持 MCP？<span class="text-sm opacity-70 ml-2">客户端 - Featured</span>

<div class="mt-6">
  <div class="grid grid-cols-3 gap-6">
    <!-- Windsurf -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-blue-200 group-hover:dark:shadow-indigo-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
          <img src="https://mcp.so/_next/image?url=https%3A%2F%2Fmcp.so%2Ficons%2Fwindsurf.png&w=3840&q=75" alt="Windsurf Logo" class="h-12 object-contain">
        </div>
        <div class="text-center text-indigo-800 dark:text-indigo-200 font-medium">Windsurf</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">New purpose-built IDE</div>
      </div>
    </div>
    <!-- ChatWise -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-cyan-200 dark:border-cyan-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-teal-200 group-hover:dark:shadow-cyan-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
          <img src="https://mcp.so/_next/image?url=https%3A%2F%2Fchatwise.app%2F_app%2Fimmutable%2Fassets%2Ficon.BlYxxTy5.png&w=3840&q=75" alt="ChatWise Logo" class="h-12 object-contain">
        </div>
        <div class="text-center text-cyan-800 dark:text-cyan-200 font-medium">ChatWise</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">AI chatbot</div>
      </div>
    </div>
    <!-- Cursor -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-pink-200 dark:border-pink-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-purple-200 group-hover:dark:shadow-pink-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
          <img src="https://mcp.so/_next/image?url=https%3A%2F%2Fmcp.so%2Ficons%2Fcursor.png&w=3840&q=75" alt="Cursor Logo" class="h-12 object-contain">
        </div>
        <div class="text-center text-pink-800 dark:text-pink-200 font-medium">Cursor</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">The AI Code Editor</div>
      </div>
    </div>
    <!-- VS Code OSS -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-sky-500 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-sky-200 dark:border-sky-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-blue-200 group-hover:dark:shadow-sky-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
          <logos-visual-studio-code class="text-5xl"/>
        </div>
        <div class="text-center text-sky-800 dark:text-sky-200 font-medium">VS Code (OSS)</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">(Official Support)</div>
      </div>
    </div>
    <!-- DeepChat -->
     <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-500 to-slate-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-gray-200 group-hover:dark:shadow-slate-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
          <img src="https://mcp.so/_next/image?url=https%3A%2F%2Fdeepchat.thinkinai.xyz%2Flogo.png&w=3840&q=75" alt="DeepChat Logo" class="h-12 object-contain">
        </div>
        <div class="text-center text-slate-800 dark:text-slate-200 font-medium">DeepChat</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">Desktop AI Partner</div>
      </div>
    </div>
    <!-- Y Gui -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-lime-500 to-green-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-green-200 dark:border-green-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-lime-200 group-hover:dark:shadow-green-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
           <span class="text-5xl font-bold">Y-Gui</span>
        </div>
        <div class="text-center text-green-800 dark:text-green-200 font-medium">Y Gui</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">Web-based MCP GUI</div>
      </div>
    </div>
    <!-- Cherry Studio -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-rose-200 dark:border-rose-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-pink-200 group-hover:dark:shadow-rose-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
           <span class="text-5xl font-bold">🍒</span>
        </div>
        <div class="text-center text-rose-800 dark:text-rose-200 font-medium">Cherry Studio</div>
         <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">(Open Source Desktop)</div>
      </div>
    </div>
    <!-- HyperChat -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-red-200 dark:border-red-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-orange-200 group-hover:dark:shadow-red-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
          <span class="text-5xl font-bold">⚡</span>
        </div>
        <div class="text-center text-red-800 dark:text-red-200 font-medium">HyperChat</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">Open Chat Client</div>
      </div>
    </div>
    <!-- Cline -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-amber-200 dark:border-amber-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-yellow-200 group-hover:dark:shadow-amber-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
           <span class="text-5xl font-bold">C</span>
        </div>
        <div class="text-center text-amber-800 dark:text-amber-200 font-medium">Cline</div>
         <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">Autonomous Coding Agent</div>
      </div>
    </div>
    <!-- Y-Cli -->
     <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-lime-500 to-green-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-green-200 dark:border-green-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-lime-200 group-hover:dark:shadow-green-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
           <span class="text-5xl font-bold">Y-cli</span>
        </div>
        <div class="text-center text-green-800 dark:text-green-200 font-medium">y-cli 🚀</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">Terminal Chat App</div>
      </div>
    </div>
    <!-- Continue -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-400 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-indigo-200 dark:border-indigo-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-blue-200 group-hover:dark:shadow-indigo-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
           <span class="text-5xl font-bold">⏩</span>
        </div>
        <div class="text-center text-indigo-800 dark:text-indigo-200 font-medium">Continue</div>
         <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">Custom AI Assistants</div>
      </div>
    </div>
    <!-- Roo Code -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-400 to-violet-500 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-violet-200 dark:border-violet-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-purple-200 group-hover:dark:shadow-violet-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
          <span class="text-5xl">🦘</span>
        </div>
        <div class="text-center text-violet-800 dark:text-violet-200 font-medium">Roo Code</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">AI Agent Dev Team</div>
      </div>
    </div>
    <!-- 5ire -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-green-200 group-hover:dark:shadow-emerald-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
          <span class="text-5xl">🖐️</span>
        </div>
        <div class="text-center text-emerald-800 dark:text-emerald-200 font-medium">5ire</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">Cross-platform AI Assistant</div>
      </div>
    </div>
    <!-- MCP Playground -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-sky-200 group-hover:dark:shadow-blue-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
          <img src="https://mcp.so/logo.png" alt="MCP Logo" class="h-12 object-contain">
        </div>
        <div class="text-center text-blue-800 dark:text-blue-200 font-medium">MCP Playground</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">Call MCP Tools Online</div>
      </div>
    </div>
    <!-- Lutra -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-gray-200 group-hover:dark:shadow-gray-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
          <img src="https://lutra.ai/favicon.ico" alt="Lutra Logo" class="h-12 object-contain">
        </div>
        <div class="text-center text-gray-800 dark:text-gray-200 font-medium">Lutra</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">MCP Client for Everyone</div>
      </div>
    </div>
    <!-- Refact.ai -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-orange-200 dark:border-orange-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-red-200 group-hover:dark:shadow-orange-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
          <span class="text-5xl">♻️</span>
        </div>
        <div class="text-center text-orange-800 dark:text-orange-200 font-medium">Refact.ai</div>
        <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">Open-source AI Agent</div>
      </div>
    </div>
    <!-- MCP Connect -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-light-blue-500 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-light-blue-200 dark:border-light-blue-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-cyan-200 group-hover:dark:shadow-light-blue-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
           <span class="text-5xl font-bold">🔗</span>
        </div>
        <div class="text-center text-light-blue-800 dark:text-light-blue-200 font-medium">MCP Connect</div>
         <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">Connect Cloud to Local</div>
      </div>
    </div>
    <!-- Zed -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-zinc-500 to-neutral-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-zinc-200 group-hover:dark:shadow-neutral-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
           <span class="text-5xl font-bold">Z</span>
        </div>
        <div class="text-center text-neutral-800 dark:text-neutral-200 font-medium">Zed</div>
         <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">High-performance Editor</div>
      </div>
    </div>
     <!-- chatmcp -->
    <div class="group relative transform transition-all hover:scale-105 hover:z-10 hover:shadow-xl">
      <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-sky-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm"></div>
      <div class="p-5 border border-sky-200 dark:border-sky-800 bg-white dark:bg-gray-800 rounded-xl relative shadow-md group-hover:shadow-cyan-200 group-hover:dark:shadow-sky-900/40 transition-all h-full flex flex-col">
        <div class="flex items-center justify-center mb-3 flex-grow">
           <span class="text-5xl font-bold">💬</span>
        </div>
        <div class="text-center text-sky-800 dark:text-sky-200 font-medium">ChatMCP</div>
         <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-1">(Open Source Chat Client)</div>
      </div>
    </div>
  </div>
</div>

<div class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 italic rounded-lg py-2 px-4 bg-gray-100 dark:bg-gray-800 inline-block mx-auto">
  Source: <a href="https://mcp.so/clients?tag=featured" target="_blank" class="underline">mcp.so Featured Clients</a> (List may change)
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
  <div v-click="1" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-purple-500 dark:border-purple-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center">
      <div class="i-logos-github-icon text-xl mr-1"></div> / <div class="i-simple-icons-gitee text-xl ml-1 mr-2 text-[#C71D23]"></div>
      版本控制 (Git/Gitee/GitHub)
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-purple-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"我本地 <code>main</code> 分支比 Gitee 远程落后多少个提交？" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 查询 Git/Gitee)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-purple-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"为我当前的工作在 GitHub 创建一个 Pull Request，标题是'修复登录 Bug'。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 与 GitHub 交互)</span></div>
      </div>
    </div>
  </div>
  
  <div v-click="2" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-green-500 dark:border-green-500 shadow-sm hover:shadow-lg transition-shadow">
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
        <div class="text-gray-700 dark:text-gray-300">"在 <code>products</code> 表中查找所有价格低于 50 元的商品。"</div>
      </div>
    </div>
  </div>
  
  <div v-click="3" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-amber-500 dark:border-amber-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center">
      <div class="i-carbon-cloud text-2xl mr-2"></div>
      云服务与部署
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-amber-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"检查阿里云上 <code>my-app</code> 函数计算服务的最新日志。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 连接阿里云)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-amber-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"列出腾讯云上 'staging-server' 轻量应用服务器的监控数据。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 连接腾讯云)</span></div>
      </div>
    </div>
  </div>
</div>

---

# AI 能做什么？<span class="text-sm opacity-70 ml-2">2/2 日常生活篇</span>

<div class="text-xl mb-6 text-indigo-700 dark:text-indigo-300 font-medium">让 AI 成为你的生活助手！</div>

<div class="grid grid-cols-2 gap-6">
  <div v-click="1" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-blue-500 dark:border-blue-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
      <div class="i-carbon-train text-2xl mr-2"></div>
      出行与旅行
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-blue-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"帮我查一下明天从上海到杭州的高铁票，下午出发。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 连接 12306/携程)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-blue-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"查找西湖附近评分高、价格适中的酒店。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 连接地图/酒店预订 App)</span></div>
      </div>
    </div>
  </div>
  
  <div v-click="2" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-red-500 dark:border-red-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-red-600 dark:text-red-400 mb-3 flex items-center">
      <div class="i-carbon-shopping-cart text-2xl mr-2"></div>
      购物与娱乐
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-red-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"在淘宝/京东上找一款评价最好的无线蓝牙耳机，预算 500 元内。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 连接电商平台)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-red-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"根据我的喜好，在 Bilibili 上推荐一些有趣的科技类 UP 主。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 连接视频平台)</span></div>
      </div>
    </div>
  </div>
  
  <div v-click="3" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-green-500 dark:border-green-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-green-600 dark:text-green-400 mb-3 flex items-center">
      <div class="i-carbon-book text-2xl mr-2"></div>
      学习与信息获取
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-green-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"查找关于'人工智能伦理'的最新中文研究论文，并总结摘要。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 连接学术搜索/网页)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-green-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"帮我找一个简单的红烧肉菜谱，需要有视频教程。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 连接下厨房/B站)</span></div>
      </div>
    </div>
  </div>
  
  <div v-click="4" class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-l-4 border-yellow-500 dark:border-yellow-500 shadow-sm hover:shadow-lg transition-shadow">
    <div class="text-lg font-bold text-yellow-600 dark:text-yellow-400 mb-3 flex items-center">
      <div class="i-carbon-smart-home text-2xl mr-2"></div>
      智能家居与其他
    </div>
    <div class="space-y-2 ml-6">
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-yellow-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"打开客厅的灯，并把空调调到 26 度。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 连接米家/HomeKit)</span></div>
      </div>
      <div class="flex items-start gap-2">
        <div class="i-carbon-arrow-right text-yellow-500 flex-shrink-0 mt-1"></div>
        <div class="text-gray-700 dark:text-gray-300">"提醒我晚上 8 点记得吃药。" <span class="text-xs text-gray-500 italic">(AI 通过 MCP 设置提醒事项)</span></div>
      </div>
    </div>
  </div>
</div>

---
layout: center
class: "bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20"
---

# MCP 聚合平台：一站式管理

<div class="text-xl mb-6 text-teal-700 dark:text-teal-300 font-medium">简化连接，发现和管理 MCP 工具</div>

<div class="text-gray-600 dark:text-gray-400 mb-8">一些平台正致力于聚合或索引 MCP 服务器，方便用户发现和使用：</div>

<div class="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
  <div class="space-y-4">
    <div class="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-3 text-center">🇨🇳 国内平台</div>
    <div v-click="1" class="p-4 rounded-lg bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700 flex items-center gap-3">
      <div class="i-carbon-shopping-catalog text-3xl text-blue-500 flex-shrink-0"></div>
      <div>
        <div class="font-medium text-gray-800 dark:text-gray-200"><a href="https://mcp.appmall.com" target="_blank" class="underline">MCP AppMall</a></div>
        <div class="text-sm text-gray-500 dark:text-gray-400">提供 MCP 工具的应用市场</div>
      </div>
    </div>
    <div v-click="2" class="p-4 rounded-lg bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700 flex items-center gap-3">
      <i-logos-alibaba-cloud class="text-3xl flex-shrink-0"/>
      <div>
        <div class="font-medium text-gray-800 dark:text-gray-200"><a href="https://bailian.console.aliyun.com/?tab=mcp#/mcp-market" target="_blank" class="underline">阿里云百炼 MCP 市场</a></div>
        <div class="text-sm text-gray-500 dark:text-gray-400">阿里云提供的 MCP 工具市场</div>
      </div>
    </div>
     <div v-click="3" class="p-4 rounded-lg bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700 flex items-center gap-3">
      <i-logos-tencent-cloud class="text-3xl flex-shrink-0"/>
      <div>
        <div class="font-medium text-gray-800 dark:text-gray-200"><a href="https://tcb.cloud.tencent.com/mcp-server" target="_blank" class="underline">腾讯云 CloudBase MCP</a></div>
        <div class="text-sm text-gray-500 dark:text-gray-400">腾讯云提供的 MCP 服务器托管与集成</div>
      </div>
    </div>
  </div>

  <div class="space-y-4">
    <div class="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-3 text-center">🌍 国际平台</div>
    <div v-click="4" class="p-4 rounded-lg bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700 flex items-center gap-3">
      <img src="https://mcp.so/logo.png" alt="MCP.so Logo" class="h-8 w-8 object-contain flex-shrink-0">
      <div>
        <div class="font-medium text-gray-800 dark:text-gray-200"><a href="https://mcp.so/" target="_blank" class="underline font-bold">MCP.so</a></div>
        <div class="text-sm text-gray-500 dark:text-gray-400">官方协议网站，提供客户端/服务器列表</div>
      </div>
    </div>
    <div v-click="5" class="p-4 rounded-lg bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700 flex items-center gap-3">
      <div class="i-carbon-construct text-3xl text-purple-500 flex-shrink-0"></div>
      <div>
        <div class="font-medium text-gray-800 dark:text-gray-200"><a href="https://glama.ai/" target="_blank" class="underline font-bold">Glama.ai</a></div>
        <div class="text-sm text-gray-500 dark:text-gray-400">构建和连接 AI 应用的平台</div>
      </div>
    </div>
    <div v-click="6" class="p-4 rounded-lg bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700 flex items-center gap-3">
       <div class="i-carbon-tool-kit text-3xl text-orange-500 flex-shrink-0"></div>
      <div>
        <div class="font-medium text-gray-800 dark:text-gray-200"><a href="https://smithery.ai/" target="_blank" class="underline">Smithery.ai</a></div>
        <div class="text-sm text-gray-500 dark:text-gray-400">AI Agent 和工具构建平台</div>
      </div>
    </div>
  </div>
</div>

<div v-click="7" class="mt-8 p-3 mx-auto max-w-3xl rounded-lg bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-500 shadow-sm">
  <div class="text-teal-800 dark:text-teal-200 text-sm">
    <span class="font-bold">注意：</span> 各平台收录的 MCP 工具数量可能随时变化，且具体支持情况各异。建议访问平台官网获取最新信息。
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

