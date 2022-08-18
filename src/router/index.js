import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { 
    path: '/character/:id', 
    name: 'character',
    component: () => import(/* webpackChunkName: "character" */ '../views/CharacterView.vue')
  },
  { 
    path: '/location/:id', 
    name: 'location',
    component: () => import(/* webpackChunkName: "location" */ '../views/LocationView.vue')
  },
  { 
    path: '/characters/:page(\\d+)', 
    name: 'characters',
    meta: {
      reload: true,
    },
    component: () => import(/* webpackChunkName: "characters" */ '../views/CharactersView.vue')
  },
  { 
    path: '/locations/:page(\\d+)', 
    name: 'locations',
    component: () => import(/* webpackChunkName: "locations" */ '../views/LocationsView.vue')
  },
  { 
    path: '/episodes', 
    name: 'episodes',
    component: () => import(/* webpackChunkName: "episodes" */ '../views/EpisodesView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
