<template>
  <div class="container">
      <!-- Header -->
      <div class="header">
          <h2><strong style="font-family: 'Lora', serif;">My Favorite</strong></h2>
          <hr><br>
      </div>
      <ul class="cart-list">
        <!-- If there is no item inside the cart, a message will be shown -->
        <p id="if" v-if="!favItems.length"><br><br><br><br>There are no items yet.<br><br><br><br></p>
        <li
          v-for="item in favItems"
          :key="item.id"
          >

          <div class="wrapper-in">
            
            <!-- Image / Thumbnail -->
            <div class="image">
              <img :src="makeImagePath(item)" class="thumbnail" alt="">
            </div>

            <!-- Product Information -->
            <div class="content">
              <p><strong>{{ item.name }}</strong></p><br><br>
              <strong>Details:</strong>
              <p>Size: {{ item.size }}</p>
              <p>Rp {{ item.price }}</p>
            </div>

            <!-- Buttons -->
            <div class="btn2"> 
                <i class="fas fa-cart-plus" v-if="item.quantity != 0" @click="addToCart(item.id), removeFromFav(item.id)"></i>
            </div> 
            <div class="btn3"> 
                <i class="fas fa-trash-alt" @click="removeFromFav(item.id)"></i>
            </div>

          </div>
        </li>
      </ul>
      <div class="bottom"></div>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
export default {
  name: 'Favorite',
  mixins: [imagePath],
  computed : {
    favItems() {
      return this.$store.getters.favItems;
    },
  },
  methods: {
    // Removes item from the my-favorite feature and add the item to cart functions
    removeFromFav(itemId) {
      this.$store.dispatch('removeFromFav', itemId);
    },
    addToCart(itemId) {
      this.$store.dispatch('addToCart', itemId);
    },
  },
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

#if {
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
}

hr {
  border: none;
  height: 3px;
  margin-top: 5px;
  margin-left: 20px;
  width: 130px;
  color: #7e9777;
  background-color: #7e9777;
}

.btn3 {
  background-color: #F4F1EC;
  border-radius: 0 20px 20px 0;
  padding-right: 10px;
}

.btn2 {
  background-color: #F4F1EC;
  padding-right: 10px;
}

.btn3 i {
  cursor: pointer;
  color: red;
  font-size: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  transition: 0.5s;
}

.btn3 i:hover {
  color: darkred;
  transition: 0.5s;
}

.btn2 i {
  cursor: pointer;
  color: lightgreen;
  font-size: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  transition: 0.5s;
}

.btn2 i:hover {
  color: darkgreen;
  transition: 0.5s;
}

.cart-list {
  margin-right: 30px;
  margin-left: 30px;
  margin: 0;
  margin: 20px;
}

.content {
  background: #F4F1EC;
  padding: 30px;
  display: grid;
}

.content p {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-list__btn-remove {
  margin-top: .5rem;
}

.wrapper-in .image {
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 10px;
  transition: 0.5s;
}

.thumbnail {
  padding: 10px;
  max-width: 150px;
}

.wrapper-in {
  display: grid;
  grid-template-columns: 0.2fr 1fr 50px 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>