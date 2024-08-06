<script setup>
// import { RouterLink } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <div class="background nav-color flex justify-left sticky top-0 text-black">
    <nav class="flex items-center justify-between">
      <RouterLink to="/" class="p-5">
        <a href="#">
          <button class="text-white rounded-full px-4 py-2 mt-4">
            ALEX
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
  background-color: #242729;
}
</style>
