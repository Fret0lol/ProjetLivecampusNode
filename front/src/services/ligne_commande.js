import axios from 'axios'

const URL = 'http://localhost:3000'

export async function getAllProduct() {
  let res = await axios({
    method: 'GET',
    url: `${URL}/product`
  })
  return res.data
}

export async function getAllLigneForCommande(commande_id, token) {
  let res = await axios({
    method: 'GET',
    url: `${URL}/ligne_commande/${commande_id}`,
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
  return res.data
}
