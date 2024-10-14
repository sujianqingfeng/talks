<script setup>
import { computed } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})



const colors = [
  {
    color: [238, 63, 77],
    name: '茶花红'
  },
  {
    color: [35, 118, 183],
    name: '花青'
  },
  {
    color: [252, 161, 4],
    name: '橙皮黄'
  },
  {
    color: [128, 109, 158],
    name: '槿紫'
  },
  {
    color: [43, 174, 133],
    name: '铜绿'
  }
]
const name = computed(() => colors[props.count % colors.length].name)
const color = computed(() => colors[props.count % colors.length].color)
const bgColor = computed(() => `rgb(${color.value[0]}, ${color.value[1]}, ${color.value[2]})`)
const hexBgColor = computed(() => `#${color.value.map(c => c.toString(16)).join('')}`)
</script>


<template>
  <div class="flex items-center justify-center w-full gap-10">
    <div :style="{ color: bgColor }" class="text-20 transition-all duration-300">{{name}}</div>
    <div class="flex flex-col gap-5">
      <div class="text-10 text-white transition-all duration-300 rounded-lg p-2" :style="{ backgroundColor: bgColor }">
        rgb({{ color[0] }}, {{ color[1] }}, {{ color[2] }})
      </div>
      <div class="text-10 text-white transition-all duration-300 rounded-lg p-2"
        :style="{ backgroundColor: hexBgColor }">{{ hexBgColor }}</div>
    </div>
  </div>
</template>