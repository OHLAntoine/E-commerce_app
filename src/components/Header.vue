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
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
</script>

<style scoped>
    #menu-toggle:checked + #menu {
        display: block;
    }
</style>