import Vue from 'vue'
import router from './router'
import traffic from './traffic.vue'
Vue.config.productionTip = false


var tl = new Vue({
el: '#traffic-light', 
  router,
  template: '<traffic/>',
  components: { traffic }
})