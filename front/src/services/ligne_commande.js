import axios from 'axios'
import { useAuthStore } from '../stores/auth.store'

const URL = 'http://localhost:3000'

export async function getAllProduct() {
  let res = await axios({
    method: 'GET',
    url: `${URL}/product`
  })
  return res.data
}

export async function getAllLigneForCommande(commande_id) {
  const authStore = useAuthStore()

  let res = await axios({
    method: 'GET',
    url: `${URL}/ligne_commande/${commande_id}`,
    headers: { 
      'Content-Type': 'application/json',
      'x-access-token': authStore.user.token
    }
  })
  return res.data
}

export async function addLigneCommande(commande_id, product_id, quantite) {
  const authStore = useAuthStore()
  
  let data = JSON.stringify({
    commande_id: commande_id,
    product_id: product_id,
    quantite: quantite
  })
  let res = await axios({
    method: 'POST',
    url: `${URL}/ligne_commande/add`,
    headers: { 
      'Content-Type': 'application/json',
      'x-access-token': authStore.user.token
    },
    data: data
  })
  return res.data
}
