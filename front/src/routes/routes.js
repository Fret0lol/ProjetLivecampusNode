import {createRouter, createWebHashHistory} from 'vue-router'
import { useAuthStore } from '../stores/auth.store'

import Home from '../views/Home.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Panier from '../views/Panier.vue'
import User from '../views/User.vue'
import Commandes from '../views/Commandes.vue'
import AdminCommandes from '../views/AdminCommandes.vue'
import AdminProduits from '../views/AdminProduits.vue'
import ProduitForm from '../views/ProduitForm.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetails},
  { path: '/login', name: 'Login', component: Login},
  { path: '/register', name: 'Register', component: Register},
  { path: '/panier', name: 'Panier', component: Panier},
  { path: '/user', name: 'User', component: User},
  { path: '/commandes', name: 'Commandes', component: Commandes},
  { path: '/admin/commandes', name: 'AdminCommandes', component: AdminCommandes,
  beforeEnter: (to, from, next) => {
    const auth = useAuthStore()

    if (auth.user.role !== 'admin') {
      next(false)
    } else {
      next()
    }
  }},
  { path: '/admin/produits', name: 'AdminProduits', component: AdminProduits,
  beforeEnter: (to, from, next) => {
    const auth = useAuthStore()

    if (auth.user.role !== 'admin') {
      next(false)
    } else {
      next()
    }
  }},
  { path: '/admin/produits/:id', name: 'FormProduit', component: ProduitForm,
  beforeEnter: (to, from, next) => {
    const auth = useAuthStore()

    if (auth.user.role !== 'admin') {
      next(false)
    } else {
      next()
    }
  }}
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

function isAdmin(to) {
  const auth = useAuthStore()

  if (auth.user.role !== 'admin') {
    return '/'
  }
}

router.beforeEach(async (to) => {
  const publicPages = ['/', '/login', '/register']
  let authRequired = !publicPages.includes(to.path)
  if (to.path.includes('/product/')) {
    authRequired = false
  }
  const auth = useAuthStore()

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath
    return '/login'
  }
})


