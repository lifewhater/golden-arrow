<template>
    <div class="gridLayout">
        <div class="showcase">
            <img :src="exampleShirt" alt="Example Shirt">
        </div>

        <div class="showcase">
            <img :src="exampleShirt" alt="Example Shirt">
        </div>

        <div class="showcase" > 
            <img :src="exampleShirt" alt="Example Shirt"></img>
        </div>
    </div>
</template>


<script setup lang="ts">
import exampleShirt from '@/assets/tshirts/example.png'
import atlas from '@/assets/tshirts/atlas.jpeg'
import hermes from '@/assets/tshirts/hermes.jpeg'
import poseidon from '@/assets/tshirts/poseidon.jpeg'
import hercules from '@/assets/tshirts/hercules.jpeg'
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

.showcase{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    max-width: 400px;
    background: rgba(122, 122, 122, 0.726);
    backdrop-filter: blur(30px);
    border-radius: 10px;
    border: 0.5px  white;
}


</style>