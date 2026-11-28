<template>
  <footer class="py-7 h-full text-muted text-sm border-t border-rule">
    <div class="max-w-335 w-full mx-auto flex flex-wrap justify-between gap-4 px-6">
      <span>© {{ year }} Rosalino Flores Jr.</span>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
