<template>
    <button class="hamburger cursor-pointer
                "
                @click="isOpen = true">
        <span></span>
        <span></span>
    </button>

    <div ref="sideMenu" class="fixed
                top-0 left-0 
                bg-[var(--ga-frost-bg)]
                backdrop-blur-[var(--ga-blur)]
                h-screen w-0
                overflow-x-hidden">

        <ul id="sideMenu" class="menu
                pl-[var(--ga-margin-leftSm)]
                mt-40
                gap-6
                text-left">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/collection">Collection</RouterLink></li>
            <li><RouterLink to="/story">Our Story</RouterLink></li>
        </ul>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false)
const sideMenu = ref(null)


</script>

<style scoped>

/* Styles for the hamburger menu (for mobile view) */
.hamburger {
    display: flex;
    flex-direction: column; /* Stack the lines vertically */
    justify-content: space-between; /* Space between lines */
    z-index: 50; /* Ensure it is above other content */
    height: 15px; /* Height of the hamburger menu */
    width: 30px; /* Width of the hamburger menu */
    margin-left: var(--ga-margin-leftSm); /* Left margin from CSS variable */
}

/* Styles for each line in the hamburger menu */
.hamburger span {
    display: block; /* Block display for each line */
    background: var(--ga-gold); /* Background color from CSS variable */
    height: 4px; /* Height of each line */
    border-radius: 2px; /* Rounded corners */
}
/* Styles for the navigation menu */
.menu {
    display: flex;
    flex-direction: column;
    color: var(--ga-silver); /* Text color from CSS variable */
    font-size: var(--ga-navbar-fontSize); /* Font size from CSS variable */
}
</style>