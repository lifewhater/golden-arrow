<script setup lang="ts">
import navBarDiff from './components/navBarDiff.vue';
import './style.css'
  
</script>

<template>
  <!-- Imports NavBar -->  
  <navBarDiff />

  <!-- imports all the pages that needs to be routed including home -->
  <router-view />

</template>

<style>

body {
  background-color: black;
  }



</style>
