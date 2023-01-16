<script setup>
import { reactive } from 'vue';

const state = reactive({
  sectionTitle: 'Using JavaScript in Templates',
  authorName: 'Chris Minnick',
});
</script>
<template>
  <h1>{{ state.sectionTitle }}</h1>
  <h3>By {{ state.authorName }}</h3>
</template>
