import axios from 'axios'

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
