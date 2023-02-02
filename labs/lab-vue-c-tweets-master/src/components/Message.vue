<!-- HTML HERE -->
<template>
  <p class="message">
    {{ postMessage }}
  </p>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
defineProps({
  postMessage: String,
});
</script>
<!-- CSS HERE -->
<style scoped></style>
