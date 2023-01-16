<script setup>
const items = [
  {
    name: 'apple',
    price: 1.0,
  },
  {
    name: 'asparagus',
    price: 1.99,
  },
];
</script>
<template>
  <div v-for="item in items">{{ item.name }}: {{ item.price }}</div>
</template>
