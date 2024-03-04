<template>
    <div class="container mx-auto px-6 h-full">
        <router-link :to="{ name: 'home' }" @click="store.removeCart()" class="rounded border-2 border-gray-300 py-1 pr-2 hover:bg-gray-300 mt-4 inline-flex justify-center mb-4">
            <svg width="25" height="25" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/>
            </svg>
            Make a new cart
        </router-link>
        <div class="flex justify-center items-center">
            <h1 class="mb-10 text-center text-2xl font-bold">Merci de votre commande !</h1>
        </div>
        <div class="mx-auto max-w-5xl justify-center px-6 xl:px-0">
            <product-resume v-for="(item, index) in store.cart" :key="index" :item="item"/>
        </div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import ProductResume from '@/components/checkout/ProductResume.vue';
    import useProductStore from '@/stores'
    const store = useProductStore()
</script>