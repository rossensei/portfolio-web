<template>
  <div class="w-[560px] bg-surface border border-rule rounded-lg">
    <div class="flex items-center justify-between px-4 py-3 border-b border-rule">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <span class="inline-block w-2 h-2 rounded-full bg-accent" />
          <span class="inline-block w-2 h-2 rounded-full bg-on-ink-muted" />
          <span class="inline-block w-2 h-2 rounded-full bg-on-ink-muted" />
        </div>

        <span class="mono text-xs text-on-ink uppercase">About.ts</span>
      </div>

      <span class="text-xs text-on-ink-muted mono uppercase">Typescript</span>
    </div>
    <div class="flex flex-col text-ink text-[15px] leading-[170%] mono border-t border-rule p-4">
      <div v-for="(line, index) in me.split('\n')" :key="index">
        <span class="inline-block text-on-ink-muted mr-4">{{ index + 1 }}</span>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span class="whitespace-pre mono" v-html="highlight(line)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const me = [
  "export const rosalino = {",
  "  role: \"Software Engineer\",",
  "  based: \"Cebu, PH (UTC+8)\",",
  "  stack: [\"Typescript\", \"Javascript\", \"Kotlin\"],",
  "  status: \"open to contracts (Q1 2027)\",",
  "  since: 2024,",
  "};"
].join("\n")

const esc = (t: string) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const rule = /("[^"]*"|'[^']*'|`[^`]*`)|\b(export|const)\b|\b(\d+)\b/g;
const highlight = (line: string) => esc(line).replace(rule, (m, s, k) => `<span class="${k ? "text-on-ink-muted" : "text-accent"}">${m}</span>`)
</script>
