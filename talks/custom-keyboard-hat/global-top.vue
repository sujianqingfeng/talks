<script lang="ts" setup>
import { ref } from 'vue'

const time = ref(0)
</script>

<template>
  <header v-if="$nav.currentPage > 1" class="absolute right-2 top-2">
    {{ time }}
  </header>
</template>
