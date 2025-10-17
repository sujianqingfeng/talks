<script setup lang="ts">
import { onMounted, ref, watch, computed } from 'vue'
import QRCode from 'qrcode'

const props = withDefaults(defineProps<{
  url?: string
  size?: number
  caption?: string
  level?: 'L' | 'M' | 'Q' | 'H'
  showText?: boolean
}>(), {
  size: 148,
  level: 'M',
  caption: '扫码在手机打开',
  showText: true
})

const imgUrl = ref<string>('')
const targetUrl = ref<string>('')
const error = ref<string>('')

async function render() {
  try {
    const u = props.url || (import.meta.env.VITE_PUBLIC_QR_URL as string) || (typeof window !== 'undefined' ? window.location.href : '')
    targetUrl.value = u
    imgUrl.value = await QRCode.toDataURL(u, {
      width: props.size,
      margin: 1,
      errorCorrectionLevel: props.level,
      color: { dark: '#111111', light: '#ffffff' },
    })
    error.value = ''
  } catch (e: any) {
    error.value = e?.message || String(e)
  }
}

onMounted(render)
watch(() => [props.url, props.size, props.level], render)

const shortUrl = computed(() => {
  try {
    const u = new URL(targetUrl.value)
    const query = u.search ? u.search : ''
    const hash = u.hash ? u.hash : ''
    return `${u.host}${u.pathname}${query}${hash}`
  } catch {
    return targetUrl.value
  }
})
</script>

<template>
  <div class="inline-flex flex-col items-center gap-2 select-none">
    <div v-if="imgUrl && !error" class="p-2 bg-white rounded border border-black/10 shadow-sm">
      <img :src="imgUrl" :alt="`QR: ${targetUrl}`" :width="size" :height="size" />
    </div>
    <div v-else class="text-red-600 text-sm">{{ error || '生成二维码中…' }}</div>
    <div v-if="showText" class="text-xs text-gray-600">
      {{ caption }}
      <div class="font-mono text-[10px] text-gray-500 mt-1">{{ shortUrl }}</div>
    </div>
  </div>
</template>

<style scoped>
img { image-rendering: pixelated; }
</style>
