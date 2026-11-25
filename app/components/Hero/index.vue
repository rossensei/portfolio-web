<template>
  <section class="relative py-[96px] h-full">
    <img src="~/assets/grid-backdrop.svg" alt="Grid Backdrop" class="-z-10 absolute inset-0 w-full h-full object-cover">

    <div class="max-w-[1340px] w-full mx-auto">
      <div class="flex items-center justify-between">
        <span class="uppercase text-[13px] text-accent font-medium">A - About</span>
        <span class="uppercase text-xs text-muted tracking-wide">Last commit &centerdot; 2 days ago</span>
      </div>

      <h1 class="my-[48px] text-[144px] leading-[92%] tracking-[-4%]">
        <span class="font-medium text-ink">I build software</span> <br>
        <span class="text-accent">you can rely on.</span>
      </h1>

      <div class="flex items-start justify-between">
        <p class="text-ink text-xl w-[520px] font-inter leading-[150%] tracking-[-0.5%]">
          Software engineer based in Cebu, Philippines. I build APIs, web apps and mobile apps,
          from the database to the interface. Seven years of shipping production software,
          including open-source work.
        </p>

        <HeroCodeCard />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// const codeCardLines = [
//   "export "
// ]
</script>
