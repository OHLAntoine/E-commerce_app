import { defineStore } from 'pinia'
import axiosClient from "@/axiosClient";

export default defineStore('products', {
    state: () => ({ 
        searchedProducts: []
        }),
    actions: {
        searchProducts(keyword) {
            axiosClient.get(`products/search?q=${keyword}`)
                .then(({data}) => {
                    this.searchedProducts = data.products
                })
        }
    }
})