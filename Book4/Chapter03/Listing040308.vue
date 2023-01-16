<script setup>
const myParentObject = { fruit: 'apple', color: 'red' };
const myChildObject = Object.create(myParentObject);
myChildObject.vegetable = 'asparagus';
</script>
<template>
  <div v-for="prop in myChildObject">{{ prop }}</div>
</template>
