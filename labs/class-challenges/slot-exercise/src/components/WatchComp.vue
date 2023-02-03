<template>
  <p>{{ question }}</p>
  <input v-model="searchText" type="text" />
  <div v-if="jsonResponse">{{ jsonResponse }}</div>
  <div v-if="jsonImage"><img :src="jsonImage" alt="" /></div>
</template>

<script setup>
import { ref, reactive, watchEffect, watch } from "vue";
import answers from "../answers.json";
let question = ref("Te gusta la pizza?");
watch(searchText, async (newAnswer) => {
  if (searchText.value.toLowerCase() === "yes") {
    jsonResponse = answers[0].answer;
    jsonImage.value = answers[0].image;
  } else if (searchText.value.toLowerCase() === "no") {
    jsonResponse = answers[1].answer;
    jsonImage.value = answers[1].image;
  } else {
    jsonResponse = answers[2].answer;
    jsonImage.value = answers[2].image;
  }
});
</script>

<style scoped></style>
