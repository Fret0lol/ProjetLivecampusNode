import { defineStore } from "pinia";
import { addCommande } from '../services/commande'
import { addLigneCommande } from '../services/ligne_commande'


export const usePanierStore = defineStore({
  id: 'panier',
  state: () => ({
    commande: JSON.parse(localStorage.getItem('panier')) || []
  }),
  actions: {
    add(product, quantite) {
      this.commande.push({ product, quantite })

      localStorage.setItem('panier', JSON.stringify(this.commande))
    },
    update(product_id, quantite) {
      this.commande.find(elt => {
        return elt.product.id === product_id
      }).quantite = quantite
      localStorage.setItem('panier', JSON.stringify(this.commande))
    },
    clear() {
      this.commande = []
      localStorage.removeItem('panier')
    },
    async validate(user_id) {
      let newCommande = await addCommande(user_id)

      this.commande.forEach(async (ligne_commande) => {
        await addLigneCommande(newCommande.id, ligne_commande.product.id, ligne_commande.quantite)
      })
      return true
    }
  }
})