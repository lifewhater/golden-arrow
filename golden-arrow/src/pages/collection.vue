<template>
    <!-- Header for the product section with responsive margin -->
    <div class="product ml-(--ga-margin-leftSm) md:ml-(--ga-margin-left)">
        Products
    </div>

    <!-- Container for the grid layout of products -->
    <div class="layout mx-6 grid-cols-1 md:mx-20 md:grid-cols-2">
        <!-- Loop through the cards array to create a showcase for each product -->
        <div v-for="(c, i) in cards" :key="i" class="showcase">
            <!-- Background image for the product -->
            <img :src="c.bg" alt="ERROR" class="bg-blur"/>
            <!-- Shirt image for the product -->
            <img :src="c.shirt" alt="Example Shirt" class="shirt" />
        </div>
    </div>
</template>

<script setup lang="ts">
// Import images for the product cards
import exampleShirt from '@/assets/images/tshirt.png'
import atlas from '@/assets/images/atlas.avif'
import hermes from '@/assets/images/hermes.avif'
import poseidon from '@/assets/images/poseidon.avif'
import hercules from '@/assets/images/hercules.avif'

// Define an array of card objects containing background and shirt images
const cards = [
    {bg: poseidon, shirt: exampleShirt},
    {bg: atlas, shirt: exampleShirt},
    {bg: hermes, shirt: exampleShirt},
    {bg: hercules, shirt: exampleShirt},
]
</script>

<style>
/* Styles for the product header */
.product {
    color: var(--ga-silver); /* Text color */
    font-size: var(--ga-title-fontSize); /* Font size */
    margin-top: var(--ga-margin-top); /* Top margin */
}

/* Styles for the grid layout */
.layout {
    display: grid; /* Use CSS Grid for layout */
    gap: 2.5rem; /* Space between grid items */
    margin: 2rem; /* Outer margin */
    /* margin-top: 6rem; Additional top margin */
    height: 30rem; /* Fixed height for the layout */
}

/* Styles for the blurred background image */
.bg-blur {
    position: absolute; /* Positioning to cover the parent */
    inset: 0; /* Stretch to fill the parent */
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    object-fit: cover; /* Cover the area without distortion */
    filter: blur(0.5rem); /* Apply blur effect */
    opacity: 0.9; /* Slight transparency */
    pointer-events: none; /* Ignore pointer events */
    transform: translateX(2rem) scale(1.1); /* Slight translation and scaling */
}

/* Styles for each product showcase item */
.showcase {
    display: flex; /* Use flexbox for alignment */
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    flex: 1 1 100%; /* Allow items to grow and shrink */
    height: 30rem; /* Fixed height for each item */
    backdrop-filter: blur(1.875rem); /* Blur effect for the background */
    border-radius: 0.3125rem; /* Rounded corners */
    position: relative; /* Positioning context for absolute children */
    overflow: hidden; /* Hide overflow content */
    border: 0.015rem solid hsl(0 0% 30%); /* Border styling */
    cursor: pointer; /* Pointer cursor on hover */
}

/* Styles for the shirt image */
.shirt {
    position: relative; /* Positioning context */
    z-index: 2; /* Ensure it appears above the background */
    display: block; /* Block display */
    max-width: 90%; /* Limit width */
    max-height: 95%; /* Limit height */
    object-fit: contain; /* Maintain aspect ratio */
    filter: drop-shadow(0 1.25rem 2.5rem rgba(0,0,0,.45)); /* Shadow effect */
}
</style>