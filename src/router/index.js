import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{
      "title":"127.0.0.1"
    },
    component: () => import('../views/book/editor/main.vue')
  },
  {
    path: '/login',
    meta:{
      "title":"登陆"
    },
    component: () => import('../views/landing/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
