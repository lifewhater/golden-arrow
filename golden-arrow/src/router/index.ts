import { createRouter, createWebHistory } from 'vue-router';
// import Collection from '@/pages/collection.vue';
import Story from '@/pages/story.vue';
import HomeCol from '@/components/homeCol.vue';
import CollectionNEW from '@/pages/collectionNew.vue';



const routes = [
    { path: '/', name: 'Home', component: HomeCol },
    // { path: '/collection', name: 'collection', component: Collection },
    { path: '/collectionNEW', name: 'collectionNEW', component: CollectionNEW },
    { path: '/story', name: 'story', component: Story },
 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router