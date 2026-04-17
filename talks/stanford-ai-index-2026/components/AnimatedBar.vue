<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  value: number
  duration?: number
  delay?: number
  threshold?: number
  trackClass?: string
  fillClass?: string
}>(), {
  duration: 900,
  delay: 0,
  threshold: 0.55,
  trackClass: 'comparison-track',
  fillClass: '',
})

const root = ref<HTMLElement | null>(null)
const progress = ref(0)

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
    progress.value = 1
    return
  }

  progress.value = 0
  const startedAt = performance.now()

  const tick = (now: number) => {
    const elapsed = Math.min(now - startedAt, props.duration)
    const ratio = props.duration === 0 ? 1 : elapsed / props.duration
    progress.value = 1 - (1 - ratio) ** 4

    if (ratio < 1)
      frame = requestAnimationFrame(tick)
    else
      progress.value = 1
  }

  delayTimer = window.setTimeout(() => {
    frame = requestAnimationFrame(tick)
  }, props.delay)
}

onMounted(() => {
  if (!root.value || typeof IntersectionObserver === 'undefined') {
    progress.value = 1
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
  <div ref="root" :class="trackClass">
    <div
      :class="['animated-bar-fill', fillClass]"
      :style="{
        width: `${value}%`,
        transform: `scaleX(${progress})`,
      }"
    />
  </div>
</template>

<style scoped>
.animated-bar-fill {
  transform-origin: left center;
  will-change: transform;
}
</style>
