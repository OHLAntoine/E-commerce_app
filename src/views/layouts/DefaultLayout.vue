<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <Header/>
    <main>
        <router-view/>
    </main>
    <Footer/>
</template>