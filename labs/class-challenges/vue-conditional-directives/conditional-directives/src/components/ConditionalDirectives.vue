<template>
  <section>
    <h1 v-if="headerActive">
      Im showing up because our reactive data is true!
    </h1>
    <h1 v-else>Im showing up because our reactive data is False!</h1>
    <hr />
  </section>
  <section>
    <p v-if="language === 'HTML'">Today we are learning {{ language }}</p>
    <p v-else-if="language === 'CSS'">Today we are learning {{ language }}</p>
    <p v-else-if="language === 'JS'">Today we are learning {{ language }}</p>
    <p v-else="!language">Today there's no class!</p>
    <hr />
  </section>
  <template v-if="showBio === true">
    <h1>{{ myBio.myName }}</h1>
    <p v-if="myBio.age >= 18">I am an adult!</p>
    <p v-else-if="myBio.age < 18">I'm still a minor</p>
    <p v-if="myBio.hasCodedBefore === true">
      This is not my first time at the javascript and vue rodeo
    </p>
    <p v-else-if="myBio.hasCodedBefore === false">
      I am still a newbie to code but I'm learning fast
    </p>
  </template>
</template>
<script setup>
import { ref, reactive } from "vue";

let headerActive = ref(false);
let language = ref("HTML");
let myBio = reactive({
  myName: "Alvaro",
  age: "33",
  hasCodedBefore: true,
});
let showBio = ref(true);
</script>

<style scope>
* {
  color: white;
}
</style>
