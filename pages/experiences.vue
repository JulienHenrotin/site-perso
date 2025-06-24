<template>
  <UContainer class="py-16">
    <h1 class="text-5xl font-extrabold text-center mb-14">Expériences professionnelles</h1>
    <div class="relative ml-4">
      <div class="absolute left-0 top-0 bottom-0 border-l-2 border-gray-300 dark:border-gray-700" />
      <div v-for="(exp, idx) in experiences" :key="idx" class="relative pl-8 mb-12">
        <div class="absolute -left-4 top-2 w-3 h-3 bg-primary rounded-full" />
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
    title: "Co-fondateur & Responsable produits web / Développeur front-end - Henoo",
    date: "Juillet 2020 - Mai 2025",
    description: "Développement et montée en charge d'une application mobile Flutter (iOS/Android, +100k téléchargements); pilotage de la stratégie SEO web (Nuxt 3/Tailwind, 2M de clics organiques); création d'outils back-office et de sites client avec des frameworks JavaScript modernes; gestion agile et contribution à la vision produit.",
    techs: ["Flutter", "Nuxt.js", "Vue.js", "Tailwind CSS", "Vuetify", "Postman", "PostgreSQL", "Bitbucket", "Jira"]
  },
  {
    title: "Co-fondateur - Smoon Studio",
    date: "Juin 2018 - Décembre 2020",
    description: "Agence numérique : création de sites web, gestion du SEO et des réseaux sociaux, croissance (growth hacking).",
    techs: ["HTML", "CSS", "WordPress", "Outils SEO"]
  },
  {
    title: "Stagiaire développement mobile - Conecta Wireless",
    date: "Septembre 2019 - Février 2020",
    description: "Développement d'une application interne Android en Kotlin (stage international).",
    techs: ["Kotlin", "Android Studio", "MicroStrategy"]
  },
  {
    title: "Technicien support (CDD) - Région Grand Est",
    date: "Août 2019 - Septembre 2019",
    description: "Soutien technique au sein de l'équipe DSI : développement d'outils Excel, inventaire et installation de matériel informatique.",
    techs: ["Microsoft Excel"]
  },
  {
    title: "Stagiaire développement web - AIP Primeca Lorraine",
    date: "Janvier 2019 - Avril 2019",
    description: "Réalisation d'un nouveau site web pour l'AIP Primeca Lorraine en utilisant un CMS.",
    techs: ["CMS", "WordPress", "HTML", "CSS"]
  },
  {
    title: "Stagiaire informatique - Lorraine Fab Living Lab",
    date: "Avril 2018 - Juin 2018",
    description: "Conception d'une base de données et développement d'une application web de gestion du laboratoire.",
    techs: ["SQL", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Opérateur (CDD) - Air Consulting",
    date: "Juillet 2017 - Août 2017",
    description: "Participation au déploiement d'un nouveau système informatique pour un groupe de télécommunication (mission saisonnière).",
    techs: ["Windows"]
  },
  {
    title: "Stagiaire informatique - Hôpital William Morey",
    date: "Septembre 2016 - Octobre 2016",
    description: "Premier stage de ma formation d’ingénieur : inventaire, préparation de PC et remplacement de matériel. Objectif : découvrir le monde du travail et s'intégrer dans une équipe.",
    techs: ["Windows", "Logiciel d'inventaire"]
  }
];


definePageMeta({
  layout: 'default'
})
</script>
