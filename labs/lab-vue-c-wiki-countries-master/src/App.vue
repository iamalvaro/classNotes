<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavigationHeader from "./components/NavigationHeader.vue";
</script>

<template>
  <div class="app">
    <header>
      <NavigationHeader />
    </header>
    <RouterView />
  </div>
</template>

<style scoped></style>
