import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

// library.add(faSpinner)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Allows communication between any component
export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
