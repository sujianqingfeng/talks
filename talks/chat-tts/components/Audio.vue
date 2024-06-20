<script lang="ts" setup>
import { useMediaControls } from '@vueuse/core'
import { computed, ref, watch } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: ''
  },
  tag: {
    type: String,
    default: ''
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

watch(
  () => props.start,
  (val) => {
    playing.value = val
  }
)
</script>

<template>
  <div class="shadow-lg p-6 relative rounded-1">
    <video ref="videoRef" hidden></video>

    <div class="flex items-start gap-2">
      <div>{{ text }}</div>
    </div>

    <div
      class="rounded-rt-1 absolute top-0 right-0 bg-gray-2 px-2 text-3 color-primary flex gap-2 items-center"
    >
      <button
        class="text-md color-#444"
        :class="playing ? 'i-carbon:pause' : 'i-carbon:play'"
        @click="playing = !playing"
      ></button>
      <div v-if="tag" class="m-0">{{ tag }}</div>
    </div>

    <div
      class="bg-primary h-2px absolute left-0 bottom-0 text-4"
      :style="{ width: percentage + '%' }"
    ></div>
  </div>
</template>
