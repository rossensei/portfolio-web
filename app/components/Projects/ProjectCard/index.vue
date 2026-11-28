<template>
  <article class="flex flex-col gap-4 bg-card border border-rule rounded-lg p-6 hover:border-accent transition-color duration-200 ease-in-out">
    <div class="rounded-lg border border-rule">
      <div class="flex items-center gap-1.5 border-b border-rule py-2.25 px-3">
        <i 
          v-for="n in 3"
          :key="n"
          class="w-2 h-2 rounded-full bg-rule"
        />
        <span class="ml-2 text-muted text-[11px] font-mono">{{ getDomain(project.url) }}</span>
      </div>
      <div class="relative h-75 w-full overflow-hidden">
        <NuxtImg 
          class="object-cover w-full h-full"
          :src="`/images/${project.image}`" 
          :alt="project.image" 
        />
      </div>
    </div>
    <div class="flex items-center justify-between text-[13px] text-muted font-mono">
      <span>No. 01</span>
      <span>{{ project.year }} · {{ project.type }}</span>
    </div>
    <h3 class="text-[26px] text-ink font-medium tracking-[-.02em]">{{ project.name }}</h3>
    <p class="text-muted">{{ project.description }}</p>
    <ul class="flex items-center gap-2 font-mono text-xs text-ink leading-normal">
      <li 
        v-for="(tech, index) in project.stack"
        :key="index"
      >
        <span class="px-2.5 py-1 border border-rule rounded-lg">{{ tech }}</span>
      </li>
    </ul>
    <div class="pt-4 flex items-center justify-between text-sm border-t border-rule">
      <span class="font-mono text-[13px] text-muted">Role — {{ project.role }}</span>
      <a :href="project.url" rel="noopener" class="font-medium text-accent hover:underline">Visit site →</a>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  project: Project
}>()

const getDomain = (url: string): string | null => {
  try {
    const normalized = /^[a-z][a-z0-9+.-]*:\/\//i.test(url) ? url : `https://${url}`
    return new URL(normalized).hostname
  } catch {
    return null
  }
}
</script>
