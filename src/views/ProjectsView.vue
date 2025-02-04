<template>
  <!-- grid -->
  <div class="w-full p-4 animate-fade-in text-white">
    <h1 class="text-4xl pl-10">Projects</h1>
    <div class="grid grid-cols-[auto_1fr_1fr_auto] gap-6">

      <!-- first col -->
      <div class="flex flex-col">
        <div class="flex pb-4 space-x-4 justify-center items-center h-full">
          <div class="relative group cursor-pointer">
            <!-- circle -->
            <div
              class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white inset-0 group-hover:bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute z-0"
              v-on:click="handleBackClick()"
            ></div>
            <!-- arrow -->
            <div
              class="w-10 h-10 flex items-center justify-center"
              v-on:click="handleBackClick()"
            >
              <img class="z-10" src="@/assets/arrow_back.svg" />
            </div>
          </div>
        </div>
      </div>

      <!-- second col -->
      <div class="pt-4">
        <p class="text-2xl">{{ getProjectById(selectedProjectId).title }}</p>
        <p class="mt-2 text-lg">{{ getProjectById(selectedProjectId).description }}</p>
      </div>

      <!-- third col -->
      <div class="pb-2 flex justify-center">
        <div>
          <ProjectCardComponent
            v-if="selectedProjectId"
            :key="selectedProjectId"
            :project="getProjectById(selectedProjectId)"
            class=""
          />
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex pb-4 space-x-4 justify-center items-center h-full">
          <div class="relative group cursor-pointer">
            <!-- circle -->
            <div
              class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white inset-0 group-hover:bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute z-0"
              v-on:click="handleForwardClick()"
            ></div>
            <!-- arrow -->
            <div
              class="w-10 h-10 flex items-center justify-center"
              v-on:click="handleForwardClick()"
            >
              <img class="z-10" src="@/assets/arrow_forward.svg" />
            </div>
          </div>
        </div>
      </div>

      <!-- end of grid -->
    </div>
  </div>

  <!-- circles outside of grid -->
  <div class="flex justify-center space-x-2 pt-4">
    <div v-for="project in projects" :key="project.id">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20">
        <circle
          cx="6"
          cy="8"
          r="4"
          stroke="white"
          :fill="project.id === selectedProjectId ? 'white' : 'none'"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import ProjectCardComponent from '../components/ProjectCardComponent.vue'

export default {
  components: {
    ProjectCardComponent
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Portfolio',
          description:
            'This is the website you are currently visiting. It is built with Vue and Tailwind! I am making continuous improvements to the design so stay tuned.',
          githubLink: '',
          img: 'portfolioimg1.png'
        },
        {
          id: 2,
          title: 'Digital Anatomy',
          description:
            'The Digital Anatomy project focused on creating an interactive experience for learners and providing educators with an e-learning/teaching tool. It was built with Unreal Engine and the web-based e-tool was made with Django',
          githubLink: '',
          img: 'digital_anatomy1.png'
        },
        {
          id: 3,
          title: 'IMDB Movies',
          description: 'In progress',
          githubLink: '',
          img: 'portfolioimg.png'
        },
        {
          id: 4,
          title: 'YourSurpise',
          description: 'In progress',
          githubLink: '',
          img: 'portfolioimg.png'
        }
      ],
      selectedProjectId: 1
    }
  },
  methods: {
    handleBackClick() {
      if (this.selectedProjectId > this.projects[0].id) {
        this.selectedProjectId--
        console.log(this.selectedProjectId)
      }
    },
    handleForwardClick() {
      if (this.selectedProjectId < this.projects.length) {
        this.selectedProjectId++
        console.log(this.selectedProjectId)
      }
    },
    getProjectById(id) {
      return this.projects.find((project) => project.id === id)
    }
  }
}
</script>
<style scoped>
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
