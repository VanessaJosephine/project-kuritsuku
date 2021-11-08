<template>
<div class="cleanser">
    <div class="container">
    <div class="header">
        <!-- Title -->
        <div class="title">
            <h2><strong style="font-family: 'Lora', serif;">{{ pageTitle }}</strong></h2>
            <hr><br>
        </div>

        <!-- Functional Search Bar -->
        <div class="searchbar">
        <input id="search" type="text" v-model="search" placeholder="Search products...">
        <i class="fas fa-search"></i>
        </div>
    </div>

        <!-- Product Card -->
        <li class="card" v-for="product in filteredProducts" :key="product.id">
          <div class="container_out">
            <div class="category_box">
                <div class="category_slider">
                    <!-- Images -->
                    <div class="slide_image">
                        <img :src="makeImagePath(product)" alt="" />  
                    
                        <!-- Overlay -->
                        <div class="overlay">
                            <!-- Go Button -->
                            <router-link class="go_button" :to="{ name: 'product', params: { id: product.id}}">
                            Go Now</router-link>
                        </div>
                    </div>
                    
                    <!-- Detail -->
                    <div class="slide_detail"></div>

                    <!-- Type -->
                    <div class="slide_type">
                        <strong>{{ product.name }}</strong><br>
                        <span>{{ product.details }}</span>
                    </div>
                </div>
            </div>
          </div>      
        </li>
        <div class="bottom"></div>
    </div>
</div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js';

export default {
  name: "categoryOverview",
  mixins: [ imagePath ],
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  data() {
      return {
          search:''
      }
  },
  computed: {
    category() {
      return this.$route.params.category
    },
    pageTitle() {
        return `${this.category[0].toUpperCase()}${this.category.slice(1)}`
    },
    productsByCategory() {
      return this.$store.getters.productsByCategory(this.category)
    },
    // Use filters to render selected products (product name typed in the search bar)
    filteredProducts: function() {
        // toLowerCase() is used to make the search function case insensitive
        return this.$store.getters.productsByCategory(this.category).filter((product) => {
            return product.name.toLowerCase().match(this.search.toLowerCase());
        })
    }
  }
};
</script>

<style scoped>
.container {
    margin: 0 auto;
    max-width: 1170px;
    background-color: #acc3a6b9;
    border-radius: 20px;
}

.header {
    margin-top: 30px;
    border-radius: 20px 20px 0 0;
    padding: 3vh;
    background-color: #f4f1ec;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.bottom {
    margin-bottom: 30px;
    border-radius: 0 0 20px 20px;
    padding: 3vh;
    background-color: #f4f1ec;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

hr {
  border: none;
  height: 3px;
  margin-left: 20px;
  width: 100px;
  color: #7e9777;
  background-color: #7e9777;
}

.searchbar {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    transition: 0.5s;
}

.searchbar [type]
{
    width: 100%;
    padding: 15px;
    font-size: 15px;
    border: none;
    border-radius: 20px 0 0 20px;     
}

.searchbar:hover {
    background-color: whitesmoke;
    transition: 0.5s;
    transform: scale(1.01);
}

i {
    background-color: #7e9777;
    padding: 15px;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    transition: 0.5s;  
}

i:hover {
    background-color: #63775d;
    color: white;
    transition: 0.5s;
}

.container_out {
  margin: 0 auto;
  max-width: 1170px;
}

/* Product Card */
.category_post {
    display: block;
    background-color: #ACC3A6;
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
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.category_slider {
    width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 20px;
    overflow: hidden;
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
    background-color: #f4f1ec;
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