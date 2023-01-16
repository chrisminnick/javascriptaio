<script setup>
import { reactive, onMounted } from 'vue';

const state = reactive({
  todos: [],
});

onMounted(async () => {
  try {
    let response = await fetch('http://localhost:3000/todos', {
      mode: 'cors',
    });
    const todos = await response.json();

    state.todos = todos;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div>
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in state.todos">
        <input type="checkbox" v-model="todo.completed" />
        <span v-text="todo.description"></span>
      </li>
    </ul>
  </div>
</template>
