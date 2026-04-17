<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  value: number
  duration?: number
  delay?: number
  decimals?: number
  prefix?: string
  suffix?: string
  threshold?: number
  useGrouping?: boolean
}>(), {
  duration: 1100,
  delay: 0,
  decimals: 0,
  prefix: '',
  suffix: '',
  threshold: 0.55,
  useGrouping: false,
})

const root = ref<HTMLElement | null>(null)
const currentValue = ref(0)

let observer: IntersectionObserver | null = null
let mutationObserver: MutationObserver | null = null
let frame = 0
let delayTimer = 0
let hasAnimated = false
let triggerResolveFrame = 0
let triggerResolveAttempts = 0
let wasHidden = false

function isClickRevealed() {
  const trigger = root.value?.closest('.slidev-vclick-target') as HTMLElement | null
  if (!trigger)
    return true
  return !trigger.classList.contains('slidev-vclick-hidden')
}

function canAnimate() {
  if (!root.value)
    return false
  return isClickRevealed()
}

function connectTriggerObserver() {
  const trigger = root.value?.closest('.slidev-vclick-target') as HTMLElement | null
  if (!trigger || typeof MutationObserver === 'undefined')
    return false

  wasHidden = trigger.classList.contains('slidev-vclick-hidden')

  mutationObserver?.disconnect()
  mutationObserver = new MutationObserver(() => {
    const isHidden = trigger.classList.contains('slidev-vclick-hidden')
    if (wasHidden && !isHidden)
      animate()
    wasHidden = isHidden
  })

  mutationObserver.observe(trigger, { attributes: true, attributeFilter: ['class'] })
  return true
}

function scheduleTriggerObserver() {
  if (connectTriggerObserver())
    return

  if (triggerResolveAttempts >= 8)
    return

  triggerResolveAttempts += 1
  triggerResolveFrame = requestAnimationFrame(scheduleTriggerObserver)
}

const reducedMotion = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function')
    return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const formatter = computed(() => new Intl.NumberFormat(undefined, {
  minimumFractionDigits: props.decimals,
  maximumFractionDigits: props.decimals,
  useGrouping: props.useGrouping,
}))

const formattedValue = computed(() => {
  const safeValue = Math.abs(currentValue.value) < (1 / 10 ** props.decimals) / 2 ? 0 : currentValue.value
  const sign = safeValue < 0 ? '-' : ''
  const formatted = formatter.value.format(Math.abs(safeValue))
  return `${sign}${props.prefix}${formatted}${props.suffix}`
})

function stopAnimation() {
  if (frame)
    cancelAnimationFrame(frame)
  if (delayTimer)
    window.clearTimeout(delayTimer)
}

function animate() {
  if (!canAnimate())
    return

  stopAnimation()
  hasAnimated = true

  if (reducedMotion()) {
    currentValue.value = props.value
    return
  }

  currentValue.value = 0
  const startedAt = performance.now()

  const tick = (now: number) => {
    const elapsed = Math.min(now - startedAt, props.duration)
    const progress = props.duration === 0 ? 1 : elapsed / props.duration
    const eased = 1 - (1 - progress) ** 4
    currentValue.value = props.value * eased

    if (progress < 1)
      frame = requestAnimationFrame(tick)
    else
      currentValue.value = props.value
  }

  delayTimer = window.setTimeout(() => {
    frame = requestAnimationFrame(tick)
  }, props.delay)
}

onMounted(() => {
  if (!root.value || typeof IntersectionObserver === 'undefined') {
    currentValue.value = props.value
    return
  }

  observer = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting && (!hasAnimated || !isClickRevealed()))
      animate()
  }, { threshold: props.threshold })

  observer.observe(root.value)
  scheduleTriggerObserver()
})

onBeforeUnmount(() => {
  stopAnimation()
  if (triggerResolveFrame)
    cancelAnimationFrame(triggerResolveFrame)
  observer?.disconnect()
  mutationObserver?.disconnect()
})
</script>

<template>
  <span ref="root" class="animated-number">{{ formattedValue }}</span>
</template>

<style scoped>
.animated-number {
  display: block;
  font-variant-numeric: tabular-nums lining-nums;
}
</style>
