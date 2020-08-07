import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Presentation from '../pages/A propos de nous/Presentation.vue';
import Organisation from '../pages/A propos de nous/Organisation.vue';
import MduD from '../pages/A propos de nous/Mot du directeur.vue';
import PdeF from '../pages/A propos de nous/Politique de formation.vue';
import PdeS from '../pages/A propos de nous/Politique de supervision.vue';
import Arretes from '../pages/Publications/Textes legislatifs/Arretes.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Presentation',
    name: 'Presentation',
    component: Presentation
  },
  {
    path: '/Mot du directeur',
    name: 'MduD',
    component: MduD
  },
  {
    path: '/Organisation',
    name: 'Organisation',
    component: Organisation
  },
  {
    path: '/Politique de Formation',
    name: 'PdeF',
    component: PdeF
  },
  {
    path: '/Politique de Supervision',
    name: 'PdeS',
    component: PdeS
  },
  {
    path: '/Arretes',
    name: 'Arretes',
    component: Arretes
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
