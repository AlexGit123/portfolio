<!-- TODO add content, test for more than four project cards -->
<template>
        <div class="pb-8">
            <div class="flex">
                <!-- <img class="rounded" :src="(`src/assets/${project.img}`)"> -->
                <img class="rounded" :src="getImageURL()">

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
        getImageURL() {
            try {
                return `src/assets/${this.project.img}`
            } catch (e) {
                console.log("image not found")
            }
        },
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