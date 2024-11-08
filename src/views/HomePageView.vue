<template>
    <div class="background flex justify-center p-10">
        <div class="min-h-screen w-full">
            <div id="gradient" class="h-1/2 border rounded-md flex flex-col items-center justify-center">
                <div class="text-2xl font-bold mb-2">
                    <template v-if="!currentComponent">
                        <h1 class="title font">⠁⠇⠑⠭</h1>
                    </template>
                    <template v-else>
                        <component :is="currentComponent" />
                    </template>
                </div>
            </div>
            <div class="w-full flex flex-col pt-10">
                <div class="text-right text-white flex flex-col items-end">
                    <button @click="currentComponent = 'HomeView'" class="font pb-2">ABOUT</button>
                    <button @click="currentComponent = 'ProjectsView'" class="font pb-2">PROJECTS</button>
                    <button @click="currentComponent = 'ExperienceView'" class="font pb-2">EXPERIENCE</button>
                    <button @click="currentComponent = 'ContactView'" class="font pb-2">CONTACT</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import HomeView from './HomeView.vue';
import ProjectsView from './ProjectsView.vue';
import NavBar from '../components/NavBar.vue';
import ExperienceView from './ExperienceView.vue';
import ContactView from './ContactView.vue';

export default {
    components: {
        HomeView,
        ProjectsView,
        NavBar,
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
        generateGradient() {
            let hexVals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

            function populate(a) {
                for (let i = 0; i < 6; i++) {
                    console.log(i)
                    let x = Math.round(Math.random() * 15);
                    let y = hexVals[x];
                    a += y;
                }
                return a;
            }

            let color1 = populate('#');
            let color2 = populate('#');

            let angle = Math.round(Math.random() * 360);

            let gradient = "linear-gradient(" + angle + "deg, " + color1 + ", " + color2 + ")";

            document.getElementById('gradient').style.background = gradient;


        },
    },
    mounted() {
        this.generateGradient();
    }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;700&display=swap');

.title {
    font-size: 600%;
}

.font {
    font-family: 'Satoshi', sans-serif;
}

.gradient {
    background: linear-gradient(90deg, #92555f 0%, #FF69B4 100%);
}

.background {
    background-color: #242729;
    /* background-color: #0074B7; */
}
</style>