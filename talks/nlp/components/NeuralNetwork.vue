<template>
  <div class="flex flex-col items-center">
    <div v-if="title" class="text-sm font-bold text-gray-700 mb-1 text-center">{{ title }}</div>
    <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200 shadow-lg" :class="containerClass">
      <svg :width="width" :height="height" :viewBox="`0 0 ${viewBoxWidth} ${viewBoxHeight}`" class="mx-auto">
        <!-- 输入层 -->
        <circle v-for="(node, index) in inputNodes" :key="`input-${index}`"
                :cx="node.x" :cy="node.y" :r="nodeRadius" 
                fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
        
        <!-- 隐藏层 -->
        <circle v-for="(node, index) in hiddenNodes" :key="`hidden-${index}`"
                :cx="node.x" :cy="node.y" :r="nodeRadius" 
                fill="#34d399" stroke="#059669" stroke-width="2"/>
        
        <!-- 输出层 -->
        <circle v-for="(node, index) in outputNodes" :key="`output-${index}`"
                :cx="node.x" :cy="node.y" :r="nodeRadius" 
                fill="#f87171" stroke="#dc2626" stroke-width="2"/>
        
        <!-- 连接线 -->
        <line v-for="connection in connections" :key="connection.id"
              :x1="connection.x1" :y1="connection.y1" 
              :x2="connection.x2" :y2="connection.y2" 
              stroke="#6b7280" :stroke-width="strokeWidth" opacity="0.7"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
    default: 200
  },
  height: {
    type: Number,
    default: 150
  },
  viewBoxWidth: {
    type: Number,
    default: 200
  },
  viewBoxHeight: {
    type: Number,
    default: 150
  },
  nodeRadius: {
    type: Number,
    default: 10
  },
  strokeWidth: {
    type: Number,
    default: 1.5
  },
  containerClass: {
    type: String,
    default: 'p-8'
  },
  inputCount: {
    type: Number,
    default: 4
  },
  hiddenCount: {
    type: Number,
    default: 3
  },
  outputCount: {
    type: Number,
    default: 2
  }
})

// 计算节点位置
const inputNodes = computed(() => {
  const nodes = []
  const spacing = props.viewBoxHeight / (props.inputCount + 1)
  for (let i = 0; i < props.inputCount; i++) {
    nodes.push({
      x: 30,
      y: spacing * (i + 1)
    })
  }
  return nodes
})

const hiddenNodes = computed(() => {
  const nodes = []
  const spacing = props.viewBoxHeight / (props.hiddenCount + 1)
  for (let i = 0; i < props.hiddenCount; i++) {
    nodes.push({
      x: props.viewBoxWidth / 2,
      y: spacing * (i + 1)
    })
  }
  return nodes
})

const outputNodes = computed(() => {
  const nodes = []
  const spacing = props.viewBoxHeight / (props.outputCount + 1)
  for (let i = 0; i < props.outputCount; i++) {
    nodes.push({
      x: props.viewBoxWidth - 30,
      y: spacing * (i + 1)
    })
  }
  return nodes
})

// 计算连接线
const connections = computed(() => {
  const lines = []
  let id = 0
  
  // 输入层到隐藏层
  inputNodes.value.forEach(inputNode => {
    hiddenNodes.value.forEach(hiddenNode => {
      lines.push({
        id: `input-hidden-${id++}`,
        x1: inputNode.x + props.nodeRadius,
        y1: inputNode.y,
        x2: hiddenNode.x - props.nodeRadius,
        y2: hiddenNode.y
      })
    })
  })
  
  // 隐藏层到输出层
  hiddenNodes.value.forEach(hiddenNode => {
    outputNodes.value.forEach(outputNode => {
      lines.push({
        id: `hidden-output-${id++}`,
        x1: hiddenNode.x + props.nodeRadius,
        y1: hiddenNode.y,
        x2: outputNode.x - props.nodeRadius,
        y2: outputNode.y
      })
    })
  })
  
  return lines
})
</script> 