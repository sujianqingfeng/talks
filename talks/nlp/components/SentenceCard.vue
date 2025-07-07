<template>
  <div class="p-4 rounded-lg border-l-4 transition-all duration-500" :class="cardClass">
    <div class="flex items-center" v-if="showNumber">
      <div class="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4 text-sm" :class="numberClass">
        {{ number }}
      </div>
      <div class="flex-1">
        <slot></slot>
      </div>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  number: {
    type: [String, Number],
    default: 1
  },
  showNumber: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'blue', // blue, green, purple, gray
    validator: (value) => ['blue', 'green', 'purple', 'gray'].includes(value)
  },
  isActive: {
    type: Boolean,
    default: false
  },
  prefix: {
    type: String,
    default: ''
  }
})

const cardClass = computed(() => {
  const baseClasses = {
    blue: 'bg-gradient-to-r from-blue-50 to-blue-100 border-blue-300',
    green: 'bg-gradient-to-r from-green-50 to-green-100 border-green-300',
    purple: 'bg-gradient-to-r from-purple-50 to-purple-100 border-purple-300',
    gray: 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300'
  }
  
  const activeClasses = {
    blue: 'bg-gradient-to-r from-blue-200 to-blue-300 border-blue-500 shadow-lg transform scale-105',
    green: 'bg-gradient-to-r from-green-200 to-green-300 border-green-500 shadow-lg transform scale-105',
    purple: 'bg-gradient-to-r from-purple-200 to-purple-300 border-purple-500 shadow-lg transform scale-105',
    gray: 'bg-gradient-to-r from-gray-200 to-gray-300 border-gray-500 shadow-lg transform scale-105'
  }
  
  return props.isActive ? activeClasses[props.variant] : baseClasses[props.variant]
})

const numberClass = computed(() => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    gray: 'bg-gray-500'
  }
  
  return colorClasses[props.variant]
})
</script> 