<template>
    <div class="background flex justify-center p-10">
        <div class="min-h-screen w-full">
            <div id="gradient"
                class="gradient h-1/2 border border-blue-600 rounded-md flex flex-col items-center justify-center">
                <template v-if="!currentComponent">
                    <svg width="500" height="200" xmlns="http://www.w3.org/2000/svg">

                        <!-- Character: 'a' -->
                        <g id="char-a" transform="translate(30, 30)">
                            <circle id="a-dot1" class="dot filled" cx="15" cy="15" r="15" />
                            <circle id="a-dot2" class="dot" cx="15" cy="75" r="15" />
                            <circle id="a-dot3" class="dot" cx="15" cy="135" r="15" />
                            <circle id="a-dot4" class="dot" cx="75" cy="15" r="15" />
                            <circle id="a-dot5" class="dot" cx="75" cy="75" r="15" />
                            <circle id="a-dot6" class="dot" cx="75" cy="135" r="15" />
                        </g>

                        <!-- Character: 'l' -->
                        <g id="char-l" transform="translate(150, 30)">
                            <circle id="l-dot1" class="dot filled" cx="15" cy="15" r="15" />
                            <circle id="l-dot2" class="dot filled" cx="15" cy="75" r="15" />
                            <circle id="l-dot3" class="dot filled" cx="15" cy="135" r="15" />
                            <circle id="l-dot4" class="dot" cx="75" cy="15" r="15" />
                            <circle id="l-dot5" class="dot" cx="75" cy="75" r="15" />
                            <circle id="l-dot6" class="dot" cx="75" cy="135" r="15" />
                        </g>

                        <!-- Character: 'e' -->
                        <g id="char-e" transform="translate(270, 30)">
                            <circle id="e-dot1" class="dot filled" cx="15" cy="15" r="15" />
                            <circle id="e-dot2" class="dot" cx="15" cy="75" r="15" />
                            <circle id="e-dot3" class="dot" cx="15" cy="135" r="15" />
                            <circle id="e-dot4" class="dot" cx="75" cy="15" r="15" />
                            <circle id="e-dot5" class="dot filled" cx="75" cy="75" r="15" />
                            <circle id="e-dot6" class="dot" cx="75" cy="135" r="15" />
                        </g>

                        <!-- Character: 'x' -->
                        <g id="char-x" transform="translate(390, 30)">
                            <circle id="x-dot1" class="dot filled" cx="15" cy="15" r="15" />
                            <circle id="x-dot2" class="dot" cx="15" cy="75" r="15" />
                            <circle id="x-dot3" class="dot filled" cx="15" cy="135" r="15" />
                            <circle id="x-dot4" class="dot filled" cx="75" cy="15" r="15" />
                            <circle id="x-dot5" class="dot" cx="75" cy="75" r="15" />
                            <circle id="x-dot6" class="dot filled" cx="75" cy="135" r="15" />
                        </g>
                    </svg>
                </template>
                <template v-else>
                    <component :is="currentComponent" />
                </template>
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
    },
    mounted() {
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
    /* background: linear-gradient(90deg, #4b4747 0%, #e3dcdf 100%); */
    background: linear-gradient(90deg, #939191 0%, #9a9b9c 100%);
}

.background {
    background-color: #242729;
}

.dot {
    fill: none;
}

.filled {
    opacity: 0;
    fill: black;
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

</style>