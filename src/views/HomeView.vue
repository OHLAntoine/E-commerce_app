<template>
	<main>
		<div class="container mx-auto px-6 h-full">
			<div class="pt-12">
				<h1 class="text-center text-2xl font-bold">All Products</h1>
			</div>
			<card-list :products="products"/>
		</div>
	</main>
</template>

<script setup>
	import CardList from '@/components/products/CardList.vue';
	import { ref ,onMounted } from 'vue';
	import axiosClient from '../axiosClient';

	const products = ref([])

	onMounted(async () => {
		const response = await axiosClient.get('products')
		products.value = response.data
	})
</script>