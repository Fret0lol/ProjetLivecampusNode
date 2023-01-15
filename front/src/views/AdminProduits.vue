<template>
  <div id="admin-produits">
    <AdminNavigate></AdminNavigate>
    <div class="content">
      <div class="content-header">
        <h2>Liste des produits</h2>
        <button @click="ajoutAction">Ajouter un produit</button>
      </div>
      <div class="card-container">
        <AdminProductCard class="card" v-for="produit in products" :product="produit" @refresh="getAllProducts"></AdminProductCard>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import AdminNavigate from '../components/AdminNavigate.vue';
import { getAllProduct } from '../services/product';
import AdminProductCard from '../components/AdminProductCard.vue';
import { router } from '../routes/routes';

const products = ref()

onMounted(() => {
  getAllProducts()
})

function getAllProducts() {
  getAllProduct().then(data => {
    products.value = data
  })
}

function ajoutAction() {
  router.push({
    path: '/admin/produits/form'
  })
}
</script>
<style>
#admin-produits {
  display: flex;
  flex-direction: row;
  gap: 40px;
}
.content-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.card-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>