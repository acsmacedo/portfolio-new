import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/curriculo',
    name: 'Curriculo',
    component: () => import('../components/Curriculo/Curriculo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
