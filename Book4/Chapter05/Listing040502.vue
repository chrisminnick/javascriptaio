<script setup>
import { ref } from 'vue';
const userInput = ref('');

function shoutText() {
  alert(userInput.value.toUpperCase());
}
</script>

<template>
  <div>
    <textarea v-model="userInput" />
    <p>{{ userInput }}</p>
    <button @click="shoutText">Shout It</button>
  </div>
</template>
