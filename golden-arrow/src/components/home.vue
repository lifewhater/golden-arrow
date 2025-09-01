<template>
    
    <div class="parent grid-cols-1 md:grid-cols-2">
        <div v-for="(c, i) in tshirts" :key="i"
            class="group scrollBehavior">
             <div class="relative w-full h-full overflow-hidden">
                <img :src="c.shirt" alt="ERROR" class="h-full w-full object-cover md:hover:scale-110
            md:duration-150"/>
             </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import model1 from '@/assets/images/model1-1.avif'
import model2 from '@/assets/images/model1-2.avif'
import model3 from '@/assets/images/model2-1.avif'
import model4 from '@/assets/images/model2-2.avif'
import gsap from 'gsap'
import { onMounted } from 'vue'

const tshirts =[
    {shirt: model1},
    {shirt: model2},
    {shirt: model3},
    {shirt: model4},
]

onMounted(() => {
    gsap.from('.parent', {y:30, duration:0.5, opacity:0, ease:'power3.out'})

})

</script>

<style scoped>

.parent{
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