<template>

    <nav class="navbar">
        <div class="header">GA</div>
        <div class="hamburger md:hidden flex flex-col justify-between">
            <span></span>
            <span></span>
        </div>
        <ul class="menu hidden md:flex items-center gap-5 ml-5 lg:gap-15 text-3xl">
            <li><a href="/" class="cursor-pointer">Home</a></li>
            <li><a href="/story" class="cursor-pointer">Story</a></li>
            <li><a href="/collection" class="cursor-pointer">Collection</a></li>
        </ul>
    </nav>
    
</template>

<script setup lang="ts">

</script>

<style scoped>
.navbar{
    display: flex;
    width: 100%;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding-top: 3rem;
    
}

.header {  
    font-size: var(--ga-header-fontSize);
    color: var(--ga-gold);
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    position: absolute;
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
    margin-left: var(--ga-margin);
    
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
}



</style>