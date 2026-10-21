<template>
  <div class="grid grid-cols-2 grid-rows-3 gap-4 min-h-dvh text-white p-10">
    <div class="col-start">
      <h1 class="title tracking-wider sub-font header">des</h1>
    </div>
    <div class="flex justify-center">
      <div class="col-start-2 row-start-1">
        <NavBar></NavBar>
      </div>
    </div>

    <div class="col-start row-start-2 flex items-center">
      <div class="">
        <p class="text-3xl min-h-full font opacity-80 leading-10">
          Designing and developing websites, software applications, and AI solutions for businesses
          and individuals.
        </p>
      </div>
    </div>
    <div class="col-start row-start-3 sub-font text-xl opacity-70 flex flex-col justify-end">
      <p>
        Located in the Netherlands -
        <span class="text-orange-400">
          {{ currentTime }}
        </span>
      </p>
    </div>

    <div class="col-span-2 row-start-4 w-full flex justify-center">
      <button
        class="h-10 text-white border-orange-400 border-2 px-16 py-2 rounded-lg hover:bg-orange-400 hover:text-black hover:px-20 transition duration-300 ease-in-out"
      >
        <a class="text-xl sub-font"> projects </a>
      </button>
    </div>
  </div>
  <div class="w-full h-full"></div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const currentTime = ref(new Date().toLocaleTimeString('en-GB', { hour12: false }))

window.setInterval(() => {
  currentTime.value = new Date().toLocaleTimeString('en-GB', { hour12: false })
}, 1000)
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geneva&display=swap');
.font {
  font-family: 'Ramabhadra', sans-serif;
}

.sub-font {
  font-family: 'Bebas Neue', sans-serif;
}

.header {
  font-size: clamp(4.5rem, 13vw, 11rem);
  line-height: 1;
  opacity: 0.8;
}
</style>
