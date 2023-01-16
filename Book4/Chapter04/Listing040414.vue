<script setup>
import { ref, watch } from 'vue';
const searchTerm = ref('');
const searchResults = ref([]);
watch(searchTerm, async (newTerm) => {
  if (newTerm.length > 2) {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${newTerm}`
    );
    const data = await response.json();
    searchResults.value = data.items;
  }
});
</script>
<template>
  <div>
    <input type="text" v-model="searchTerm" />
    <ul>
      <li v-for="result in searchResults" :key="result.id">
        <a :href="result.html_url" target="_blank">{{ result.full_name }}</a>
      </li>
    </ul>
  </div>
</template>
