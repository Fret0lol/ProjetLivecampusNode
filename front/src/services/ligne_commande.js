import axios from 'axios'

const URL = 'http://localhost:3000'

export async function getAllProduct() {
  let res = await axios({
    method: 'GET',
    url: `${URL}/product`
  })
  return res.data
}

export async function getAllLigneForCommande(commande_id) {
  let res = await axios({
    method: 'GET',
    url: `${URL}/ligne_commande/${commande_id}`,
    headers: { 
      'Content-Type': 'application/json'
    }
  })
  return res.data
}

export async function addLigneCommande(commande_id, product_id, quantite) {
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
    },
    data: data
  })
  return res.data
}
