import { createRouter, createWebHistory } from 'vue-router';
import Story from '@/pages/story.vue';
import Home from '@/components/home.vue';
import Collection from '@/pages/collection.vue';
import Cart from '@/pages/cart.vue';
import Gallery from '@/pages/gallery.vue';



const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/collection', name: 'collection', component: Collection },
    { path: '/story', name: 'story', component: Story },
    { path: '/cart', name: 'cart', component: Cart },

    // path for gallery view. different for each product
    { path: '/collection/:slug', name: 'gallery', component: Gallery, props: true }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router