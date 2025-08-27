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

body {
  background-color: black;
  }



</style>
