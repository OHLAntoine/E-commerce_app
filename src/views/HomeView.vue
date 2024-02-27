<template>
	<main>
		<div class="container mx-auto px-6 h-full">
			<div class="pt-4">
				<h1 class="text-center text-2xl font-bold">All Products</h1>
			</div>
			<!-- Product List -->
			<section class="pb-5">
				<div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					<div v-for="(i=0, index) in 8" :key="index">
						<Card/>
					</div>
				</div>
			</section>
		</div>
	</main>
</template>

<script setup>
	import Card from '../components/items/Card.vue'
</script>