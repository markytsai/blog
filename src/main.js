import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/global.css'
import './assets/css/reset.css'
import './assets/font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
