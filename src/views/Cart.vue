<template>
  <div class="container">
      <!-- header -->
      <div class="header">
          <h2><strong style="font-family: 'Lora', serif;">Cart</strong></h2>
          <hr><br>
      </div>
      <ul class="cart-list">
        <!-- If there is no item inside the cart, a message will be shown -->
        <p id="if" v-if="!cartItems.length"><br><br><br><br>There are no items yet.<br><br><br><br></p>
        <li
          v-for="item in cartItems"
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
                <i class="fas fa-plus" @click="addToCart(item.id)"></i>
            </div> 
            <div class="btn3"> 
                <i class="fas fa-trash-alt" @click="removeFromCart(item.id)" ></i>
            </div>

          </div>
        </li>
      </ul>
      
      <section class="total-section" v-if="cartItems.length">
        <ul class="total-section-list">
          <!-- Total Items Quantity + Items Subtotal-->
          <li class="total-section__item">
            <p class="total-section__item__label"><i class="bx bx-chevron-right-circle"></i> {{ cartItemsCount }} Items</p>
            <p>Rp {{ itemsSubtotal }}</p>
          </li><br>

          <!-- Gift Option -->
          <li class="total-section__item">
            <p class="total-section__item__label"><i class="bx bx-chevron-right-circle"></i> Box Packaging</p>
            <select v-model="selectedGiftOption">
              <option disabled value="">Please select an option</option>
              <option
                v-for="option in giftOptionsArray"
                :key="option.text"
                :value="option.rate">
                {{ option.text }} (Rp {{ option.rate }})
              </option>
            </select>

          </li><br>

          <!-- Shipping -->
          <li class="total-section__item">
            <p class="total-section__item__label"><i class="bx bx-chevron-right-circle"></i> Shipping</p>
            <select v-model="selectedShippingOption">
              <option disabled value="">Please select an option</option>
              <option
                v-for="option in shippingOptionsArray"
                :key="option.text"
                :value="option.rate">
                {{ option.text }} (Rp {{ option.rate }})
              </option>
            </select>
          </li><br>

          <!-- Subtotal -->
          <li class="total-section__item">
            <p class="total-section__item__label"><i class="bx bx-chevron-right-circle"></i> Subtotal</p>
            <p>Rp {{ subtotal }}</p>
          </li><br>

          <!-- Tax -->
          <li class="total-section__item">
            <p class="total-section__item__label"><i class="bx bx-chevron-right-circle"></i> Tax ({{ salesTaxPercentage }})</p>
            <p>Rp {{ salesTaxApplied }}</p>
          </li><br>

          <!-- Total Payment -->
          <li class="total-section__item">
            <p class="total-section__item__label"><i class="bx bx-chevron-right-circle"></i> Total</p>
            <p>Rp {{ total }}</p>
          </li><br>

        </ul>

        <!-- Checkout Button -->
        <button v-if="cartItems.length" @click="showConfirmCheck = true">
            Check out
        </button>
        <Modal :show="showConfirmCheck"
                  :cancel="cancel"
                  :confirm="confirmCheck"
                  title="Proceed to checkout?" />

      </section>
      <div class="bottom"></div>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath';
import Modal from '../components/Modal.vue';

export default {
  name: 'cart',
  components: {
    Modal
  },
  // Show the images based on the product id with mixins
  mixins: [imagePath],
  data() {
    return {
      showConfirmCheck: false,
      salesTax: 0.05,
      selectedShippingOption: '',
      selectedGiftOption: '',
      giftOptionsArray: [
        {
          text: 'Use Special Gift Box',
          rate: 35000,
        },
        {
          text: 'Regular',
          rate: 10000,
        },
      ],
      shippingOptionsArray: [
        {
          text: 'Express / Same day',
          rate: 20000,
        },
        {
          text: 'Regular',
          rate: 15000,
        },
        {
          text: 'Economic',
          rate: 10000,
        },
        {
          text: 'Cargo',
          rate: 5000,
        },
      ],
    };
  },
  // Refers to the Vuex store
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartItemsCount() {
      return this.cartItems.length;
    },
    itemsSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    subtotal() {
      if (this.selectedGiftOption && this.selectedShippingOption && this.cartItemsCount > 0) {
        return Number(this.itemsSubtotal) + Number(this.selectedShippingOption) + Number(this.selectedGiftOption);
      }
      return '---';
    },
    salesTaxPercentage() {
      return `${this.salesTax * 100}%`;
    },
    salesTaxApplied() {
      if (this.selectedShippingOption && this.cartItemsCount > 0) {
        return (this.subtotal * this.salesTax).toFixed(2);
      }
      return '---';
    },
    total() {
      if (this.selectedShippingOption && this.cartItemsCount > 0) {
        return Number(this.subtotal) + Number(this.salesTaxApplied);
      }
      return '---';
    }
  },
  methods: {
    // For the cart component
    removeFromCart(itemId) {
      this.$store.dispatch('removeFromCart', itemId);
    },
    addToCart(itemId) {
      this.$store.dispatch('addToCart', itemId);
    },
    // For the modal component
    confirmCheck() {
      console.log('confirm check');
      this.showConfirmCheck = false;
      this.$router.push({name: "Checkout"})
    },
    cancel() {
      console.log('cancel');
      this.showConfirmCheck = false;
    }
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
  margin-left: 20px;
  margin-top: 5px;
  width: 50px;
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
  font-size: 30px;
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
  font-size: 30px;
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
  margin-left: 10px;
  padding: 20px;
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

.total-section {
  background: #FAFAFA;
  padding: 3vh;
}

.total-section-list {
  margin: 0;
}

.total-section__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-section__item__label {
  font-weight: bold;
  margin-right: 1rem;
}

button {
  width: 100%;
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

select {
  border: none;
  border-radius: 20px;  
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
  width: 260px;
  height: 45px;
  border: 1px solid #d4d4d4;
  font: 14px/1.4 'Poppins', sans-serif;
  padding: 10px 15px;
}

select:focus {
  background-color: whitesmoke;
  transition: 0.5s;
  transform: scale(1.01);
}

@media screen and (max-width: 525px) {
  .wrapper-in {
    grid-template-columns: 1fr;
  }
  .btn3 {
    border-radius: 0 0 20px 20px;
    padding-bottom: 10px;
  }
  .content {
    margin-left: 0;
  }
  select {
    width: 130px;
  }
}
</style>