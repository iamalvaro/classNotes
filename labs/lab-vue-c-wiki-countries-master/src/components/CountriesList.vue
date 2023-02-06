<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <ul class="list-group overflow-auto">
          <RouterLink
            class="router-link"
            v-for="(country, index) in countries"
            :key="index"
            :to="`/country/${country.alpha3Code}`"
          >
            <li
              class="list-group-item list-group-item-action list-group-item-dark"
            >
              <h5>{{ country.name.common }}</h5>
              <p class="text-muted">{{ country.alpha3Code }}</p>
              <img
                class="list-flags"
                :src="`https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`"
                alt="flags"
              />
            </li>
          </RouterLink>
        </ul>
      </div>
      <div class="col-sm-8">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";

const countries = ref(null);

const fetchCountries = async () => {
  const response = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  );

  const finalResponse = await response.json();
  console.log(finalResponse);

  const sortedCountries = finalResponse.sort((paramOne, paramTwo) => {
    return paramOne.name.common.localeCompare(paramTwo.name.common);
  });
  console.log(sortedCountries);

  countries.value = sortedCountries;
};

onMounted(() => {
  fetchCountries();
});
</script>

<style scoped>
/* .list-group-item {
  width: 30vw;
} */
.list-group {
  /* margin: 0 0 0 0; */
  height: 180vw;
  /* width: 32vw; */
}
.router-link {
  text-decoration: none;
}
.list-flags {
  width: 10vw;
}
</style>
