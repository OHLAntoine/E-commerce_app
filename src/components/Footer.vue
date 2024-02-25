<template>
    <footer>
        <nav class="w-screen bg-blue-400 py-4">
            <div class="container mx-auto px-4">
                <RouterLink to="/" class="text-3xl py-4 text-white">
                    <img src="../assets/icons/shopping-cart-2-line.png" alt="App Icon">
                </RouterLink>
            </div>
        </nav>
    </footer>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
</script>