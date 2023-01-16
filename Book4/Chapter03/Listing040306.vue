<script setup>
function getTime() {
  let d = new Date();
  return new Date(d).getHours();
}
</script>
<template>
  {{ getTime() }}
  <div v-if="getTime() < 12">Good Morning</div>
  <div v-else-if="getTime() === 17">Happy Hour!</div>
  <div v-else-if="getTime() < 19">Good Afternoon</div>
  <div v-else-if="getTime() < 7">Good Evening</div>
  <div v-else>Good Night</div>
</template>
