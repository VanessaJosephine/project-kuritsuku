<template>
  <div id="app">
    <!-- Shows the nav bar cmponent and footer component on every page -->
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
#app {
    background-image: url('/Images/background.png');
    background-position: center;
    background-repeat: repeat;
    width: 100%;
    height: 100%;
}
</style>
