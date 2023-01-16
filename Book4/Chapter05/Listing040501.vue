<script setup>
import { ref } from 'vue';
const userInput = ref('');
</script>

<template>
  <div>
    <textarea v-model="userInput" />
    <p>{{ userInput }}</p>
    <button @click="userInput = userInput.toUpperCase()">Shout It</button>
  </div>
</template>
