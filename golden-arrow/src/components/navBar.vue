<template>

    <nav class="navbar">
 
        <!-- Header logo or title -->
        <RouterLink class="header" to="/">GA</RouterLink>
        
        <!-- Hamburger menu for mobile view and button -->
        <div class="lg:hidden 
                flex flex-col
                justify-between">
            <drawer />
        </div>

        <!-- Navigation menu, hidden on small screens and shown on medium and large screens -->
        <ul class="menu hidden
                        gap-5
                        md:ml-1.5  
                        items-center                     
                        lg:flex 
                        lg:gap-10
                        lg:ml-(--ga-margin-left)">
            <li class=""><RouterLink to="/">Home</RouterLink></li>
            <li class=""><RouterLink to="/collection">Collection</RouterLink></li>
            <li class=""><RouterLink to="/story">Our Story</RouterLink></li>
        </ul>
            <RouterLink to="/cart" class="ml-auto mr-[var(--ga-margin-leftSm)]
                                        md:mr-[var(--ga-margin-left)]">
                    <svg class="w-8 h-8 
                        text-gray-800 
                        
                        dark:text-white" 
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                    </svg>
            </RouterLink>
    </nav>
</template>

<script setup lang="ts">
// Import RouterLink from vue-router for navigation links
import { RouterLink } from 'vue-router'
import drawer from '../pages/drawer.vue';

</script>

<style scoped>
/* Styles for the navigation bar */
.navbar {
    display: flex; /* Use flexbox for layout */
    width: 100%; /* Full width of the container */
    top: 0;
    height: 8rem;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    z-index: 50;
}
.header {  
    font-size: var(--ga-header-fontSize);
    color: var(--ga-gold);
    text-align: center;
    font-family: 'Golden Arrow';
    position: fixed;
    left: 50%;
    margin-top: 2rem;
    transform: translateX(-50%);
    cursor: pointer;
}

/* Styles for the navigation menu */
.menu {
    color: var(--ga-silver);
    font-size: var(--ga-navbar-fontSize);
    position: fixed;
    font-family: 'Labels';
}
</style>