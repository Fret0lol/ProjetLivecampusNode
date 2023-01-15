<template>
	<div id="commande">
		<Commande v-for="commande in commandes" :commande="commande"></Commande>
		<p v-if="commandes.length < 1">Vous n'avez pas de commandes</p>
	</div>
</template>
<script setup>
import Commande from '../components/Commande.vue'
import {onMounted, ref} from "vue";
import {useAuthStore} from "../stores/auth.store";
import {getCommandeForUser} from "../services/commande";

const authStore = useAuthStore();

const commandes = ref([]);

onMounted(async () => {
	commandes.value = await getCommandeForUser(authStore.user.id)
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
