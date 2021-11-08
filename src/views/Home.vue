<template>
<body>
  <div class="home">
    <Carousel />
    <Category />
<!-- Featured Product start -->
        <div class="feature_border" style="overflow-x: hidden;">
            <div class="feature">
            <!-- Featured Post + Link to Shop the Product -->
                <div class="feature_post">
                <div id="feature_name"><h2>AHA/BHA Clarifying Treatment Toner</h2></div>
                <p id="feature_content">With low pH formula made with purifying botanical ingredients, this toner refreshes, soothes, and softens the skin.</p>
                <button class="feature_button">
                    <router-link to="/products/12" class="navbar-link">Shop Now</router-link>
                </button>
                </div>

            <!-- Featured Video -->
                <div class="feature_vid">
                <iframe src="https://www.youtube.com/embed/YHHyxhq3IUw"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
                </div>
            </div>
        </div>
<!-- Featured Product end -->

<!-- About Us start -->
  <div class="aboutus">
      <div><h2>Our Values and Mission</h2><br>
      Learn more about how Kuritsuku changes the skin care industry with our clean, eco-friendly, vegan, and cruelty-free products.</div><br>
      <button class="aboutus_button">
          <router-link to="/About" class="navbar-link">
          About Us</router-link>
      </button>
  </div>
<!-- About Us end -->

<!-- Recycle start -->
  <div class="recycle">
      <div><h2>Recycle with KURITSUKU</h2><br>
      You can save the enviroment and sea turtles by putting your empty skincare into the box we have provided.</div><br>
      <button class="recycle_button">
          <router-link to="/Recycle" class="navbar-link">
          Recycle Now</router-link>
      </button>
  </div>
<!-- Recycle end -->
  </div>
</body>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Category from '@/components/Category.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Category,
  },
};
</script>

<style scoped>
* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
}
/* Feature */
.feature_border {
    width: 100%;
    height: auto;
    overflow: hidden;
}
.feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.feature_post {
    background-color: #ACC3A6;
    padding: 10vh;
    justify-content: center;
    align-items: center;
}
.feature_post > * {
    margin: 1.5vw;
}
.feature_vid {
    background-color: white;
    justify-content: center;
    align-content: center;
    display: flex;
    height: 65vh;
}
.feature_vid iframe {
    width: 100%;
    height: 100%
}

.feature_button {
    height: 40px;
    width: 160px;
    border: none;
    border-radius: 60px;
    outline: none;
    color: white;
}
.feature_button a {
    color: white;
}
.feature_button:hover {
    background: #63775d;
    transition: 0.5s;
    transition: 0.5s;
    transform: scale(1.01);
}

@media (max-width: 850px){
    .feature {
        grid-template-columns: 1fr;
    }
    .feature_vid {
        height: 400px;
    }
    .feature_vid iframe {
        width: 100%;
        height: 100%;
    }
}

/* Recycle */
.recycle {
    display: block;
    background-image: url("../assets/images/Recycle3.png");
    background-position: center;
    object-fit: cover;
    width: auto;
    height: 60vh;;
    padding: 10vh;
    align-items: center;
    text-align: left;
    color: white;
}
.recycle div {
    margin: 1.5vw;
}
.recycle_button {
    height: 40px;
    width: 160px;
    border: none;
    border-radius: 60px;
    outline: none;
    color: white;
}
.recycle_button a {
    color: white;
}
.recycle_button:hover {
    background: #63775d;
    transition: 0.5s;
    transition: 0.5s;
    transform: scale(1.01);
}

/* About Us */
.aboutus {
    display: block;
    background-color: #f4f1ec;
    padding: 10vh 400px;
    height: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.aboutus div {
    margin: 1.5vw;
}
.aboutus_button {
    height: 40px;
    width: 160px;
    border: none;
    border-radius: 60px;
    outline: none;
    color: white;
}
.aboutus_button a {
    color: white;
}
.aboutus_button:hover {
    background: #63775d;
    transition: 0.5s;
    transition: 0.5s;
    transform: scale(1.01); 
}
@media (max-width: 1500px){
    .aboutus {
        padding: 10vh 100px;
    }
}
</style>

