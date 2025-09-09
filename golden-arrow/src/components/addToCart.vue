<template>
    <button class="cursor-pointer">
        <div class="flex justify-center items-center rounded-[var(--ga-card-r)] bg-[var(--ga-frost-bg)]
         h-[var(--ga-button-height)] w-[var(--ga-button-width)] z-50 
         border-[var(--ga-frost-border)] border-1">

            <PlusIcon class="h-6 w-6 stroke-1 fill-[var(--ga-silver)] 
            hover:stroke-[var(--ga-gold)] hover:fill-[var(--ga-gold-weak)] hover:animate-pulse ease-in" />

        </div>
    </button>
</template>

<script setup lang="ts">
    import PlusIcon from '@/assets/svg/plus-solid-full.svg'

    // add to cart functionality
    import { useProductStore } from '@/stores/products';

</script>

<style scoped>

</style>