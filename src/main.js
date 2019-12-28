import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element/element.js'
import './plugins/element/index.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(require('vue-wechat-title'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
