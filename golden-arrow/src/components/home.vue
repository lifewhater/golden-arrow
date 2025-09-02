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
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router'
import gsap from 'gsap';

const store = useProductStore()

onMounted(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      '.parent',
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', immediateRender: false }
    )
  })
  onUnmounted(() => ctx.revert())
})

</script>

<style scoped>
.parent {
    display: grid;
    height: 100vh;
    visibility: hidden;
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