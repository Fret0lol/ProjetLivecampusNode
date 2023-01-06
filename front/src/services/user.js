import axios from 'axios'

const URL = 'http://localhost:3000'

export async function signIn(email, password) {
  let data = JSON.stringify({
    email: email,
    password: password
  })
  console.log(data)

  let res = await axios({
    method: 'POST',
    url: `${URL}/user/sign-in`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data: data
  })
  console.log(data)
  return res.data
}

export async function signUp(email, password) {
  let data = JSON.stringify({
    email: email,
    password: password
  })
  console.log(data)

  let res = await axios({
    method: 'POST',
    url: `${URL}/user/sign-up`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data: data
  })
  return res.data
}