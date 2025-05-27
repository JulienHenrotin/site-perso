<template>
    <UApp>
        <!-- Sticky header -->
        <header
            class="sticky top-0 z-30 w-full backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
            <UContainer class="flex items-center justify-between h-16">
                <!-- Nom (gauche) -->
                <NuxtLink to="/" class="text-xl font-bold">
                    Julien&nbsp;Henrotin
                </NuxtLink>

                <!-- Bouton paramètre (droite) -->
                <UButton color="primary" variant="solid" icon="i-heroicons-cog-6-tooth" @click="open = true">
                    Paramètres
                </UButton>
            </UContainer>
        </header>

        <!-- Contenu de la page -->
        <main class="min-h-screen">
            <NuxtPage />
        </main>

        <!-- Slideover paramètres -->

        <SettingsSlideover :open="open" />

    </UApp>
</template>

<script setup lang="ts">
import SettingsSlideover from '~/components/SettingsSlideover.vue';


const open = ref(false)
</script>
