<!-- pages/index.vue -->
<template>
  <div class="min-h-screen flex flex-col items-center justify-start py-12 space-y-12">
    <!-- ───────────────────────── Top row : Avatar + Description ───────────────────────── -->
    <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-10 space-y-6 md:space-y-0">
      <!-- Avatar -->
      <img src="~/assets/images/moi.jpg" alt="Photo de profil" class="w-40 h-40 rounded-full object-cover shadow-md">

      <!-- Short description -->
      <div class="max-w-xl text-center md:text-left space-y-4">
        <h1 class="text-4xl font-bold text-primary-600">Julien Henrotin</h1>
        <p class="text-lg leading-relaxed">
          Développeur mobile Flutter et full-stack JavaScript—passionné
          par l’UX, la performance et l’open-source.
        </p>
        <p class="text-gray-400">
          Toujours curieux d’apprendre de nouvelles technologies et de relever
          des défis complexes!
        </p>
      </div>
    </div>

    <!-- ───────────────────────── Bottom row : 4 feature cards ───────────────────────── -->
    <div class="w-full">
      <UContainer>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Tech card -->
          <UCard class="flex items-center justify-center h-32 text-xl font-semibold">
            Tech
          </UCard>

          <!-- Formation card -->
          <UCard class="flex items-center justify-center h-32 text-xl font-semibold">
            Formation
          </UCard>

          <!-- Expériences card -->
          <UCard class="flex items-center justify-center h-32 text-xl font-semibold">
            Expériences
          </UCard>

          <!-- Portfolio card -->
          <UCard class="flex items-center justify-center h-32 text-xl font-semibold">
            Portfolio
          </UCard>
        </div>
      </UContainer>
    </div>
  </div>
</template>
