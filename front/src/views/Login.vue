<template>
  <div id="login">
    <div class="input-group">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" v-model="email">
    </div>
    <div class="input-group">
      <label for="password">Mot de passe</label>
      <input type="text" name="password" id="password" v-model="password">
    </div>
    <button @click="login">Se connecter</button>
  </div>
</template>
<script setup>
import { useAuthStore } from '../stores/auth.store'

let email = ""
let password = ""

function login() {
  const authStore = useAuthStore()

  return authStore.login(email, password).catch(error => {
    console.log(`Erreur : ${error}`)
  })
}
</script>
<style scoped>
#login {
  height: 90%;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  gap: 25px;
}
.input-group {
  display: flex;
  flex-direction: column;
}

</style>