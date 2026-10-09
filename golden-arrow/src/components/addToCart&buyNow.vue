<template>
    <div class="w-full h-10 flex flex-row gap-(--ga-space-sm) text-(length:--ga-text-label)"  @click="addToCart()">

        <div class="flex place-items-center justify-center bg-(--ga-silver) h-full w-1/2 rounded-(--ga-card-r)
        transition duration-300 ease-in-out border border-(--ga-frost-border) text-(--ga-ink) 
        hover:bg-(--ga-gold) cursor-pointer">
            <span class="leading-none">Buy Now</span>
        </div>

        <div class="flex place-items-center justify-center bg-(--ga-frost-bg) h-full w-1/2 rounded-(--ga-card-r)
        transition duration-300 ease-in-out border border-(--ga-frost-border) text-(--ga-silver)
        hover:bg-(--ga-gold) hover:text-black cursor-pointer">
            <span class="leading-none"> Add to Cart </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

interface Props {
    slug: string,
    name: string,
    price: number,
    category: string,
    images: string[],
    quantity?: number,

}

const props = withDefaults(defineProps<Props>(), {
    quantity: 1,
})

const cart = useCartStore();
const priceInCents = Math.round(props.price)

function addToCart() {
    cart.add({ 
        slug:props.slug, 
        name: props.name, 
        price: priceInCents, 
        category: props.category, 
        images: props.images 
    },  props.quantity )
}

</script>

<style scoped></style>