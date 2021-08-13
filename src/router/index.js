import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import DefaultLayout from "@/layouts/DefaultLayout";
import HomePage from "@/pages/HomePage";
import EventsPage from "@/pages/EventsPage";
import RemotePage from "@/pages/RemotePage";
import CastingPage from "@/pages/CastingPage";
import BookPage from "@/pages/BookPage";
import PartyPage from "@/pages/PartyPage";
import ErrorLayout from "@/layouts/ErrorLayout";
import SimpleLayout from "@/layouts/SimpleLayout";
import NotFoundPage from "@/pages/error/NotFoundPage"
import CharactersPage from "@/pages/CharactersPage";
import AdminPage from "@/pages/AdminPage";
export const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: SimpleLayout,
    children: [{
      path: '',
      name: 'admin',
      component: AdminPage
    }]
  },
  {
  path: '/',
  component: DefaultLayout,
  children: [{
    path: '',
    name: 'home',
    component: HomePage
  },{
    path: 'events',
    name: 'events',
    component: EventsPage
  },{
    path: 'remote',
    name: 'remote',
    component: RemotePage
  },{
    path: 'casting',
    name: 'casting',
    component:CastingPage
  },
  {
    path: 'book',
    name: 'book',
    component:BookPage
  },
  {
    path: 'party',
    name: 'party',
    component:PartyPage
  },{
    path: 'characters',
    name: 'characters',
    component: CharactersPage
  }
  ]

}, {
  path: '*',
  component:ErrorLayout,
  children: [{
    path: '',
    name: 'error',
    component:NotFoundPage
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
