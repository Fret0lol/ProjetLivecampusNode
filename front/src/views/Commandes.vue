<template>
	<div id="commande">
		<div class="commande" v-for="commande in commandes">
			<div class="commande-header">
				<div class="commande-header_left">
					<p>Commande n°{{ commande.id }}</p>
					<p>Date : {{ commande.date }}</p>
				</div>
				<div class="commande-header_right">
					<p>Statut : {{ commande.statut }}</p>
				</div>
			</div>
			<div class="commande-content">
        <LigneCommande v-for="ligne in commande.ligne_commande" :photo="ligne.product?.photo" :nom="ligne.product?.nom" :prix="ligne.product?.prix" :quantite="ligne.quantite" :updatable="false"></LigneCommande>
			</div>
		</div>
	</div>
</template>
<script setup>
import LigneCommande from "../components/LigneCommande.vue";
import {onMounted, ref} from "vue";
import {useAuthStore} from "../stores/auth.store";
import {getCommandeForUser} from "../services/commande";
import {getAllLigneForCommande} from "../services/ligne_commande";
import {getProduct} from "../services/product";

const authStore = useAuthStore();

const commandes = ref([]);

onMounted(async () => {
	commandes.value = await getCommandeForUser(authStore.user.id);
	commandes.value.forEach(async (commande) => {
    commande.ligne_commande = []
		let data = await getAllLigneForCommande(commande.id);
		await data.forEach(async (ligne_commande) => {
			let product = await getProduct(ligne_commande.product_id);
			ligne_commande.product = product;
			ligne_commande.quantite = ligne_commande.quantite;
      commande.ligne_commande = data
		});
	});
});
</script>
<style>
#commande {
	display: flex;
	flex-direction: column-reverse;
	gap: 20px;
}
.commande {
	border: 1px solid #fff;
	border-radius: 5px;
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
