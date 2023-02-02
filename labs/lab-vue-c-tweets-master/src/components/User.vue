<!-- HTML HERE -->
<template>
  <span class="user">
    <span class="name">{{ userName }}</span>
    <span class="handle">@{{ userHandle }}</span>
  </span>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
defineProps({
  userName: String,
  userHandle: String,
});
</script>
<!-- CSS HERE -->
<style scoped></style>
