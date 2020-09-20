import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import MineRouter from './Mine'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
 if (onResolve || onReject) return originalPush.call(this, location, onResolve,
onReject)
 return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component : () => import ('@/views/Home'),
    name:'Home'
  },
  {
    path: '/sort',
    component: () => import('@/views/Sort'),
    name:'Sort'
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart'),
    name:'Cart',
    meta: {
      requireAuth:true
    }
  },
  
  {
    path :'/detail/:name',
    component:() => import('@/components/Detail'),
    name:'Detail'
  },
  {
    path: '/mine',
    component: () => import('@/views/Mine'),
    meta: {
      requireAuth:true
    },
    children: [{
            path: 'login',
            component: () => import('@/components/Login'),
            name: 'Login',
            meta: {
              from:''
            },
            beforeEnter: (to, from, next) => {
              if (Object.keys(to.params).length === 0) {
                to.params.from = from.path
              }
              next()
            }
        },
        {
            path: 'register',
            component: () => import('@/components/Register'),
            name: 'Register'
        }
    ],
    name: 'Mine',
  },
  {
    path:'/pay',
    component: () => import('@/components/Pay/index.vue'),
    name: 'Pay',
    meta:{
      requireAuth:true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.state.token) {
    if (to.path == '/pay') next({name:'Home'})
    else next({name: 'Login',params:{from:to.path}})
  }
  else {
    next()
  }
})
export default router
