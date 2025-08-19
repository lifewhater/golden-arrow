<script setup lang="ts">
import navBar from './components/navBar.vue';
import heroPage from './components/heroPage.vue';
import './style.css'
  
</script>

<template>
  <nav> <navBar/> </nav>
 <body>
  <heroPage/>
 </body>
  
</template>

<style>

body {
  background-color: black;
  }
@media (min-width: 600px) {}
@media (min-width: 1024px) {}

</style>
