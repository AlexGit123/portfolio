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
  <div class="grid grid-cols-2 gap-2">
    <!-- Left side content -->
    <div class="pl-20">
      <div>
        <p class="font text-4xl pt-5 font-bold mb-2">
          <RandText dynamicElementID="text1" :textToAnimate="name" />
        </p>
        <p class="font text-base pt-4">Recent HBO-ICT international graduate at HZ UoAS.
          <br />
          I'm a Software Engineer with a passion for building web applications, crafting designs, and learning
          new technologies. 
        </p>
      </div>
      <!-- icons -->
      <div class="pt-10 pl-5 flex space-between">
        <a href="https://github.com/AlexGit123" class=" icon-container text-center text-sm">
          <img class="icon" src="@/assets/github1.svg">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/alex-doerfer-a004611b7/" class="pl-5 icon-container text-center text-sm">
          <img class="icon" src="@/assets/linkedin.svg">
          LinkedIN
        </a>
        <a href="#" class="pl-5 icon-container text-center text-sm">
          <img class="icon" src="@/assets/download.svg">
          CV
        </a>
      </div>
    </div>
    <!-- Right side content -->
    <div class="pl-20">
      <div class="flex justify-center items-center w-72 h-72">
        <div class="w-64 h-64 rounded-full color1">
          <div class="flex justify-center items-center py-2">
            <img src="@/assets/me.jpg" class="w-60 h-60 rounded-full">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


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
  transition: transform 0.3s ease-in-out;
  width: auto;
  height: 50px;

}

.icon-container:hover .icon {
  transform: scale(1.2)
}
</style>