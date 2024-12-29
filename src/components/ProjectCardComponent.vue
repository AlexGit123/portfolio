<template>
    <div class="flex justify-center">
        <img rel="preload" class="border border-indigo-400 rounded-lg w-9/12 max-h-auto" :src="getImageURL()">
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
                return (`/${this.project.img}`);
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