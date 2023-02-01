<!-- HTML HERE -->
<template>
  <div id="iteration-four">
    <ul>
      <h2>Members</h2>
      <li v-for="member in dipsetMembers">
        <div class="members">
          <h6>{{ member.name }} a.k.a {{ member.aka }}</h6>
          <ul>
            <li v-for="album in member.albums">
              {{ album }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

  <div id="la-liga-teams">
    <h4>La liga Teams</h4>
    <ul>
      <li v-for="team in ligaTeams">
        {{ team }}
      </li>
    </ul>
  </div>
</template>

<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
const dipsetMembers = reactive([
  {
    name: "Cameron Giles",
    aka: "Cam'ron",
    albums: [
      "1998: Confessions of Fire",
      "2000: S.D.E",
      "2004: Come Home With Me",
      "2004: Purple Haze",
      "2006: Killa Season",
      "2009: Crime Pays",
    ],
  },
  {
    name: "Joseph Guillermo Jones",
    aka: "Jim Jones",
    albums: [
      "2004: On My Way To Church",
      "2005: Harlem: Diary of a Summer",
      "2006: Hustler's P.O.M.E",
      "2009: Pray IV Reign",
    ],
  },
  {
    name: "LaRon Louis James",
    aka: "Juelz Santana",
    albums: [
      "2003: From Me to U",
      "2005: What the Game's Been Missing!",
      "2009: Skull Gang",
    ],
  },
]);
const ligaTeams = reactive([
  "Barça",
  "Real Madrid",
  "Betis",
  "Valencia",
  "Atletico Madrid",
]);
</script>
<!-- CSS HERE -->
<style scoped>
#iteration-four {
  margin: 0 auto;
  width: 80%;
  position: relative;
  background-color: black;
  color: white;
  font-size: 1.4rem;
  text-align: left;
  padding: 1rem 0;
  font-family: sans-serif;
}
h6 {
  font-size: 1.5rem;
}
</style>
