<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <!-- Shows the error message based on waht the user has not input yet -->
    <div class="errorMessage" v-if="errors.length">
      <h3>Please correct the following error(s):</h3>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>

    <!-- The user has to fill all input -->
    <div class="row">
      <input type="text" placeholder="Name..." id="name" v-model="name">
    </div>
    <div class="row">
      <input type="text" placeholder="Subject" id="subject" v-model="subject">
    </div>
    <div class="row">
      <textarea id="review" placeholder="Write a review..." v-model="review"></textarea>
    </div>
    <div class="row">
      <label name="rating">Rating</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </div>
    <!-- Submit button -->
    <div class="row">
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
// Event Bus is used for communication between two components (not necessarily between parent to child component)
import { eventBus } from '../main.js';

export default {
  name: "Product-review",
  data() {
    return {
      name: null,
      subject: null,
      review: null,
      rating: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      this.errors = []
      // If all the input have been filled, then the productReview will be updated
      if(this.name && this.review && this.rating && this.subject) {
        let productReview = {
        name: this.name,
        subject: this.subject,
        review: this.review,
        rating: this.rating
      }
      // eventBus is used as a communication between components
      eventBus.$emit('review-submitted', productReview)
      this.name = null
      this.subject = null
      this.review = null
      this.rating = null
      }
      // Shows an error based on which input is still empty
      else {
        if(!this.name) this.errors.push('Name required.');
        if(!this.subject) this.errors.push('Subject reuired.');
        if(!this.review) this.errors.push('Review required.');
        if(!this.rating) this.errors.push('Rating required.');
      }
    }
  },
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
</style>