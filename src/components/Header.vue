<template>
    <header>
        <nav class="lg:px-16 px-6 bg-blue-400 shadow-md flex flex-wrap items-center lg:py-3 py-2">
            <div class="flex-1 flex justify-between items-center">
                <router-link :to="{ name: 'home' }" class="text-3xl text-white flex gap-2">
                    <img src="../assets/icons/shopping-cart-2-line_white.png" alt="icon">
                    E-commerce
                </router-link>
            </div>
            <label for="menu-toggle" class="cursor-pointer lg:hidden block">
                <svg
                    class="fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />
            <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <ul class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
                    <li class="py-2 lg:py-0 ">
                        <router-link :to="{ name: 'home' }" class="text-white">
                            Home
                        </router-link>
                    </li>
                    <li class="py-2 lg:py-0 ">
                        <router-link :to="{ name: 'search' }" class="text-white">
                            Search
                        </router-link>
                    </li>
                    <li class="py-2 lg:py-0 ">
                        <router-link :to="{ name: 'categories' }" class="text-white">
                            Categories
                        </router-link>
                    </li>
                    <li class="py-2 lg:py-0 ">
                        <router-link :to="{ name: 'cart' }" class="text-white relative">
                            <svg height="25" width="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)">
                                <path d="M9 6H15C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6ZM7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6H20C20.5523 6 21 6.44772 21 7V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V7C3 6.44772 3.44772 6 4 6H7ZM5 8V20H19V8H5ZM9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10H17C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10H9Z"></path>
                            </svg>
                            <span v-if="store.cartCount !== 0" class="absolute -right-1 -top-1 rounded-full bg-white text-black text-xs px-1">{{ store.cartCount }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import useProductStore from '@/stores'
    const store = useProductStore()
</script>

<style scoped>
    #menu-toggle:checked + #menu {
        display: block;
    }
</style>