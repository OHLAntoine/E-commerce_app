<template>
	<section class="text-gray-700 body-font overflow-hidden">
		<div class="container px-5 mx-auto">
			<div class="lg:w-4/5 mx-auto flex flex-wrap">
				<img :src="images[0]" :alt="product.title" class="lg:w-1/2 w-full object-center max-h-96 object-contain">
				<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
					<h2 class="text-sm title-font text-gray-600 tracking-widest">{{ product.brand }}</h2>
					<h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.title }}</h1>
					<h2 class="text-sm title-font text-gray-500 tracking-widest">{{ product.category }}</h2>
					<div class="flex my-4">
						<span class="flex items-center">
							<div class="inline-flex items-center rounded-lg bg-white p-2 shadow-md">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								<span class="ml-1 text-sm text-slate-400">{{ product.rating }}</span>
							</div>
						</span>
						<span class="flex items-center ml-3 pl-3 py-2 border-l-2 border-gray-200">
							Profitez d'une remise de
							<div class="inline-flex items-center rounded-lg bg-white p-2 shadow-md ms-2">
								<span class="ml-1 text-sm text-red-500">- {{ product.discountPercentage }}%</span>
							</div>
						</span>
					</div>
					<p class="leading-relaxed">{{ product.description }}</p>
					<div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
						<div class="flex justify-between">
							<span class="mr-3 flex justify-between">Restant en stock : </span>
							<span>{{ product.stock }} unités</span>
						</div>
					</div>
					<div class="flex justify-between">
						<span class="title-font font-medium text-2xl text-gray-900">{{ product.price }}€</span>
						<div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
							</svg>
							<button 
								class="text-sm"
								@click="store.addToCart(product.id)"
								>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import useProductStore from '@/stores'
    const store = useProductStore()

	defineProps({
		product: Object,
		images: Array
	})
</script>