<script setup>
import { ref, computed } from 'vue';
const repos = ref([]);
const loading = ref(false);
const error = ref(null);
function fetchRepos() {
  loading.value = true;
  error.value = null;
  fetch('https://api.github.com/users/vuejs/repos?per_page=100')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      repos.value = data;
      loading.value = false;
    })
    .catch((e) => {
      error.value = e;
      loading.value = false;
    });
}

const repoStats = computed(() => {
  return {
    repoCount: repos.value.length,
    stargazers: repos.value.reduce((total, repo) => {
      return total + repo.stargazers_count;
    }, 0),
  };
});
</script>
<template>
  <div>
    <h1>Vue.js Repositories</h1>
    <button @click="fetchRepos">
      {{ loading ? 'Loading...' : 'Fetch Repos' }}
    </button>
    <p v-if="error">
      {{ error.message }}
    </p>
    <p>
      Showing {{ repoStats.repoCount }} repositories with a total of
      {{ repoStats.stargazers }} stars.
    </p>
    <ul>
      <li v-for="repo in repos" :key="repo.name">
        <a :href="repo.html_url">{{ repo.name }}</a>
        <p>{{ repo.description }}</p>
      </li>
    </ul>
  </div>
</template>
