<template>
    <!-- Entire card is now a NuxtLink whose target comes from the prop `to` -->
    <NuxtLink :to="to ?? '/portfolio'" class="relative group aspect-square w-full block">
        <!-- Mascotte (cachée derrière, sort à 150 % de sa hauteur) -->
        <img :src="imgSrc" :alt="`${title} mascot`" class="absolute left-1/2 top-1/2 w-20 sm:w-24 h-24 sm:h-28 object-contain
             -translate-x-1/2 translate-y-1/2 opacity-0
             transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
             group-hover:-translate-y-[150%] group-hover:opacity-100 group-hover:rotate-6
             pointer-events-none z-0">

        <!-- Card base -->
        <UCard as="div" class="relative z-10 w-full h-full flex items-center justify-center rounded-lg shadow-md overflow-hidden
             transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl" :class="bgClass">
            <h3 class="text-white text-xl font-bold text-center">
                {{ title }}
            </h3>
        </UCard>
    </NuxtLink>
</template>

<script setup lang="ts">

defineProps<{
    title: string
    imgSrc: string
    bgClass: string
    to?: string
}>()


</script>
