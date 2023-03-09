import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/home.vue'
import page1 from '../views/page1.vue'
import login from '../views/login.vue'
import info from '../views/info.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: home
    },
    {
        path: '/page1',
        name: 'page1',
        component: page1
    },
    {
        path: '/info',
        name: 'info',
        component: info
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    { path: '/', redirect: { name: 'page1' } }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router