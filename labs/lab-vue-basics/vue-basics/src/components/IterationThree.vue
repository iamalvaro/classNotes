<!-- HTML HERE -->
<template>
  <div id="iteration-three">
    <p v-if="showContent">{{ showPositive }}</p>
    <p v-else>{{ showNegative }}</p>
    <p v-show="showContentTwo">Hello Hello lil mate</p>
  </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
let showContent = ref(true);
let showPositive = ref("Hello Im Here");
let showNegative = ref("Im the only thing left");
let showContentTwo = ref(false);
</script>
<!-- CSS HERE -->
<style scoped>
#iteration-three {
  margin: 0 auto;
  width: 80%;
  position: relative;
  background-color: black;
  color: white;
  font-size: 1.4rem;
  text-align: center;
}
</style>
