<template>
    <div class="space-y-8 p-8">
        <!-- Title & theme toggle -------------------------------------------------- -->
        <div class="flex items-center justify-between">
            <h1 class="text-3xl font-bold">{{ t('colorTest.title') }}</h1>
            <UButton color="primary" variant="outline" class="flex items-center gap-2" @click="toggleTheme">
                <template #icon>
                    <UIcon :name="colorMode.value === 'dark'
                        ? 'i-heroicons-sun-20-solid'
                        : 'i-heroicons-moon-20-solid'" />
                </template>
                {{ colorMode.value === 'dark' ? t('buttons.lightMode') : t('buttons.darkMode') }}
            </UButton>
        </div>

        <!-- Locale switcher -------------------------------------------------------- -->
        <div class="flex gap-2">
            <UButton v-for="l in locales" :key="l.code" color="primary"
                :variant="l.code === locale ? 'solid' : 'outline'" @click="setLocale(l.code)">
                {{ l.code.toUpperCase() }}
            </UButton>
        </div>

        <!-- Intro ----------------------------------------------------------------- -->
        <section class="space-y-2 max-w-3xl">
            <p class="text-primary">Text primary </p>
            <p class="text-info">
                <I18nT tag="span" keypath="intro.showcase">
                    <template #0><strong>global color aliases</strong></template>
                    <template #1><code>primary</code></template>
                    <template #2><code>secondary</code></template>
                    <template #3><code>tertiary</code></template>
                    <template #4><em>both</em></template>
                </I18nT>
            </p>

            <p class="text-success">
                <I18nT tag="span" keypath="intro.updateHex">
                    <template #0><code>:root</code></template>
                </I18nT>
            </p>

            <p class="text-warning">{{ t('intro.restart') }}</p>

            <p class="text-error">
                <I18nT tag="span" keypath="intro.noColor">
                    <template #0><code>--ui-*</code></template>
                    <template #1><code>ui.theme.colors</code></template>
                </I18nT>
            </p>

            <p class="text-neutral">
                <I18nT tag="span" keypath="intro.toggle">
                    <template #0><strong>light</strong></template>
                    <template #1><strong>dark</strong></template>
                </I18nT>
            </p>
        </section>

        <!-- Native Tailwind elements --------------------------------------------- -->
        <section>
            <h2 class="text-xl font-semibold mb-4">{{ t('sections.nativeTailwind') }}</h2>
            <div class="flex flex-wrap gap-4">
                <button class="bg-primary text-white px-4 py-2 rounded">Tailwind primary</button>
                <button class="bg-secondary text-white px-4 py-2 rounded">Tailwind secondary</button>
                <button class="bg-tertiary text-white px-4 py-2 rounded">Tailwind tertiary</button>
            </div>
        </section>

        <!-- Nuxt UI components ---------------------------------------------------- -->
        <section>
            <h2 class="text-xl font-semibold mb-4">{{ t('sections.nuxtUI') }}</h2>
            <div class="flex flex-wrap gap-4">
                <UButton color="primary">UButton primary</UButton>
                <UButton color="secondary">UButton secondary</UButton>
                <UButton color="tertiary">UButton tertiary</UButton>
            </div>

            <div class="mt-6 space-y-2">
                <UAlert color="primary" :title="t('alerts.primary')" />
                <UAlert color="secondary" :title="t('alerts.secondary')" />
                <UAlert color="tertiary" :title="t('alerts.tertiary')" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const { t, locales, locale, setLocale } = useI18n();

function toggleTheme(): void {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>
