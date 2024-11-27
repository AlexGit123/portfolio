<script setup>
import HomePageView from './views/HomePageView.vue'
import NavBar from './components/NavBar.vue'

</script>
<template>
  <div class="background nav-color flex justify-left stick text-black">
    <NavBar/>
  </div>
  <HomePageView />
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;700&display=swap');

.title {
  font-size: 600%;
}

.font {
  font-family: 'Geneva', sans-serif;
}

.nav-color {
  background-color: #242729;
}
</style>