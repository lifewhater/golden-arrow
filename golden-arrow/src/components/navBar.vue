<template>
    <nav class="navbar">
        <div class="logo"> GA</div>
        <div class="hamburger" @click="toggleMenu" :class="{open: menuOpen}">
            <span></span>
            <span></span>
            
        </div>
        <ul ref="menu" class="menu backdrop-blur-md background-white" :class="{show: menuOpen}"> 
            <li> HOME </li>
            <li> STORY </li>
            <li> COLLECTION </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import { gsap } from 'gsap';

const menuOpen = ref(false)
const menu = ref<HTMLElement | null>(null)

function toggleMenu() {
    menuOpen.value = !menuOpen.value
}

watch(menuOpen, (open) => {
    if (menu.value) {
        if (open) {
            gsap.to(menu.value, {x: 0, duration: 1, ease: "power1.out"})
        } else {
            gsap.to(menu.value, {x: '-100%', duration: 1, ease: "power2.in"})
        }
    }
})
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: black;
  color: gold;
  position: relative;
  padding-top: 50px;
}

.logo {
  font-size: 4rem;
  font-family: "mason-sans", sans-serif;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  
}

.hamburger {
  width: 30px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 2;
  
}
.hamburger span {
  display: block;
  height: 4px;
  background: gold;
  border-radius: 2px;
  transition: 0.3s;
}
.hamburger.open span:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  transform: translateY(-5px) rotate(-45deg);
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  color: gold;
  list-style: none;
  padding: 8rem 1rem;
  margin: 0;
  transform: translateX(-100%);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;
}

.menu li {
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu li::after {
    content: ' >';
    font-size: 1.5rem;
    margin-left: 5rem;
}

.menu ::after{
    content: 'GOLDEN ARROW';
    font-size: large;
    
}


</style>