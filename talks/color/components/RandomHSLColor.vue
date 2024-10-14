<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})

const h = ref(238)
const s = ref(63)
const l = ref(77)

const colors = [
  {
    color: [238, 63, 77],
    name: '茶花红'
  },
  {
    color: [35, 118, 183],
    name: '花青'
  },
  {
    color: [252, 161, 4],
    name: '橙皮黄'
  },
  {
    color: [128, 109, 158],
    name: '槿紫'
  },
  {
    color: [43, 174, 133],
    name: '铜绿'
  }
]

const name = ref('')

function rgbColorToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

watch(() => props.count, (value) => {
  const current = colors[value % colors.length]
  const [hValue, sValue, lValue] = rgbColorToHSL(...current.color)
  h.value = hValue
  s.value = sValue
  l.value = lValue
  name.value = current.name
})

const bgColor = computed(() => `hsl(${h.value}, ${s.value}%, ${l.value}%)`)
</script>


<template>

  <div class="flex justify-center items-center gap-10 w-full">

    <div :style="{ color: bgColor }" class="text-20 transition-all duration-300">
      {{ name }}
    </div>

    <div class="text-10 transition-all duration-300 text-white p-2  rounded-lg"
      :style="{ backgroundColor: bgColor }">
      hsl({{ h }}, {{ s }}%, {{ l }}%)
    </div>
  </div>
</template>
