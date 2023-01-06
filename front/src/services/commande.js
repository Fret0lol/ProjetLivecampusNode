import axios from 'axios'

const URL = 'http://localhost:3000'

export async function getAllCommande() {
  let res = await axios({
    method: 'GET',
    url: `${URL}/commande`
  })
  return res.data
}

export async function getCommandeForUser(user_id) {
  let res = await axios({
    method: 'GET',
    url: `${URL}/commande/user/${user_id}`,
    headers: { 
      'Content-Type': 'application/json'
    }
  })
  return res.data
}

export async function getCommandeForUserByStatut(user_id, statut) {
  let res = await axios({
    method: 'GET',
    url: `${URL}/commande/user/${user_id}/statut/${statut}`,
    headers: { 
      'Content-Type': 'application/json'
    }
  })
  return res.data
}
