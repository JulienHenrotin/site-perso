<template>
    <USlideover v-model="open" side="right">
        <div class="p-6 space-y-6">
            <h2 class="text-2xl font-bold mb-4">Paramètres</h2>

            <!-- Sélecteur de thème de couleur (exemple simple) -->
            <USelect v-model="selected" :options="schemes" placeholder="Jeu de couleurs" />
            <UButton class="mt-4" @click="applyScheme">Appliquer</UButton>
        </div>
    </USlideover>
</template>

<script setup lang="ts">

const props = defineProps<{ open: boolean }>()
const emit = defineEmits(['update:open'])
const open = computed({
    get: () => props.open,
    set: (v: boolean) => emit('update:open', v),
})

/* Jeux de couleurs déclarés dans assets/css/theme.css */
const schemes = [
    { label: 'Default', value: 'default' },
    { label: 'Ocean', value: 'ocean' },
    { label: 'Sunset', value: 'sunset' },
]

const selected = ref('default')
const applyScheme = () => {
    document.documentElement.setAttribute('data-scheme', selected.value)
}
</script>
