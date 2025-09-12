<template>
    <!-- Layout of the entire collection page -->
    <section class="flex flex-col scroll-smooth style">

        <div class="pointer-events-none fixed inset-0 z-0">
            <LightRays rays-origin="top-center" rays-color="#FFAB2D" :rays-speed="1" :light-spread="0.5" :ray-length="6"
                :follow-mouse="true" :mouse-influence="0.1" :noise-amount="0" :distortion="0.02" :fade-distance="1"
                class-name="rays" />
        </div>
        <!-- Main label -->
        <h1 class="text-[var(--ga-silver)]
                mt-[var(--ga-margin-title)]
                text-(length:--ga-title-fontSm)
                mx-[var(--ga-margin-leftSm)]
                md:text-(length:--ga-title-fontSize)
                md:mx-[var(--ga-margin-left)] z-1">
            Product</h1>

        <!-- Layout of the grid -->
        <div class="flex flex-wrap
                    justify-center
                    mx-[var(--ga-margin-leftSm)]
                    mt-[var(--ga-margin-Card)]
                    gap-[var(--ga-card-gap)]
                    md:mx-[var(--ga-margin-left)]">

            <div v-show="store.isLoaded" v-for="p in store.list" :key="p.slug"
                class="group reveal-card flex flex-col h-[var(--ga-card-height)] w-[var(--ga-card-width)]">
                <div class="aspect-[5/6] relative overflow-hidden rounded-[var(--ga-card-r)]">
                    <RouterLink :to="`/collection/${p.slug}`">
                        <img :src="p.images[0]" :alt="p.name"
                            class="h-full w-full object-cover md:group-hover:scale-110 duration-150" loading="lazy">
                    </RouterLink>
                </div>
                <div class="flex flex-col justify-start">
                    <div class="flex flex-row text-[length:var(--ga-label-fontSize)] 
                    text-[var(--ga-silver)] pt-[var(--ga-padding-top)] justify-between">
                        {{ p.name }}
                        <AddToCartSmall :product="p" class="cursor-pointer" />
                        
                    </div>
                    <div class="flex flex-row 
                    justify-between text-[length:var(--ga-price-size)] text-[var(--ga-ink-weak)]">
                        ${{ p.price }}
                        <color class="cursor-pointer mr-1" />
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup lang="ts">

import { onMounted, nextTick } from 'vue';
import { RouterLink } from 'vue-router';
import { useProductStore } from '@/stores/products';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LightRays from '@/assets/styles/LightRays.vue';
import color from '@/components/color.vue'
import gsap from 'gsap';
import AddToCartSmall from '@/components/AddToCartSmall.vue';

gsap.registerPlugin(ScrollTrigger)
const store = useProductStore()

onMounted(async () => {
    if (!store.isLoaded) {
        try {
            await store.load()
        } catch (error) {
            console.error(error)
        }
    }
    await nextTick()

    gsap.set('.reveal-card', { autoAlpha: 0, y: 20, willChange: 'transform, opacity' })

    ScrollTrigger.batch('.reveal-card', {
        start: 'top 85%',
        onEnter: (batch) => {
            gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                clearProps: 'transform,opacity'
            })

        },
        once: true
    })

})

</script>

<style scoped>
.style {
    font-family: 'Labels';
}
</style>