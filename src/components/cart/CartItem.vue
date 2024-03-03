<template>
	<div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
		<img :src="product.images[0]" alt="product-image" class="w-full rounded-lg sm:w-40 h-32" />
		<div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
			<div class="mt-5 sm:mt-0">
				<h2 class="text-lg font-bold text-gray-900">
					{{ product.title }}
				</h2>
				<p class="mt-1 text-xs text-gray-700">
					{{ product.brand }}
				</p>
				<p class="mt-1 text-xs text-gray-700">
					{{ product.category }}
				</p>
			</div>
			<div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
				<div class="flex items-center border-gray-100">
					<div class="inline-flex items-center rounded-lg bg-white p-2 shadow-md ms-2">
						<span class="ml-1 text-sm text-red-500">- {{ product.discountPercentage }}%</span>
					</div>
				</div>
				<div class="flex items-center space-x-4">
					<p class="text-sm">{{ product.price }} €</p>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		product: Object
	})
</script>