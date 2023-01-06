import { defineStore } from "pinia";

import { useAuthStore } from "./auth.store";
import { getCommandeForUser } from "../services/commande";

const authStore = useAuthStore()

export const usePanierStore = defineStore({
  id: 'panier',
  state: async () => {
    commande: await getCommandeForUser(authStore.user.id)
  }
})