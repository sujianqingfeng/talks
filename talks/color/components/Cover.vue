<script setup>
import { computed } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})


const colors = [[16,16,16],[22,22,22],[66,66,66], [99,99,99],[200,200,200]]
const color = computed(() => colors[props.count % colors.length])
const bgColor = computed(() => `rgb(${color.value[0]}, ${color.value[1]}, ${color.value[2]})`)
const hexBgColor = computed(() => `#${color.value.map(c => c.toString(16)).join('')}`)
</script>


<template>
  <div>
    <div class="text-20 text-white transition-all duration-300" :style="{ backgroundColor: bgColor }">
      rgb({{ color[0] }}, {{ color[1] }}, {{ color[2] }}) 
    </div>
    <div class="text-20 text-white transition-all duration-300" :style="{ backgroundColor: hexBgColor }">{{ hexBgColor }}</div>
  </div>
</template>