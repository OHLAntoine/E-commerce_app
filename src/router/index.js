import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import ProductView from '@/views/ProductView.vue'
import CategoryView from '@/views/CategoryView.vue'
import CartView from '@/views/CartView.vue'
import CheckOutView from '@/views/CheckOutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/search',
          name: 'search',
          component: SearchView
        },
        {
          path: '/product/:id?',
          name: 'productDetails',
          component: ProductView
        },
        {
          path: '/categories',
          name: 'categories',
          component: CategoryView
        },
        {
          path: '/cart',
          name: 'cart',
          component: CartView
        },
        {
          path: '/check-out',
          name: 'checkOut',
          component: CheckOutView
        }
      ]
    },
  ]
})

export default router