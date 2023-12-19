<template>
    <div class="bg-gray-100">
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold mb-2">Projects</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" class="p-4 pb-10" />
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
                { id: 1, title: 'Portfolio', description: 'This website to show information about me' },
                { id: 2, title: 'YourSurprise', description: 'Description for Project B' },
                { id: 3, title: 'Project B', description: 'Description for Project C' },
                { id: 4, title: 'Project C', description: 'Description for Project D' },
            ],
        };
    },
};
</script>