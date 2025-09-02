<template>
    <div v-if="store.isLoaded">
        <div class="parent grid-cols-1 md:grid-cols-2">
            <RouterLink v-for="p in store.list.slice(0,4)" :key="p.slug" :to="`/collection/${p.slug}`" class="group scrollBehavior">
                <div class="relative w-full h-full overflow-hidden">
                    <img :src="p.images[0]" :alt="p.name" class="h-full w-full object-cover md:hover:scale-110
                md:duration-150" />
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/products';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import gsap from 'gsap';

const store = useProductStore()

onMounted(async () => {
    gsap.from('.parent', { y: 30, duration: 0.5, opacity: 0, ease: 'power3.out' })
    if (!store.isLoaded) {
        try {
            console.log("Store loaded")
            await store.load()
        } catch (error) {
            console.error(error)
        }
    }
})

</script>

<style scoped>
.parent {
    display: grid;
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    scroll-snap-type: y var(--tw-scroll-snap-strictness);
    --tw-scroll-snap-strictness: mandatory;
}

.scrollBehavior {
    /* min-h-screen flex items-center justify-center */
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: center;
    min-height: 100vh;
}
</style>