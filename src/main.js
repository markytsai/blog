import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/global.css'
import './assets/css/reset.css'
import './assets/font-awesome/css/font-awesome.css'
import vuelazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(vuelazyload, {
  loading: '/loading2.gif',
  error: '/default-pic.png'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
