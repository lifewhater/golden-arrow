<script setup lang="ts">

import navBar from './components/navBar.vue';
import './style.css'

</script>

<template>

      <!-- Imports NavBar -->
      <navBar />
      <!-- imports all the pages that needs to be routed including home -->
      <router-view />


</template>

<style>


  html, body, #app, #smooth-wrapper, #smooth-content { height: 100%; }
#smooth-wrapper { height: 100vh; overflow: hidden; }
#smooth-content { min-height: 100%; will-change: transform; }
body {
  background-color: black;
  }
</style>
