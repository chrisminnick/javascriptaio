<script setup>
import { ref } from 'vue';
const favoriteFood = ref('pizza');
function updateFavoriteFood(event) {
  favoriteFood.value = event.target.value;
}
</script>
<template>
  <div>
    <input type="text" :value="favoriteFood" @input="updateFavoriteFood" />
    <p>My favorite food is {{ favoriteFood }}</p>
  </div>
</template>
