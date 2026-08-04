<script setup lang="ts">
import HomePageView from './views/HomePageView.vue'
// import NavBar from './components/NavBar.vue'
import { onMounted } from 'vue'
import FooterView from './views/FooterView.vue'
import ProjectsView from './views/ProjectsView.vue'
onMounted(() => {})
</script>
<template>
  <div class="app-container">
    <HomePageView />
  </div>
  <div class="project-view-container">
    <ProjectsView />
  </div>
  <!-- <ProjectsView class="app-container" /> -->
  <FooterView></FooterView>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;700&display=swap');

.app-container {
  /* display: flex;
  min-height: 100vh;
  gap: 1rem;
  padding: 1rem; */
  z-index:100;
  min-height: 100vh;
  /* background: url(@/assets/bg.jpeg); */
}

.project-view-container {
  /* display: flex;
  min-height: 100vh;
  gap: 1rem;
  padding: 1rem; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  min-height: 100vh;
}

/* .main-content {
  padding-right: 1rem;
  padding-left: 50px;
}

.sidebar-container {
  position: sticky;
  top: 50vh;
  transform: translateY(-50%);
  width: 80px;
  height: fit-content;
  z-index: 100;
  flex-shrink: 0;
  align-self: flex-start;
} */

.font {
  font-family: 'Geneva', sans-serif;
}

.title {
  font-size: 600%;
}

.blob {
  width: 1200px;
  height: 2000px;
  background: radial-gradient(circle at 30% 30%, #4381f3, #1803ff);
  mix-blend-mode: screen;
  opacity: 60%;
  filter: drop-shadow(0 0 80px rgba(82, 129, 211, 0.15));
  animation: blob-morph 18s ease-in-out infinite alternate;
  position: fixed;
  z-index: 0;
  top: 300px;
  left: -90px;
}

.blob1 {
  width: 800px;
  height: 800px;
  background: radial-gradient(circle at 30% 30%, #4381f3, #1803ff);
  mix-blend-mode: screen;
  opacity: 60%;
  filter: drop-shadow(0 0 80px rgba(55, 4, 243, 0.15));
  animation: blob-morph 18s ease-in-out infinite alternate;
  position: fixed;
  z-index: 0;
  top: -500px;
  left: -90px;
}

/* .blob2 {
  width: 800px;
  height: 800px;
  background: radial-gradient(circle at 30% 30%, #4381f3, #1803ff);
  mix-blend-mode: screen;
  opacity: 60%;
  filter: drop-shadow(0 0 80px rgba(55, 4, 243, 0.15));
  animation: blob-morph 18s ease-in-out infinite alternate;
  position: fixed;
  z-index: 0;
  top: -500px;
  left: 500px;
} */

.blob3 {
  width: 800px;
  height: 800px;
  background: radial-gradient(circle at 30% 30%, #4381f3, #1803ff);
  mix-blend-mode: screen;
  opacity: 60%;
  filter: drop-shadow(0 0 80px rgba(55, 4, 243, 0.15));
  animation: blob-morph 18s ease-in-out infinite alternate;
  position: fixed;
  z-index: 0;
  top: -500px;
  left: 900px;
}

@keyframes blob-morph {
  0% {
    border-radius: 55% 45% 60% 40% / 60% 40% 55% 45%;
  }
  25% {
    border-radius: 65% 35% 55% 45% / 45% 65% 50% 40%;
  }
  50% {
    border-radius: 50% 60% 45% 55% / 55% 50% 65% 40%;
  }
  75% {
    border-radius: 60% 40% 50% 50% / 50% 60% 45% 55%;
  }
  100% {
    border-radius: 55% 45% 60% 40% / 60% 40% 55% 45%;
  }
}

.main-content__ani {
  animation: slideInFromRight 0.3s ease-out;
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
