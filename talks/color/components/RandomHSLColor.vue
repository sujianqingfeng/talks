<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})

const h = ref(0)
const s = ref(100)
const l = ref(50)


const randomNumber = (max) => Math.floor(Math.random() * max)

watch(()=>props.count, () => {
  h.value = randomNumber(360)
  s.value = randomNumber(100)
  l.value = randomNumber(100)
})

const bgColor = computed(() => `hsl(${h.value}, ${s.value}%, ${l.value}%)`)

</script>


<template>
  <div class="text-10 transition-all duration-300 text-white p-2 w-full rounded-lg" :style="{ backgroundColor: bgColor }">
    hsl({{ h }}, {{ s }}%, {{ l }}%)
  </div>
</template>