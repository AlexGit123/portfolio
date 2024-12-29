<template>
    <div class="background flex justify-center p-2">
        <div class="min-h-screen w-full font">
            <div id="gradient"
                class="relative h-full md:max-h-screen flex flex-col items-center justify-center text-white p-4">


                <spline-viewer url="https://prod.spline.design/Dn-lLJkN7oUKiFXZ/scene.splinecode"
                    class=""></spline-viewer>
                <div class="absolute text-5xl backdrop-filter backdrop-blur-sm p-10 pointer-events-none rounded-lg">
                    <br>
                    Welcome to my Portfolio
                </div>

                <!-- 
                <template v-else>
                    <component :is="currentComponent" />
                </template> -->
            </div>
            <div class="min-h-screen">
                <HomeView />
            </div>
            <div class="min-h-screen">
                <ProjectsView />
            </div>
            <div class="min-h-screen">
                <ExperienceView />
            </div>
            <div class="min-h-screen">
                <ContactView />
            </div>
            <!-- <div class="w-full flex flex-col pt-10">
                <div class="text-right text-white flex flex-col items-end">
                    <button @click="currentComponent = 'HomeView'" class="font pb-2">ABOUT</button>
                    <button @click="currentComponent = 'ProjectsView'" class="font pb-2">PROJECTS</button>
                    <button @click="currentComponent = 'ExperienceView'" class="font pb-2">EXPERIENCE</button>
                    <button @click="currentComponent = 'ContactView'" class="font pb-2">CONTACT</button>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import HomeView from './HomeView.vue';
// import HomePageView from './HomePageView.vue';

import ProjectsView from './ProjectsView.vue';
// import NavBar from '../components/NavBar.vue';
import ExperienceView from './ExperienceView.vue';
import ContactView from './ContactView.vue';
import { Application } from '@splinetool/runtime';
export default {
    components: {
        HomeView,
        ProjectsView,
        // NavBar,
        ExperienceView,
        ContactView,
    },
    data() {
        return {
            currentComponent: null,
        };
    },
    methods: {
        resetPage() {
            this.currentComponent = null;
        },
        handleClick(id) {
            console.log("test", id)
        },
    },
    mounted() {
        const canvas = document.getElementById('canvas3d');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/nNL39Pb-MQn2saue/scene.splinecode');
    }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Geneva&display=swap');

.title {
    font-size: 600%;
}

.font {
    font-family: 'Geneva', sans-serif;
}

.gradient {
    background: linear-gradient(90deg, #939191 0%, #9a9b9c 100%);
}

.background {
    /* background-color: #1f2122; */
    background-color: black;
    /* background: linear-gradient(90deg, #bbb6b6 0%, #181a1b 100%); */

}

.dot {
    fill: none;
}

.filled {
    opacity: 0;
    fill: white;
    animation: fadeIn 1s forwards;
}

#char-a .filled {
    animation-delay: 0s;
}

#char-l .filled {
    animation-delay: 0.5s;
}

#char-e .filled {
    animation-delay: 1s;
}

#char-x .filled {
    animation-delay: 1.5s;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

.matcap-effect {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle at 30% 30%,
            rgba(158, 129, 129, 0.9),
            /* Highlight */
            rgba(158, 129, 129, 0.5) 40%,
            /* Matte tone */
            rgba(158, 129, 129, 0.7) 70%,
            /* Mid tone */
            rgba(0, 0, 0, 0.3) 100%
            /* Darker edge */
        );
    /* border-radius: 50%; */
    filter: blur(0.3px);
    /* Slightly softens the gradient */
}
</style>