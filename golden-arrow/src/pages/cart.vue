<template>
    <div class="text-(--ga-silver) font-[Labels]">

        <h1 class="text-(--ga-silver)
                mt-(--ga-hero-top)
                text-(length:--ga-text-title)
                lg:mx-(--ga-space-lg)
                md:text-(length:--ga-text-hero)
                mx-(--ga-gutter-lg) z-1">Cart</h1>

        <div class="flex flex-wrap lg:flex-row lg:justify-center lg:gap-(--ga-space-sm) p-(--ga-space-sm) gap-(--ga-space-md)">

            <div v-for="item in cart.items" class="grid w-full max-w-full grid-cols-[var(--ga-space-xl)_minmax(0,1fr)]
                lg:w-auto lg:max-w-none lg:grid-cols-none lg:grid-flow-col lg:grid-rows-3
                content-center text-(length:--ga-text-body) lg:m-(--ga-space-sm) rounded-(--ga-card-r)
                justify-start gap-(--ga-space-md) outline outline-(--ga-frost-border) bg-(--ga-frost-bg) p-(--ga-space-sm)">

                <div class="w-(--ga-space-xl) min-w-0 row-span-4 lg:row-span-3">
                    <img :src="item.images[0]" :alt="item.name"
                        class="block h-auto w-full rounded-(--ga-card-r) object-contain" />
                </div>
                <div class="min-w-0 wrap-break-words text-(length:--ga-text-subtitle) text-(--ga-gold) lg:col-span-2">{{ item.name }}</div>
                <div class="-mt-(--ga-space-md) lg:col-span-2">${{ item.price / 10000 }}</div>
                <div class="text-(length:--ga-text-label) lg:col-span-2 lg:-mt-(--ga-space-sm) -mt-(--ga-space-md)">{{ item.quantity }}</div>
                <button class="justify-self-start text-lg text-(--ga-ink-weak) lg:ml-30" @click="cart.remove(item.slug)">Remove</button>

            </div>

        </div>

    </div>

</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
const cart = useCartStore()
// Need to add functionality where it removes one item if there are multiple instead of removing the entire product and

</script>

<style scoped></style>