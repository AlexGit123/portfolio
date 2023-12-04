<template>
  <div class="min-h-screen bg-gray-100">
    <!-- header -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold mb-2">About Me</h1>
      <p class="text-lg text-gray-600 pb-4">Passionate Full-Stack Software Engineer</p>
    </div>

    <!-- main -->
    <div class="flex flex-col items-center justify-center text-center">

      <!-- grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <!-- Professional Experience Section -->
        <div class="mb-8 col-span-2 md:col-span-1 pl-4">
          <h2 class="text-2xl font-bold mb-4">Experience</h2>
          <div class="mb-4">
            <h3 class="text-xl font-bold">Digital Workstore</h3>
            <p class="text-gray-700">Sept. 2022 - Feb. 2023 | Full-Stack Software Engineer Intern for Plingspot</p>
          </div>
        </div>

        <!-- skills -->
        <div class="mb-8 col-span-2 md:col-span-1">
          <h2 class="text-2xl font-bold mb-4">Skills</h2>
          <ul class="list-disc pl-6">
            <p class="text-gray-700">JavaScript, VueJS, Svelte</p>
            <p class="text-gray-700">TypeScript</p>
            <p class="text-gray-700">Go</p>
            <p class="text-gray-700">HTML, CSS, Tailwind</p>
            <p class="text-gray-700">SQL, MySQL, FASTAPI</p>
            <p class="text-gray-700">RESTful APIs</p>
          </ul>
        </div>

        <!-- interest -->
        <div class="mb-8 col-span-2 md:col-span-1">
          <h2 class="text-2xl font-bold mb-4">Interests</h2>
          <p class="text-gray-700">Apart from coding, I have a keen interest in drumming, playing video games, and anime.
          </p>
        </div>

        <!-- future goals -->
        <div class="mb-8 col-span-2 md:col-span-1 pr-4">
          <h2 class="text-2xl font-bold mb-4">Future Goals</h2>
          <p class="text-gray-700">My future goals include breaking into the world of Robotics.</p>
        </div>

      </div>

      <!-- TODO move to project view or another comp. -->
      <!-- Footer Section -->
      <!-- <footer class="text-center col-span-4">
        <p class="text-gray-700">Reach me here: example@example.com"
            class="">your.email@example.com</a></p>
      </footer> -->
    </div>
  </div>
</template>
