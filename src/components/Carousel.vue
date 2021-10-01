<template>
<!-- NOTE: Made prior to learning about vue.js -->
<div id="carousel">
    <div class="container">
        <!-- By default, shows the first slide -->
        <div class="showSlider fade" style="display: block">
        <img src="../assets/images/Banner-Web_1350.jpg" alt="Carousel Image">
        </div>
        <!-- Second slide -->
        <div class="showSlider fade">
        <img src="../assets/images/Banner-Web_1360.jpg" alt="Carousel Image">
        </div>
        <!-- Third slide -->
        <div class="showSlider fade">
        <img src="../assets/images/Banner-Web_1370.jpg" alt="Carousel Image">
        </div>
        <!-- Fourth slide -->
        <div class="showSlider fade">
        <img src="../assets/images/Banner-Web_1380.jpg" alt="Carousel Image">
        </div>

        <!-- Navigation Button to go to the next slide (either forward / back) -->
        <a class="left" onclick="nextSlide(-1)" style="color: black;">❮</a>
        <a class="right" onclick="nextSlide(1)" style="color: black;">❯</a>
    </div>
</div>
</template>

<script src="../assets/script.js"></script>
<script>
export default {
    name: 'Carousel',
};
</script>

<style scoped>
/* Carousel styling */
body {
    margin: 0;
    background: black;
}
.showSlider {
    display: none;
    padding: 20px;
}
.showSlider img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.container {
    max-width: 1000px;
    position: relative;
    margin: auto;
}
.left, .right {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 20px;
    margin-top: -22px;
    margin-left: 30px;
    margin-right: 30px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 10px;
}
.right {
    right: 0;
    border-radius: 10px;
}
.left:hover, .right:hover {
    background-color: #7e9777;
}
.active {
    background-color: #7e9777;
}

/* Fading Animation */
.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}
@-webkit-keyframes fade {
    from {
        opacity: .4
    }
    to {
        opacity: 1
    }
}

@keyframes fade {
    from {
        opacity: .4
    }
    to {
        opacity: 1
    }
}
</style>