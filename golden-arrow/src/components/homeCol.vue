<template>
    <div class="parent grid-cols-1 md:grid-cols-2">
        <div v-for="(c, i) in tshirts" :key="i"
         class="scrollBehavior
         hover:scale-110
         ">
        <img :src="c.shirt" alt="ERROR" class="h-full w-full object-cover "/>
    </div>
    </div>

</template>

<script setup lang="ts">
import model1 from '@/assets/tshirts/model1-1.jpg'
import model2 from '@/assets/tshirts/model1-2.jpg'
import model3 from '@/assets/tshirts/model2-1.jpg'
import model4 from '@/assets/tshirts/model2-2.jpg'

const tshirts =[
    {shirt: model1},
    {shirt: model2},
    {shirt: model3},
    {shirt: model4},
]

</script>

<style scoped>

.parent{
    display: grid;
    /* grid-template-columns: repeat(auto-fit, 1fr); */
    height: 100vh;
    scroll-behavior: smooth;
    scroll-snap-type: y var(--tw-scroll-snap-strictness);
    --tw-scroll-snap-strictness: mandatory;
    overflow-x: hidden;
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