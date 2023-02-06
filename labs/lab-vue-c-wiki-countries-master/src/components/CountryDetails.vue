<template>
  <div class="details-container">
    <ul class="list-group list-group-flush" v-if="countryInfo">
      <!-- <li lass="list-group-item"> -->
      <img
        :src="`https://flagcdn.com/w320/${countryInfo.alpha2Code.toLowerCase()}.png`"
        alt=""
      />
      <!-- </li> -->
      <li class="list-group-item">
        <h1>{{ countryInfo.name.common }}</h1>
        <p>{{ countryInfo.alpha2Code }}</p>
      </li>
      <li class="list-group-item d-inline-flex">
        <p class="me-5"><b>Capital</b></p>
        <p class="">{{ countryInfo.capital[0] }}</p>
      </li>
      <li class="list-group-item d-inline-flex">
        <p class="me-5"><b>Area</b></p>
        <p class="">{{ countryInfo.area }} km2</p>
      </li>
      <li class="list-group-item">
        <p class="me-5"><b>Border/s</b></p>
        <!-- <p>{{ countryInfo.borders }}</p> -->
        <p v-if="countryInfo.borders.length === 0">
          This country has no borders.
        </p>
        <RouterLink
          class="d-block"
          :to="`/country/${borderCountry}`"
          v-for="(borderCountry, index) in countryInfo.borders"
          :key="index"
          v-else
        >
          {{ borderCountry }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute, RouterLink } from "vue-router";

const countryInfo = ref(null);

const route = useRoute();

//Fetch countries from API
const getCountryByAlphaCode = async () => {
  //variable to get current route and inject it into the API fetch request
  const alpha3Code = route.params.alpha3Code;
  console.log(alpha3Code);

  const response = await fetch(
    `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
  );

  const finalResponse = await response.json();
  console.log(finalResponse);

  countryInfo.value = finalResponse;

  return countryInfo;
};

onMounted(() => {
  getCountryByAlphaCode();
});

const countryCode = computed(() => {
  return route.params.alpha3Code;
});

//Watching countryCode to see if the alpha3Code changes in order to re-execute getCountryByAlpha
watch(countryCode, (newCountryCode) => {
  getCountryByAlphaCode();
});
</script>

<style scoped>
.details-container {
  margin: 2em 0 0 4em;
}
img {
  width: 30vw;
}
</style>
