<template>
    <div class="product ml-(--ga-margin-leftSm) md:ml-(--ga-margin-left)">
        Products
    </div>
    <div class="layout mx-6 md:mx-20">
            <div v-for="(c, i) in cards" :key="i" class="showcase">
            <img :src="c.bg" alt="ERROR" class="bg-blur"/>
            <img :src="c.shirt" alt="Example Shirt" class="shirt" />
        </div>
    </div>
</template>


<script setup lang="ts">
import RouterLink from 'vue-router'
import exampleShirt from '@/assets/tshirts/example.png'
import atlas from '@/assets/tshirts/atlas.jpeg'
import hermes from '@/assets/tshirts/hermes.jpeg'
import poseidon from '@/assets/tshirts/poseidon.jpeg'
import hercules from '@/assets/tshirts/hercules.jpeg'

const cards = [
    {bg: poseidon, shirt: exampleShirt},
    {bg: atlas, shirt: exampleShirt},
    {bg: hermes, shirt: exampleShirt},
    {bg: hercules, shirt: exampleShirt},
]


</script>

<style>

.product{
    color: var(--ga-silver);
    font-size: var(--ga-title-fontSize);
    margin-top: var(--ga-margin-top);
    /* margin-left: var(--ga-margin-leftSm); */
}   

.layout{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 3fr));
    gap: 2.5rem;
    margin: 2rem;
    margin-top: 6rem;
}

.bg-blur {
     position: absolute;
     inset: 0;
     width: 100%;
     height: 100%;
     object-fit: cover;
     filter: blur(0.5rem);
     opacity: 0.9;
     pointer-events: none;
     transform: translateX(2rem) scale(1.1); /* instead of the invalid `scale:` property */
}

.showcase{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 100%;
    height: 30rem;
    max-width: 100%;
    backdrop-filter: blur(1.875rem);
    border-radius: 0.3125rem;
    position: relative;
    overflow: hidden;
    border: 0.015rem solid hsl(0 0% 30%);
    cursor: pointer;

}
.shirt {
  position: relative;
  z-index: 2;
  display: block;
  max-width: 90%;
  max-height: 95%;
  object-fit: contain;
  filter: drop-shadow(0 1.25rem 2.5rem rgba(0,0,0,.45));
}
</style>