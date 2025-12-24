<template>
  <div
    class="bg-[rgb(19,21,41)]/10 flex justify-center p-2 rounded-md w-10/12 backdrop-blur-md h-full"
  >
    <div class="p-1">
      <div class="content grid gap-4 w-3/4 p-2 h-auto">
        <!-- about -->
        <div id="about" class="h-1/2">
          <p class="font-extrabold text-2xl mb-2 gradient">About</p>
          <div class="p-2 text-white bg-gray-700/80 rounded-md">
            <div>
              <p class="font-extrabold text-xl pb-1">Hi, I'm Alex</p>
            </div>
            <div class="text-md text-white">
              <p class="">
                I'm a Software Engineer with a passion for building web applications, crafting
                designs, and learning new technologies. I'm most familiar with Angluar, Vue, Django, Laravel,
                JavaScript, Python, and PHP.
              </p>
              <p class="pt-4 text-slate-700">
                When I'm not coding you can find me at the gym, playing games, or out with friends.
              </p>
            </div>
          </div>
        </div>

        <!-- projects -->
        <div>
          <p class="font-extrabold text-2xl mb-2 gradient">Projects</p>
          <div class="bg-gray-700/80 rounded-md p-2">
            <div class="space-y-4 pt-2 h-full">
              <div class="pl-4 bg-gray-800 w-full rounded-md">
                <div class="flex flex-col">
                  <p class="pt-2 pb-2 font-bold">Digital Anatomy</p>
                  <p class="pb-2">
                    This project enables 3D exploration of human anatomy. I developed a coupled
                    web-app made with Django, HTMX and Tailwind with Unreal Engine Blueprints to
                    allow educators to create assignments for their students.
                  </p>
                </div>
              </div>
              <div class="pl-4 bg-gray-800 w-full rounded-md">
                <div class="flex flex-col">
                  <p class="pt-2 pb-2 font-bold">FLIX IT</p>
                  <p class="pb-2">
                    FLIX IT is a responsive movie browsing application built with Vue, Go, and
                    Tailwind CSS, allowing users to search and explore movies using data from the
                    OMDb API.
                  </p>
                </div>
              </div>
              <div class="pl-4 bg-gray-800 w-full rounded-md">
                <div class="flex flex-col">
                  <p class="pt-2 pb-2 font-bold">Portfolio</p>
                  <p class="pb-2">
                    This website is made with Vue, Tailwind CSS, and plain CSS. I built it to show
                    case some projects I've worked on and I plan to use it for more experimental
                    designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- skills -->
        <div>
          <p class="font-extrabold text-2xl gradient mb-2">Skills</p>
          <div class="pl-4 bg-gray-700/80 w-full rounded-md p-2">
            <p class="pb-2">
              I’m comfortable working across the full stack, with a strong focus on frontend
              development. Currently, my day-to-day work revolves around Angluar, TypeScript, and CSS,
              but I also enjoy building and maintaining backend services.
            </p>
            <p>
              I’ve worked with Django, Laravel, and Go on the backend, and I like thinking about
              clean architecture, usability, and performance. I’m always curious to learn new tools
              and improve the way things are built.
            </p>
          </div>
        </div>

        <!-- experience -->
        <p class="font-extrabold text-2xl gradient">Experience</p>

        <div class="space-y-4 bg-gray-700/80 h-full p-2 rounded-md">
          <div class="text-white bg-gray-800 rounded-md p-2">
            <div class="flex space-x-4">
              <h1 class="text-md mb-1">
                <span class="font-extrabold"> Frontend Developer </span> | Colijn-IT | Fulltime Mar
                2025 - current
              </h1>
            </div>
            <div>
              <p>
                As a frontend developer at Colijn-IT, I work on a production ERP system used by
                multiple clients. My work focuses on translating complex business processes into
                usable, reliable interfaces.
              </p>
            </div>
          </div>

          <div class="text-white bg-gray-800 rounded-md p-2">
            <div class="flex space-x-4">
              <h1 class="text-md mb-1">
                <span class="font-extrabold"> Software Engineer </span>| JRCZ | Internship 2024
              </h1>
            </div>
            <div>
              <p>
                Developed the Digital Anatomy application using Unreal Engine and a Django web-app
                to create a learning experience for education purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geneva&display=swap');
.font {
  font-family: 'Geneva', sans-serif;
}

.gradient {
  background: -webkit-linear-gradient(#d83c3c, #9483f0);
  background-clip: inherit;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
