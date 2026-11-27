<template>
  <section id="projects" class="py-[96px] h-full border-t border-rule">
    <div class="max-w-[1340px] w-full mx-auto">
      <div class="flex items-center justify-between mb-12">
        <div>
          <span class="text-[13px] text-accent mono uppercase">B — Selected work</span>
          <h2 class="mt-2 text-[56px] text-ink font-medium leading-[1.05] tracking-[-.03em]">Two websites, in detail.</h2>
        </div>

        <p class="text-muted max-w-[360px]">
          Two company websites I built as a developer, with the stack I used and their Lighthouse scores.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <ProjectsProjectCard
          v-for="project in projects"
          :key="project.name"
          :project
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects: Project[] = [
  {
    name: "Vauldex Tech Website",
    description: "The company website for Vauldex Tech, built as a developer. Responsive · A11y 90+ · SEO 90+",
    stack: [
      "Nuxt",
      "TypeScript",
      "Strapi",
    ],
    role: "Developer",
    year: 2025,
    type: "Production",
    url: "https://vauldex.tech",
    image: "vauldex-tech.png"
  },
  {
    name: "TamariBa Garage Website",
    description: "The company website for TamariBa Garage, built as a developer. Responsive · A11y 100 · SEO 90+",
    stack: [
      "Nuxt",
      "GSAP",
      "TypeScript",
      "Strapi",
    ],
    role: "Developer",
    year: 2025,
    type: "Production",
    url: "https://tamariba-garage.com",
    image: "tamariba-garage.png"
  },
]
</script>
