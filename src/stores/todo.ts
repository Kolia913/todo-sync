import type { Todo } from "@/API";
import { createTodo, deleteTodo, updateTodo } from "@/graphql/mutations";
import { getTodos } from "@/graphql/queries";
import {
  onCreateTodo,
  onDeleteTodo,
  onUpdateTodo,
} from "@/graphql/subscriptions";
import { client } from "@/lib/gql-client";
import { defineStore } from "pinia";
import type { Subscription } from "rxjs";
import { ref } from "vue";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref<(Todo | null)[]>([]);
  const todosCreateSub = ref<Subscription | null>(null);
  const todosUpdateSub = ref<Subscription | null>(null);
  const todosDeleteSub = ref<Subscription | null>(null);

  const fetchTodos = async () => {
    const res = await client.graphql({
      query: getTodos,
    });
    todos.value = res.data.getTodos || [];
  };

  const subscribeTodos = () => {
    const createSub = client
      .graphql({
        query: onCreateTodo,
      })
      .subscribe({
        next: ({ data }) => {
          todos.value = [...todos.value, data.onCreateTodo];
        },
        error: (error) => console.warn(error),
      });
    todosCreateSub.value = createSub;
    const updateSub = client
      .graphql({
        query: onUpdateTodo,
      })
      .subscribe({
        next: ({ data }) => {
          const elIndex = todos.value.findIndex(
            (i) => i?.id === data.onUpdateTodo.id
          );
          if (elIndex > -1) {
            const clone = [...todos.value];
            clone.splice(elIndex, 1, data.onUpdateTodo);
            todos.value = [...clone];
          }
        },
      });
    todosUpdateSub.value = updateSub;
    const deleteSub = client
      .graphql({
        query: onDeleteTodo,
      })
      .subscribe({
        next: ({ data }) => {
          todos.value = todos.value.filter(
            (i) => i?.id !== data.onDeleteTodo.id
          );
        },
      });
    todosDeleteSub.value = deleteSub;
  };

  const unsubscribeTodos = () => {
    todosCreateSub.value?.unsubscribe();
    todosUpdateSub.value?.unsubscribe();
    todosDeleteSub.value?.unsubscribe();
  };

  const addTodo = async (
    payload: Pick<Todo, "title" | "description">
  ): Promise<Todo> => {
    const newTodo = await client.graphql({
      query: createTodo,
      variables: {
        title: payload.title,
        completed: false,
        description: payload.description,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
    return newTodo.data.createTodo;
  };

  const editTodo = async (payload: Omit<Todo, "__typename">): Promise<Todo> => {
    const updatedTodo = await client.graphql({
      query: updateTodo,
      variables: {
        completed: payload.completed,
        description: payload.description || "",
        id: payload.id,
        title: payload.title,
        updatedAt: new Date().toISOString(),
      },
    });
    return updatedTodo.data.updateTodo;
  };

  const removeTodo = async (id: string): Promise<Todo> => {
    const deletedTodo = await client.graphql({
      query: deleteTodo,
      variables: {
        id,
      },
    });
    return deletedTodo.data.deleteTodo;
  };

  return {
    todos,
    fetchTodos,
    subscribeTodos,
    unsubscribeTodos,
    addTodo,
    editTodo,
    removeTodo,
  };
});
