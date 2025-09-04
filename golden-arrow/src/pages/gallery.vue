<template>

  <section>
    <!-- IMAGES LEFT SIDE-->
    <div class="flex flex-col h-full w-1/2 z-0">
      <div v-for="(img, i) in product?.images" :key="i" class="relative w-full h-full ">
        <img ref="images" :src="img" :alt="product?.name" class="object-cover aspect-[5/6] h-full w-full">
      </div>
    </div>

    <!-- TEXT RIGHT SIDE-->
    <div ref="aside" class="h-screen w-1/2 fixed top-0 right-0 z-50 m-[var(--ga-margin-left)]">
      <div class="z-50font flex flex-col gap-[var(--ga-margin-Card)]
      ml-[var(--ga-label-left)] mt-[var(--ga-label-margin)]">

        <!-- NAME AND PRICE -->
        <div class="flex flex-row justify-between">
          <div class="text-5xl text-white font">
            {{ product?.name }}
          </div>
          <div class="text-5xl text-white font">
            ${{ product?.price }}
          </div>
        </div>

        <!-- Details -->
        <div class="text-[var(--ga-ink-weak)] text-2xl">
          color
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/products';
import { onMounted, computed, ref, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


const images = ref([])
const aside = ref(null)

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

  images.value.forEach((element) => {
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
