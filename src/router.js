import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../src/views/Login.vue'
import Register from '../src/views/Register.vue'
import Error404 from '../src/views/Error404.vue'
import Dashboard from '../src/views/Dashboard.vue'

import User from '../src/views/User.vue'
import Typo from '../src/views/Typo.vue'
import Table from '../src/views/Table.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login, alias: ['/'] },
  { path: '/register', component: Register },
  {
    path: '/users',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      { path: '/table', component: Table },
      { path: '/typo', component: Typo },
      { path: '/user', component: User }
    ]
  },
  {
    path: '/typo',
    name: 'Typo',
    component: () => import('../src/views/Typo.vue')
  },
  { path: '*', component: Error404 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
