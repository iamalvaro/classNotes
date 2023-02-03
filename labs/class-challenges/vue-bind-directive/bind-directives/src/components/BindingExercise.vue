<template>
  <h1 :id="headingId">Hello People!</h1>
  <h2 :class="subHeading ? 'true-value' : 'hidden'">True or false</h2>
  <h3 :style="[h3Style, h3Decoration]">Hello hello</h3>
  <h4 :class="[checkBoolean && 'red', borderCheck && 'border']">
    Last exercise
  </h4>
</template>

<script setup>
import { ref, reactive } from "vue";

let headingId = "heading-style";
let subHeading = ref(true);
let h3Style = reactive({
  marginLeft: "10px",
  border: "1px solid",
});
let h3Decoration = reactive({
  color: "aqua",
  textDecoration: "underline",
});

let checkBoolean = ref(true);
let borderCheck = ref(true);
</script>
<style scope>
* {
  color: white;
}
#heading-style {
  color: red;
}
.true-value {
  color: green;
}
.hidden {
  display: none;
}
.big-text {
  font-size: 3em;
}
.red {
  color: red;
}
.border {
  border: solid 1px;
}
</style>
