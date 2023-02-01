<template>
  <header>
    <nav>
      <img class="nav-logo" :src="navLogo.imgRoute" :alt="navLogo.imgAltText" />

      <ul>
        <li><a href="" v-text="navigation[0].navText"></a></li>
        <li>
          <a
            :href="navigation[1].navRoute"
            :target="navigation[1].navLinkOpenNewTab"
            v-text="navigation[1].navText"
          ></a>
        </li>
      </ul>
      <button v-text="buttonText"></button>
    </nav>
  </header>
</template>

<script setup>
import { ref, reactive } from "vue";

const navLogo = reactive({
  imgRoute: "https://uspto.report/TM/86356433/mark",
  imgAltText: "Company Logo",
});
const navigation = reactive([
  {
    navRoute: "/",
    navText: "Home",
  },
  {
    navRoute: "https://dipsetcouture.us/products/killa-shower-curtains",
    navText: "Merchadise",
    navLinkOpenNewTab: "_blank",
  },
]);
const buttonText = ref("Click Me!");
</script>

<style scoped>
.nav-logo {
  width: 20%;
}
nav {
  display: flex;
  margin: 2rem 2rem;
  align-items: center;
}

nav ul {
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0 3rem;
  font-size: 1.5rem;
}
nav > ul > li > a {
  text-decoration: none;
  font-family: sans-serif;
  color: rgb(98, 98, 98);
  padding: 0 1em;
}
button {
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  border: none;
  background-color: rgb(98, 98, 98);
  color: white;
  font-size: 1rem;
}
</style>
