<template>
  <footer>
    <div class="footer-container">
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
    </div>
  </footer>
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
</script>

<style scoped>
.nav-logo {
  width: 20%;
}
.footer-container {
  display: flex;
  margin: 2rem 2rem;
  align-items: center;
  background-color: rgb(98, 98, 98);
}
footer > div > ul {
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0 3rem;
  font-size: 1rem;
}
footer > div > ul > li > a {
  text-decoration: none;
  font-family: sans-serif;
  color: white;
  padding: 0 1em;
}
</style>
