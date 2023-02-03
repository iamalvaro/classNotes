<!-- HTML HERE -->
<template>
  <div id="form-exercise">
    <form @submit.prevent="submitFormData">
      <div id="form-name">
        <label for="fullName">Please enter your name:</label>
        <br />
        <input id="fullName" type="text" v-model="formData.formName" />
      </div>
      <div id="form-age">
        <label for="age">Please select you age:</label>
        <br />
        <input id="age" type="number" v-model="formData.formAge" />
      </div>
      <div id="form-dob">
        <label for="dob">Please enter your Date of Birth:</label>
        <br />
        <input id="dob" type="date" v-model="formData.formDob" />
      </div>
      <div id="submit-btn"><input type="submit" /></div>
    </form>
  </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

const formData = reactive({
  formName: "",
  formAge: "",
  formDob: "",
});

const submitFormData = () => {
  alert(`
        Well Done!
        We successfully received your info.
        
        We received the following data:

        - Name : ${formData.formName}
        - Age : ${formData.formAge}
        - Date Of Birth : ${formData.formDob}    
    `);
};
</script>
<!-- CSS HERE -->
<style scoped></style>
