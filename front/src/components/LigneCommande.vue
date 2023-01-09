<template>
  <div id="ligne_commande">
    <img :src="photo" alt="">
    <div class="content">
      <h3>{{ nom }}</h3>
      <p>{{ prix }} €</p>
    </div>
    <div class="quantite">
      <label>Quantité</label>
      <input v-if="updatable" type="number" v-model="quantiteModel">
      <p v-else>{{quantiteModel}}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { usePanierStore } from '../stores/panier.store';

const panierStore = usePanierStore()

const props = defineProps({
  id: {
    type: Number
  },
  photo: {
    type: String
  },
  nom: {
    type: String
  },
  prix: {
    type: Number
  },
  quantite: {
    type: Number
  },
  updatable: {
    type: Boolean,
    default: true
  }
})

let quantiteModel = ref(props.quantite)

watch(quantiteModel, (newQuantite) => {
  panierStore.update(props.id, newQuantite)
})
</script>
<style scoped>
#ligne_commande {
  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid #fff;
  border-radius: 5px;
}
img {
  height: 150px;
  width: 150px;
}
.content {
  width: 100%;
  padding: 20px;
}
.quantite {
  width: 100px;
}
.quantite input {
  max-width: 70px;
}
</style>