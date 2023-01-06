<template>
  <div id="productDetails">
    <div class="left">
      <img :src="product.photo"/>
    </div>
    <div class="right">
      <h1 class="title">
        {{ product.nom }}
      </h1>
      <div class="description">
        <p>Description :</p>
        <p>{{ product.description }}</p>
      </div>
      <div class="right-footer">
        <div class="prix">
          <p>Prix : </p>
          <p>{{ product.prix }} €</p>
        </div>
        <button>Ajouter au panier</button>
      </div>

    </div>
  </div>
</template>
<style>
#productDetails {
  height: 90%;
  display: flex;
  gap: 25px;
  place-items: center;
}
#productDetails .left,
#productDetails .right {
  width: 500px;
}
#productDetails .left img{
  width: 500px;
}
#productDetails .right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.description {
  height: 200px;
}
.right-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.right-footer .prix {
  display: flex;
  gap: 5px;
}
</style>
<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getProduct } from '../services/product';

const route = useRoute();
let product = ref({})

onMounted(() => {
  getProduct(route.params.id).then(data => {
    console.log(data)
    product.value = data
  })
})
</script>