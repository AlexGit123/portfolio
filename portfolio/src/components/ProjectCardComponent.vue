<!-- TODO add content, test for more than four project cards -->
<template>
    <div class="flex flex-col pr-10 pt-5">
        <div class="pb-8">
            <div class="p-2 bg-white shadow-md rounded-md">
                <h2 class="text-xl font-bold mb-2">{{ project.title }}</h2>
                <p class="text-gray-600">{{ project.description }}</p>
                <div class="mt-4">
                    <router-link :to="`/projects/${project.id}`" class="text-color hover:underline">Learn
                        more</router-link>
                </div>
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
};
</script>
<style scoped>
.text-color {
    color: #7fbdec;
}
</style>