<template>
  <table class="border-collapse border-2 border-gray-400" :class="tableClass">
    <thead v-if="showHeader">
      <tr :class="headerClass">
        <th v-for="word in headers" :key="word" class="border border-gray-400 p-3 font-bold">
          {{ word }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex" :class="getRowClass(rowIndex)">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex" 
            :class="getCellClass(rowIndex, cellIndex)"
            class="border border-gray-400 p-3 text-center">
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  headers: {
    type: Array,
    default: () => ['促销', '速点', '链接', '免费', '领取']
  },
  data: {
    type: Array,
    required: true
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  tableClass: {
    type: String,
    default: 'text-lg'
  },
  headerClass: {
    type: String,
    default: 'bg-pink-100'
  },
  rowColors: {
    type: Array,
    default: () => ['bg-yellow-50', 'bg-green-50', 'bg-yellow-50', 'bg-green-50', 'bg-yellow-50']
  },
  cellSize: {
    type: String,
    default: 'w-16 h-16'
  },
  highlightRow: {
    type: Number,
    default: -1
  },
  highlightColor: {
    type: String,
    default: 'bg-red-100'
  },
  fontWeight: {
    type: String,
    default: 'font-bold'
  },
  textColor: {
    type: String,
    default: 'text-gray-800'
  }
})

const getRowClass = (rowIndex) => {
  if (props.highlightRow === rowIndex) {
    return `${props.highlightColor} ${props.fontWeight} transition-colors duration-500`
  }
  return props.rowColors[rowIndex % props.rowColors.length]
}

const getCellClass = (rowIndex, cellIndex) => {
  let classes = `${props.cellSize} ${props.fontWeight}`
  
  if (props.highlightRow === rowIndex) {
    if (cellIndex === 0) {
      classes += ' text-white bg-red-400'
    } else {
      classes += ' text-red-600 bg-red-100'
    }
  } else {
    classes += ` ${props.textColor}`
  }
  
  return classes
}
</script> 