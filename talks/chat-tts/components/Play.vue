<script setup>
import { useMediaControls } from '@vueuse/core'
import { computed, ref, watch } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  start: {
    type: Boolean,
    default: false
  }
})

const videoRef = ref()

const { playing, currentTime, duration } = useMediaControls(videoRef, {
  src: props.src
})

const percentage = computed(() => (currentTime.value / duration.value) * 100)
const style = computed(() => {
  return {
    background: `radial-gradient(closest-side, white 93%, transparent 80% 100%),conic-gradient(#013c5e ${percentage.value}%, transparent 0)`
  }
})

watch(
  () => props.start,
  (val) => {
    playing.value = val
  }
)
</script>

<template>
  <div
    class="shadow-lg flex justify-center items-center h-40px w-40px rounded-full"
    :style="style"
  >
    <video ref="videoRef" hidden></video>

    <button
      class="text-md color-#444"
      :class="playing ? 'i-carbon:pause' : 'i-carbon:play'"
      @click="playing = !playing"
    ></button>
  </div>
</template>
