<template>
  <div id="home">
    <Card v-for="product in products" :id="product.id" :nom="product.nom" :photo="product.photo" :prix="product.prix"></Card>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { getAllProduct } from '../services/product'
import Card from '../components/Card.vue';

let products = ref([])

onMounted(() => {
  getAllProduct().then(data => {
    products.value = data
  })
})
</script>
<style>
#home {
  display: flex;
  gap: 20px;
}
</style>