<template>
  <div id="admin-commandes">
    <AdminNavigate></AdminNavigate>
    <div class="content">
      <div class="content-header">
        <h2>Liste des commandes</h2>
      </div>
      <Commande is-edit v-for="commande in commandes" :commande="commande"></Commande>
    </div>
  </div>
</template>
<script setup>
import AdminNavigate from '../components/AdminNavigate.vue';
import Commande from '../components/Commande.vue'
import { getAllCommandes } from '../services/commande';
import { ref, onMounted } from 'vue' 

const commandes = ref()

function getAllCommandesFunction() {
  getAllCommandes().then(data => {
    commandes.value = data
  })
}

onMounted(() => {
  getAllCommandesFunction()
})

</script>
<style>
#admin-commandes {
  display: flex;
  flex-direction: row;
  gap: 40px;
}
</style>