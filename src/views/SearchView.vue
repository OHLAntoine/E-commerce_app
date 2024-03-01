<template>
	<div class="container mx-auto px-6 h-full">
		<div class="pt-12">
			<input 
				type="text" 
				class="rounded border-2 border-gray-200 w-full ps-2 py-1" 
				placeholder="Search for a item"
				v-model="SearchedProduct"
				@change="SearchProduct"
			>
		</div>
	</div>
	<card-list/>
</template>

<script setup>
	import CardList from '@/components/products/CardList.vue';
	import axiosClient from '@/axiosClient';
	import { ref } from 'vue';

	const SearchedProduct = ref('')

	function SearchProduct(params) {
		
	}
</script>