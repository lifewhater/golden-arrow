import { defineStore } from "pinia";

interface Product {
    slug: string
    name: string
    price: number
    category: string
    images: string[]
}

export const useProductStore = defineStore('product', {
    state: () => {
        return{
            list: [] as Product[],
            isLoaded: false,
        }
    },

    getters: {
        bySlug: (state) => {
            return (slug: string) => state.list.find(p => p.slug === slug)
        }
    },
    actions: {
        async load() {
            const res = await fetch('/products.json')
            this.list = await res.json()
            this.isLoaded = true
        }
    }
})