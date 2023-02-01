<!-- HTML HERE -->
<template>
  <div
    class="container"
    :class="colorVariableBool ? 'color-blue' : 'color-red'"
  >
    <p>Hello, click to change my background colour</p>
    <button v-on:click="changeColor">Change Color</button>
  </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
const colorVariableBool = ref(true);
const changeColor = () => {
  colorVariableBool.value = !colorVariableBool.value;
};
</script>
<!-- CSS HERE -->
<style scoped>
.container {
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.color-red {
  background-color: #a50044;
}
.color-blue {
  background-color: #004d98;
}
.container {
  color: #edbb00;
  font-size: 1.5rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
}
</style>
