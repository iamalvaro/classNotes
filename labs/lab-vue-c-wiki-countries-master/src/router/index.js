import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import CountriesList from "../components/CountriesList.vue";  
import CountryDetails from "../components/CountryDetails.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
  routes: [
    {
      path: '/',
      name: "Countries List",
      component: CountriesList,
      children: [
        {
          path: "/country/:alpha3Code",
          name: "Country Details",
          component: CountryDetails,
        },
      ],
    },   
  ],
});

export default router
