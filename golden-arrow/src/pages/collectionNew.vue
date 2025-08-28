<template>
    <div class="bg-red-400/30">
        <h1 class="text-[var(--ga-silver)]
        text-(length:--ga-title-fontSize)
        ml-[var(--ga-margin-leftSm)]
        md:ml-[var(--ga-margin-left)]
        mt-[var(--ga-margin-top)]
        overflow-x-hidden
        sticky top-18"
        loading="lazy">
        Product</h1>

        <div class="flex
            flex-wrap
            justify-right
            gap-[var(--ga-card-gap)]
            mx-[var(--ga-margin-leftSm)]">

            <div v-for="n in 6" :key="n"
            class="
            bg-blue-400/50 
            h-[var(--ga-card-height)]
            w-[var(--ga-card-width)]
            rounded-[var(--ga-card-r)]">
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>