<template>
  <div class="flex flex-col items-center">
    <div v-if="title" class="text-lg font-normal text-black mb-2 text-center">{{ title }}</div>
    <div class="bg-white border border-black rounded" :class="containerClass">
      <svg :width="width" :height="height" :viewBox="`0 0 ${viewBoxWidth} ${viewBoxHeight}`" class="mx-auto">
        <!-- 输入层 -->
        <circle v-for="(node, index) in inputNodes" :key="`input-${index}`"
                :cx="node.x" :cy="node.y" :r="nodeRadius" 
                fill="white" stroke="black" stroke-width="2"/>
        
        <!-- 隐藏层 -->
        <circle v-for="(node, index) in hiddenNodes" :key="`hidden-${index}`"
                :cx="node.x" :cy="node.y" :r="nodeRadius" 
                fill="white" stroke="black" stroke-width="2"/>
        
        <!-- 输出层 -->
        <circle v-for="(node, index) in outputNodes" :key="`output-${index}`"
                :cx="node.x" :cy="node.y" :r="nodeRadius" 
                fill="white" stroke="black" stroke-width="2"/>
        
        <!-- 连接线 -->
        <line v-for="connection in connections" :key="connection.id"
              :x1="connection.x1" :y1="connection.y1" 
              :x2="connection.x2" :y2="connection.y2" 
              stroke="#333333" :stroke-width="strokeWidth" opacity="0.6"/>
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
    default: 8
  },
  strokeWidth: {
    type: Number,
    default: 1
  },
  containerClass: {
    type: String,
    default: 'p-4'
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