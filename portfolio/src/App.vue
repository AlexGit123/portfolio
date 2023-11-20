<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-screen">
    <!-- Navbar -->
    <div class="bg-gray-800 text-white w-1/5 flex flex-col items-center justify-center h-full">
      <nav class="my-4">
        <RouterLink to="/" class="text-xl font-bold my-2 block">Home</RouterLink>
        <RouterLink to="/about" class="text-xl font-bold my-2 block">About</RouterLink>
      </nav>
    </div>

    <!-- Main Content (RouterView) -->
    <div class="flex-grow p-8">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
