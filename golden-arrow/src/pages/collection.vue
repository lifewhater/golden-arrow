<template>
    <!-- Layout of the entire collection page -->
    <section class="flex flex-col scroll-smooth" >
        <!-- Main label -->
            <h1 class="text-[var(--ga-silver)]
            mt-[var(--ga-margin-title)]
            text-(length:--ga-title-fontSm)
            md:text-(length:--ga-title-fontSize)
            mx-[var(--ga-margin-leftSm)]
            md:mx-[var(--ga-margin-left)]" >
                Product</h1>

            <!-- Layout of the grid -->
            <div class="flex
                flex-wrap
                justify-center
                gap-[var(--ga-card-gap)]
                mt-[var(--ga-margin-Card)]
                md:mx-[var(--ga-margin-left)]">

                <!-- <div v-if="!store.isLoaded"
                v-for="i in 6"
                :key="'s' + i"
                class="group flex flex-col
                h-[var(--ga-card-height)]
                w-[var(--ga-card-width)]
                rounded-[var(--ga-card-r)]
                bg-white/10 animate-pulse " /> -->

            <RouterLink v-if="store.isLoaded"
                v-for="p in store.list" :key="p.slug"
                class="group flex flex-col
                h-[var(--ga-card-height)] w-[var(--ga-card-width)] "
                :to="`/collection/${p.slug}`">

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

const store = useProductStore()

onMounted(async() => {
    if(!store.isLoaded){
        try{
            await store.load()
        } catch (error) {
            console.error(error)
        }
    }
gsap.from('.group', {opacity:0, y:20, duration:0.3, ease:'power3.out', stagger:0.03})

})

</script>

<style scoped></style>