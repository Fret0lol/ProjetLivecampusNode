<template>
	<div id="panier">
		<h3>Panier</h3>
		<hr />
		<p v-if="commandeEnCours.length == 0">Panier vide</p>
		<div class="ligneCommande-container">
			<LigneCommande
				v-for="ligne_commande in commandeEnCours"
				:id="ligne_commande.product?.id"
				:photo="ligne_commande.product?.photo"
				:nom="ligne_commande.product?.nom"
				:prix="ligne_commande.product?.prix"
				:quantite="ligne_commande?.quantite"
			></LigneCommande>
		</div>
		<div class="button-container">
			<button v-if="commandeEnCours.length > 0" @click="validCommande">Valider la commande</button>
		</div>
	</div>
</template>
<script setup>
import LigneCommande from "../components/LigneCommande.vue";
import {onMounted, ref, onBeforeUpdate} from "vue";

import {getProduct} from "../services/product";

import {usePanierStore} from "../stores/panier.store";
import {useAuthStore} from "../stores/auth.store";

const panierStore = usePanierStore();
const authStore = useAuthStore();

let commandeEnCours = ref([]);

onMounted(() => {
	init();
	console.log(commandeEnCours.value);
});

onBeforeUpdate(() => {
	init();
	console.log(commandeEnCours.value);
});

function init() {
	commandeEnCours.value = panierStore.commande;
}

async function validCommande() {
	let res = await panierStore.validate(authStore.user.id);
	if (res) {
		panierStore.clear();
		init();
	}
}
</script>
<style>
.button-container {
	margin-top: 20px;
	display: flex;
	justify-content: flex-end;
}
.ligneCommande-container {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
</style>
