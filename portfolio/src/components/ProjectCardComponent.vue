<!-- TODO add content, test for more than four project cards -->
<template>
    <div class="pr-10">
        <div class="pb-8">
            <div class="p-2 rounded-md border square-color1">
                <h2 class="text-xl font-bold mb-2">{{ project.title }}</h2>
                <div class="flex">
                    <img :src="(`src/assets/${project.img}`)">
                </div>
                <div class="flex">
                    <p class="text-gray-600 text-center">{{ project.description }}</p>
                </div>
                <p class="text-gray-600">{{ project.githubLink }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    methods: {
    }
};
</script>
<style scoped>
.text-color {
    color: #7fbdec;
}
.square-color1 {
        background-color: #DADDD8;
    }

</style>