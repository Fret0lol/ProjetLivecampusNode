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

export async function getProduct(id) {
  let res = await axios({
    method: 'GET',
    url: `${URL}/product/${id}`,
    headers: { 
      'Content-Type': 'application/json'
    }
  })
  return res.data
}

export async function addProduct(nom, description, prix, photo) {
  const authStore = useAuthStore()

  let data = JSON.stringify({
    nom: nom,
    description: description,
    prix: prix,
    photo: photo
  })

  let res = await axios({
    method: 'POST',
    url: `${URL}/product`,
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': authStore.user.token
    },
    data: data
  })

  return res.data
}

export async function updateProduct(id, nom, description, prix, photo) {
  const authStore = useAuthStore()

  let data = JSON.stringify({
    id: id,
    nom: nom,
    description: description,
    prix: prix,
    photo: photo
  })
  let res = await axios({
    method: 'PUT',
    url: `${URL}/product/${id}`,
    headers: { 
      'Content-Type': 'application/json',
      'x-access-token': authStore.user.token
    },
    data: data
  })
  return res.data
}

export async function deleteProduct(id) {
  const authStore = useAuthStore()
  console.log(authStore.user.token)
  let res = await axios({
    method: 'DELETE',
    url: `${URL}/product/${id}`,
    headers: { 
      'Content-Type': 'application/json',
      'x-access-token': authStore.user.token
    }
  })
  return res.data
}