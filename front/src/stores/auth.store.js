import { defineStore } from "pinia";

import { signIn } from '../services/user'
import { router } from "../routes/routes";


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
      this.user = null
      localStorage.removeItem('user')
      router.push('/')
    }
  }
})