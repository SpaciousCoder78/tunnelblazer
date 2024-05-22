<script setup>
import HelloWorld from './components/HelloWorld.vue'
import miniRouter from './miniRouter';
import setup from './components/setup.vue';
import login from './components/login.vue';
</script>

<template>
  <div>
    <h1 id="banner">The Ho Chi Minh Trail</h1>
    <h3>Powered by <img src="/src/assets/OpenVPN_logo.svg" width="200" height="auto" loading="lazy"></h3>
    <login v-if="!activateSetup"/>
    <setup v-else/>
    <!--Footer-->
    <div>
      <footer>
        <p>Built with <img src="/src/assets/Vuejs.svg" width="100" height="auto" loading="lazy"> </p>
        <p>Designed and Developed by SpaciousCoder78</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
