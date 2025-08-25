import { createRouter, createWebHistory } from 'vue-router';
import Collection from '@/pages/collection.vue';
import Story from '@/pages/story.vue';
import HomeRow from '@/components/homeRow.vue';
import HomeCol from '@/components/homeCol.vue';



const routes = [
    { path: '/', name: 'Home', component: HomeCol },
    { path: '/collection', name: 'collection', component: Collection },
    { path: '/story', name: 'story', component: Story },
 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router