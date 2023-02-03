<template>
  <h1>Watchers</h1>
  <p>{{ question }}</p>
  <input v-model="searchText" type="text" />
  <div v-if="jsonResponse">{{ jsonResponse }}</div>
  <div v-if="jsonImage"><img :src="jsonImage" alt="" /></div>
</template>

<script setup>
import { ref, reactive, watchEffect, watch } from "vue";
import answers from "../assets/answers.json";
let question = ref("Te gusta la pizza? Si o No");
let searchText = ref("");
let jsonResponse = ref("");
let jsonImage = ref("");

watch(searchText, async (newAnswer) => {
  console.log("Watchers active");
  if (searchText.value.toLowerCase() === "si") {
    console.log(searchText.value);
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
