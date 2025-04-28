<template>
  <header class="noise-nav fixed top-0 z-40 h-20 w-full bg-light-bg px-8vw text-light-text transition-colors duration-normal dark:bg-dark-bg dark:text-dark-text">
    <NavBar />
  </header>
  <main class="relative pt-20">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>
