import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/',
        name: 'About',
        component: () => import('@/views/About.vue')
    }
]

export const router = new createRouter({
    history: createWebHistory(),
    routes
});