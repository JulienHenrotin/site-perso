<template>
    <div>
        <RivePlayer ref="riveRef" src="/animations/construction.riv" class="w-96 h-96" />
        <div class="mt-4">
            <button class="btn" @click="play">Play</button>
            <button class="btn ml-2" @click="pause">Pause</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const riveRef = ref(null)

const play = () => {
    riveRef.value?.play()
}

const pause = () => {
    riveRef.value?.pause()
}
</script>
