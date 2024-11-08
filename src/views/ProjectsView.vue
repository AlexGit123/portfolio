<template>
    <div class="grid grid-cols-3">
        <!-- Left side content -->
        <div class="flex pl-10">
            <ul class="flex flex-col justify-center space-y-4">
                <a href="#" />
                <li v-for="project in projects" :key="project.id" @click="handleClick(project.id)"
                    class="flex space-x-2 items-center text-xl"
                    :class="{ 'selected-project': selectedProjectId === project.id }">
                    <span class="font">{{ project.title }}</span>
                    <a href="#" class="pl-5 icon-container">
                        <img class="w-6 h-6 icon" src="@/assets/github1.svg">
                    </a>
                </li>
            </ul>
        </div>
        <!-- Right side content -->
        <div class="">
            <ProjectCardComponent v-if="selectedProjectId" :key="selectedProjectId"
                :project="getProjectById(selectedProjectId)" />
        </div>

        <div class="pl-10">
            <p class="mt-2 text-lg">{{ getProjectById(selectedProjectId).description }}</p>
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
                { id: 1, title: 'Portfolio', description: 'This is the website you are currently visiting', githubLink: '', img: "portfolioimg.png" },
                { id: 2, title: 'Digital Anatomy', description: 'The Digital Anatomy project focused on creating an interactive experience for learners and providing educators with innovative teaching tools', githubLink: '', img: "portfolioimg.png" },
                { id: 3, title: 'IMDB Movies', description: 'This is the website you are currently viewing', githubLink: '', img: "portfolioimg.png" },
                { id: 4, title: 'YourSurpise', description: 'This is the website you are currently viewing', githubLink: '', img: 'me.jpg' },
            ],
            selectedProjectId: 1,
        };
    },
    methods: {
        handleClick(id) {
            this.selectedProjectId = id
        },
        getProjectById(id) {
            return this.projects.find(project => project.id === id);
        },
    }
};
</script>
<style>
.project-color {
    background-color: #0074B7;
}

.square-color {
    background-color: #1C1C1C;
}

.square-color1 {
    background-color: #DADDD8;
}

.square-color2 {
    background-color: #ECEBE4;
}

.square-color3 {
    background-color: #EEF0F2;
}

.selected-project {
    border-bottom: 2px solid #1C1C1C;
}
</style>