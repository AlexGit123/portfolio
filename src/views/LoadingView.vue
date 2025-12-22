<template>
  <div
    id="loading-container"
    class="min-h-screen w-full font flex items-center justify-center bg-blue-600"
  >
    <!-- stop light -->
    <div
      class="flex items-center justify-center w-1/2 h-full opacity-80 backdrop-blur-xl bg-orange-500"
    >
      <div class="flex flex-row p-4 space-x-2 animate-(--load_ani)">
        <div class="h-2 w-2 bg-red-500 rounded-xl"></div>
        <div class="h-2 w-2 bg-yellow-500 rounded-xl"></div>
        <div class="h-2 w-2 bg-green-500 rounded-xl"></div>
      </div>
    </div>
  </div>
</template>
<style>
.load-ani {
  background-color: purple;
}
</style>
<script></script>
