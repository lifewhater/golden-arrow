<template>
    <!-- Navigation bar container -->
    <nav class="navbar">
        <!-- Header logo or title -->
        <div class="header">GA</div>
        
        <!-- Hamburger menu for mobile view -->
        <div class="hamburger lg:hidden flex flex-col justify-between">
            <span></span>
            <span></span>
        </div>

        <!-- Navigation menu, hidden on small screens and shown on medium and large screens -->
        <ul class="menu hidden md:ml-1.5 lg:flex items-center gap-10 text-l lg:ml-(--ga-margin-left)">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/collection">Collection</RouterLink></li>
            <li><RouterLink to="/story">Our Story</RouterLink></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
// Import RouterLink from vue-router for navigation links
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Styles for the navigation bar */
.navbar {
    display: flex; /* Use flexbox for layout */
    width: 100%; /* Full width of the container */
    top: 0;
    height: 8rem;
    position: fixed; /* Positioning context for child elements */
    justify-content: space-between; /* Space between items */
    align-items: center; /* Center items vertically */
    z-index: 50; /* Ensure navbar is above other content */

    /* blur effect */
    /* background-color: var(--ga-frost-bg);
    backdrop-filter: blur(30px); */
}

/* Styles for the header/title */
.header {  
    font-size: var(--ga-header-fontSize); /* Font size from CSS variable */
    color: var(--ga-gold); /* Text color from CSS variable */
    text-align: center; /* Center the text */
    font-family: Georgia, 'Times New Roman', Times, serif; /* Font family */
    position: fixed; /* Fixed position for scrolling effect */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Adjust for centering */
    cursor: pointer; /* Pointer cursor on hover */
}

/* Styles for the hamburger menu (for mobile view) */
.hamburger {
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
    color: var(--ga-silver); /* Text color from CSS variable */
    font-size: var(--ga-navbar-fontSize); /* Font size from CSS variable */
    position: fixed; /* Fixed position for scrolling effect */
}
</style>