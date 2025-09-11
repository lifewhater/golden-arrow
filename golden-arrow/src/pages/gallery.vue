<template>
  <section class="">

    <!-- DESKTOP VIEW-->
    <div class="hidden md:block md:flex-col md:h-full md:w-1/2 md:z-0">
      <div v-for="(img, i) in product?.images" :key="i" class="relative w-full h-full">
        <img ref="desktop" :src="img" :alt="product?.name" class="object-cover aspect-[5/6] h-full w-full"
          loading="lazy">
      </div>
    </div>

    <!-- MOBILE VIEW -->
    <div class="md:hidden  w-full flex flex-row
          h-[var(--ga-card-height)] mt-30
          overflow-x-auto snap-x snap-mandatory scroll-smooth">
      <div v-for="(img, i) in product?.images" :key="i" class="shrink-0 w-screen snap-start">
        <img ref="mobile" :src="img" :alt="product?.name" class="object-cover aspect-[5/6] h-full w-full"
          loading="lazy">
      </div>
    </div>

    <!-- TEXT -->
    <div class="md:fixed md:ml-[var(--ga-margin-left)] md:w-1/2 
    h-auto w-full top-0 right-0 z-50 ">

      <div class="z-50 flex flex-col gap-[var(--ga-margin-Card)] mx-[var(--ga-margin-leftSm)]
        mt-[var(--ga-label-top)]
        md:mx-[var(--ga-margin-left)] md:mt-[var(--ga-label-margin)] 
         bg-violet-300/25">

        <!-- NAME AND PRICE -->
        <div class="flex flex-row place-content-between bg-red-100/25">
          <div class="text-5xl text-white font">
            {{ product?.name }}
          </div>

          <div class="text-5xl text-white font ">
            ${{ product?.price }}
          </div>
        </div>

        <!-- Details -->
        <div class="flex flex-col gap-y-5 bg-blue-100/25">
          <div class="h-5 border-1 border-b-[var(--ga-silver)]/25
          border-l-[var(--ga-silver)]/25 border-r-[var(--ga-silver)]/25"></div>
          <p class="text-lg text-white uppercase">Color</p>
          <color class=""/>
        </div>

        <!-- ADD TO CART -->
         <div class="bg-red-500/25 h-15 w-full">
          <AddToCartBig />
         </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/products';
import { onMounted, computed, ref, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import color from '@/components/color.vue';
import AddToCartBig from '@/components/AddToCartBig.vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


const desktop = ref([])

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

  desktop.value.forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        pin: true,
        start: 'top top',
        end: 'bottom top',
        pinSpacing: false,
        scrub: 3,
      }
    })
  })
})


</script>

<style scoped>
.font {
  font-family: 'Labels';
}
</style>
