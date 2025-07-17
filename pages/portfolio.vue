<template>
  <UContainer class="py-16 space-y-8">
    <h1 class="text-5xl font-extrabold text-center">Portfolio</h1>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
      <UCard v-for="proj in projects" :key="proj.title" class="flex flex-col">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold">{{ proj.title }}</h3>
            <UBadge :color="categoryColors[proj.category]" variant="subtle">
              {{ categoryLabels[proj.category] }}
            </UBadge>
          </div>
        </template>
        <div v-if="proj.image" class="mb-4">
          <NuxtImg :src="proj.image" :alt="proj.title" class="w-full rounded-md" />
        </div>
        <p class="mb-4">{{ proj.description }}</p>
        <div class="flex flex-wrap gap-2 mt-auto">
          <UBadge
            v-for="tech in proj.techs"
            :key="tech"
            color="primary"
            variant="solid"
          >
            {{ tech }}
          </UBadge>
        </div>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
interface Project {
  title: string
  description: string
  techs: string[]
  category: 'perso' | 'freelance' | 'job'
  image?: string
}

const projects: Project[] = [
  {
    title: 'Générateur de grilles de Loto FALC',
    description:
      'Application permettant de générer des cartons de loto "Facile à lire et à comprendre". Les numéros sont accompagnés d\'images afin de faciliter la reconnaissance.',
    techs: ['TypeScript', 'Nuxt 3', 'Nuxt UI'],
    category: 'perso',
    image: '/images/juju/maquette.png'
  }
]

const categoryLabels = {
  perso: 'Perso',
  freelance: 'Freelance',
  job: 'Job'
}

const categoryColors = {
  perso: 'emerald',
  freelance: 'cyan',
  job: 'amber'
}

definePageMeta({
  layout: 'default'
})
</script>
