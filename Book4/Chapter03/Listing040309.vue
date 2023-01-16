<script setup>
const myObject = { fruit: 'apple', color: 'red' };
</script>
<template>
  <div v-for="(value, name, index) in myObject">
    {{ name }}: {{ value }}: {{ index }}
  </div>
</template>
