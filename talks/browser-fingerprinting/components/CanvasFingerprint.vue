<script setup lang="ts">
import { onMounted, ref, watch, computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'text' | 'shapes' | 'emoji'
  width?: number
  height?: number
  text?: string
  fontSize?: number
  seed?: string
}>(), {
  variant: 'text',
  width: 560,
  height: 220,
  text: 'Cwm fjordbank glyphs vext quiz 😃',
  fontSize: 32,
  seed: ''
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
const hashHex = ref<string>('')
const dataUrl = ref<string>('')
const renderError = ref<string>('')

function seededRandom(seed: string) {
  // Simple xorshift32 seeded PRNG for deterministic doodles
  let h = 2166136261 >>> 0
  for (let i = 0; i < seed.length; i++) h ^= seed.charCodeAt(i), h = Math.imul(h, 16777619)
  let x = h || 0x9e3779b9
  return () => {
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5
    return ((x >>> 0) / 0xffffffff)
  }
}

async function sha256Hex(input: string) {
  const enc = new TextEncoder().encode(input)
  const digest = await crypto.subtle.digest('SHA-256', enc)
  const bytes = new Uint8Array(digest)
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('')
}

function drawText(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const r = seededRandom('text-' + props.seed)
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, w, h)

  // Background gradient subtly depends on device color management
  const grad = ctx.createLinearGradient(0, 0, w, h)
  grad.addColorStop(0, `hsl(${Math.floor(r()*360)},80%,90%)`)
  grad.addColorStop(1, `hsl(${Math.floor(r()*360)},80%,85%)`)
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  ctx.save()
  ctx.textBaseline = 'alphabetic'
  ctx.font = `${props.fontSize}px 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Color Emoji', 'Apple Color Emoji', Arial, sans-serif`

  // Shadow and composite to exercise rasterization differences
  ctx.shadowColor = 'rgba(0,0,0,0.25)'
  ctx.shadowBlur = 2.5
  ctx.globalCompositeOperation = 'multiply'

  const txt = props.text
  const metrics = ctx.measureText(txt)
  const x = 24
  const y = Math.max(props.fontSize + 24, h / 2)

  const g2 = ctx.createLinearGradient(x, 0, x + metrics.width, 0)
  g2.addColorStop(0, '#111827')
  g2.addColorStop(1, '#2563eb')
  ctx.fillStyle = g2
  ctx.fillText(txt, x, y)

  // Subpixel translation + stroke path
  ctx.globalCompositeOperation = 'source-over'
  ctx.lineWidth = 1.25
  ctx.strokeStyle = 'rgba(0,0,0,0.35)'
  ctx.strokeText(txt, x + 0.35, y + 0.4)
  ctx.restore()

  // Draw a tiny emoji row to expose fallback fonts/color emoji
  ctx.font = '24px "Noto Color Emoji", "Apple Color Emoji"'
  ctx.fillStyle = '#0f172a'
  ctx.fillText('🙂😀😃😄😁😆', 24, y + 36)

  // Write device metrics strip
  ctx.fillStyle = '#1f2937'
  ctx.font = '12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
  const dpr = (globalThis.devicePixelRatio || 1).toFixed(2)
  ctx.fillText(`w=${w} h=${h} dpr=${dpr} width=${metrics.width.toFixed(2)} ascent=${metrics.actualBoundingBoxAscent?.toFixed?.(2) ?? 'n/a'}` , 24, h - 14)
}

function drawShapes(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const rand = seededRandom('shapes-' + props.seed)
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, w, h)

  // Grid of paths with varying joins/caps and arc approximations
  ctx.save()
  ctx.translate(20.5, 20.5) // subpixel origin
  const cols = 3, rows = 2
  const cellW = (w - 40) / cols
  const cellH = (h - 40) / rows
  const joins: CanvasLineJoin[] = ['miter', 'round', 'bevel']
  const caps: CanvasLineCap[] = ['butt', 'round', 'square']
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * cellW
      const y = r * cellH
      ctx.save()
      ctx.translate(x, y)
      ctx.beginPath()
      ctx.lineJoin = joins[(c + r) % joins.length]
      ctx.lineCap = caps[(c * 2 + r) % caps.length]
      ctx.lineWidth = 1 + (c + 1) * 0.75
      ctx.moveTo(10, 10)
      ctx.quadraticCurveTo(cellW * 0.35, 0, cellW * 0.5, cellH * 0.4)
      ctx.bezierCurveTo(cellW * 0.65, cellH * 0.8, cellW * 0.9, cellH * 0.2, cellW - 12, cellH - 12)
      ctx.strokeStyle = `hsl(${Math.floor(rand()*360)},70%,35%)`
      ctx.stroke()
      // blend a circle
      ctx.globalCompositeOperation = ['source-over','multiply','screen','overlay'][(c + r) % 4]
      ctx.fillStyle = `hsl(${Math.floor(rand()*360)},75%,65%)`
      ctx.beginPath()
      ctx.arc(cellW * 0.6, cellH * 0.5, Math.min(cellW, cellH) * 0.18, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }
  }
  ctx.restore()
}

function drawEmoji(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, w, h)
  ctx.save()
  ctx.textBaseline = 'alphabetic'
  ctx.font = '48px "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji"'
  ctx.fillText('🤖🧠🔒🎯✍️✨', 20, 80)
  ctx.font = '28px "Segoe UI", "PingFang SC", Arial'
  ctx.fillStyle = '#111827'
  ctx.fillText('字体/Emoji渲染差异', 20, 130)
  ctx.restore()
}

async function render() {
  try {
    const canvas = canvasRef.value!
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) throw new Error('Canvas 2D context not available')
    const w = props.width
    const h = props.height
    canvas.width = Math.floor(w * (globalThis.devicePixelRatio || 1))
    canvas.height = Math.floor(h * (globalThis.devicePixelRatio || 1))
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'
    ctx.scale(globalThis.devicePixelRatio || 1, globalThis.devicePixelRatio || 1)

    switch (props.variant) {
      case 'text':
        drawText(ctx, w, h)
        break
      case 'shapes':
        drawShapes(ctx, w, h)
        break
      case 'emoji':
        drawEmoji(ctx, w, h)
        break
    }

    dataUrl.value = canvas.toDataURL('image/png')
    hashHex.value = await sha256Hex(dataUrl.value)
    renderError.value = ''
  } catch (e: any) {
    renderError.value = e?.message || String(e)
  }
}

onMounted(render)
watch(() => ({...props}), render)

const shortHash = computed(() => hashHex.value.slice(0, 12))
</script>

<template>
  <div class="inline-flex flex-col items-start gap-3">
    <canvas ref="canvasRef" :width="width" :height="height" class="rounded border border-black/20 shadow-sm bg-white" />
    <div class="text-sm text-gray-700 font-mono">
      <template v-if="!renderError">
        <span class="font-semibold">SHA-256:</span> {{ shortHash }}…
        <span class="opacity-60"> (from toDataURL)</span>
      </template>
      <template v-else>
        <span class="text-red-600">{{ renderError }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
canvas { image-rendering: optimizeQuality; }
</style>
