<template>
	<div class="card">
		<img :src="props.photo" />
		<h3>{{ props.nom }}</h3>
		<div class="card-bottom">
			<p>Prix : {{ props.prix }}€</p>
			<button @click="getDetails">Détail</button>
		</div>
	</div>
</template>
<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

const props = defineProps({
	id: {
		type: Number,
	},
	nom: {
		type: String,
	},
	photo: {
		type: String,
	},
	prix: {
		type: Number,
	},
});

function getDetails() {
	router.push({
		name: "ProductDetails",
		params: {
			id: props.id,
		},
	});
}
</script>
<style scoped>
.card {
	display: flex;
	flex-direction: column;
	align-items: center;

	border: 1px solid #fff;
  border-radius: 5px;
}
img {
	height: 200px;
	width: 200px;
}
.card-bottom {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>
