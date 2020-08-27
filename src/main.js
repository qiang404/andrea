import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller)

Vue.use(VueLazyLoad,{
  loading:require('./assets/img/lazy.gif')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
