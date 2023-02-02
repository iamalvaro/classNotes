<!-- HTML HERE -->
<template>
  <img :src="imageUrl" class="profile" alt="profile" />
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
defineProps({
  imageUrl: String,
});
</script>
<!-- CSS HERE -->
<style scoped></style>
