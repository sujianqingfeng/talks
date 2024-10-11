<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})

const red = ref(255)
const green = ref(0)
const blue = ref(255)


const randomNumber = () => Math.floor(Math.random() * 255)

watch(()=>props.count, () => {
  red.value = randomNumber()
  green.value = randomNumber()
  blue.value = randomNumber()
})

const bgColor = computed(() => `rgb(${red.value}, ${green.value}, ${blue.value})`)

</script>


<template>
  <div class="text-10 transition-all duration-300 text-white p-2 w-full rounded-lg" :style="{ backgroundColor: bgColor }">
    rgb({{ red }}, {{ green }}, {{ blue }})
  </div>
</template>