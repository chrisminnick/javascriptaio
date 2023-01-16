<script setup>
import { ref } from 'vue';
const rainbowColors = ref([
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
]);
const backgroundColor = ref('');
</script>
<template>
  <input
    type="radio"
    :id="color"
    v-for="color in rainbowColors"
    :value="color"
    v-model="backgroundColor"
  />
  <div class="swatch"></div>
  <h1>My favorite color is {{ backgroundColor }}</h1>
</template>
<style scoped>
.swatch {
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: v-bind(backgroundColor);
}
</style>
