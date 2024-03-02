import { defineStore } from 'pinia'
import axiosClient from "@/axiosClient";

export default defineStore('products', {
    state: () => ({ 
        searchedProducts: [],
        productsByCategory: []
        }),
    actions: {
        searchProducts(keyword) {
            axiosClient.get(`products/search?q=${keyword}`)
                .then(({data}) => {
                    this.searchedProducts = data.products
                })
        },
        getProductsByCategory(category) {
            axiosClient.get(`products/category/${category}`)
                .then(({data}) => {
                    this.productsByCategory = data.products
                })
        },
    }
})