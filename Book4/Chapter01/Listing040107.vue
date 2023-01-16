<script setup>
import { reactive } from 'vue';

const state = reactive({ sheepCount: 0 });

function countASheep() {
  state.sheepCount++;
}
</script>

<template>
  <h1>Sheep Counting App</h1>
  <h2>Current Count: {{ state.sheepCount }}</h2>
  <button @click="countASheep">Count a Sheep</button>
</template>
