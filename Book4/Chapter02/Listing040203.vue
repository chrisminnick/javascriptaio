<script>
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      todos: [],
      newTodo: '',
    });
    function addTodo() {
      state.todos.push({
        title: state.newTodo,
        done: false,
      });
    }
    return {
      state,
      addTodo,
    };
  },
};
</script>

<template>
  <div>
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in state.todos">
        <input type="checkbox" v-model="todo.done" />
        <span v-text="todo.title"></span>
      </li>
    </ul>
    <input type="text" v-model="state.newTodo" />
    <button @click="addTodo">Add Todo</button>
  </div>
</template>
