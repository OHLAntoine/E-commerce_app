<template>
	<section>
		<div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div v-for="(i=0, index) in 8" :key="index">
				<Card/>
			</div>
		</div>
	</section>
</template>

<script setup>
    import Card from './Card.vue'
</script>