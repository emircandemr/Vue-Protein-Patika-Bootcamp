import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Login',
        component : () => import("../Views/LoginPage.vue"),
    },
    {
        path : '/register',
        name: 'Register',
        component : () => import ("../Views/RegisterPage.vue"),
    },
    {
        path : '/home',
        name: 'Home',
        component : () => import ("../Views/HomePage.vue"),
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})


export default router