<template>
  <UContainer class="py-16 space-y-8">
    <h1 class="text-5xl font-extrabold text-center">Portfolio</h1>
    <UTabs :items="categories" class="mt-8">
      <template #perso>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard v-for="proj in persoProjects" :key="proj.title">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold">{{ proj.title }}</h3>
                <UBadge :color="categoryColors[proj.category]" variant="subtle">
                  {{ categoryLabels[proj.category] }}
                </UBadge>
              </div>
            </template>
            <p class="mb-4">{{ proj.description }}</p>
            <div class="flex flex-wrap gap-2">
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
      </template>
      <template #freelance>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard v-for="proj in freelanceProjects" :key="proj.title">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold">{{ proj.title }}</h3>
                <UBadge :color="categoryColors[proj.category]" variant="subtle">
                  {{ categoryLabels[proj.category] }}
                </UBadge>
              </div>
            </template>
            <p class="mb-4">{{ proj.description }}</p>
            <div class="flex flex-wrap gap-2">
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
      </template>
      <template #job>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard v-for="proj in jobProjects" :key="proj.title">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold">{{ proj.title }}</h3>
                <UBadge :color="categoryColors[proj.category]" variant="subtle">
                  {{ categoryLabels[proj.category] }}
                </UBadge>
              </div>
            </template>
            <p class="mb-4">{{ proj.description }}</p>
            <div class="flex flex-wrap gap-2">
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
      </template>
    </UTabs>
  </UContainer>
</template>

<script setup lang="ts">
const categories = [
  { label: 'Projets persos', slot: 'perso' },
  { label: 'Freelance', slot: 'freelance' },
  { label: 'Job', slot: 'job' }
]

interface Project {
  title: string
  description: string
  techs: string[]
  category: 'perso' | 'freelance' | 'job'
}

const projects: Project[] = [
  {
    title: 'Générateur de grilles de Loto FALC',
    description:
      'Application permettant de générer des cartons de loto "Facile à lire et à comprendre". Les numéros sont accompagnés d\'images afin de faciliter la reconnaissance.',
    techs: ['TypeScript', 'Nuxt 3', 'Nuxt UI'],
    category: 'perso'
  }
]

const persoProjects = computed(() => projects.filter((p) => p.category === 'perso'))
const freelanceProjects = computed(() => projects.filter((p) => p.category === 'freelance'))
const jobProjects = computed(() => projects.filter((p) => p.category === 'job'))

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
