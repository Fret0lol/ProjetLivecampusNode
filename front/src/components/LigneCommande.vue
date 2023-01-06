<template>
  <div id="ligne_commande">
    <img :src="photo" alt="">
    <div class="content">
      <p>{{ nom }}</p>
      <p>{{ prix }}</p>
    </div>
    <div class="quantite">
      {{ quantite }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
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
  }
})
</script>