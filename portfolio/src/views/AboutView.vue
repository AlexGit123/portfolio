<template>
  <div class="bg-gray-100 grid grid-cols-2 gap-8 min-h-screen">
    <!-- Left side content -->
    <div class="pl-10">

      <h1 class="pt-5 text-4xl font-bold mb-2">About me</h1>
      <!-- icons -->

      <img src="@/assets/joystick.png" class="w-16 h-16">
      <img src="@/assets/drum-kit.png" class="w-16 h-16">
      <img src="@/assets/seoul.png" class="w-16 h-16">
      
      <p>Video games</p>
      <p>Drumming</p>
      <p>Adventure</p>
    </div>

    <!-- Right side content -->
    <div>
      <!-- test right -->
      <h1 class="pt-5 text-4xl font-bold mb-2">I also love music</h1>
      <p>Let's make a playlist together</p>

      <div class="pt-5">
        <div class="searchBox">
          <input class="searchInput" type="text" name="" placeholder="Look for your favorite song...">
          <button class="searchButton" href="#">
            <i class="p-2">
              search
            </i>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>
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
