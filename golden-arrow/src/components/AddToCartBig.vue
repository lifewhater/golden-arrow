<template>
    <div class="w-full h-10 flex flex-row gap-[var(--ga-card-gap)] text-[length:var(--ga-labels)] ">

        <div class="flex place-items-center justify-center bg-[var(--ga-silver)] h-full w-1/2 rounded-[var(--ga-card-r)]
        transition duration-300 ease-in-out border border-[var(--ga-frost-border)] text-[var(--ga-ink)] 
        hover:bg-neutral-300/75">
            <span class="leading-none">Buy Now</span>
        </div>

        <div class="flex place-items-center justify-center bg-[var(--ga-frost-bg)] h-full w-1/2 rounded-[var(--ga-card-r)]
        transition duration-300 ease-in-out border-[1px] border-[var(--ga-frost-border)] text-[var(--ga-silver)]
        hover:bg-neutral-800">
            <span class="leading-none"> Add to Cart </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/products';
import { useRouter } from 'vue-router';

interface Props {
    id: string,
    name: string,
    price: number,
    images: string,
    qty?: number,
    disabled?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
    qty: 1,
    disabled: false,
})

const cart = useProductStore();
const router = useRouter();
const priceInCents = Math.round(props.price * 100 )

function addToCart() {
    // cart.add({ id: props.id, name: props.name, price: priceInCents, images: props.images}, props.qty)
}

</script>

<style scoped></style>