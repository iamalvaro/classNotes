<script setup>
import { ref, reactive } from "vue";
let viewToogle = ref(false);
const activateToogle = () => {
  viewToogle.value = !viewToogle.value;
};
</script>

<template>
  <main>
    <button @click="activateToogle">Display Content</button>
    <div :class="viewToogle ? 'display' : 'hidden'">
      <h1>Sublime</h1>
      <img
        src="https://i.pinimg.com/originals/15/a1/eb/15a1eb529a76355837a05baced869af4.gif"
        alt="Sublime Logo"
      />
      <p>
        Sublime was an American reggae rock and ska punk band from Long Beach,
        California, formed in 1988.[1] The band's line-up, consistent throughout
        its duration, consisted of Bradley Nowell (vocals and guitar), Eric
        Wilson (bass), and Bud Gaugh (drums). Lou Dog, Nowell's dalmatian, was
        the mascot of the band. Nowell died of a heroin overdose in 1996,
        resulting in the band's breakup. In 1997, songs such as "What I Got",
        "Santeria", "Wrong Way", "Doin' Time", and "April 29, 1992 (Miami)" were
        released to U.S. radio.
      </p>
    </div>
  </main>
</template>
<style scoped>
.hidden {
  display: none;
}
.display {
  display: inline-block;
}
</style>
