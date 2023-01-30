<script setup></script>

<template>
  <header>
    <img src="/src/images/Ironhack_logo.png" />
    <img class="burger-menu" src="./images/Burger_menu.png" alt="" />
  </header>

  <main>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <h1>Welcome to Vue.js</h1>
    <h5>Become a coding ninja with the fastest-growing JavaScript framework</h5>
    <button>Awesome!</button>
  </main>
  <section class="cards">
    <div class="card">
      <img src="./images/USP-1.png" alt="" />
      <h3>Performant</h3>
      <p>
        Truly reactive, compiler-optimized rendering system that rarely requires
        manual optimization.
      </p>
    </div>
    <div class="card">
      <img src="./images/USP-2.png" alt="" />
      <h3>Approachable</h3>
      <p>
        Builds on top of standard HTML, CSS and JavaScript with intuitive API
        and world-class documentation.
      </p>
    </div>
    <div class="card">
      <img src="./images/USP-3.png" alt="" />
      <h3>Versatile</h3>
      <p>
        A rich, incrementally adoptable ecosystem that scales between a library
        and a full-featured framework.
      </p>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap");

* {
  font-family: Roboto, sans-serif;
  color: #2c2f30;
  margin: 0;
  padding: 0;
}
/* template {
  width: 70vw;
} */

header {
  line-height: 1.5;
  margin: 2em 2em;
  width: 70vw;
  margin: 2em auto;
  display: flex;
  justify-content: space-between;
}
.burger-menu {
  align-self: center;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  margin: 0 auto;
}

h1 {
  font-size: 3em;
  font-weight: 900;
  padding: 0.5em 0;
}
h5 {
  font-size: 1em;
  width: 40vw;
  text-align: center;
  font-weight: 700;
}

button {
  background-color: #38495c;
  color: white;
  padding: 0.5em 2em;
  border: none;
  border-radius: 1em;
  font-weight: 600;
  font-size: 1em;
  margin: 1.5em 0 3em;
}
.cards {
  background-color: #61b687;
  width: 100%;
  height: 60%;
  margin: 3em 0 0;
  display: flex;
  padding: 2em 0 0;
  width: 70vw;
  margin: 0 auto;
  /* align-items: center;
  justify-content: center;
  align-content: center; */
  flex-wrap: wrap;
}
.card {
  align-self: center;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}
.card > h3,
p {
  color: black;
  padding: 0.5em 0;
}

.card > p {
  font-size: 1em;
  font-weight: 500;
}

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
