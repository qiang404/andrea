import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

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
    },
  },
  
  {
    path :'/detail/:id',
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
            component: () => import('@/components/Login/Login.vue'),
            name: 'Login',
            meta: {
              from:''
            },
            beforeEnter: (to, from, next) => {
              if (store.state.user.token!=null || window.sessionStorage.getItem('user') != null) {
                next({name:'Mine'})
              }
              else if (Object.keys(to.params).length === 0) {
                to.params.from = from.path
              }
              next()
            }
        },
        {
            path: 'register',
            component: () => import('@/components/Register/Register.vue'),
            name: 'Register'
        }
    ],
    name: 'Mine',
  },
  {
    path:'/pay/:oid',
    component: () => import('@/components/Pay/index.vue'),
    name: 'Pay',
    meta:{
      requireAuth:true
    },
  },
  {
    path:'/order',
    component: () => import('@/components/Order/index.vue'),
    name: 'Order',
  },
  { 
      path:'/store',
      component:() => import("@/components/Pay/SelectStore.vue"),
      name:'Store'
  },
  {
    path:'/address',
    component:() => import("@/components/Address"),
    name:'Address',
    children:[{
      path:'addaddress',
      component:() => import("@/components/Address/AddAddress"),
      name:"AddAddress"
    }]
  },
  {
    path:'/paysuccess/:oid',
    component:() => import("@/components/PaySuccess/PaySuccess.vue"),
    name:'PaySuccess'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth ) { 
    if (!store.state.user.token && window.sessionStorage.getItem('user') == null) {
      next({name: 'Login',params:{from:to.path}})
    } else {
      next()
    }
  }
  else {
    next()
  }
})
export default router
