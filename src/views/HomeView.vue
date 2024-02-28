<template>
	<main>
		<div class="container mx-auto px-6 h-full">
			<div class="pt-12">
				<h1 class="text-center text-2xl font-bold">All Products</h1>
			</div>
			<Card-list/>
		</div>
	</main>
</template>

<script setup>
	import CardList from '@/components/items/CardList.vue';
</script>