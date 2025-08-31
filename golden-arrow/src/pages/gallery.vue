<template>
  <section class="mx-[var(--ga-margin-leftSm)] md:mx-[var(--ga-margin-left)]">
    <RouterLink to="/collection" class="text-[var(--ga-gold)]">← Back</RouterLink>

    <h1 class="mt-6 text-3xl text-[var(--ga-silver)]">
      {{ product?.name || 'Product not found' }}
    </h1>

    <div v-if="product" class="grid gap-4 md:grid-cols-2 mt-6">
      <img
        v-for="(src, i) in product.images"
        :key="i"
        :src="src"
        class="w-full aspect-[4/5] object-cover rounded-xl"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// get slug from router params (thanks to props: true in router)
const props = defineProps<{ slug: string }>()

// fake data (replace with Pinia or API later)
const allProducts = [
  { slug: 'atlas', name: 'Atlas Tee', images: ['/img/atlas-1.jpg', '/img/atlas-2.jpg'] },
  { slug: 'apollo', name: 'Apollo Hoodie', images: ['/img/apollo-1.jpg', '/img/apollo-2.jpg'] },
]

const product = computed(() => allProducts.find(p => p.slug === props.slug))
</script>
