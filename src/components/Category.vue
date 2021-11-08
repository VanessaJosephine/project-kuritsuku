<template>
<!-- NOTE: Made prior to learning about Vue -->
<div id="Category">
    <!-- TITLE -->
    <div class="category_post">
        <h2 id="category">Shop by Category</h2>
    <!-- LINK BUTTONS -->
    <div class="tab">
    <button class="tablinks" onclick="openCategory(event, 'Cleanser')">Cleanser</button>
    <button class="tablinks" onclick="openCategory(event, 'Toner')">Toner</button>
    <button class="tablinks" onclick="openCategory(event, 'Serum')">Serum</button>
    <button class="tablinks" onclick="openCategory(event, 'Moisturizer')">Moisturizer</button>
    </div>
    </div>

    <!-- FIRST SLIDE -->
    <div id="Cleanser" class="tabcontent fade" style="display: block;">
    <div class="category_box">
    <div class="container">
        <div class="category_slider">
            <!-- Images -->
            <div class="slide_image">
                <img src="../assets/images/cleanser.png" alt="Cleanser">
            
                <!-- Overlay -->
                <div class="overlay">
                    <!-- Go Button -->
                    <router-link 
                    :to="{ name: 'category-overview',
                    params: { category: 'Cleanser'}}"
                    class="go_button">Go Now
                    </router-link>
                </div>
            </div>
            
            <!-- Detail -->
            <div class="slide_detail"></div>

            <!-- Type -->
            <div class="slide_type">
                <a href="#" text-decoration="none">Cleanser</a>
                <span>Suitable for ALL skin types</span>
            </div>
        </div>
    </div>
    </div>
    </div>

    <!-- SECOND SLIDE -->
    <div id="Toner" class="tabcontent fade">
    <div class="category_box">
    <div class="container">
        <div class="category_slider">
            <!-- Images -->
            <div class="slide_image">
                <img src="../assets/images/toner.png" alt="Toner">
            
                <!-- Overlay -->
                <div class="overlay">
                    <!-- Go Button -->
                    <router-link 
                    :to="{ name: 'category-overview',
                    params: { category: 'Toner'}}"
                    class="go_button">Go Now
                    </router-link>
                </div>
            </div>
            
            <!-- Detail -->
            <div class="slide_detail"></div>

            <!-- Type -->
            <div class="slide_type">
                <a href="#" text-decoration="none">Toner</a>
                <span>Suitable for ALL skin types</span>
            </div>
        </div>
    </div>
    </div>
    </div>

    <!-- THIRD SLIDE -->
    <div id="Serum" class="tabcontent fade">
    <div class="category_box">
    <div class="container">
        <div class="category_slider">
            <!-- Images -->
            <div class="slide_image">
                <img src="../assets/images/serum.png" alt="Serum">
            
                <!-- Overlay -->
                <div class="overlay">
                    <!-- Go Button -->
                    <router-link 
                    :to="{ name: 'category-overview',
                    params: { category: 'Serum'}}"
                    class="go_button">Go Now
                    </router-link>
                </div>
            </div>
            
            <!-- Detail -->
            <div class="slide_detail"></div>

            <!-- Type -->
            <div class="slide_type">
                <a href="#" text-decoration="none">Serum</a>
                <span>Serum, Essence, and Ampoule</span>
            </div>
        </div>
    </div>
    </div>
    </div>

    <!-- FOURTH SLIDE -->
    <div id="Moisturizer" class="tabcontent fade">
    <div class="category_box">
    <div class="container">
        <div class="category_slider">
            <!-- Images -->
            <div class="slide_image">
                <img src="../assets/images/moisturizer.png" alt="Moisturizer">
            
                <!-- Overlay -->
                <div class="overlay">
                    <!-- Go Button -->
                    <router-link 
                    :to="{ name: 'category-overview',
                    params: { category: 'Moisturizer'}}"
                    class="go_button">Go Now
                    </router-link>
                </div>
            </div>
            
            <!-- Detail -->
            <div class="slide_detail"></div>

            <!-- Type -->
            <div class="slide_type">
                <a href="#" text-decoration="none">Moisturizer</a>
                <span>Hydrate and retain your skin's moisture</span>
            </div>
        </div>
    </div>
    </div>
    </div>
</div>
</template>

<script src="../assets/script.js"></script>
<script>
export default {
    name: 'Category',
}
</script>

<style scoped>
/* TAB */
.tab {
    padding: 10px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  
}

/* Style the buttons inside the tab */
.tab button {
    float: left;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 0;
    box-shadow: 0 0 0 0 rgba(0,0,0,0.2);
}

/* Change background color of buttons on hover */
.tab button:hover {
    transition: 0.5s;
    transform: scale(1.01);
    background-color: #63775d;
    border: 2px solid #63775d; 
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #63775d;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

/* Fading Animation */
.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}

/* Category Card */
.category_post {
    display: block;
    background-color: #f4f1ec;
    width: auto;
    height: auto;
    padding: 3vh 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.category_box {
    width: auto;
    height: 70vh;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.category_slider {
    width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 20px;
    position: absolute;
    overflow: hidden;
    transform: translate(-50%, -50%);
}

.slide_image {
    height: 450px;
    position: relative;
}

.slide_image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
}

.slides_detail {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-sizing: border-box;
}

.slide_type {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 30px;
}

.slide_type a {
    color: black;
    margin: 5px 0px;
    font-weight: 700;
    letter-spacing: 0.5px;
    padding-right: 8px;
}

.slide_type span{
    color: black;
}

.overlay {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(244, 241, 236, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.overlay {
    visibility: hidden;
}

.slide_image:hover .overlay {
    visibility: visible;
    animation: fade 0.5s;
}

@keyframes fade{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

.go_button {
    width: 160px;
    justify-content: center;
    align-items: center;
    background-color: #7e9777;
    padding: 17px;
    border-radius: 56px;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    color: white;
}

.go_button:hover {
    transition: 0.5s;
    transform: scale(1.01);
    background-color: #63775d;
}
</style>