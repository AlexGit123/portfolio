<template>
  <div class="grid grid-cols-2 grid-rows-3 gap-4 min-h-dvh text-white p-10">
    <div class="col-start">
      <h1 class="title sub-font">DES</h1>
    </div>
    <div class="flex justify-center">
      <div class="col-start-2 row-start-1">
        <NavBar></NavBar>
      </div>
    </div>

    <div class="col-start row-start-2 flex items-center">
      <div class="">
        <p class="text-3xl min-h-full font opacity-80 leading-10">
          Designing and developing websites, software applications, and AI solutions for businesses and
          individuals.
        </p>
      </div>
    </div>
    <div class="col-start-2 row-start-2">
      <!-- <svg
        width="442"
        height="288"
        viewBox="0 0 442 288"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="221" cy="40" r="40" fill="#D9D9D9" />
        <circle cx="310" cy="100" r="40" fill="#D9D9D9" />
        <circle cx="313" cy="195" r="40" fill="#D9D9D9" />
        <circle cx="221" cy="144" r="40" fill="#D9D9D9" />
        <circle cx="129" cy="100" r="40" fill="#D9D9D9" />
        <circle cx="129" cy="198" r="40" fill="#D9D9D9" />
        <circle cx="402" cy="144" r="40" fill="#D9D9D9" />
        <circle cx="221" cy="248" r="40" fill="#D9D9D9" />
        <circle cx="40" cy="144" r="40" fill="#D9D9D9" />
      </svg> -->
    </div>
    <div class="col-start row-start-3 sub-font text-xl opacity-70 flex flex-col justify-end">
      <p>Working Globally</p>
      <p>
        Located in the Netherlands -
        <span class="text-orange-400">
          {{ Date.now().toLocaleString('en') }}
        </span>
      </p>
    </div>
    <div class="col-start-2 row-start-3"></div>

    <div class="col-span-2 row-start-4 w-full flex justify-center">
      <button
        class="h-10 text-white border-orange-400 border-2 px-16 py-2 rounded-lg hover:bg-orange-400 hover:text-black hover:px-20 transition duration-300 ease-in-out"
      >
        <a class="text-xl sub-font"> PROJECTS </a>
      </button>
    </div>
  </div>
  <div class="w-full h-full"></div>
</template>
<script lang="ts" setup>
import NavBar from '../components/NavBar.vue'
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geneva&display=swap');
.font {
  font-family: 'Ramabhadra', sans-serif;
}

.sub-font {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
