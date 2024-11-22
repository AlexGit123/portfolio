<script>
export default {
    name: 'NavBar',
    methods: {
        reset() {
            window.location.reload();
        }
    }
}
</script>
<template>
    <nav class="pl-5 flex items-center justify-between">
        <button @click="reset()" class="font text-white rounded-full px-6 py-2 mt-4">
            ALEX
        </button>
    </nav>
</template>
