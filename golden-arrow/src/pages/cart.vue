<template>
    <div class="Shopping Cart bg-blue-400/35 text-(--ga-silver)
    flex flex-col gap-(--ga)
     m-(--ga-margin-top) font-[Labels]">
        <h2 class="text-(length:--ga-title-fontSm)">Shopping Cart</h2>
        <div v-for="item in cart.items" class="bg-purple-300/25 
        text-(length:--ga-price-size) gap-(--ga-)
        flex flex-auto" >
            <span>{{ item.name }}</span>
            <span>{{ item.price / 10000}}</span>
            <span>{{ item.quantity }}</span>
            <button @click="cart.remove(item.slug)">Remove</button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
const cart= useCartStore()

</script>

<style scoped>

</style>