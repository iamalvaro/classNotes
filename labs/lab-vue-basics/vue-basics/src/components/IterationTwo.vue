<template>
  <div id="iteration-two">
    <div>
      <p>{{ 2 + 2 }}</p>
    </div>
    <hr />
    <div>
      <h1>{{ stringChain() }}</h1>
      <h1>{{ stringChainTwo() }}</h1>
      <h1>{{ stringChainThree() }}</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const stringChain = () => {
  return "I like biscuits and I cannot lie";
};
const stringChainTwo = () => "I like hummus on a daily basis";
const stringChainThree = () => {
  const myCoolString = ref("hello cool guy");
  return myCoolString.value;
};
</script>

<style scoped>
#iteration-two {
  margin: 0 auto;
  width: 80%;
  position: relative;
  background-color: black;
  color: white;
  font-size: 1.4rem;
  text-align: center;
}
</style>
