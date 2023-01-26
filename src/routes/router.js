import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/MainHome.vue'
import About from '@/views/AboutUs.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    }
]

export const router = new createRouter({
    history: createWebHistory(),
    routes
});