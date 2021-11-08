<template>
  <div class="about">

    <!-- Header -->
    <div class="header">
      <h2 style="font-family: 'Lora', serif;">KURITSUKU's Mission</h2><hr><br>
      <div class="title" style="font-family: 'Lora', serif;">
        protect + revive your skin.
      </div><br>
    </div>

    <!-- 1st Content -->
    <div class="container">
      <!-- 1st Content -->
      <div class="feature_border" style="overflow-x: hidden;">
            <div class="feature">
            <!-- Featured Post + Link to Shop the Product -->
                <div class="feature_post" style="background-color: #63775d; color: white;">
                <div id="feature_name"><h2>Clean, skin-centric beauty.</h2><hr style="background-color: #f4f1ec"></div>
                <p id="feature_content">We believe in skin that looks like skin—and radiance that comes naturally. With transparency as our guide and color as our vehicle, we challenge the conventions of clean beauty to create something radically new, through safe, potent formulas that protect and revive your skin.</p>
                </div>

            <!-- Featured Image -->
                <div class="image">
                  <img src="../assets/images/CER2.jpg" />
                </div>
            </div>
      </div>

      <!-- 2nd Content -->
      <div class="feature_border" style="overflow-x: hidden;">
            <div class="feature">
              <!-- Featured Video -->
                <div class="feature_vid">
                <iframe src="https://www.youtube.com/embed/13HA29c7F0Y"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
                </div>
            <!-- Featured Post + Link to Shop the Product -->
                <div class="feature_post2" style="background-color: #7e9777; color: white;">
                <div id="feature_name"><h2>We believe in better.</h2><hr style="background-color: #f4f1ec"><br></div>
                <p id="feature_content">We learned early on that not every natural ingredient is good for the skin, nor is every synthetic bad. Clean beauty is where those two collide—with conscious, carefully-selected ingredients, and no compromises. Since we started, we have been continually working to push the boundaries of innovation—and the industry—forward.</p>
                </div>
            </div>
      </div>

      <!-- 3rd Content -->
      <div class="feature_border" style="overflow-x: hidden;">
            <div class="feature">
            <!-- Featured Post + Link to Shop the Product -->
                <div class="feature_post">
                <div id="feature_name"><h2>Better is a balance.</h2><hr style="background-color: #f4f1ec"></div>
                <p id="feature_content">We strive towards more sustainable packaging through the use of recycled aluminum, glass components, and responsibly sourced paper. But it isn’t enough—that’s only the beginning of the product’s lifecycle. We believe end-of-life is far more important, to ensure products don’t end up in a landfill.</p>
                <button class="recycle_button">
                  <router-link to="/Recycle">
                  Recycle Page</router-link>
                </button>
                </div>

            <!-- Featured Image -->
              <div class="image">
                  <img src="../assets/images/Low4.jpg" />
              </div>
            </div>
      </div>
      

    </div>
  </div>
</template>

<script>

export default {
    name: 'About',
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1170px;
  border-radius: 20px;
}

.header {
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
.header div {
  margin: 1.5vw;
}

.title {
  font-size: 80px;
}

hr {
  border: none;
  height: 3px;
  margin-left: 20px;
  margin-top: 5px;
  width: 250px;
  color: #7e9777;
  background-color: #7e9777;
}

.feature_border {
    width: 100%;
    height: auto;
    overflow: hidden;
}
.feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 20px;
}
.feature_post {
    background-color: #ACC3A6;
    padding: 10vh;
    justify-content: center;
    align-items: center;
    border-radius: 20px 0 0 20px;
}
.feature_post2 {
    background-color: #ACC3A6;
    padding: 10vh;
    justify-content: center;
    align-items: center;
    border-radius: 0 20px 20px 0;
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

.image {
  padding: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: 0.5s;
  background-color: white;
  border-radius: 0 20px 20px 0;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

img:hover {
  transition: 0.5s;
  transform: scale(1.01);
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

@media screen and (max-width: 1000px){
    .container {
        max-width: 500px;
    }
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
    .image {
        border-radius: 0 0 20px 20px;
        justify-content: center;
        align-items: center;
        display: flex;
        transition: 0.5s;
    }
    .feature_post {
        border-radius: 20px 20px 0 0;
        padding: 5vh;
    }
    .feature_post2 {
        border-radius: 0 0 20px 20px;
        padding: 5vh;
    }
    .feature_vid {
        border-radius: 20px 20px 0 0;
    }
    hr {
      width: 150px;
    }
    .header{
      padding: 5vh;
    }
}
</style>