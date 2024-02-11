<template>
    <div class="bg-gray-100 pl-10">
        <div class="pt-10">
            <h1 class="text-4xl font-bold mb-2">About Me</h1>
        </div>
        <div class="">
            <AboutCardComponent v-for="card in cards" :key="card.id" :card="card" />
        </div>
    </div>
</template>
<script>
import AboutCardComponent from '@/components/AboutCardComponent.vue';

export default {
    components: {
        AboutCardComponent,
    },
    data() {
        return {
            cards: [
                { id: 1, title: 'Portfolio', description: 'This is the website you are currently viewing' },
                { id: 2, title: 'YourSurprise', description: 'Full-stack web-app with the goal of more effectively managing feedback' },
                { id: 3, title: 'Barbershops', description: 'Full-stack web-app with the goal of centralizing local Barbershops' },
            ],
        };
    },
};
</script>