<template>
  <div class="w-full">
    <div class="bg-gray-200 rounded-full h-8 relative overflow-hidden">
      <div v-motion 
           :initial="{ width: '0%' }" 
           :enter="{ width: `${percentage}%`, transition: { duration: 800 } }" 
           class="h-full rounded-full transition-all duration-800 ease-out"
           :class="barClass"></div>
      <div class="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
        {{ showPercentage ? `${percentage}%` : label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  percentage: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 100
  },
  label: {
    type: String,
    default: ''
  },
  showPercentage: {
    type: Boolean,
    default: true
  },
  variant: {
    type: String,
    default: 'blue', // blue, green, orange, red, gray
    validator: (value) => ['blue', 'green', 'orange', 'red', 'gray'].includes(value)
  },
  size: {
    type: String,
    default: 'normal', // small, normal, large
    validator: (value) => ['small', 'normal', 'large'].includes(value)
  }
})

const barClass = computed(() => {
  const variantClasses = {
    blue: 'bg-gradient-to-r from-blue-400 to-blue-600',
    green: 'bg-gradient-to-r from-green-400 to-green-600',
    orange: 'bg-gradient-to-r from-orange-400 to-orange-600',
    red: 'bg-gradient-to-r from-red-400 to-red-600',
    gray: 'bg-gradient-to-r from-gray-500 to-gray-700'
  }
  
  return variantClasses[props.variant]
})
</script> 