<template>
    <div class="background grid grid-cols-2 min-h-screen pt-32">
        <!-- Left side content -->
        <div class="flex project-color background pl-10">
            <ul class="flex flex-col space-y-4">
                <a href="#" />
                <li v-for="project in projects" :key="project.id" @click="handleClick(project.id)"
                    class="flex space-x-2 items-center text-xl"
                    :class="{ 'selected-project': selectedProjectId === project.id }">
                    <div class="w-6 h-6 square-color"></div>
                    <div class="w-6 h-6 square-color1"></div>
                    <!-- <div class="w-6 h-6 square-color2"></div> -->
                    <div class="w-6 h-6 square-color3"></div>
                    <span>{{ project.title }}</span>
                </li>
            </ul>
        </div>
        <!-- Right side content -->
        <div class="">
            <ProjectCardComponent v-if="selectedProjectId" :key="selectedProjectId"
                :project="getProjectById(selectedProjectId)" />
        </div>
    </div>
</template>

<script>
import ProjectCardComponent from '@/components/ProjectCardComponent.vue';

export default {
    components: {
        ProjectCardComponent,
    },
    data() {
        return {
            // add images (of project) and array for icons (technologies)
            projects: [
                { id: 1, title: 'Portfolio', description: 'This is the website you are currently visiting', githubLink: 'lol', img: 'portfolioimg.png' },
                { id: 2, title: 'YourSurpise', description: 'This is the website you are currently viewing', githubLink: 'lol', img: 'joystick.png' },
                { id: 3, title: 'IMDB Movies', description: 'This is the website you are currently viewing', githubLink: 'lol', img: 'portfolioimg.png' },
            ],
            selectedProjectId: 1,
        };
    },
    methods: {
        handleClick(id) {
            console.log(this.projects[0].img)
            this.selectedProjectId = id
            console.log('id ' + this.selectedProjectId)
        },
        getProjectById(id) {
            console.log(id);
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