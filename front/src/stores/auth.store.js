import { defineStore } from "pinia";

import { signIn } from '../services/user'
import { router } from "../routes/routes";

import { usePanierStore } from './panier.store'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),
  actions: {
    async login(email, password) {
      const USER = await signIn(email, password)

      this.user = USER

      localStorage.setItem('user', JSON.stringify(USER))

      router.push(this.returnUrl || '/')
    },
    logout() {
      const panierStore = usePanierStore()
      this.user = null
      localStorage.removeItem('user')
      panierStore.clear()
      router.push('/')
    }
  }
})