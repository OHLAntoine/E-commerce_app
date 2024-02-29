<template>
	<section>
		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
			<div v-for="(product, index) in products" :key="index" class="flex">
				<Card :product="product"/>
			</div>
		</div>
	</section>
</template>

<script setup>
    import Card from './Card.vue'
	defineProps({
		products: Object,
	})
</script>