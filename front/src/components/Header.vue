<template>
	<nav>
    <p @click="returnHome">Accueil</p>
		<p @click="login">Connexion</p>
		<p>Inscription</p>
	</nav>
</template>

<script setup>
import { useRouter } from 'vue-router';

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
