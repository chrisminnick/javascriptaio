<script setup>
function makeError() {
  throw new Error('oops');
}
</script>

<template>
  <div>
    <h1>Error on Demand</h1>

    <button @click="makeError">Make Error</button>
  </div>
</template>
