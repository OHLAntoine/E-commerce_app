<template>
	<main>
		<div class="container mx-auto px-6 h-full">
			<div class="pt-12">
				<input type="text" class="rounded border-2 border-gray-200 w-full ps-2 py-1" placeholder="Search for a item">
			</div>
		</div>
		<card-list/>
	</main>
</template>

<script setup>
	import CardList from '@/components/products/CardList.vue';
</script>