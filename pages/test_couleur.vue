<template>
    <div class="space-y-8 p-8">
        <!-- Title & theme toggle -------------------------------------------------- -->
        <div class="flex items-center justify-between">
            <h1 class="text-3xl font-bold">Color palette test</h1>
            <UButton color="primary" variant="outline" class="flex items-center gap-2" @click="toggleTheme">
                <template #icon>
                    <UIcon :name="colorMode.value === 'dark'
                        ? 'i-heroicons-sun-20-solid'
                        : 'i-heroicons-moon-20-solid'" />
                </template>
                {{ colorMode.value === 'dark' ? 'Light mode' : 'Dark mode' }}
            </UButton>
        </div>

        <!-- Intro ----------------------------------------------------------------- -->
        <section class="space-y-2 max-w-3xl">
            <p class="text-info">
                This page showcases how the <strong>global color aliases</strong> (<code>primary</code>,
                <code>secondary</code>, <code>tertiary</code> …) propagate across <em>both</em> native Tailwind
                classes and Nuxt UI components.
            </p>
            <p class="text-success">
                Update the hex values in <code>:root</code> and watch every element below refresh instantly
                — no code change needed.
            </p>
            <p class="text-warning">
                Don’t forget to restart the dev server after editing the config so Tailwind can pick up
                new variables.
            </p>
            <p class="text-error">
                Seeing no color? Make sure the <code>--ui-*</code> CSS variables are declared and that the
                color names are listed in <code>ui.theme.colors</code>.
            </p>
            <p class="text-neutral">
                Use the toggle button (top-right) to preview the palette in both <strong>light</strong>
                and <strong>dark</strong> modes.
            </p>
        </section>

        <!-- Native Tailwind elements --------------------------------------------- -->
        <section>
            <h2 class="text-xl font-semibold mb-4">Native Tailwind elements</h2>
            <div class="flex flex-wrap gap-4">
                <button class="bg-primary text-white px-4 py-2 rounded">Tailwind primary</button>
                <button class="bg-secondary text-white px-4 py-2 rounded">Tailwind secondary</button>
                <button class="bg-tertiary text-white px-4 py-2 rounded">Tailwind tertiary</button>
            </div>
        </section>

        <!-- Nuxt UI components ---------------------------------------------------- -->
        <section>
            <h2 class="text-xl font-semibold mb-4">Nuxt UI components</h2>
            <div class="flex flex-wrap gap-4">
                <UButton color="primary">UButton primary</UButton>
                <UButton color="secondary">UButton secondary</UButton>
                <UButton color="tertiary">UButton tertiary</UButton>
            </div>

            <div class="mt-6 space-y-2">
                <UAlert color="primary" title="Primary alert" />
                <UAlert color="secondary" title="Secondary alert" />
                <UAlert color="tertiary" title="Tertiary alert" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
function toggleTheme(): void {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>
