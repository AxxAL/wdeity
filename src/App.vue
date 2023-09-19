<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";

setInterval(() => {
  let temp = document.title.split("");
  const firstChar = temp[0];
  temp[0] = temp[temp.length];
  temp[temp.length] = firstChar;
  document.title = temp.join(" ");
}, 100);

</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
.link {
  font-family: "dearest";
  color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>