<script setup lang="ts">
import { computed } from "vue"
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  bg: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 10
  }
})


const style = computed(() => {

  const [h, s, l] = props.bg.split(',')

  return {
    height: `${props.size}px`,
    width: `${props.size}px`,
    backgroundColor: `hsla(${h}, ${s}, ${l}, 0.7)`,
    borderColor: `hsla(${h}, ${s}, ${l}, 0.8)`
  }
})

</script>


<template>
  <div :style="style" class="rounded-full flex items-center justify-center text-white font-500 border transition-all">
    {{ text }}
  </div>
</template>