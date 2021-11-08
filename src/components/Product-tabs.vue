<template>
  <div class="tabs">
    <!-- Toggle 'Reviews' tab or 'Make a Review' tab -->
    <div class="tabLinks">
      <span v-for="(tab, index) in tabs" 
          :key="index" 
          @click="selectedTabs = tab"
          class="tab" 
          :class="{activeTab: selectedTabs === tab}">
          {{ tab }}
      </span>
    </div>

    <!-- Shows the review content (add new review card when a new review is added) -->
    <div class="tabContent"> 
      <div class="reviews" v-show="selectedTabs === 'Reviews'">
        <!-- If there is no review, a message will be shown -->
        <p v-if="!reviews.length">There are no reviews yet.</p>

        <!-- Start each review card -->
        <ul>
          <li v-for="(review, index) in reviews" :key="index">
            <div class="cardcontainer">
              <!-- Show reviewer's name and rating score -->
              <div class="reviewer">
                <i class='fas fa-user-circle' style="margin-right: 5px; font-size: 70px;"></i><br><br>
                <span> <strong>"{{ review.subject }}"</strong> </span><br>
                <span> <strong>Rating:</strong> {{ review.rating }} </span><br><br>
                <span> {{ review.name }} </span>
              </div>
              <!-- Show reviewer's opinion -->
              <div class="thereview">
                <!-- Show date -->
                <div class="date">
                  <p> {{currentDateTime()}} </p>
                </div>
                <p>{{ review.review }}</p>
              </div>
            </div>
          </li>
        </ul>
        <!-- End each review card -->
      </div>

      <!-- Shown when the "write a review" tab link is clicked -->
      <product-review
      v-show="selectedTabs === 'Write a Review'">
      </product-review>
    </div>
  </div>
</template>

<script>
import ProductReview from './Product-review.vue';

export default {
  name: "Product-tabs",
  components: {
    ProductReview,
  },
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tabs: ['Reviews','Write a Review'],
      selectedTabs: 'Reviews'
    }
  },
  methods: {
    // Shows the current date of when the review is submitted
    currentDateTime() {
      const current = new Date();
      const date = current.getFullYear()+'/'+(current.getMonth()+1)+'/'+current.getDate();
      const dateTime = date;
      
      return dateTime;
    },
  }
}
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

button.disabledState:hover {
  opacity: 1;
}

.reviews .cardcontainer {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
}

.cardcontainer {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 20px;
}

.reviewer {
  justify-content: center;
  align-items: center;
  text-align: center;
  display: block;
  background-color: #f4f1ec;
  border-radius: 20px 0 0 20px;
  margin: 0;
  padding: 30px;
}

.thereview {
  margin-left: 20px;
  background-color: white;
  border-radius: 0 20px 20px 0;
  margin: 0;
  padding: 30px;
}

.reviews h2 {
  margin: 0 0 15px;
}

.reviews ul {
  list-style: none;
}

.reviews li {
  margin: 0 0 20px;
  padding: 0 0 20px;
  border-bottom: 1px solid #e5e5e5;
}

.reviews li p {
  margin: 0 0 15px;
}

.review-form {
  background: #ACC3A6;
  padding: 40px 40px 5px;
}

.review-form .row {
  margin: 0 0 20px;
}

.review-form label {
  display: block;
  margin: 0 0 5px;
  margin-left: 10px;
}

.review-form input[type="text"],
.review-form textarea,
.review-form select {
  border: none;
  border-radius: 20px;  
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
  width: 100%;
  height: 45px;
  border: 1px solid #d4d4d4;
  font: 14px/1.4 'Poppins', sans-serif;
  padding: 10px 15px;
}

.review-form textarea {
  min-height: 120px;
  height: 120px;
}

.review-form input[type="text"]:focus,
.review-form textarea:focus,
.review-form select:focus {
  background-color: whitesmoke;
  transition: 0.5s;
  transform: scale(1.01);
}

.review-form .errorMessage {
  margin: 0 0 30px;
  padding: 10px;
  color: red;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.review-form .errorMessage h3 {
  margin: 0 0 10px;
}

.review-form .errorMessage ul {
  list-style-position: inside;
  font-size: 14px;
}

.tabs {
  margin: 0 0 50px;
  margin-left: 20px;
  margin-right: 20px;
}

.tabs .tab {
  padding: 15px;
  display: inline-block;
  cursor: pointer;
  background: #fff;
  border-bottom: 0;
  font: 18px/1.4 'Lora', serif;
  background: #ACC3A6;
  border-radius: 20px 20px 0 0;
  transition: 0.5s;
  color: white;
}

.tabs .tab:hover {
  background: #7e9777;
  transition: 0.5s;
}

.tabs .tab:first-child {
  border-right: 0;
}

.tabs .tab.activeTab {
  background: #688361;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.tabs .tabContent {
  background: #ACC3A6;
  padding: 30px;
  border-radius: 0 20px 20px 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.date {
  color: gray;
}
</style>