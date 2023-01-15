import axios from 'axios'
import { useAuthStore } from '../stores/auth.store'

const URL = 'http://localhost:3000'


export async function getAllCommandes() {
  const authStore = useAuthStore()

  let res = await axios({
    method: 'GET',
    url: `${URL}/commande/`,
    headers: {
      'x-access-token': authStore.user.token
    }
  })
  return res.data
}

export async function getCommandeForUser(user_id) {
  const authStore = useAuthStore()

  let res = await axios({
    method: 'GET',
    url: `${URL}/commande/user/${user_id}`,
    headers: { 
      'Content-Type': 'application/json',
      'x-access-token': authStore.user.token
    }
  })
  return res.data
}

export async function getCommandeForUserByStatut(user_id, statut) {
  const authStore = useAuthStore()

  let res = await axios({
    method: 'GET',
    url: `${URL}/commande/user/${user_id}/statut/${statut}`,
    headers: { 
      'Content-Type': 'application/json',
      'x-access-token': authStore.user.token
    }
  })
  return res.data
}

export async function addCommande(user_id) {
  const authStore = useAuthStore()

  let data = JSON.stringify({
    date: new Date().toUTCString(),
    statut: 'validé',
    user_id: user_id
  })

  let res = await axios({
    method: 'POST',
    url: `${URL}/commande/add`,
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': authStore.user.token
    },
    data: data
  })
  return res.data
}

export async function updateCommande(id, statut) {
  const authStore = useAuthStore()

  let data = JSON.stringify({
    id: id,
    statut: statut
  })
  let res = await axios({
    method: 'PUT',
    url: `${URL}/commande/${id}`,
    headers: { 
      'Content-Type': 'application/json',
      'x-access-token': authStore.user.token
    },
    data: data
  })
  return res.data
}
