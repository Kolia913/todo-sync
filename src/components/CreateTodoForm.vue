<template>
  <div class="relative">
    <button
      @click="isModalOpen = true"
      class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mb-4"
    >
      Create New Todo
    </button>

    <transition name="slide">
      <aside
        v-if="isModalOpen"
        class="fixed inset-y-0 right-0 bg-white w-80 shadow-lg p-6 z-10"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Create New Todo</h2>
          <button
            @click="isModalOpen = false"
            class="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        <form @submit.prevent="createTodo" class="space-y-4">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700"
              >Title</label
            >
            <input
              v-model="newTodo.title"
              id="title"
              type="text"
              class="border border-gray-300 p-2 rounded-md w-full"
              placeholder="Enter todo title (min 3 symbols)"
              required
            />
          </div>
          <div>
            <label
              for="description"
              class="block text-sm font-medium text-gray-700"
              >Description</label
            >
            <textarea
              v-model="newTodo.description"
              id="description"
              class="border border-gray-300 p-2 rounded-md w-full"
              placeholder="Enter todo description"
            />
          </div>
          <button
            type="submit"
            class="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 w-full"
          >
            Create Todo
          </button>
        </form>
      </aside>
    </transition>

    <!-- Background overlay when modal is open -->
    <transition name="fade">
      <div
        v-if="isModalOpen"
        @click="isModalOpen = false"
        class="fixed inset-0 bg-black bg-opacity-50"
      ></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodosStore } from "@/stores/todo";

const isModalOpen = ref<boolean>(false);
const todosStore = useTodosStore();

const newTodo = ref({
  title: "",
  description: "",
  completed: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

function createTodo() {
  if (newTodo.value.title && newTodo.value.title.trim().length > 2) {
    newTodo.value.createdAt = new Date().toISOString();
    newTodo.value.updatedAt = new Date().toISOString();
    todosStore.addTodo({
      ...newTodo.value,
    });
    isModalOpen.value = false;
    newTodo.value.title = "";
    newTodo.value.description = "";
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

/* Transition for background overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
