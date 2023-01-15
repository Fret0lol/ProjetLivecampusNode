<template>
	<div id="admin-navigate">
		<RouterLink class="nav-item" to="/admin/commandes">Commandes</RouterLink>
		<RouterLink class="nav-item" to="/admin/produits"> Produits </RouterLink>
	</div>
</template>
<script setup></script>
<style>
#admin-navigate {
	display: flex;
	flex-direction: column;
	gap: 15px;
}
.nav-item {
	padding: 12px 24px;
	border: 1px solid #fff;
	border-radius: 5px;
}
</style>
