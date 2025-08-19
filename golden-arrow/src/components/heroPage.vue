<template>
    <div class="gridLayout">
        <div v-for="(c, i) in cards" :key="i" class="showcase">
            <img :src="c.bg" alt="ERROR" class="bg-blur"/>
            <img :src="c.shirt" alt="Example Shirt" class="shirt" />
        </div>
    </div>
</template>


<script setup lang="ts">
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
.gridLayout {
    display: grid;
    margin: 32px;
    gap: 40px;
    margin-top: 600px;
    overflow: hidden;
    grid-template-columns: 1fr;
}
.bg-blur {
    height: 100%;
    width: 100%;
    filter: blur(10px);
    opacity: 0.9;
    pointer-events: none;
    position: absolute;
    
    background-size: cover;
    scale: 175% 95%;
    background-position: right;
}

.showcase{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    max-width: 400px;
    background: rgba(122, 122, 122, 0.726);
    backdrop-filter: blur(30px);
    border-radius: 5px;
    border: 0.8px  white;
    position: relative;
}
.shirt {
  position: relative;
  z-index: 1;
  display: block;
  max-width: 75%;
  max-height: 80%;
  object-fit: contain;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,.45));
}
</style>