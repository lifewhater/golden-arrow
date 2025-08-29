<template>
    <button ref="logo" class="hamburger cursor-pointer z-50"
                @click="openMenu">
        <span></span>
        <span></span>
    </button>

    <div ref="drawer" class="fixed
                top-0 left-0 
                bg-[var(--ga-ink)]
 
                h-screen w-screen
                overflow-x-hidden"
                @click.self="closeMenu"
                tabindex="-1">

            <ul class="menu
                pl-[var(--ga-margin-leftSm)]
                mt-40
                gap-6
                text-left">
                <li><RouterLink to="/" @click="closeMenu">Home</RouterLink></li>
                <li><RouterLink to="/collectionNEW" @click="closeMenu">Collection</RouterLink></li>
                <li><RouterLink to="/story" @click="closeMenu">Our Story</RouterLink></li>
            </ul>
    </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
const drawer = ref(null)
const logo = ref(null)

function openMenu(){
    gsap.to(drawer.value , {xPercent:0, duration:0.05, ease: 'power2.out'})
}

function closeMenu(){
    gsap.to(drawer.value, {xPercent:-100, duration:0.05, ease:'power2.in'})
}


onMounted(() => {
    gsap.set(drawer.value, {xPercent:-100})
})

</script>

<style scoped>

/* Styles for the hamburger menu (for mobile view) */
.hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 50;
    height: 15px;
    width: 30px;
    margin-left: var(--ga-margin-leftSm);
}

/* Styles for each line in the hamburger menu */
.hamburger span {
    display: block;
    background: var(--ga-gold);
    height: 4px;
    border-radius: 2px;
}
/* Styles for the navigation menu */
.menu {
    display: flex;
    flex-direction: column;
    color: var(--ga-silver);
    font-size: var(--ga-navbar-fontSize);
}
</style>