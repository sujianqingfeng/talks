<template>
  <table class="border-collapse border border-black bg-white shadow-sm" :class="tableClass">
    <thead v-if="showHeader">
      <tr class="bg-white">
        <th v-for="word in headers" :key="word" 
            class="border border-black p-4 font-medium text-black tracking-tight">
          {{ word }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex" :class="getRowClass(rowIndex)">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex" 
            :class="getCellClass(rowIndex, cellIndex)"
            class="border border-black text-center transition-colors duration-300">
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
  cellSize: {
    type: String,
    default: 'w-20 h-16 p-4'
  },
  highlightRow: {
    type: Number,
    default: -1
  },
  fontWeight: {
    type: String,
    default: 'font-normal'
  },
  textColor: {
    type: String,
    default: 'text-black'
  },
  highlightTextColor: {
    type: String,
    default: 'text-white'
  },
  highlightBgColor: {
    type: String,
    default: 'bg-black'
  }
})

const getRowClass = (rowIndex) => {
  if (props.highlightRow === rowIndex) {
    return `${props.highlightBgColor} transition-colors duration-500`
  }
  return 'bg-white hover:bg-gray-50'
}

const getCellClass = (rowIndex, cellIndex) => {
  let classes = `${props.cellSize} ${props.fontWeight}`
  
  if (props.highlightRow === rowIndex) {
    classes += ` ${props.highlightTextColor}`
  } else {
    classes += ` ${props.textColor}`
  }
  
  return classes
}
</script> 