// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/tokens.css'
import {createPinia} from 'pinia'
import { useCartStore } from './stores/cart'


const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
