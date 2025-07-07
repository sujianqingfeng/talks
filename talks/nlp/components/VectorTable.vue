<template>
  <div class="flex flex-col items-center">
    <div v-if="title" class="text-lg font-bold text-gray-700 mb-2">{{ title }}</div>
    <table class="border-collapse border-2 text-sm rounded-lg shadow-md" :class="tableClass">
      <tr>
        <td v-for="(value, index) in values" :key="index" 
            class="border p-2 font-mono" :class="cellClass">
          {{ value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  values: {
    type: Array,
    required: true
  },
  variant: {
    type: String,
    default: 'blue', // blue, green, red, gray
    validator: (value) => ['blue', 'green', 'red', 'gray'].includes(value)
  },
  size: {
    type: String,
    default: 'normal', // small, normal, large
    validator: (value) => ['small', 'normal', 'large'].includes(value)
  }
})

const tableClass = computed(() => {
  const variantClasses = {
    blue: 'border-blue-300 bg-blue-50',
    green: 'border-green-300 bg-green-50',
    red: 'border-red-300 bg-red-50',
    gray: 'border-gray-300 bg-gray-50'
  }
  
  return variantClasses[props.variant]
})

const cellClass = computed(() => {
  const variantClasses = {
    blue: 'border-blue-300 text-blue-700',
    green: 'border-green-300 text-green-700',
    red: 'border-red-300 text-red-700',
    gray: 'border-gray-300 text-gray-700'
  }
  
  const sizeClasses = {
    small: 'text-xs',
    normal: 'text-sm',
    large: 'text-base'
  }
  
  return `${variantClasses[props.variant]} ${sizeClasses[props.size]}`
})
</script> 