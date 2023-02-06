<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <a class="text-white" href="/"> Wiki Countries Lab</a>
    <RouterLinks class="text-white" to="/">Wiki Countries</RouterLinks>
  </nav>
</template>

<script setup>
import { ref, reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.navbar {
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
}
</style>
