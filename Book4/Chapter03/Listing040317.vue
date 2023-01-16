<script setup>
import ChildComponent from './components/ChildComponent.vue';
</script>

<template>
  <div id="#app">
    <h1>Welcome to my App</h1>
    <ChildComponent />
  </div>
</template>

<style>
h1 {
  border: 1px solid black;
  margin: 10px;
  padding: 4px;
}
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
</style>

<style scoped>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
