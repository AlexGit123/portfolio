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
    <nav class="pl-5 flex items-center justify-between w-full">
        <button @click="reset()" class="font text-white rounded-full px-6 py-2 mt-4">
            ALEX
        </button>
        <!-- <div>
            <button class="font text-white rounded-full px-6 py-2 mt-4">
                ABOUT
            </button>
            <button class="font text-white rounded-full px-6 py-2 mt-4">
                PROJECTS
            </button>
            <button class="font text-white rounded-full px-6 py-2 mt-4">
                EXPERIENCE
            </button>
            <button class="font text-white rounded-full px-6 py-2 mt-4">
                CONTACT
            </button>
        </div> -->
    </nav>
</template>
<style>
.nav-link {
    position: relative;
    padding-bottom: 5px;
}

.nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: #3498db;
    transition: width 0.3s ease-in-out;
}

.nav-link.active::after {
    width: 100%;
}
</style>
