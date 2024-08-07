<script lang="ts" setup>
import { useNav } from '@slidev/client'
import { computed, ref, watch } from 'vue'

const { currentPage } = useNav()

const time = ref(0)
let timer: any = null

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(remainingSeconds).padStart(2, '0')
  return `${formattedMinutes}:${formattedSeconds}`
}

const record = () => {
  timer = setInterval(() => {
    time.value += 1
  }, 1000)
}

const clear = () => {
  if (timer) {
    clearInterval(timer)
  }
}

watch(currentPage, (val) => {
  if (val === 1) {
    time.value = 0
    clear()
    record()
  }
  if (val === 13) {
    clear()
  }
})

const format = computed(() => formatDuration(time.value))
const isOver = computed(() => time.value > 60 * 7)
</script>

<template>
  <header
    v-if="$nav.currentPage > 1"
    class="absolute right-2 top-2 text-5 font-450"
    :class="{ 'color-red': isOver }"
  >
    {{ format }}
  </header>
</template>
