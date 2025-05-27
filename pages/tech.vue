<template>
    <UContainer class="py-16">
        <h1 class="text-5xl font-extrabold text-center mb-14">Technologies maîtrisées</h1>

        <!-- Responsive grid -->
        <div class="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
            <div v-for="tech in techs" :key="tech.name"
                class="aspect-square rounded-2xl bg-neutral-800 dark:bg-neutral-700 shadow-md flex flex-col items-center justify-center space-y-4 transition-transform duration-300 hover:-translate-y-3 group">
                <!-- Fixed‑dimension logo -->
                <img :src="tech.logo" :alt="tech.name + ' logo'"
                    class="w-12 h-12 sm:w-16 sm:h-16 object-contain select-none">
                <!-- Tech name -->
                <span class="text-lg sm:text-xl font-bold text-white drop-shadow-md">{{ tech.name }}</span>

                <!-- Colored glow on hover (keeps each tech color) -->
                <span class="absolute inset-0 rounded-2xl pointer-events-none transition-shadow duration-300"
                    :class="tech.hoverRing" />
            </div>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
// Replace logo paths with your own assets
const techs = [
    { name: 'Nuxt', logo: '/images/logos/nuxt.svg', hoverRing: 'group-hover:shadow-[0_0_25px_#00C58E]' },
    { name: 'Tailwind', logo: '/images/logos/tailwindcss.png', hoverRing: 'group-hover:shadow-[0_0_25px_#38BDF8]' },
    { name: 'Flutter', logo: '/images/logos/flutter.svg', hoverRing: 'group-hover:shadow-[0_0_25px_#02569B]' },
    { name: 'TypeScript', logo: '/images/logos/typescript.png', hoverRing: 'group-hover:shadow-[0_0_25px_#3178C6]' },
    { name: 'Vue.js', logo: '/images/logos/vue.png', hoverRing: 'group-hover:shadow-[0_0_25px_#42B883]' },
    { name: 'Bootstrap', logo: '/images/logos/bootstrap.png', hoverRing: 'group-hover:shadow-[0_0_25px_#7952B3]' },
    { name: 'Firebase', logo: '/images/logos/firebase.svg', hoverRing: 'group-hover:shadow-[0_0_25px_#FFCA28]' },
    { name: 'Jenkins', logo: '/images/logos/jenkins.png', hoverRing: 'group-hover:shadow-[0_0_25px_#D33833]' }
]
</script>

<style scoped>
.group:hover {
    box-shadow: var(--tw-shadow);
}
</style>
