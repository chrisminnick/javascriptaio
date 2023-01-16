<script setup>
import { ref } from 'vue';
const favoriteFood = ref('pizza');
</script>
<template>
  <div>
    <input type="text" v-model="favoriteFood" />
    <p>My favorite food is {{ favoriteFood }}</p>
  </div>
</template>
