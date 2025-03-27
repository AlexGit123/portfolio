<script>
export default {
  components: {},
  data() {
    return {
      name: "I'm Alex",
      welcomeMessage:
        "Recent HBO-ICT international graduate at HZ University of Applied Sciences. I'm a Software Engineer with a passion for building web applications. Let's work.",
      subTitle: 'Full-Stack Software Engineer'
    }
  }
}
</script>
<template>
  <div class="items-center pl-44 pr-44 pb-32">
    <!-- top content -->
    <div class="flex flex-col items-center justify-center pl-10 text-white">
      <div class="w-full">
        <div class="flex items-center">
          <div>
            <p class="font-extrabold text-8xl mb-2">Hi,</p>
          </div>
          <div class="flex ml-auto">
            <div class="border rounded-full w-24 h-24 flex items-center justify-center bg-blue-300">
              <img src="@/assets/me.png" class="w-20 h-20 rounded-full" />
            </div>
          </div>
        </div>
        <p>I'm Alex</p>
        <div class="text-2xl mt-4 text-gray-500">
          <p>
            I'm a Software Engineer with a passion for building web applications, crafting designs,
            and learning new technologies. I'm most familiar with Vue, Django, Laravel, JavaScript,
            Python, and PHP.
          </p>
        </div>
      </div>
    </div>
    <!-- bottom content -->
    <div class="flex flex-col items-center justify-center pt-20">
      <div class="flex text-center space-x-5">
        <a href="https://github.com/AlexGit123" class="icon-container text-sm text-gray-500">
          <img class="icon" src="@/assets/github1.svg" alt="GitHub" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/alex-doerfer-a004611b7/"
          class="icon-container text-sm text-gray-500"
        >
          <img class="icon" src="@/assets/linkedin.svg" alt="LinkedIn" />
          LinkedIn
        </a>
        <a href="#" class="icon-container text-sm text-gray-500">
          <img class="icon" src="@/assets/download.svg" alt="CV" />
          CV
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.icon {
  transition: transform 0.3s ease-in-out;
  width: auto;
  height: 50px;
}

.icon-container:hover .icon {
  transform: scale(1.2);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    /* transform: translateY(1000px); */
  }

  100% {
    opacity: 1;
    /* transform: translateY(0); */
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in;
}
</style>
