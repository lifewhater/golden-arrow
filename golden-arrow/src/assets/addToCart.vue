<template>
    <button class="cursor-pointer">
        <div class="flex justify-center items-center rounded-[var(--ga-card-r)] bg-[var(--ga-frost-bg)]
         h-[var(--ga-button-height)] w-[var(--ga-button-width)] z-50 mr-[var(--ga-margin-leftSm)] 
         border-[var(--ga-frost-border)] border-1">
            <PlusIcon class="h-6 w-6 stroke-8 fill-none stroke-[var(--ga-silver)]
            transition-shadow b
            hover:stroke-[var(--ga-gold)] hover:fill-[var(--ga-gold)] hover:animate-pulse" />
        </div>
    </button>
</template>

<script setup lang="ts">
    import PlusIcon from '@/assets/svg/plus-solid-full.svg'

</script>

<style scoped>

</style>