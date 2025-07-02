<template>
  <div class="grid grid-cols-2 gap-8 h-full items-center">
    <!-- 左侧：句子列表 -->
    <div class="space-y-6">
      <!-- 句子1 -->
      <div class="p-4 rounded-lg border-l-4 transition-all duration-500"
           :class="$clicks === 1 ? 'bg-gradient-to-r from-blue-200 to-blue-300 border-blue-500 shadow-lg transform scale-105' : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300'">
        <div class="text-lg font-medium flex flex-wrap gap-2">
          <span class="bg-white px-2 py-1 rounded border">促销</span>
          <span class="bg-white px-2 py-1 rounded border">促销</span>
          <span class="bg-white px-2 py-1 rounded border">速点</span>
          <span class="bg-white px-2 py-1 rounded border">链接</span>
        </div>
      </div>
      <!-- 句子2 -->
      <div class="p-4 rounded-lg border-l-4 transition-all duration-500"
           :class="$clicks === 2 ? 'bg-gradient-to-r from-green-200 to-green-300 border-green-500 shadow-lg transform scale-105' : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300'">
        <div class="text-lg font-medium flex flex-wrap gap-2">
          <span class="bg-white px-2 py-1 rounded border">促销</span>
          <span class="bg-white px-2 py-1 rounded border">速点</span>
          <span class="bg-white px-2 py-1 rounded border">领取</span>
        </div>
      </div>
      <!-- 句子3 -->
      <div class="p-4 rounded-lg border-l-4 transition-all duration-500"
           :class="$clicks === 3 ? 'bg-gradient-to-r from-purple-200 to-purple-300 border-purple-500 shadow-lg transform scale-105' : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300'">
        <div class="text-lg font-medium flex flex-wrap gap-2">
          <span class="bg-white px-2 py-1 rounded border">免费</span>
          <span class="bg-white px-2 py-1 rounded border">速点</span>
          <span class="bg-white px-2 py-1 rounded border">链接</span>
        </div>
      </div>
    </div>
    
    <!-- 右侧：词表 -->
    <div class="flex justify-center">
      <table class="border-collapse border-2 border-gray-400 text-lg">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-400 p-3 font-bold">促销</th>
            <th class="border border-gray-400 p-3 font-bold">速点</th>
            <th class="border border-gray-400 p-3 font-bold">链接</th>
            <th class="border border-gray-400 p-3 font-bold">免费</th>
            <th class="border border-gray-400 p-3 font-bold">领取</th>
          </tr>
        </thead>
        <tbody>
          <!-- 句子1的计数 -->
          <tr>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-blue-600"
                v-click="1">{{ mode === 'frequency' ? 2 : 1 }}</td>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-blue-600"
                v-click="1">1</td>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-blue-600"
                v-click="1">1</td>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-blue-600"
                v-click="1">0</td>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-blue-600"
                v-click="1">0</td>
          </tr>
          <!-- 句子2的计数 -->
          <tr>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-green-600"
                v-click="2">1</td>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-green-600"
                v-click="2">1</td>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-green-600"
                v-click="2">0</td>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-green-600"
                v-click="2">0</td>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-green-600"
                v-click="2">1</td>
          </tr>
          <!-- 句子3的计数 -->
          <tr>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-purple-600"
                v-click="3">0</td>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-purple-600"
                v-click="3">1</td>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-purple-600"
                v-click="3">1</td>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-purple-600"
                v-click="3">1</td>
            <td class="border border-gray-400 p-3 w-16 h-16 text-center font-bold text-purple-600"
                v-click="3">0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mode: {
    type: String,
    default: 'binary', // 'binary' 或 'frequency'
    validator: (value) => ['binary', 'frequency'].includes(value)
  },
})
</script> 