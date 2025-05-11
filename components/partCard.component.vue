<template>
    <!-- Wrapper : square ratio, hover group -->
    <NuxtLink to="/portfolio" class="relative group aspect-square w-full block">
        <!-- Mascot image – hidden behind the card, reveals head above on hover -->
        <img :src="resolvedSrc" :alt="`${title} mascot`" class="absolute left-1/2 top-1/2 w-20 sm:w-24 h-24 sm:h-28
             object-contain
             -translate-x-1/2 translate-y-1/2 opacity-0
             transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
             group-hover:-translate-y-[150%] group-hover:opacity-100 group-hover:rotate-6
             pointer-events-none z-0">

        <!-- Card base (above mascot) -->
        <UCard as="div" class="relative z-10 w-full h-full flex items-center justify-center rounded-lg shadow-md overflow-hidden
             transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl" :class="bgClass">
            <h3 class="text-white text-xl font-bold text-center">{{ title }}</h3>
        </UCard>
    </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ title: string; imgSrc: string; bgClass: string }>()

// Resolve asset URL whether it comes from /public or ~/assets
const resolvedSrc = computed(() =>
    props.imgSrc.startsWith('/')
        ? props.imgSrc
        : new URL(props.imgSrc, import.meta.url).href
)
</script>
