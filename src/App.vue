<script setup lang="ts">
import HomePageView from './views/HomePageView.vue'
import NavBar from './components/NavBar.vue'
import { onMounted } from 'vue'
import FooterView from './views/FooterView.vue'

// function randomWindowPosition(min: number, max: number): number {
//   return Math.random() * (max - min) + min
// }

// function getBlobs(): void {
//   const blobs = Array.from(document.getElementsByClassName('blob') as HTMLCollectionOf<HTMLElement>)

//   for (let blob of blobs) {
//     let posX = randomWindowPosition(0, window.innerWidth - 90)
//     let posY = randomWindowPosition(0, window.innerHeight - 90)

//     blob.style.top = `${posX}px`
//     blob.style.left = `${posY}px`
//   }
// }
onMounted(() => {})
</script>
<template>
  <div class="app-container">
         <div class="blob"></div>
         <div class="blob1"></div>
         <div class="blob2"></div>
         <div class="blob3"></div>

    <div class="main-content">
      <HomePageView />
    </div>

    <div class="sidebar-container">
      <NavBar />
    </div>
  </div>
  <FooterView></FooterView>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;700&display=swap');

.app-container {
  display: flex;
  min-height: 100vh;
  gap: 1rem;
  padding: 1rem;
  background-color: rgb(22, 22, 31);
}

.main-content {
  flex: 1;
  min-width: 0;
  padding-right: 1rem;
  z-index: 100;
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
}

.font {
  font-family: 'Geneva', sans-serif;
}

.title {
  font-size: 600%;
}

@media (max-width: 768px) {
  .app-container {
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .main-content {
    padding-right: 0.5rem;
  }

  .sidebar-container {
    width: 60px;
  }
}

.blob {
  width: 1200px;
  height: 2000px;
  background: radial-gradient(circle at 30% 30%, #ec9396, #c70e39);
  mix-blend-mode: screen;
  opacity: 60%;
  filter: drop-shadow(0 0 80px #f6416c);
  animation: blob-morph 18s ease-in-out infinite alternate;
  position: fixed;
  z-index: 0;
  top: 300px;
  left:-90px;
}

.blob1 {
  width: 800px;
  height: 800px;
  background: radial-gradient(circle at 30% 30%, #ec9396, #c70e39);
  mix-blend-mode: screen;
  opacity: 60%;
  filter: drop-shadow(0 0 80px #f6416c);
  animation: blob-morph 18s ease-in-out infinite alternate;
  position: fixed;
  z-index: 0;
  top: -500px;
  left: -90px;
}

.blob2 {
  width: 800px;
  height: 800px;
  background: radial-gradient(circle at 30% 30%, #ec9396, #c70e39);
  mix-blend-mode: screen;
  opacity: 60%;
  filter: drop-shadow(0 0 80px #f6416c);
  animation: blob-morph 18s ease-in-out infinite alternate;
  position: fixed;
  z-index: 0;
  top: -500px;
  left: 500px;
}

.blob3 {
  width: 800px;
  height: 800px;
  background: radial-gradient(circle at 30% 30%, #ec9396, #c70e39);
  mix-blend-mode: screen;
  opacity: 60%;
  filter: drop-shadow(0 0 80px #f6416c);
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
</style>
