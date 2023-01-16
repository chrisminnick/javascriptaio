<script setup>
defineProps(['firstName', 'lastName']);
</script>
<template>
  <div>
    <h1>Congratulations {{ firstName }} {{ lastName }}!</h1>
    <h3>
      You've successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
  </div>
</template>
