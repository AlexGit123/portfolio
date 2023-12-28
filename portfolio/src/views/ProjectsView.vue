<template>
    <div class="bg-gray-100">
        <div class="pt-10">
            <h1 class="text-4xl font-bold mb-2">Projects</h1>
        </div>
        <div class="">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" class="pb-10" />
        </div>
    </div>
</template>
<script>
import ProjectCard from '@/components/ProjectCardComponent.vue';

export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: [
                { id: 1, title: 'Portfolio', description: 'This is the website you are currently viewing' },
                { id: 2, title: 'YourSurprise', description: 'Full-stack web-app with the goal of more effectively managing feedback' },
                { id: 3, title: 'Barbershops', description: 'Full-stack web-app with the goal of centralizing local Barbershops' },
            ],
        };
    },
};
</script>