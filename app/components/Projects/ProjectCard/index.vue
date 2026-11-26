<template>
  <article class="flex flex-col gap-4 bg-card border border-rule rounded-lg p-6 hover:border-accent transition-color duration-200 ease-in-out">
    <div class="rounded-lg border border-rule">
      <div class="flex items-center gap-[6px] border-b border-rule py-[9px] px-[12px]">
        <i 
          class="w-[8px] h-[8px] rounded-full bg-rule"
          v-for="n in 3"
          :key="n"
        ></i>
        <span class="ml-2 text-muted text-[11px] mono">{{ getDomain(project.url) }}</span>
      </div>
      <div class="h-[300px] mono text-xs text-muted">
        <img v-if="project.image" :src="getImage(project.image)" alt="Project Image">
      </div>
    </div>
    <div class="flex items-center justify-between text-[13px] text-muted mono">
      <span>No. 01</span>
      <span>{{ project.year }} · {{ project.type }}</span>
    </div>
    <h3 class="text-[26px] text-ink font-medium tracking-[-.02em]">{{ project.name }}</h3>
    <p class="text-muted">{{ project.description }}</p>
    <ul class="flex items-center gap-2 mono text-xs text-ink leading-[1.5]">
      <li 
        v-for="(tech, index) in project.stack"
        :key="index"
      >
        <span class="px-[10px] py-1 border border-rule rounded-lg">{{ tech }}</span>
      </li>
    </ul>
    <div class="pt-4 flex items-center justify-between text-sm border-t border-rule">
      <span class="mono text-[13px] text-muted">Role — {{ project.role }}</span>
      <a :href="project.url" rel="noopener" class="font-medium text-accent hover:underline">Visit site →</a>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
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

const images = import.meta.glob('~/assets/images/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const getImage = (name: string) => images[`/app/assets/images/${name}`]

console.log(images)
</script>
