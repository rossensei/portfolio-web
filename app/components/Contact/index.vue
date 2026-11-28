<template>
  <section id="contact" class="py-[96px] h-full border-t border-rule">
    <div class="max-w-[1340px] w-full mx-auto">
      <div class="flex items-center justify-between">
        <span class="text-[13px] text-accent font-mono uppercase">D — Contact</span>
        <p class="text-muted">
          I reply as soon as I see your message.
        </p>
      </div>
      <h2 class="text-hero text-ink leading-[.95] tracking-[-.04em]">
        Let’s build 
        <span class="block font-light text-accent">something new.</span>
      </h2>

      <div class="mt-12 flex items-center justify-between">
        <div>
          <a class="inline-block py-3.25 px-5.5 text-[15px] bg-accent text-on-accent hover:bg-ink hover:text-bg transition-colors rounded-lg" :href="`mailto:${EMAIL_ADDRESS}`">Get in touch →</a>
          <a class="inline-block text-ink font-mono text-[clamp(14px, 2.4vw, 18px)] mt-8 ml-4" :href="`mailto:${EMAIL_ADDRESS}`">{{ EMAIL_ADDRESS }}</a>
        </div>

        <div class="flex items-center gap-6">
          <a 
            class="text-muted transition-colors"
            v-for="(social, index) in socials" 
            :key="index"
            :href="social.link"
            target="_blank"
            re="noopener"
          >
            {{ social.name }} →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Social = {
  name: string;
  link: string;
}
const EMAIL_ADDRESS = "floresrosalino972@gmail.com";
const socials: Social[] = [
  {
    name: "GitHub",
    link: "https://github.com/rossensei"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rosalino-flores-8574742aa/"
  },
]
</script>
