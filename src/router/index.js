import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{
      "title":"123"
    },
    component: () => import('../views/book/editor/main.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
