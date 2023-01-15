<template>
	<div id="admin-product-card">
		<div class="card-left">
			<div class="img">
				<img :src="product.photo" />
			</div>
			<div class="content">
				<h3>{{ product.nom }}</h3>
				<p>{{ product.description }}</p>
				<p>{{ product.prix }}€</p>
			</div>
		</div>

		<div class="actions">
			<button @click="updateAction">Modifier</button>
			<button class="red" @click="deleteAction">Supprimer</button>
		</div>
	</div>
</template>
<script setup>
import {deleteProduct} from '../services/product'
import {router} from '../routes/routes'
const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
});

const emit = defineEmits(['refresh'])

function deleteAction() {
	deleteProduct(props.product.id)
		.then(() => {
			emit('refresh')
		})
		.catch(err => {
			console.log(err)
		})
}

function updateAction() {
	router.push({
		path: `/admin/produits/${props.product.id}`
	})
}
</script>
<style>
#admin-product-card {
	display: flex;
	flex-direction: row;
	border: 1px solid #fff;
	border-radius: 5px;
  justify-content: space-between;
}
.card-left {
  display: flex;
  flex-direction: row;
}
img {
	height: 150px;
	width: 150px;
}
.actions {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5px;
}
.red {
	background-color: red;
}
</style>
