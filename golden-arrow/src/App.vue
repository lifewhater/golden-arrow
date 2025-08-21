<script setup lang="ts">
import navBar from './components/navBar.vue';
import heroPageCol from './components/heroPage(col).vue';
import navBarDiff from './components/navBar(diff).vue';
import heroPageRow from './components/heroPage(row).vue';
import './style.css'
  
</script>

<template>
<navBarDiff /> 
<heroPageRow />
  
</template>

<style>

body {
  background-color: black;
  }
@media (min-width: 600px) {}
@media (min-width: 1024px) {}

</style>
