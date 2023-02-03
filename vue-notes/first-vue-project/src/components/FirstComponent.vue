<template>
  <!-- HTML PUESTO A PELO -->

  <div>
    <p>
      Me llamo {{ myName }}, naci en {{ birthCity }} y tengo {{ age }} años
      {{ trueOrFalse }}
    </p>
    <p>
      <!-- HTML -- puesto con interpolacion de texto -->
      Me llamo {{ myInfo.myName }}, naci en {{ myInfo.birthCity }} y tengo
      {{ myInfo.age }} años.
    </p>
  </div>
  <section>
    <div class="counter">
      <button @click="decreaseCounter">-</button>
      <p>{{ counter.count }}</p>
      <button @click="increaseCounter">+</button>
    </div>
    <div class="class-exercise">
      <p>
        Mi peli favorita es {{ favMovie }}, la he visto por lo menos
        {{ favMovieCount }} veces, y mi comida favoirta son los {{ favFood }}
      </p>
      <p>
        Me llamo {{ myBio.name }}, tengo {{ myBio.age }} años, nacido el
        {{ myBio.dob }}.
      </p>
      <p>Mis hobbies son:</p>
      <ul>
        <li>{{ myBio.hobbies[0] }}</li>
        <li>{{ myBio.hobbies[1] }}</li>
        <li>{{ myBio.hobbies[2] }}</li>
      </ul>
      <p>
        Mi curriculum educativo es {{ myBio.education.primaria }},
        {{ myBio.education.secundaria }}, {{ myBio.education.universidad }} y mi
        grupo de musica favorito es {{ myBio.favouriteBand }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

let myName = ref("bebe");
let birthCity = ref("Barcelona");
let age = ref(35 - 2);
let trueOrFalse = ref(false);

// BEST APPROACH
const myInfo = reactive({
  myName: "Pepeli",
  birthCity: "Barcelona",
  age: 31,
});

//EJEMPLO CONTADOR
const counter = reactive({
  count: 0,
  title: "My counter",
});
const increaseCounter = () => {
  counter.count++;
};
const decreaseCounter = () => {
  counter.count--;
};

//CLASS EXERCISE

let favMovie = ref("Casino");
let favMovieCount = ref(5);
let favFood = ref("Boquerones fritos");

let myBio = reactive({
  name: "Alvaro",
  age: 33,
  dob: "27-04-1989",
  hobbies: ["skate", "slackline", "patin a vela"],
  education: {
    primaria: "La calle",
    secundaria: "La calle x2",
    universidad: "Doctorado en la calle",
  },
  favouriteBand: "Sublime?",
});
</script>

<style scope>
/* STYLES PARA EL CONTADOR */
.counter {
  display: flex;
  margin: 2rem 0;
  padding: 0 3rem;
}
.counter button {
  padding: 1em;
  font-size: 2em;
}
.counter p {
  font-size: 3em;
  margin: 2em;
}
</style>
