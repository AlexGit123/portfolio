<template>
  <div class="background flex justify-center p-2">
    <div class="min-h-screen w-full font">
      <div
        id="gradient"
        class="relative h-full md:max-h-screen flex flex-col items-center justify-center text-white p-40"
      >
        <spline-viewer
          url="https://prod.spline.design/Dn-lLJkN7oUKiFXZ/scene.splinecode"
          ref="splineViewer"
        ></spline-viewer>
        <div
          class="absolute text-5xl backdrop-filter backdrop-blur-sm p-10 rounded-lg pointer-events-none"
        >
          Welcome to my Portfolio
        </div>
      </div>
      <div class="">
        <HomeView />
      </div>
      <div class="">
        <ProjectsView />
      </div>
      <div class="pt-20 pb-20">
        <ExperienceView />
      </div>
      <div class="">
        <ContactView />
      </div>
    </div>
  </div>
</template>
<script>
import HomeView from './HomeView.vue'
import ProjectsView from './ProjectsView.vue'
import ExperienceView from './ExperienceView.vue'
import ContactView from './ContactView.vue'
export default {
  components: {
    HomeView,
    ProjectsView,
    ExperienceView,
    ContactView
  },
  data() {
    return {
      currentComponent: null
    }
  },
  methods: {
    resetPage() {
      this.currentComponent = null
    },
    handleClick(id) {
      console.log('test', id)
    }
  },
  mounted() {
    let splineViewer = this.$refs.splineViewer

    splineViewer._logo.remove()

    if (splineViewer) {
      // event => listen for scroll
      splineViewer.addEventListener('wheel', (event) => {
        // spline scene interaction with scroll
        event.preventDefault()
        window.scrollBy(0, event.deltaY) // scroll
      })
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geneva&display=swap');
.font {
  font-family: 'Geneva', sans-serif;
}

.background {
  background-color: black;
}
</style>
