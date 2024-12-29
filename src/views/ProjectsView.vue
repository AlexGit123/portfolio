<template>
    <!-- grid -->
    <div class="w-full p-4 animate-fade-in text-white">
        <h1 class="text-4xl pl-10">Projects</h1>
        <div class="grid grid-cols-2 gap-6">
            <!-- Left side content -->
            <div class="pl-10 pr-10 flex flex-col justify-between">
                <div class="pt-4">
                    <p class="text-2xl">{{ getProjectById(selectedProjectId).title }}</p>
                    <p class="mt-2 text-lg">{{ getProjectById(selectedProjectId).description }}</p>
                </div>
                <div class="flex flex-col justify-end">
                    <div class="flex justify-end pb-4 space-x-4">
                        <div class="cursor-pointer" v-on:click="handleBackClick()">
                            <img class="icon" src="@/assets/arrow_back.svg">
                        </div>
                        <div class="cursor-pointer" v-on:click="handleForwardClick()">
                            <img class="icon" src="@/assets/arrow_forward.svg">
                        </div>
                    </div>
                    <div class="flex justify-center space-x-2">
                        <div v-for="project in projects" :key="project.id">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20">
                                <circle cx="6" cy="8" r="4" stroke="black"
                                    :fill="project.id === selectedProjectId ? 'white' : 'none'" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Right side content -->
            <div class="pb-2 flex justify-center">
                <div>
                    <ProjectCardComponent v-if="selectedProjectId" :key="selectedProjectId"
                        :project="getProjectById(selectedProjectId)" class="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCardComponent from '../components/ProjectCardComponent.vue';

export default {
    components: {
        ProjectCardComponent,
    },
    data() {
        return {
            projects: [
                { id: 1, title: 'Portfolio', description: 'This is the website you are currently visiting. It is built with Vue and Tailwind! I am making continuous improvements to the design so stay tuned.', githubLink: '', img: "portfolioimg.png" },
                { id: 2, title: 'Digital Anatomy', description: 'The Digital Anatomy project focused on creating an interactive experience for learners and providing educators with an e-learning/teaching tool. It was built with Unreal Engine and the web-based e-tool was made with Django', githubLink: '', img: "digital_anatomy.png" },
                { id: 3, title: 'IMDB Movies', description: 'In progress', githubLink: '', img: "portfolioimg.png" },
                { id: 4, title: 'YourSurpise', description: 'In progress', githubLink: '', img: 'portfolioimg.png' },
            ],
            selectedProjectId: 1,
        };
    },
    methods: {
        handleBackClick() {
            if (this.selectedProjectId > this.projects[0].id) {
                this.selectedProjectId--;
                console.log(this.selectedProjectId);
            }
        },
        handleForwardClick() {
            if (this.selectedProjectId < this.projects.length) {
                this.selectedProjectId++;
                console.log(this.selectedProjectId);
            }
        },
        getProjectById(id) {
            return this.projects.find(project => project.id === id);
        },
    }
};
</script>
<style scoped>
@keyframes fadeIn {
    0% {
        opacity: 0;
        /* transform: translateY(1000px); */
    }

    100% {
        opacity: 1;
        /* transform: translateY(0); */
    }
}

.animate-fade-in {
    animation: fadeIn 1s ease-in
}
</style>