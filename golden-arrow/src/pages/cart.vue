<template>
    <div class="text-(--ga-silver)
    flex flex-col gap-(--ga) font-[Labels]">

        <h1 class="text-(--ga-silver)
                mt-(--ga-hero-top)
                text-(length:--ga-text-title)
                mx-(--ga-gutter)
                md:text-(length:--ga-text-hero)
                md:mx-(--ga-gutter-lg) z-1">Cart</h1>

        <div class="flex flex-row  flex-wrap justify-center lg:gap-(--ga-space-sm) md:gap-(--ga-space-sm) md:flex-1 sm:gap-(--ga-space-sm)">

            <div v-for="item in cart.items" class="grid grid-flow-col grid-rows-3 content-center
                text-(length:--ga-text-body) lg:m-(--ga-space-sm) rounded-(--ga-card-r) justify-start gap-(--ga-space-md)
                 outline outline-(--ga-frost-border) bg-(--ga-frost-bg) p-(--ga-space-sm) md:h-(--ga-space-s) md:m-(--ga-card-r) sm:-(--ga-card-r)">

                <div class="w-(--ga-space-xl) shrink-0 row-span-3">
                    <img :src="item.images[0]" :alt="item.name"
                        class="block h-auto w-full rounded-(--ga-card-r) object-contain" />
                </div>
                <div class="text-(length:--ga-text-subtitle) text-(--ga-gold) col-span-2">{{ item.name }}</div>
                <div class="-mt-(--ga-space-md)  col-span-2">${{ item.price / 10000 }}</div>
                <div class=" col-span-2 text-(length:--ga-text-label)">{{ item.quantity }}</div>
                <button class=" ml-30 text-lg text-(--ga-ink-weak)" @click="cart.remove(item.slug)">Remove</button>

            </div>

        </div>

    </div>

</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
const cart = useCartStore()

</script>

<style scoped></style>