<template>
    <!-- Layout of the entire collection page -->
    <div class="flex flex-col mt-[var(--ga-margin-top)] scroll-smooth">

        <!-- Main label -->
        <h1 class="text-[var(--ga-silver)]
        text-(length:--ga-title-fontSm)
        md:text-(length:--ga-title-fontSize)
        mx-[var(--ga-margin-leftSm)]
        md:mx-[var(--ga-margin-left)]"
        loading="lazy">
        Product</h1>

        <!-- Layout of the grid -->
        <div class="flex
            flex-wrap
            justify-center-safe
            gap-[var(--ga-card-gap)]
            mt-[var(--ga-margin-textCard)]
            mx-[var(--ga-margin-leftSm)]
            md:mx-[var(--ga-margin-left)]">

            <!-- Images in the grid -->
            <div v-for="(c, i) in products" :key="i"
            class="group flex flex-col
            h-[var(--ga-card-height)]
            w-[var(--ga-card-width)]
            rounded-[var(--ga-card-r)]">

            <div class="h-5/6 relative flex-1 overflow-hidden rounded-[var(--ga-card-r)]">
                <img :src="c.bg" class="h-full w-full object-cover 
                    md:group-hover:scale-110 duration-150 "/>
            </div>
            
            <!-- Name and Price of the tshirts -->
            <div class="h-1/6 flex flex-col
                        mt-[var(--ga-card-gap)]">  

                <p class="text-[var(--ga-silver)]
                    text-(length:--ga-label-fontSize)
                    uppercase">{{ c.name }}</p>

                <p class="text-[var(--ga-ink-weak)]
                    text-(length:--ga-price-size)">{{ c.price }}</p>
            </div>

                
            
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import atlas from '@/assets/images/model1-1.avif'
import hermes from '@/assets/images/model1-2.avif'
import armetes from '@/assets/images/model1-3.avif'
import poseidon from '@/assets/images/model2-1.avif'
import hercules from '@/assets/images/model2-2.avif'
import apollo from '@/assets/images/model2-3.avif'

const products = [
    {bg: poseidon, name:"Poseidon", price:"$35"},
    {bg: atlas, name:"Atlas", price:"$35" },
    {bg: armetes, name:"Armetes", price:"$35" },
    {bg: hermes, name:"Hermes", price:"$35" },
    {bg: hercules, name:"Hercules", price:"$35" },
    {bg: apollo, name:"Apollo", price:"$35" }
]

</script>

<style scoped>

</style>