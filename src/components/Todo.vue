<template>
  <div class="bg-white shadow-md rounded-lg p-6 mb-4 flex flex-col space-y-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <input
          type="checkbox"
          class="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          v-model="todo.completed"
          @change="toggleCompletion"
        />
        <div>
          <span
            v-if="!isEditMode"
            :class="{ 'line-through text-gray-500': todo.completed }"
            class="text-lg font-semibold"
          >
            {{ todo.title }}
          </span>
          <input
            v-else
            v-model="todo.title"
            type="text"
            class="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
      </div>

      <div class="flex space-x-2">
        <button
          v-if="!isEditMode"
          @click="isEditMode = true"
          class="text-blue-500 hover:text-blue-700"
        >
          Edit
        </button>
        <button
          v-if="isEditMode"
          @click="saveEdit"
          class="text-green-500 hover:text-green-700"
        >
          Save
        </button>
        <button @click="deleteTodo" class="text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
    </div>

    <div class="flex flex-col space-y-2">
      <div>
        <p v-if="!isEditMode" class="text-sm text-gray-500">
          {{ todo.description }}
        </p>
        <textarea
          v-else
          v-model="todo.description"
          class="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>
    </div>
    <div class="">
      <p class="text-xs text-gray-500">
        Created at: {{ formatDate(todo.createdAt) }}
      </p>
      <p class="text-xs text-gray-500">
        Updated at: {{ formatDate(todo.updatedAt) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from "@/API";
import { useTodosStore } from "@/stores/todo";
import { ref } from "vue";
const props = defineProps<{ todo: Todo }>();

const isEditMode = ref<boolean>(false);

const todosStore = useTodosStore();

function saveEdit() {
  isEditMode.value = false;

  todosStore.editTodo({
    ...props.todo,
    updatedAt: new Date().toISOString(),
  });
}

function toggleCompletion() {
  todosStore.editTodo({
    ...props.todo,
    updatedAt: new Date().toISOString(),
  });
}

function deleteTodo() {
  todosStore.removeTodo(props.todo.id);
}

function formatDate(date: string | null | undefined): string {
  if (date === null || date === undefined) return "-";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return new Date(date).toLocaleDateString(undefined, options);
}
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
