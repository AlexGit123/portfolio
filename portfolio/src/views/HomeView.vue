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
      name: "Alex Doerfer",
      welcomeMessage:
        "Hey, welcome to my portfolio. I'm a Full-Stack Software Engineer and fourth-year student at HZ University of Applied Sciences in Middelburg, Netherlands.",
    };
  },
};
</script>

<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center">
    <span>
      <h1 class="text-4xl font-bold mb-2">
        <RandText :textToAnimate="name" />
      </h1>
    </span>

    <img src="@/assets/me.jpg" class="w-96 h-96 rounded-full p-10">
    <p class="text-lg mb-2">Full-Stack Software Engineer</p>
    <span>
      <p class="text-sm max-w-md">
        <!-- <RandText :textToAnimate="welcomeMessage" /> -->
        {{ welcomeMessage }}
      </p>
    </span>
  </div>

  <AboutView />
  <ProjectsView />
</template>

<style scoped>
.background {
  background-color: #534B62;
}
</style>