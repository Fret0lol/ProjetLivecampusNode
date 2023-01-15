<template>
	<div id="product-form">
		<h2>{{ isEdit ? "Modification " : "Ajout " }}d'un produit</h2>
		<div class="input-group">
			<label for="nom">Nom</label>
			<input type="text" name="nom" v-model="product.nom" />
		</div>
		<div class="input-group">
			<label for="descriptino">Description</label>
			<input type="text" name="description" v-model="product.description" />
		</div>
		<div class="input-group">
			<label for="photo">Photo</label>
			<input type="text" name="photo" v-model="product.photo" />
		</div>
		<div class="input-group">
			<label for="prix">Prix</label>
			<input type="number" name="prix" v-model="product.prix" />
		</div>
		<button @click="save">{{ isEdit ? "Modifier" : "Ajouter" }}</button>
	</div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import {addProduct, getProduct, updateProduct} from "../services/product";
import {router} from "../routes/routes";
import {useRoute} from "vue-router";

const route = useRoute();

let product = ref({});
let isEdit = false;

onMounted(() => {
	isEdit = route.params.id !== 'form'
	if (isEdit) {
		getProduct(route.params.id).then((data) => {
			product.value = data;
		});
	} else {
		product.value = {
			nom: "",
			description: "",
			photo: "",
			prix: 0,
		};
	}
});

function save() {
	if (route.params.id) {
		updateProduct(product.value.id, product.value.nom, product.value.description, product.value.prix, product.value.photo).then(() => {
			router.push({
				path: "/admin/produits",
			});
		});
	} else {
		addProduct(product.value.nom, product.value.description, product.value.prix, product.value.photo).then(() => {
			router.push({
				path: "/admin/produits",
			});
		});
	}
}
</script>
<style>
#product-form {
	height: 90%;
	display: flex;
	flex-direction: column;
	place-items: center;
	justify-content: center;
	gap: 25px;
}
.input-group {
	display: flex;
	flex-direction: column;
}
</style>
