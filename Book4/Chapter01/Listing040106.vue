<script>
export default {
  data() {
    return {
      sheepCount: 0,
    };
  },
  methods: {
    countASheep() {
      this.sheepCount++;
    },
  },
};
</script>

<template>
  <h1>Sheep Counting App</h1>
  <h2>Current Count: {{ sheepCount }}</h2>
  <button @click="countASheep">Count a Sheep</button>
</template>
