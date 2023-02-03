<template>
  <h1>Arroz a la cubana</h1>
  <img
    src="https://cdn0.recetasgratis.net/es/posts/9/8/0/arroz_a_la_cubana_facil_y_rapido_72089_600_square.jpg"
    alt=""
  />

  <div class="div-btn" @mouseover="recetaToogle">Ver receta</div>
  <template v-show="viewReceta">
    <p>
      El arroz a la cubana es una de las recetas que más me recuerdan a mi niñez
      por eso hoy la voy a preparar en honor a mi abuela. Hace unas semanas vi
      en otro blog que subían una receta de arroz a la cubana con sus huevos
      fritos, su plátano frito, y sus salchichas y me dije, bueno hay que hacer
      una receta en honor a mi yaya. Por eso hoy os voy a explicar cómo me lo
      preparaba ella, una receta perfecta para los niños. Personalmente nunca le
      he puesto plátano, solo lo he introducido en esta receta para que sea más
      «original». Mi abuela en vez de plátano frito le ponía salchichas frescas
      o un buen filete de carne a la plancha. Recuerdo junto a todos mis primos
      que nos lo comíamos con mucho ansia porque nos encantaba. Así que hoy
      vamos a preparar una receta muy fácil de arroz a la cubana, el plato
      combinado más famoso de España jeje.
    </p>
  </template>
</template>

<script setup>
let viewReceta = ref(true);
const recetaToogle = () => {
  viewReceta = !viewReceta;
  console.log("Helllo???");
};
</script>

<style scoped>
.div-btn {
  width: 200px;
  background-color: aquamarine;
  color: black;
  font-size: 2rem;
  text-align: center;
}
</style>
