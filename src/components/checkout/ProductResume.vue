<template>
    <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
		<img :src="item.product.images[0]" alt="product-image" class="w-full rounded-lg sm:w-40 h-32"/>
		<div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
			<div class="mt-5 sm:mt-0 flex flex-col justify-around">
				<h2 class="text-lg font-bold text-gray-900">
					{{ item.product.title }}
				</h2>
				<p class="mt-1 text-sm text-gray-700">
					{{ item.product.brand }}
				</p>
				<p class="mt-1 text-sm text-gray-700">
					{{ item.product.category }}
				</p>
			</div>
			<div class="flex items-center">
				<p>{{ item.product.description }}</p>
			</div>
			<div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:space-x-6">
				<div class="flex items-center space-x-4">
					<p class="text-xl">{{ item.product.price }} €</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		item: Object
	})
</script>