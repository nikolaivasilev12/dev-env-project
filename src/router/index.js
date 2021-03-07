import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CharacterDetails from '../views/CharacterDetails.vue'
import Comics from '../views/Comics.vue'
import Characters from '../views/Characters.vue'
import ComicsDetails from '../views/ComicsDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/character/:id',
    name: 'CharacterDetails',
    component: CharacterDetails
  },
  {
    path: '/comics',
    name: 'Comics',
    component: Comics
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/comicsdetails/:id',
    name: 'ComicsDetails',
    component: ComicsDetails
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
