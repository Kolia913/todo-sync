<script setup lang="ts">
import { onMounted, computed, onBeforeUnmount } from "vue";
import { useTodosStore } from "./stores/todo";
import Todo from "./components/Todo.vue";
import CreateTodoForm from "./components/CreateTodoForm.vue";

const todosStore = useTodosStore();

const todos = computed(() => todosStore.todos);

onMounted(() => {
  todosStore.fetchTodos().then(() => {
    todosStore.subscribeTodos();
  });
});

onBeforeUnmount(() => {
  todosStore.unsubscribeTodos();
});
</script>

<template>
  <main>
    <div class="px-24 py-12 flex justify-center items-center flex-col w-full">
      <CreateTodoForm />
      <div class="pt-12 w-full">
        <Todo
          v-for="todo in todos.filter((i) => i !== null)"
          :key="todo?.id"
          :todo="todo"
        />
      </div>
    </div>
  </main>
</template>
