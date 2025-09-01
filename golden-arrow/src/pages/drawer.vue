<template>
    <button ref="logo" class="hamburger fixed cursor-pointer z-50"
                @click="toggleMenu">
        <span ref="top"></span>
        <span ref="bottom"></span>
    </button>

    <div ref="drawer" class="fixed
                top-0 left-0 
                bg-[var(--ga-ink)]
                h-screen w-screen
                overflow-x-hidden"
                @click.self="closeMenu"
                tabindex="-1">

            <ul ref="text" class="menu
                pl-[var(--ga-margin-leftSm)]
                mt-40
                gap-6
                text-left">
                <li><RouterLink to="/" @click="closeMenu">Home</RouterLink></li>
                <li><RouterLink to="/collection" @click="closeMenu">Collection</RouterLink></li>
                <li><RouterLink to="/story" @click="closeMenu">Our Story</RouterLink></li>
            </ul>
    </div>

</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SplitText from 'gsap/SplitText';
import gsap from 'gsap';
gsap.registerPlugin(SplitText)

const drawer = ref(null)
const top = ref(null)
const bottom = ref(null)
const text = ref(null)
const isOpen = ref(false)

let tl: gsap.core.Timeline;
let split: SplitText;

function toggleMenu(){
    isOpen.value? closeMenu() : openMenu()
}

function openMenu(){
    isOpen.value = true;
    gsap.to(drawer.value , {
        xPercent:0, 
        duration:0.5, 
        ease: 'power3.out', 
        onStart: () => { tl.restart(true).delay(); }
    })
    gsap.to(top.value, {y:5, rotate:45, duration: 0.3, ease:'power3.in'})
    gsap.to(bottom.value, {y:-5, rotate:-45, duration: 0.3, ease:'power3.in'})
}

function closeMenu(){
    isOpen.value = false;
    tl?.timeScale(2).reverse().eventCallback('onReverseComplete', 
    () => {gsap.to(drawer.value, 
        {xPercent: -100, duration:0.3, ease:'power3.out'})})
    gsap.to(top.value, {y:0, rotate:0, duration: 0.3, ease:'power3.inOut'})
    gsap.to(bottom.value, {y:0, rotate:0, duration: 0.3, ease:'power3.inOut'})
}

onMounted(() => {
    gsap.set(drawer.value, {xPercent:-100});
    split = new SplitText(text.value, {type: 'lines', linesClass:'split-line'})

    gsap.set(text.value, {autoAlpha:0})
    gsap.set(split.lines, {yPercent:100, duration: 1, opacity:0,})

    tl = gsap.timeline({paused: true, defaults:{ease: 'circ.out'}})
    .set(text.value, {autoAlpha: 1} ,0)
    .to(split.lines, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      clearProps: 'transform,opacity'}, 0)    
})

onBeforeUnmount(() => {
    tl?.kill()
    split?.revert()
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