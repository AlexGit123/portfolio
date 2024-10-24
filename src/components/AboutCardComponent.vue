<template>
  <div class="flex flex-col pt-5">
    <div class="pb-8">
      <div class="p-2 bg-white shadow-md rounded-md">
        <h2 class="text-xl font-bold mb-2">{{ card.title }}</h2>
        <p class="text-gray-600">{{ card.description }}</p>
        <div class="mt-4">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import SpotifyAPI from '@/components/SpotifyAPI.vue';

export default {
  props: {
    card: {
      type: Object,
      required: false,
    },
  },
  components: {
    // SpotifyAPI,
  },
};
</script>
<style scoped>
.searchBox {
  position: absolute;
  /* transform: translate(-50%, 50%); */
  background: #2f3640;
  height: 50px;
  border-radius: 40px;
  padding: 15px;

}

.searchBox:hover>.searchInput {
  width: 240px;
  padding: 0 6px;
}

.searchBox:hover>.searchButton {
  background: white;
  color: #2f3640;
}

.searchButton {
  color: white;
  float: right;
  border-radius: 70%;
  background: #2f3640;
  transition: 0.4s;
}

.searchInput {
  border: none;
  background: none;
  outline: none;
  padding-bottom: 4px;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 30px;
  width: 0px;

}

@media screen and (max-width: 620px) {
  .searchBox:hover>.searchInput {
    width: 150px;
    padding: 0 6px;
  }
}
</style>
