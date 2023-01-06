<template>
<div id="panier">
  <h3>Panier</h3>
  <hr>
  <p v-if="!commandeEnCours">Panier vide</p>
  <LigneCommande></LigneCommande>
</div>
</template>
<script setup>
import LigneCommande from '../components/LigneCommande.vue';
import { onMounted, ref } from 'vue';
import { getCommandeForUserByStatut } from '../services/commande'
import { getAllLigneForCommande } from '../services/ligne_commande'

import { useAuthStore } from "../stores/auth.store";
const authStore = useAuthStore()

let commandeEnCours = ref({})
let ligneCommande = ref([])

onMounted(async () => {
  commandeEnCours = await getCommandeForUserByStatut(authStore.user.id, 'En_cours')
  console.log(commandeEnCours)
  if (commandeEnCours) {
    ligneCommande = await getAllLigneForCommande(commandeEnCours.id, authStore.user.token)
  }
})
</script>