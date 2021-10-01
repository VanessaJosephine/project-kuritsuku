<template>
  <div class="container">
      <!-- Header -->
        <div class="header">
          <h2><strong style="font-family: 'Lora', serif;">Checkout</strong></h2>
          <hr><br>
        </div>
        <p id="if">Thank you for your purchase!</p>
        <p><button class="feature_button" @click="goHome()">Go Home</button></p>
        
        <div class="bottom"></div>
  </div>
</template>

<script>
export default {
    name: 'Checkout',
    methods: {
        goHome() {
            console.log('home');
            window.location.href = '/'
    },
    }
}
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

p {
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
}

#if {
    font-size: 30px;
    font-family: 'Lora', serif;
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
button {
    height: 40px;
    width: 160px;
    border: none;
    border-radius: 60px;
    outline: none;
    color: white;
    margin-bottom: 50px;
}
button:hover {
    background: #63775d;
    transition: 0.5s;
    transition: 0.5s;
    transform: scale(1.01);
}

</style>