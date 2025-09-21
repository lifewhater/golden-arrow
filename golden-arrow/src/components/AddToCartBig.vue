<template>
    <div class="w-full h-10 flex flex-row gap-[var(--ga-card-gap)] text-[length:var(--ga-labels)] ">

        <div class="flex place-items-center justify-center bg-[var(--ga-silver)] h-full w-1/2 rounded-[var(--ga-card-r)]
        transition duration-300 ease-in-out border-[1px] border-[var(--ga-frost-border)] text-[var(--ga-ink)] 
        hover:bg-neutral-300/75">
            <p class=""> Buy Now </p>
        </div>

        <div class="flex place-items-center justify-center bg-[var(--ga-frost-bg)] h-full w-1/2 rounded-[var(--ga-card-r)]
        transition duration-300 ease-in-out border-[1px] border-[var(--ga-frost-border)] text-[var(--ga-silver)] 
        hover:bg-neutral-800">
            <p class=""> Add to Cart </p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>