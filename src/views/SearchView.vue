<template>
	<div class="container mx-auto px-6 h-full">
		<div class="pt-12 flex">
			<input 
				type="text" 
				class="rounded border-2 border-gray-200 w-full ps-2 py-1" 
				placeholder="Search for a item"
				v-model="keyword"
				@change="store.searchProducts(keyword)"
				>
			<button
				class="ms-4 rounded border-2 border-gray-200 p-2 hover:bg-gray-200"
				@click="store.searchProducts(keyword)"
				>
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
					<path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
				</svg>
			</button>
		</div>
	</div>
	<card-list :products="store.searchedProducts"/>
</template>

<script setup>
	import CardList from '@/components/products/CardList.vue';
	import useProductStore from '@/stores'
	import { ref } from 'vue';

	const keyword = ref('')
	const store = useProductStore()
</script>