<template>
  <UContainer class="py-16">
    <h1 class="text-5xl font-extrabold text-center mb-14">Expériences professionnelles</h1>
    <div class="relative ml-4">
      <div class="absolute left-0 top-0 bottom-0 border-l-2 border-gray-300 dark:border-gray-700"></div>
      <div v-for="(exp, idx) in experiences" :key="idx" class="relative pl-8 mb-12">
        <div class="absolute -left-4 top-2 w-3 h-3 bg-primary rounded-full"></div>
        <h3 class="text-xl font-bold">{{ exp.title }}</h3>
        <p class="text-sm text-gray-500 mb-2">{{ exp.date }}</p>
        <p class="mb-4">{{ exp.description }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in exp.techs" :key="tech" class="bg-neutral-800 text-white px-2 py-1 rounded text-sm">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const experiences = [
  {
    title: 'Développeur Full Stack chez ABC',
    date: '2023 - présent',
    description: 'Participation au développement d\'applications web et mobiles.',
    techs: ['Nuxt', 'Flutter', 'Tailwind CSS']
  },
  {
    title: 'Stage de fin d\'études chez XYZ',
    date: '2022',
    description: 'Mise en place d\'une plateforme de gestion interne.',
    techs: ['Vue.js', 'Firebase', 'Bootstrap']
  },
  {
    title: 'Projets personnels',
    date: '2021',
    description: 'Conception de plusieurs applications pour apprendre de nouvelles technologies.',
    techs: ['React', 'Node.js']
  }
]

definePageMeta({
  layout: 'default'
})
</script>
