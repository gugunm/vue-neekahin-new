import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/dashboard',
    name: 'home',
    component: Home
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ '../views/Tables')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Forms')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/ui',
    name: 'ui',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Ui')
  },
  {
    meta: {
      title: 'Login',
      formScreen: true
    },
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login')
  },
  {
    meta: {
      title: 'Landing',
      formScreen: true
    },
    path: '/',
    name: 'landing',
    component: () => import(/* webpackChunkName: "login" */ '../views/Landing')
  },
  {
    meta: {
      title: 'Order',
      formScreen: true
    },
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "login" */ '../views/Order')
  },
  {
    meta: {
      title: 'Order',
      formScreen: true
    },
    path: '/order-success',
    name: 'order-seccess',
    component: () => import(/* webpackChunkName: "login" */ '../views/OrderSuccess')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
