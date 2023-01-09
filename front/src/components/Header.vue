<template>
	<nav>
    <RouterLink to="/">
      <p>Accueil</p>
    </RouterLink>
    <RouterLink v-if="authStore.user" to="/user">
      <p>Compte</p>
    </RouterLink>
    <RouterLink v-if="authStore.user" to="/panier">
      <p>Panier</p>
    </RouterLink>
    <p v-if="authStore.user" @click="logout">Déconnexion</p>
    <RouterLink v-if="!authStore.user" to="/login">
      <p>Connexion</p>
    </RouterLink>
    <RouterLink v-if="!authStore.user" to="/register">
      <p>Inscription</p>
    </RouterLink>
	</nav>
</template>

<script setup>
import { useAuthStore } from '../stores/auth.store'
const authStore = useAuthStore()

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
