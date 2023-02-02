<!-- HTML HERE -->
<template>
  <span class="timestamp">{{ timeStamp }}</span>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
defineProps({
  timeStamp: String,
});
</script>
<!-- CSS HERE -->
<style scoped></style>
