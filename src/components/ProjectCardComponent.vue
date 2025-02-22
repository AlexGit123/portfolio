<template>
  <div class="flex justify-center">
    <img
      rel="preload"
      loading="eager"
      class="border border-indigo-400 rounded-lg max-h-auto"
      :src="getImageURL()"
    />
  </div>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImageURL() {
      try {
        return `/${this.project.img}`
      } catch (e) {
        console.log('image not found')
      }
    }
  }
}
</script>
<style scoped></style>
