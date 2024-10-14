<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})

const red = ref(238)
const green = ref(63)
const blue = ref(77)

const colors = [
  {
    color: [238,63,77],
    name: '茶花红'
  },
  {
    color:[35,118,183],
    name:'花青'
  },
  {
    color:[252,161,4],
    name:'橙皮黄'
  },
  {
    color:[128,109,158],
    name:'槿紫'
  },
  {
    color:[43,174,133],
    name: '铜绿'
  }
]

const currentName = ref('茶花红')

watch(()=>props.count, (value) => {
  const current = colors[value % colors.length]
  red.value = current.color[0]
  green.value = current.color[1]
  blue.value = current.color[2]
  currentName.value = current.name
})

const bgColor = computed(() => `rgb(${red.value}, ${green.value}, ${blue.value})`)
</script>


<template>
  <div class="flex items-center justify-center w-full gap-10">
    <span :style="{ color: bgColor }" class="text-20 transition-all duration-300">{{ currentName }}</span>

    <div class="text-10 transition-all duration-300 text-white p-2  rounded-lg" :style="{ backgroundColor: bgColor }">
      rgb({{ red }}, {{ green }}, {{ blue }})
    </div>
</div>
</template>