<template>
    <!-- Layout of the entire collection page -->
    <section class="flex flex-col scroll-smooth style">
        <div class="w-full h-screen fixed top-0">
            <LightRays rays-origin="top-center" rays-color="#FFB700" :rays-speed="1" :light-spread="0.5"
                :ray-length="6" :follow-mouse="true" :mouse-influence="0.1" :noise-amount="0" :distortion="0.0"
                :fade-distance="0.5"
                class-name="custom-rays" class="z-0"/>
        </div>
        <!-- Main label -->
        <h1 class="text-[var(--ga-silver)]
            mt-[var(--ga-margin-title)]
            text-(length:--ga-title-fontSm)
            md:text-(length:--ga-title-fontSize)
            mx-[var(--ga-margin-leftSm)]
            md:mx-[var(--ga-margin-left)]">
            Product</h1>

        <!-- Layout of the grid -->
        <div class="flex
                flex-wrap
                justify-center
                mx-[var(--ga-margin-leftSm)]
                gap-[var(--ga-card-gap)]
                mt-[var(--ga-margin-Card)]
                md:mx-[var(--ga-margin-left)]">

            <RouterLink v-show="store.isLoaded" v-for="p in store.list" :key="p.slug" class="group flex flex-col
                h-[var(--ga-card-height)] w-[var(--ga-card-width)] " :to="`/collection/${p.slug}`">

                <div class="aspect-[5/6] relative overflow-hidden rounded-[var(--ga-card-r)]">
                    <img :src="p.images[0]" :alt="p.name"
                        class="h-full w-full object-cover md:group-hover:scale-110 duration-150" loading="lazy">
                </div>

                <div class="flex flex-col ">
                    <div class="text-[length:var(--ga-label-fontSize)]
                   text-[var(--ga-silver)]">
                        {{ p.name }}
                    </div>

                    <div class="text-[length:var(--ga-price-size)]
                   text-[var(--ga-ink-weak)]">
                        ${{ p.price }}
                    </div>
                </div>
            </RouterLink>

        </div>
    </section>

</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import gsap from 'gsap';
import { useProductStore } from '@/stores/products';
import LightRays from '@/assets/styles/LightRays.vue';

const store = useProductStore()

onMounted(async () => {
    if (!store.isLoaded) {
        try {
            await store.load()
        } catch (error) {
            console.error(error)
        }
    }
    gsap.from('.group', { opacity: 0, y: 20, duration: 1, ease: 'power3.out', stagger: 0.03 })

})

</script>

<style scoped>
.style{
    font-family: 'Labels';
}
</style>