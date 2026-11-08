<script setup lang="ts">
import HomePageView from './views/HomePageView.vue'
import { onMounted } from 'vue'
import FooterView from './views/FooterView.vue'
import ContainerView from './views/ContainerView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ExperienceView from './views/ExperienceView.vue'
onMounted(() => {})
</script>
<template>
  <div class="app-container">
    <HomePageView />
  </div>
  <div class="project-view-container">
    <ContainerView />
  </div>
  <ProjectsView></ProjectsView>
  <ExperienceView></ExperienceView>
  <FooterView></FooterView>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;700&display=swap');

.app-container {
  z-index: 100;
  min-height: 100vh;
}

.project-view-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  min-height: 100vh;
}
</style>
