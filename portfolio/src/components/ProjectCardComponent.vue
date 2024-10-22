<!-- TODO add content, test for more than four project cards -->
<template>
        <div class="pr-10">
            <div class="pb-8">
                <div class="">
                    <!-- <h2 class="text-xl font-bold mb-2">{{ project.title }}</h2> -->
                    <div class="flex">
                        <img class="w-100 h-60 rounded" :src="(`src/assets/${project.img}`)">
                    </div>
                    <div class="flex pt-5">
                        <p class="text-black text-sm">{{ project.description }}</p>
                    </div>
                    <!-- move to icon next to the text -->
                    <p class="text-black text-sm">{{ project.githubLink }}</p>
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