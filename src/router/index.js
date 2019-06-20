import Vue from 'vue'
import Router from 'vue-router'
import Yellow from '../components/Yellow'
import Green from '../components/Green'
import Red from '../components/Red'
import traffic from '../components/traffic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Yellow',
      name: 'Yellow',
      component: Yellow
    },
    {
      path: '/Green',
      name: 'Green',
      component: Green
    },
    {
    path: '/',
    name: 'traffic',
    component: traffic
    },
    {
    path: '/Red',
    name: 'Red',
    component: Red
    }
  ]
})