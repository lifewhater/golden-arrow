<template>

    <nav class="navbar">
        <div class="header">GA</div>
        <div class="hamburger lg:hidden flex flex-col justify-between">
            <span></span>
            <span></span>
        </div>
        <!-- md:flex items-center gap-5 -->
        <ul class="menu hidden md:ml-1.5 lg:flex items-center gap-10 text-l ml-(--ga-margin-left)">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/collection">Collection</RouterLink></li>
            <li><RouterLink to="/story">Our Story</RouterLink></li>
        </ul>
    </nav>
    
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>


<style scoped>
.navbar{
    display: flex;
    width: 100%;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding-top: 5rem;
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

.hamburger {
    /* display: flex; */
    flex-direction: column;
    justify-content: space-between;
    z-index: 50;
    height: 15px;
    width: 30px;
    margin-left: var(--ga-margin-leftSm);
    
}

.hamburger span{
    display: block;
    background: var(--ga-gold);
    height: 4px;
    border-radius: 2px;
}

.menu {
    color: var(--ga-silver);
    font-size: var(--ga-navbar-fontSize);
    position: fixed;
    
}



</style>