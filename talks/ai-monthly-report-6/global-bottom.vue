<template>
  <footer v-if="$slidev.nav.currentPage > 1" class="jap-footer">
    <span>AI Monthly Report · June 2026</span>
    <span class="jap-footer-page">{{ $slidev.nav.currentPage }}</span>
  </footer>
</template>
