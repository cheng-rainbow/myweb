<template>
  <header class="h-20 px-8vw noise-nav w-full fixed top-0 z-50 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-normal">
    <NavBar />
  </header>
  <main class="pt-20 relative">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>
