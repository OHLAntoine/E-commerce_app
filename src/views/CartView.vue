<template>
    <div class="bg-gray-100 pt-20">
        <h1 class="mb-10 text-center text-2xl font-bold">Cart Resume</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
                <div v-if="store.cart.length == 0" class="flex justify-center items-center h-full">
                    <h2 class="text-center text-2xl font-bold">No products in cart, add some and come back !</h2>
                </div>
                <cart-item v-for="(item, index) in store.cart" :key="index" :item="item"/>
            </div>
            <cart-total v-if="store.cart.length !== 0" :total="store.cartPrice"/>
        </div>
    </div>
</template>

<script setup>
    import CartItem from '@/components/cart/CartItem.vue'
    import CartTotal from '@/components/cart/CartTotal.vue'
    import useProductStore from '@/stores'

    const store = useProductStore()
</script>