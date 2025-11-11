import { defineStore } from "pinia";

interface CartItem {
    slug: string
    name: string
    price: number
    category: string
    images: string[]
    quantity: number
}

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            items: [] as CartItem[],
        }
    },

    getters: {
        count: s => s.items.reduce((total, it) => total + it.quantity, 0),
        subtotal: s => s.items.reduce((sum, it) => sum + it.price * it.quantity, 0)
    },
    actions: {
        add(item: Omit<CartItem, 'quantity'>, qty = 1) {
            const index = this.items.findIndex(it => it.slug === item.slug)
            if (index >= 0) this.items[index].quantity += qty
            else this.items.push({ ...item, quantity: qty })
        },

        remove(slug: string) {
            this.items = this.items.filter(it => it.slug !== slug)
        },
        clead() {
            this.items = []
        }
    }
})