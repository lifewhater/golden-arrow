<template>
    <!-- Layout of the entire collection page -->
    <section class="flex flex-col scroll-smooth style">

         <div class="pointer-events-none fixed inset-0 z-0">
      <LightRays
        rays-origin="top-center"
        rays-color="#FFB700"
        :rays-speed="1"
        :light-spread="0.5"
        :ray-length="6"
        :follow-mouse="true"
        :mouse-influence="0.1"
        :noise-amount="0"
        :distortion="0.02"
        :fade-distance="1"
        class-name="custom-rays"
      />
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
                class="group flex flex-col h-[var(--ga-card-height)] w-[var(--ga-card-width)]">
                <div class="aspect-[5/6] relative overflow-hidden rounded-[var(--ga-card-r)]">
                    <RouterLink :to="`/collection/${p.slug}`">
                        <img :src="p.images[0]" :alt="p.name"
                            class="h-full w-full object-cover md:group-hover:scale-110 duration-150" loading="lazy">
                    </RouterLink>
                </div>
                <div class="flex flex-col justify-start">
                    <div class="flex flex-row text-[length:var(--ga-label-fontSize)] text-[var(--ga-silver)]
                        pt-[var(--ga-padding-top)] justify-between">
                        {{ p.name }}
                        <addToCart :product="p" class="cursor-pointer" />
                    </div>
                    <div class="text-[length:var(--ga-price-size)] text-[var(--ga-ink-weak)]">
                        ${{ p.price }}
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
import gsap from 'gsap';
import LightRays from '@/assets/styles/LightRays.vue';
import addToCart from '@/assets/addToCart.vue';

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
    gsap.from('.group', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.03
    })
    

})

</script>

<style scoped>
.style {
    font-family: 'Labels';
}
</style>