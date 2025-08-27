<template>
    <nav class="navbar">
        <!-- Header logo or title -->
        <div class="header">GA</div>
        
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
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/collection">Collection</RouterLink></li>
            <li><RouterLink to="/story">Our Story</RouterLink></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
// Import RouterLink from vue-router for navigation links
import { RouterLink } from 'vue-router'
import drawer from './drawer.vue';

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
    font-family: Georgia, 'Times New Roman', Times, serif;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
}

/* Styles for the navigation menu */
.menu {
    color: var(--ga-silver);
    font-size: var(--ga-navbar-fontSize);
    position: fixed;
}
</style>