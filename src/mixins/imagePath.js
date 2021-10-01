export const imagePath = {
  methods: {
    // Image path to the first product image in store.js
    makeImagePath(product) {
      return require(`../assets/images/${product.images[0]}`);
    },
    // Image path to the second product image in store.js
    makeImagePath1(product) {
      return require(`../assets/images/${product.images[1]}`);
    },
    // Image path to the third product image in store.js
    makeImagePath2(product) {
      return require(`../assets/images/${product.images[2]}`);
    },
  }
}
