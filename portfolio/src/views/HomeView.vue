<script setup>
import ProjectsView from '@/views/ProjectsView.vue';
import AboutView from '@/views/AboutView.vue';
</script>

<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center">
    <h1 class="text-4xl font-bold mb-2">Alex Doerfer</h1>
    <img src="@/assets/me.jpg" class="w-52 h-52 rounded-full p-10">
    <p class="text-lg mb-2">Full-Stack Software Engineer</p>
    <p class="text-sm max-w-md">Hey, welcome to my portfolio. I'm a Full-Stack Software Engineer and fourth-year student
      at HZ University of Applied Sciences in Middelburg, Netherlands.</p>
  </div>

  <AboutView />
  <ProjectsView />
</template>

<style scoped>
.background {
  background-color: #534B62;
}
</style>