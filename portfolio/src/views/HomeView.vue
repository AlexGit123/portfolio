<script>
import ProjectsView from '@/views/ProjectsView.vue';
import AboutView from '@/views/AboutView.vue';
import RandText from '@/components/RandText.vue'

export default {
  components: {
    RandText,
    AboutView,
    ProjectsView
  },
  data() {
    return {
      name: "Hi, I'm Alex Doerfer",
      welcomeMessage:
        "Hey, welcome to my portfolio. I'm a Full-Stack Software Engineer and fourth-year student at HZ University of Applied Sciences in Middelburg, Netherlands.",
      subTitle: "Full-Stack Software Engineer"
    };
  },
};
</script>

<template>
  <div class="bg-gray-100 grid grid-cols-2 gap-8 min-h-screen">
    <!-- Left side content -->
    <div class="pl-10 pt-10">
      <img src="@/assets/me.jpg" class="w-52 h-52 rounded-full">

      <h1 class="pt-5 text-4xl font-bold mb-2">
        <RandText dynamicElementID="text1" :textToAnimate="name" />
      </h1>

      <h2 class="pt-5 text-xl mb-2">
        <RandText dynamicElementID="text2" :textToAnimate="subTitle" />
      </h2>

      <p class="text-m max-w-md pt-5">
        <!-- TODO add fixed width to prevent 01s spread -->
        <RandText dynamicElementID="text3" :textToAnimate="welcomeMessage" />
      </p>
      <!-- icons -->
      <div class="pt-20 flex space-between">
        <a href="#" class="">
          <img class="w-16 h-16" src="@/assets/github.png">
        </a>
        <a href="#" class="pl-5">
          <img class="w-16 h-16" src="@/assets/linkedin.png">
        </a>
        <a href="#" class="pl-5">
          <img class="w-16 h-16" src="@/assets/download.png">
        </a>
      </div>
    </div>

    <!-- Right side content -->
    <div>
      <!-- test right -->
      <ProjectsView />
    </div>
  </div>

  <!-- components -->
  <!-- TODO - add search, spotify API, show fav albums etc-->
  <AboutView />
</template>

<style scoped>
.background {
  background-color: #534B62;
}
</style>