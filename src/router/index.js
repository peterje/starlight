import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [{
  path: '/',
  component: () => import(/* webpackChunkName: "layout-error" */ '@/layouts/DefaultLayout.vue'),
  children: [{
    path: '',
    name: 'home',
    component: () => import(/* webpackChunkName: "error" */ '@/pages/HomePage.vue')
  },
  {
    path: 'book',
    name: 'book',
    component: () => import(/* webpackChunkName: "error" */ '@/pages/BookPage.vue')
  },
  {
    path: 'party',
    name: 'party',
    component: () => import(/* webpackChunkName: "error" */ '@/pages/PartyPage.vue')
  },{
    path: 'characters',
    name: 'characters',
    component: () => import(/* webpackChunkName: "error" */ '@/pages/CharactersPage.vue')
  }
  ]

}, {
  path: '*',
  component: () => import(/* webpackChunkName: "layout-error" */ '@/layouts/ErrorLayout.vue'),
  children: [{
    path: '',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/pages/error/NotFoundPage.vue')
  }]
}
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

/**
 * Before each route update
 */
router.beforeEach((to, from, next) => {
  return next()
})

/**
 * After each route update
 */
router.afterEach((to, from) => {
})

export default router
