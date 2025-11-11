<template>
    <!-- Layout of the entire collection page -->
    <section class="flex flex-col scroll-smooth style">

        <!-- Light Rays Effect -->
        <!-- <div class="pointer-events-none fixed inset-0 z-0">
            <LightRays rays-origin="top-center" rays-color="#DBA000" :rays-speed="1" :light-spread="0.5" :ray-length="6"
                :follow-mouse="true" :mouse-influence="0.1" :noise-amount="0" :distortion="0.02" :fade-distance="1"
                class-name="rays" />
        </div> -->
        <!-- Main label -->
        <h1 class="text-(--ga-silver)
                mt-(--ga-margin-title)
                text-(length:--ga-title-fontSm)
                mx-(--ga-margin-leftSm)
                md:text-(length:--ga-title-fontSize)
                md:mx-(--ga-margin-left) z-1">
            Product</h1>

        <!-- Layout of the grid -->
        <div class="grid grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    mx-(--ga-margin-leftSm)
                    mt-(--ga-margin-Card)
                    gap-(--ga-card-gap)
                    md:mx-(--ga-margin-left)
                    space-y-(--ga-card-gap)">

            <div v-show="store.isLoaded" v-for="product in store.list" :key="product.slug"
                class="group reveal-card flex flex-col w-full">
                <div class="aspect-5/6 relative overflow-hidden rounded-(--ga-card-r)">
                    <RouterLink :to="`/collection/${product.slug}`">
                        <img :src="product.images[0]" :alt="product.name"
                            class="h-full w-full object-cover md:group-hover:scale-110 duration-150" loading="lazy">
                    </RouterLink>
                </div>
                <div class="flex flex-col justify-start">
                    <div class="flex flex-row text-(length:--ga-label-fontSize) 
                    text-(--ga-silver) pt-(--ga-padding-top) justify-between">
                        {{ product.name }}
                        <AddToCartSmall :product="product" class="cursor-pointer" />
                        
                    </div>
                    <div class="flex flex-row 
                    justify-between text-(length:--ga-price-size) text-(--ga-ink-weak)">
                        ${{ product.price / 100}}
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
        start: 'top 75%',
        onEnter: (batch) => {
            gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
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