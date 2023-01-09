import {createRouter, createWebHashHistory} from 'vue-router'
import { useAuthStore } from '../stores/auth.store'

import Home from '../views/Home.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Panier from '../views/Panier.vue'
import User from '../views/User.vue'
import Commandes from '../views/Commandes.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetails},
  { path: '/login', name: 'Login', component: Login},
  { path: '/register', name: 'Register', component: Register},
  { path: '/panier', name: 'Panier', component: Panier},
  { path: '/user', name: 'User', component: User},
  { path: '/commandes', name: 'Commandes', component: Commandes}
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to) => {
  const publicPages = ['/', '/login', '/register', '/product/:id']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath
    return '/login'
  }
})


