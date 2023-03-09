import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import home from '/src/views/home.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: home
    },
    { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router