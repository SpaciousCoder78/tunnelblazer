<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <h1 id="banner">The Ho Chi Minh Trail</h1>
    <form >
      <h2>Login</h2>
      <label>User ID:  </label>
      <input>
      <br><br>
      <label>Password: </label>
      <input>
      <br><br>
      <button type="button">Connect</button>
    </form>
    
  </div>
</template>

<style scoped>
#banner{
  padding:10%;
  font-family:Dancing Script;
}
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
