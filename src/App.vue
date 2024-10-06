<script setup lang="ts">
import { client } from "@/lib/gql-client";
import { getTodos } from "./graphql/queries";
import { onMounted } from "vue";

onMounted(() => {
  client.graphql({
    query: getTodos,
  });
});
</script>

<template>
  <main>
    <p>Hello World!</p>
  </main>
</template>
