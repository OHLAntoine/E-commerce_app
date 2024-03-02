<template>
    <div class="container mx-auto px-6 h-full">
        <button @click="$router.go(-1)" class="rounded border-2 border-gray-200 py-1 pr-2 hover:bg-gray-200 mt-4 flex justify-center mb-4">
            <svg width="25" height="25" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/>
            </svg>
            Go back
        </button>
        <product-details :product="product" :images="images"/>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router'
    import axiosClient from '@/axiosClient';
    import ProductDetails from '@/components/products/ProductDetails.vue';

    const route = useRoute()
    const product = ref({})
    const images = ref([])

    onMounted(() => {
        axiosClient.get(`products/${route.params.id}`)
            .then(({data}) => {
                product.value = data
                images.value = data.images
            })
    })
</script>
