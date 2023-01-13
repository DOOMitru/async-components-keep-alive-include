import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "HomeView" */ '@/views/HomeView.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "AboutView" */ '@/views/AboutView.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "ContactView" */ '@/views/ContactView.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
