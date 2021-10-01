<template>
  <!-- Product Page -->
  <div class="container">
    <div class="product">
      <div class="image">
        <img :src="makeImagePath(product)" />
      </div>
      <div class="content">
        <!-- Product Title -->
        <div class="title">
        <div><h1 id="h1"><strong>{{ product.name }}</strong></h1>
        </div>
          <button id="heart" @click="showConfirmFav = true" :disabled="product.favqty <= 0"
            :class="{ disabledState: product.favqty <= 0 }">
          <i class='fas fa-heart'></i>
          </button>

          <Modal :show="showConfirmFav"
          :cancel="cancel"
          :confirm="confirmFav"
          title="Add item to My Favorite?"
          />

        </div>

        <!-- Product Price -->
        <div class="price">Rp {{ product.price }}</div><br>

        <!-- Product Stock Info -->
        <div class="stockInfo">
          <span class="green" v-if="product.quantity > 10">In Stock</span>
          <span class="amber" v-else-if="product.quantity <= 10 && product.quantity > 0">
            Only few left
          </span>
          <span class="red" v-else>Out of Stock</span>
          <span class="stockcounter" style="color: black;"><em> {{ product.quantity }} left in stock </em></span>
        </div>  
        
        <!-- Product Detail Info -->
        <strong>Details</strong><br>
        <div class="details">
          {{ product.info }}
        </div><br>

        <!-- Product Features Info -->
        <strong>Quick Fact</strong><br>
        <ul class="features">
          <li v-for="(feature, index) in product.features" :key="index">
            <i class="fas fa-check"></i>
            {{ feature }}
          </li>
        </ul>
        
        <!-- Product Size Info -->
        <div class="variants">
          Size: 
          <span class="colorbox">
            {{ product.size }}
          </span>
        </div>
        
        <div class="addCart">
          <!-- When the product stock is 0, the add to cart button is disabled -->
          <button
            @click="showConfirmCart = true"
            :disabled="product.quantity <= 0"
            :class="{ disabledState: product.quantity <= 0 }"
          >
            Add to Cart
          </button>

          <Modal :show="showConfirmCart"
          :cancel="cancel"
          :confirm="confirmCart"
          title="Add item to cart?"
          />

        </div>

      </div>
    </div>
    <!-- Product Images -->
    <div class="productimages">
      <div class="image">
        <img :src="makeImagePath2(product)" />
      </div>
      <div class="image">
        <img :src="makeImagePath1(product)" />
      </div>
    </div>

    <!-- Shows the review component -->
    <product-tabs :reviews="reviews"></product-tabs>
  </div>
</template>

<script>
import ProductTabs from '../components/Product-tabs.vue';
import Modal from '../components/Modal.vue';
import { eventBus } from '../main.js';
import { imagePath }  from '@/mixins/imagePath.js'

export default {
  name: "product",
  mixins: [imagePath],
  components: {
    ProductTabs,
    Modal
  },
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id),
      reviews: [],
      // Modal should not be shown first, unless the button is clicked
      showConfirmCart: false,
      showConfirmFav: false,
    }
  },
  methods: {
    cancel() {
      // Modal will be closed
      console.log('cancel');
      this.showConfirmCart = false;
      this.showConfirmFav = false;
    },
    confirmCart() {
      // Modal will be closed and the item will be added to cart
      console.log('confirm cart');
      this.showConfirmCart = false;
      this.$store.dispatch('addToCart', this.$route.params.id);
    },
    confirmFav() {
      // Modal will be closed and the item will be added to my-favorite
      console.log('confirm fav');
      this.showConfirmFav = false;
      this.$store.dispatch('addToFav', this.$route.params.id)
    },
  },
  mounted() {
    // Add the product review to the from 'Product-review' component to the 'Product-tabs' component
    eventBus.$on('review-submitted', productReview => {
      this.reviews.push(productReview)
    })
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 14px/1.4 'Poppins', sans-serif;
}

h1,
h2,
h3 {
  font-family: 'Lora', serif;
}

#h1 strong {
  font-size: 25px;
  font-family: 'Lora', serif;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

button {
  width: 160px;
  justify-content: center;
  align-items: center;
  background-color: #7e9777;
  padding: 10px;
  border: 2px solid #7e9777;
  border-radius: 56px;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  color: white;
  cursor: pointer;
  transition: 0.5s;
}

.title
{
  display: flex;
  box-sizing: border-box;
  align-items: center;
}

#heart {
  width: auto;
  justify-content: center;
  align-items: center;
  border-radius: 56px;
  display: flex;
  background-color: white;
  border: 2px solid white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  color: pink;
  font-size: 30px;
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 20px;
  margin-left: 20px;
}

#heart.disabledState  {
  color: red;
  cursor: default;
}

button.disabledState:hover,
#heart.disabledState:hover {
  opacity: 1;
}

#heart:hover,
#heart:focus {
  transition: 0.5s;
  transform: scale(1.01);
}

button:hover,
button:focus {
  transition: 0.5s;
  transform: scale(1.01);
  background-color: #688361;
  border: 2px solid #688361;
}

button.disabledState {
  background: #bfbdbd;
  border: 2px solid #bfbdbd;
  cursor: default;
}


#header {
  background: #f5f5f5;
  padding: 40px 0;
  margin: 0 0 50px;
}

.container {
  margin: 0 auto;
  max-width: 1170px;
}

#header .cart {
  text-align: right;
}

.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
  margin-bottom: 30px;
  background: #7e9777;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.product .image {
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0 50px 0 0;
  margin: 30px;
  transition: 0.5s;
}

.image:hover {
  transition: 0.5s;
  transform: scale(1.01);
}

.product .content {
  background: #F4F1EC;
  padding: 30px;
  border-radius: 0 20px 20px 0;
}

.product .details{
  margin-top: 10px;
}

.product h1 {
  margin: 0 0 15px;
}

.product .stockInfo span {
  color: #fff;
  padding: 5px;
  display: inline-block;
  vertical-align: top;
}

.product .green {
  background: #76bb76;
}

.product .amber {
  background: #fdc660;
}

.product .red {
  background: #f54d4d;
}

.product .stockInfo {
  margin: 0 0 40px;
}

.product .features {
  margin: 10px 0 40px 0;
}

.product .features li {
  margin: 0 0 10px;
}

.product .variants {
  margin: 0 0 25px;
}

.product .variants span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.product .colorBox {
  width: 45px;
  height: 45px;
  background-color: #7e9777;
  display: inline-block;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.product .colorBox:hover {
  transform: scale(1.01);
}

.product .shipping {
  margin: 0 0 25px;
}

.productimages {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 20px;
}

.productimages .image {
  padding: 30px;
  transition: 0.5s;
}

@media (max-width: 850px){
    .product {
        grid-template-columns: 1fr;
    }
    .product .content {
        border-radius: 0px 0px 20px 20px;
    }
}
</style>