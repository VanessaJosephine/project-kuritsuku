import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/cart/',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/favorite/',
    name: 'Favorite',
    component: () => import('../views/Favorite.vue')
  },
  {
    path: '/recycle',
    name: 'recycle',
    component: () => import('../views/Recycle.vue')
  },
  {
    path: '/:category/',
    name: 'category-overview',
    component: () => import('../views/CategoryPage.vue')
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue')
  }
]
});

