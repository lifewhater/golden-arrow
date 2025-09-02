<template>
  <div class=" flex flex-row h-screen w-screen bg-blue-400/50 text-amber-50 text-2xl">

    <div class="flex flex-col h-full w-1/2">
      <div v-for="(img, i) in product?.images" :key="i" class="relative w-full h-full ">
        <img ref="images" :src="img" :alt="product?.name" class="object-cover aspect-[5/6] h-full w-full">
      </div>
    </div>
    <aside class="bg-red-400/50 w-1/2 h-screen sticky top-0">
      <div class="w-full h-full rounded-xl bg-white/10 flex items-center justify-center text-3xl">
        WORLD
      </div>
    </aside>

  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/products';
import { onMounted, computed, ref, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger)

const images = ref([])
const store = useProductStore()
const route = useRoute()
const slug = computed(() => route.params.slug as string)
const product = computed(() => store.list.find((p) => p.slug === slug.value))

onMounted(async () => {
  if (!store.isLoaded) {
    try {
      await store.load()
    } catch (error) {
      console.log("Gallery Error", error)
    }
  }

  // wait for DOM to render images
  await nextTick()

  //GSAP Animation


  images.value.forEach((el) => {
    gsap.from(el, {

      scrollTrigger: {
        trigger: el,
        pin: true,
        start: 'top top',
        end: 'bottom top',
        markers: true,
        anticipatePin: 1,
      }
    })
  })

})


</script>

<style scoped></style>