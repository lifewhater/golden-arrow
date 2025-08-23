import { createRouter, createWebHistory } from 'vue-router';
import Collection from '@/pages/collection.vue';
import Story from '@/pages/story.vue';
import HomeRow from '@/components/homeRow.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeRow },
    { path: '/collection', name: 'collection', component: Collection },
    { path: '/story', name: 'story', component: Story }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router