<!-- pages/pluie.vue -->
<script setup>
import { ref, onMounted } from 'vue'

const containerRef = ref()

onMounted(async () => {
    const Matter = (await import('matter-js')).default || (await import('matter-js'))
    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter

    const engine = Engine.create()
    engine.gravity.y = 1                // gravité “terrestre”
    const world = engine.world

    const images = [
        '/images/juju/hello.png',
        '/images/juju/forge.png',
        '/images/juju/IT.png',
        '/images/juju/maquette.png',
        '/images/juju/master.png',
        '/images/juju/moto.png'
    ]

    /* ---------- rendu ---------- */
    const render = Render.create({
        element: containerRef.value,
        engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            background: '#f0f0f0',
            wireframes: false        // ← passe à true pour débug des collisions
        }
    })
    Render.run(render)
    Runner.run(Runner.create(), engine)

    /* ---------- souris ---------- */
    const mouse = Mouse.create(render.canvas)
    World.add(world, MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2 }
    }))
    render.mouse = mouse

    /* ---------- murs ---------- */
    World.add(world, [
        Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 25, window.innerWidth, 50, { isStatic: true }),
        Bodies.rectangle(-25, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }),
        Bodies.rectangle(window.innerWidth + 25, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true })
    ])

    /* ---------- sprites ---------- */
    const BASE = 256
    const MIN = 30
    const MAX = 60

    images.forEach(src => {
        const size = MIN + Math.random() * (MAX - MIN)
        const scale = size / BASE

        World.add(world, Bodies.rectangle(
            Math.random() * window.innerWidth,
            -Math.random() * 400 - 50,
            size,
            size,
            {
                restitution: 0.2,      // ↘ rebond plus faible → empilement visible
                friction: 0.05,
                frictionAir: 0.02,     // ralentit la chute → collisions plus nettes
                render: {
                    sprite: { texture: src, xScale: scale, yScale: scale }
                    // , lineWidth: 1, strokeStyle: '#ff0000'   // décommenter pour voir les rectangles
                }
            }
        ))
    })
})
</script>

<template>
    <ClientOnly>
        <div ref="containerRef" class="fixed inset-0 overflow-hidden" />
    </ClientOnly>
</template>

<style scoped>
canvas {
    display: block;
}
</style>
