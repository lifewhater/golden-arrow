<template>
    <button class="cursor-pointer">
        <div class="flex justify-center items-center rounded-(--ga-card-r) bg-(--ga-frost-bg)
         h-(--ga-button-height) w-(--ga-button-width) z-50 
         border-(--ga-frost-border) border">

            <PlusIcon class="h-6 w-6 stroke-1 fill-(--ga-silver) 
            hover:stroke-(--ga-gold) hover:fill-(--ga-gold-weak) hover:animate-pulse ease-in" />

        </div>
    </button>
</template>

<script setup lang="ts">
    import PlusIcon from '@/assets/svg/plus-solid-full.svg'

    // add to cart functionality
    import { useCartStore } from '@/stores/cart';
    
</script>

<style scoped>

</style>