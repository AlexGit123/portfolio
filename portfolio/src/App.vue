<script setup>
import { RouterLink } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <!-- nav -->
  <div class="nav-color flex justify-center sticky top-0 text-black">
    <nav class="flex items-center justify-between">
      <RouterLink to="/" class="p-5">
        <a href="#">
          <button class="button-color text-black rounded-full px-4 py-2 mt-4">
            Home
          </button>
        </a>
      </RouterLink>
      <RouterLink to="/about" class="p-5">
        <a href="#">
          <button class="button-color text-black rounded-full px-4 py-2 mt-4">
            About
          </button>
        </a>
      </RouterLink>
      <RouterLink to="/projects" class="p-5">
        <a href="#">
          <button class="button-color text-black rounded-full px-4 py-2 mt-4">
            Projects
          </button>
        </a>
      </RouterLink>
    </nav>
  </div>
  <!-- web body -->
  <HomeView />
</template>
<style scoped>
.nav-color {
  background-color: #29274C;
}

.button-color {
  background-color: #7fbdec;

}
</style>

