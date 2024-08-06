<script>
import ProjectsView from '@/views/ProjectsView.vue';
import AboutCardsView from '@/views/AboutCardsView.vue'; // rename AboutCardComponent
import HomePageView from '@/views/HomePageView.vue';
import RandText from '@/components/RandText.vue'

export default {
  components: {
    RandText,
    AboutCardsView,
    ProjectsView,
    HomePageView
  },
  data() {
    return {
      name: "Hi, I'm Alex Doerfer",
      welcomeMessage:
        "I'm a graduate student and Full-Stack Software Engineer with a passion for building web applications. Let's work.",
      subTitle: "Full-Stack Software Engineer"
    };
  },
};
</script>

<template>
  <div class="background grid grid-cols-1 min-h-screen">
    <HomePageView />
  </div>

  <div class="background grid grid-cols-2 gap-8 min-h-screen pt-32">
    <!-- Left side content -->
    <div class="pl-40">
      <div class="flex justify-center items-center w-72 h-72 rounded-full color2">
        <div class="w-64 h-64 rounded-full color1">
          <div class="flex justify-center items-center py-2">
            <img src="@/assets/me.jpg" class="w-60 h-60 rounded-full">
          </div>
        </div>
      </div>
    </div>
    <!-- Right side content -->
    <div>
      <div class="pt-10">
        <h1 class="pt-5 text-6xl font-bold mb-2">
          <RandText dynamicElementID="text1" :textToAnimate="name" />
        </h1>
        <p class="pb-10">Full-Stack Software Engineer</p>

        <p>{{ this.welcomeMessage }}</p>
      </div>

      <!-- icons -->
      <div class="pt-20 flex space-between">
        <a href="#" class="icon-container">
          <img class="w-24 h-24 icon" src="@/assets/github.png">
        </a>
        <a href="#" class="pl-5 icon-container">
          <img class="w-24 h-24 icon" src="@/assets/linkedin.png">
        </a>
        <a href="#" class="pl-5 icon-container">
          <img class="w-24 h-24 icon" src="@/assets/download.png">
        </a>
      </div>
    </div>
  </div>

  <!-- second page -->
  <div>
    <ProjectsView />
  </div>

  <!-- third page -->
  <AboutCardsView />
</template>

<footer></footer>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');


.color1 {
  background-color: #031824;
  /* background-color: #0074B7; */
}

.color2 {
  background-color: #ffffff;
  /* background-color: #0074B7; */
}

.icon {
  transition: transform 0.3s ease-in-out
}

.icon-container:hover .icon {
  transform: scale(1.2)
}
</style>