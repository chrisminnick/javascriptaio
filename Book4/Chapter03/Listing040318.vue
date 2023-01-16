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
  <div v-for="item in items">
    <span :class="$style.item">{{ item.name }}</span>
    : <span :class="$style.price">{{ item.price }}</span>
  </div>
</template>
<style module>
.item {
  font-weight: bold;
}
.price {
  font-style: italic;
}
</style>
