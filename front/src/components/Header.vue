<template>
	<nav>
    <p @click="returnHome">Accueil</p>
    <p v-if="authStore.user">Panier</p>
    <p v-if="authStore.user" @click="logout">Déconnexion</p>
		<p @click="login" v-if="!authStore.user">Connexion</p>
		<p @click="register" v-if="!authStore.user">Inscription</p>
	</nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth.store'
const authStore = useAuthStore()
const router = useRouter()

function returnHome () {
  router.push({
    path: '/'
  })
}

function login () {
  router.push({
    name: 'Login'
  })
}

function register() {
  router.push({
    name: 'Register'
  })
}

function logout () {
  return authStore.logout()
}
</script>
<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  margin: 1em 0;
  /* width: 1280px; */
}
p {
  margin: 0;
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
}
</style>
