import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import Scroller from '@/components/common/Scroller'
import Toast from '@/components/common/Toast/toast'
import Loading from '@/components/common/Toast/loading'
import {request} from '@/network/request'

Vue.prototype.$request = request

Vue.component('Scroller',Scroller)

Vue.use(Toast)
Vue.use(Loading)
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/lazy.gif')
})

Vue.directive('radio',{
  bind(el,binding) {
    el.addEventListener('click',(e) => {
      setTimeout(() => {
        if (!binding.changed) {
          e.target.checked = false
        }
        binding.changed = false
      }, 0);
    })
    el.addEventListener('change',() => {
      binding.changed = true
    })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
