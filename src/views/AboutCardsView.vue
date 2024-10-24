<template>
    <div class="background pl-10">
        <div class="pt-10">
            <h1 class="text-4xl font-bold mb-2">About Me</h1>
        </div>
        <div class="background1 bg-gray-100 grid grid-cols-2 gap-8 min-h-screen">
            <!-- Left side content -->
            <h2>Experience</h2>

            <!-- Right side content -->
            <div>
                <h2>Hobbies</h2>
            </div>
        </div>
        <div class="p-20">
            <div class="pl-10 pr-10 footer flex justify-between p-4 rounded-lg">
                <h1 class="footer-item ">doer0001@hz.nl</h1>
                <h1 class="footer-item ">LinkedIn</h1>
                <h1 class="footer-item ">GitHub</h1>
                <h1 class="footer-item ">Resume</h1>
            </div>
        </div>
    </div>
</template>
<script>
// import AboutCardComponent from '@/components/AboutCardComponent.vue';

export default {
    components: {},
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
<style scoped>
.footer-item {
   color: aliceblue;
    /* background-color: #0074B7; */
}

.background1 {
    background-color: #0074B7;
    /* background-color: #0074B7; */
}

.footer {
    background-color: #000000;
}

.icon {
    transition: transform 0.3s ease-in-out
}

.icon-container:hover .icon {
    transform: scale(1.2)
}
</style>