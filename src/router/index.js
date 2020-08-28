import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component : () => import ('@/views/Home'),
  },
  {
    path: '/sort',
    component: () => import('@/views/Sort')
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart')
  },
  {
    path: '/mine',
    component: () => import('@/views/Mine')
  },
  {
    path :'/detail/:cid',
    component:() => import('@/components/Detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
