<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center py-12 space-y-12 bg-gradient-to-b from-slate-900 to-slate-800">
    <!-- ───────────────────────── Top row : Avatar + Description ───────────────────────── -->
    <div class="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-6 md:space-y-0">
      <!-- Avatar + Mascotte -->
      <div class="relative inline-block group">
        <img src="~/assets/images/moi.jpg" alt="Photo de profil Julien Henrotin"
          class="rounded-full object-cover size-24 sm:size-48 z-10 relative border-4 border-emerald-500">
        <img src="~/assets/images/juju/hello.png" alt="Mascotte" class="absolute left-0 top-1/2 w-20 sm:w-28
                 -translate-y-1/2 opacity-0
                 transition-all duration-500
                 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
                 group-hover:opacity-100
                 group-hover:-translate-x-1/2
                 group-hover:-rotate-12">
      </div>

      <!-- Description -->
      <div class="max-w-xl text-center space-y-4 px-4 md:px-0">
        <h1 class="text-4xl font-bold text-primary-600">Julien Henrotin</h1>
        <p class="text-lg leading-relaxed">
          Développeur mobile Flutter et front-end web (Nuxt, Vue.js, Tailwind CSS),
          curieux et agile pour apprendre rapidement de nouvelles technologies comme React ou Java.
        </p>
        <p class="text-gray-400">
          Toujours motivé par l’envie de créer des interfaces soignées, performantes et centrées utilisateur.
        </p>
      </div>
    </div>

    <!-- ───────────────────────── Bottom row : 4 feature cards ───────────────────────── -->
    <div class="mt-10">
      <RowBigPartsComponents />
    </div>
  </div>
</template>

<script lang="ts">
definePageMeta({
  layout: 'default'
});
</script>

<style scoped>
.group:hover {
  overflow: visible;
}
</style>
