<template>
  <div class="commande">
    <div class="commande-header">
				<div class="commande-header_left">
					<p>Commande n°{{ commandeModel.id }}</p>
					<p>Date : {{ commandeModel.date }}</p>
				</div>
				<div class="commande-header_right">
					<p>Statut : {{ commandeModel.statut }}</p>
					<select v-if="isEdit" v-model="commandeModel.statut" @change="updateCommandeFunction">
						<option value="validé">Validée</option>
						<option value="payé">Payée</option>
						<option value="livré">Livrée</option>
						<option value="annulé">Annulée</option>
					</select>
				</div>
			</div>
			<div class="commande-content">
        <LigneCommande v-for="ligne in commandeModel.lignes_commande" :photo="ligne.product?.photo" :nom="ligne.product?.nom" :prix="ligne.product?.prix" :quantite="ligne.quantite" :updatable="false"></LigneCommande>
			</div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import LigneCommande from './LigneCommande.vue';
import { updateCommande } from '../services/commande'
import { getAllLigneForCommande } from '../services/ligne_commande';
import { getProduct } from '../services/product';
const props = defineProps({
  commande: {
    type: Object,
    required: true
  },
	isEdit: {
		type: Boolean
	}
})

let commandeModel = ref(props.commande)

onMounted(() => {
  getAllLigneForCommande(commandeModel.value.id)
    .then((data) => {
      commandeModel.value.lignes_commande = data
			commandeModel.value.lignes_commande.forEach(ligne => {
				getProduct(ligne.product_id).then(data => {
					ligne.product = data
				})
			})
    })
})

function updateCommandeFunction() {
	updateCommande(commandeModel.value.id, commandeModel.value.statut)
}
</script>
<style>
.commande {
	border: 1px solid #fff;
	border-radius: 5px;
	margin-bottom: 10px;
}
.commande-header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
}
.commande-header_left {
	display: flex;
	flex-direction: row;
	gap: 20px;
}
</style>