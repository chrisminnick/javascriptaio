<script setup>
import ChildComponent from './components/ChildComponent.vue';
</script>

<template>
  <h1>First-level headers should have borders.</h1>
  <ChildComponent />
  <h1>I win.</h1>
</template>

<style>
h1 {
  border: 1px solid black;
  margin: 10px;
  padding: 4px;
}
</style>
