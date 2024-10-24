<!-- TextAnimation.vue -->
<template>
    <div :id="dynamicElementID"></div>
</template>
  
<script>
export default {
    props: {
        textToAnimate: String,
        dynamicElementID: String,
    },
    data() {
        return {
            availableLetters: "01", // Customize the letters to cycle through
            animationSpeed: 50, // Milliseconds per frame
            animationIncrement: 3, // Frames per step (must be > 2)
            textLength: 0,
            animationIndex: 0,
            stringIndex: 0,
            temporaryString: "",
            finalString: "",
        };
    },
    mounted() {
        this.textLength = this.textToAnimate.length;

        // Recursive animation function wrapped in setTimeout
        (function animateText(i, vm) {
            setTimeout(function () {
                if (--i) {
                    animateText(i, vm);
                }
                vm.animateNextFrame(i);
                vm.animationIndex = vm.animationIndex + 1;
            }, vm.animationSpeed);
        })(this.textLength * this.animationIncrement + 1, this);
    },
    methods: {
        animateNextFrame(pos) {
            for (var i = 0; i < this.textLength - this.stringIndex; i++) {
                // Generate a random number
                var randomNum = Math.floor(this.availableLetters.length * Math.random());
                // Get a random letter
                var randomLetter = this.availableLetters.charAt(randomNum);
                this.temporaryString = this.temporaryString + randomLetter;
            }

            if (this.animationIndex == this.animationIncrement - 1) {
                this.stringIndex++;
            }
            if (this.animationIndex == this.animationIncrement) {
                // Add a letter every speed*10 ms
                this.finalString = this.finalString + this.textToAnimate.charAt(this.stringIndex - 1);
                this.animationIndex = 0;
            }

            // Update the HTML content of the element with the id "output"
            document.getElementById(this.dynamicElementID).innerHTML = this.finalString + this.temporaryString;
            this.temporaryString = "";
        },
    },
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>
