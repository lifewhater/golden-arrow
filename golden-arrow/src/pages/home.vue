<template>
    <div v-if="store.isLoaded">
        <div ref="grid" class="parent grid-cols-1 md:grid-cols-2">
            <RouterLink v-for="p in store.list.slice(0, 4)" :key="p.slug" :to="`/collection/${p.slug}`"
                class="group scrollBehavior">
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
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
import { RouterLink } from 'vue-router'
import gsap from 'gsap';

const store = useProductStore()
const grid = ref(null)


onMounted(async () => {
    if (!store.isLoaded) await store.load()
    await nextTick()

    const ctx = gsap.context(() => {
        if (grid.value) {
            gsap.fromTo(
                grid.value,
                { y: 30, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }
            )
        }
    })

    onUnmounted(() => ctx.revert())

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