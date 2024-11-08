<script>
import RandText from '../components/RandText.vue'

export default {
  components: {
    RandText,
  },
  data() {
    return {
      name: "Hi, I'm Alex",
      welcomeMessage:
        "Recent HBO-ICT international graduate at HZ University of Applied Sciences. I'm a Software Engineer with a passion for building web applications. Let's work.",
      subTitle: "Full-Stack Software Engineer"
    };
  },
};
</script>

<template>
  <!-- <div class="flex flex-wrap"> -->
  <div class="">
    <div class="grid grid-cols-2 gap-2">
      <!-- Left side content -->
      <div class="pl-20">
        <div class="flex justify-center items-center w-72 h-72">
          <div class="w-64 h-64 rounded-full color1">
            <div class="flex justify-center items-center py-2">
              <img src="@/assets/me.jpg" class="w-60 h-60 rounded-full">
            </div>
          </div>
        </div>
      </div>
      <!-- Right side content -->
      <div>
        <div class="">
          <p class="font text-5xl pt-5 font-bold mb-2">
            <RandText dynamicElementID="text1" :textToAnimate="name" />
          </p>
          <!-- <p class="font pt-10">Software Engineer</p> -->

          <p class="font text-base p-5 ">{{ this.welcomeMessage }}</p>
        </div>

        <!-- icons -->
        <div class="pt-10 pl-5 flex space-between">
          <a href="https://github.com/AlexGit123" class=" icon-container">
            <img class="w-16 h-16 icon" src="@/assets/github1.svg">
          </a>
          <a href="#" class="pl-5 icon-container">
            <img class="w-16 h-16 icon" src="@/assets/linkedin.svg">
          </a>
          <a href="#" class="pl-5 icon-container">
            <img class="w-16 h-16 icon" src="@/assets/download.png">
          </a>
        </div>
      </div>
    </div>
  </div>
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