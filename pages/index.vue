<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-12 space-y-12">
    <!-- ───────────────────────── Top row : Avatar + Description ───────────────────────── -->
    <div class="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-6 md:space-y-0">
      <!-- Avatar + Mascotte -->
      <div class="relative inline-block group">
        <img src="~/assets/images/moi.jpg" alt="Photo de profil"
          class="rounded-full object-cover size-24 sm:size-48 z-10 relative">
        <img src="~/assets/images/juju/hello.png" alt="Mascotte" class="absolute left-0 top-1/2 w-20 sm:w-28
                 -translate-y-1/2 opacity-0
                 transition-all duration-500
                 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
                 group-hover:opacity-100
                 group-hover:-translate-x-1/2
                 group-hover:-rotate-12">
      </div>



      <!-- Description -->
      <div class="max-w-xl text-center space-y-4">
        <h1 class="text-4xl font-bold text-primary-600">Julien Henrotin</h1>
        <p class="text-lg leading-relaxed">
          Développeur mobile Flutter et full-stack JavaScript—passionné
          par l’UX, la performance et l’open-source.
        </p>
        <p class="text-gray-400">
          Toujours curieux d’apprendre de nouvelles technologies et de relever
          des défis complexes !
        </p>
      </div>
    </div>

    <!-- ───────────────────────── Bottom row : 4 feature cards ───────────────────────── -->
    <div class="mt-10">
      <RowBigPartsComponents />
    </div>
  </div>
</template>

<style scoped>
.group:hover {
  overflow: visible;
}
</style>
