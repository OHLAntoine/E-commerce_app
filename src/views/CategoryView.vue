<template>
    <div class="container mx-auto px-6 h-full">
		<div class="pt-12">
			<h1 class="text-center text-2xl font-bold">Products by categories</h1>
		</div>
        <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 mt-2 bg-gray-200 rounded-lg border-2">
            <button
                href="" v-for="(category, index) in categories" :key="index"
                class="text-center text-gray-600 hover:text-white py-2 rounded-lg hover:bg-blue-400"
                @click="store.getProductsByCategory(category)"
                >
                {{ category }}
            </button>
        </div>
        <product-card-list :products="store.productsByCategory"/>
    </div>
</template>

<script setup>
    import productCardList from '@/components/products/ProductCardList.vue';
	import { ref ,onMounted } from 'vue';
	import axiosClient from '@/axiosClient';
    import useProductStore from '@/stores'

    const store = useProductStore()
    const categories = ref([])

	onMounted(async () => {
		const response = await axiosClient.get('products/categories')
		categories.value = response.data
	})
</script>