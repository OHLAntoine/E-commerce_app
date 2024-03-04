import { defineStore } from 'pinia'
import axiosClient from "@/axiosClient";

export default defineStore('products', {
    state: () => ({
        searchedProducts: [],
        productsByCategory: [],
        cart: []
        }),
    getters: {
        cartCount: (state) => {
            let sum = 0
            state.cart.forEach(item => {
                sum += item.quantity
            })
        return sum
        },
        cartPrice: (state) => {
            let sum = 0
            state.cart.forEach(item => {
            sum += (item.product.price * item.quantity)
        })
        return sum
        }
    },
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
        addToCart(id) {
            axiosClient.get(`products/${id}`)
                .then(({data}) => {
                    if (this.cart.length === 0) {
                        this.cart.push({
                            "product": data,
                            "quantity": 1
                        })
                    } else {
                        let productInCart = this.cart.find((element) => element.product.id == data.id)
                        if (productInCart !== undefined) {
                            productInCart.quantity += 1
                        } else {
                            this.cart.push({
                            "product": data,
                            "quantity": 1
                        })
                    }
                }
            })
        },
        increaseQuantity(id) {
            let productInCart = this.cart.find((element) => element.product.id == id)
            productInCart.quantity += 1
        },
        decreaseQuantity(id) {
            let productInCart = this.cart.find((element) => element.product.id == id)
            if (productInCart.quantity == 1) {
                let index = this.cart.indexOf(productInCart)
                this.cart.splice(index, 1)
            } else {
                productInCart.quantity -= 1
            }
        },
        removeFromCart(id) {
            let productInCart = this.cart.find((element) => element.product.id == id)
            let index = this.cart.indexOf(productInCart)
            this.cart.splice(index, 1)
        },
        removeCart() {
            this.cart = []
        }
    }
})