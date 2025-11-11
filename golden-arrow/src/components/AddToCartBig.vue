<template>
    <div class="w-full h-10 flex flex-row gap-[var(--ga-card-gap)] text-[length:var(--ga-labels)] ">

        <div class="flex place-items-center justify-center bg-[var(--ga-silver)] h-full w-1/2 rounded-[var(--ga-card-r)]
        transition duration-300 ease-in-out border border-[var(--ga-frost-border)] text-[var(--ga-ink)] 
        hover:bg-neutral-300/75 cursor-pointer">
            <span class="leading-none">Buy Now</span>
        </div>

        <div class="flex place-items-center justify-center bg-[var(--ga-frost-bg)] h-full w-1/2 rounded-[var(--ga-card-r)]
        transition duration-300 ease-in-out border-[1px] border-[var(--ga-frost-border)] text-[var(--ga-silver)]
        hover:bg-neutral-800 cursor-pointer">
            <span class="leading-none" @click="addToCart()"> Add to Cart </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';

interface Props {
    slug: string,
    name: string,
    price: number,
    category: string,
    images: string[],
    quantity?: number,
    disabled?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
    qty: 1,
    disabled: false,
})

const cart = useCartStore();
const router = useRouter();
const priceInCents = Math.round(props.price * 100 )

function addToCart() {
    cart.add({ 
        slug:props.slug, 
        name: props.name, 
        price: priceInCents, 
        category: props.category, 
        images: props.images 
    },  1 )
}

</script>

<style scoped></style>