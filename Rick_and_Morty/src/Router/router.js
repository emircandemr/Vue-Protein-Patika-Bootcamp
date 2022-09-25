import {createRouter, createWebHashHistory } from 'vue-router';


const routes = [
    {
        name : "HomePage",
        path : "/",
        component : () => import("../Views/HomePage.vue")
    },
    {
        name : "CharacterPage",
        path : "/character/:id",
        component : () => import("../Views/CharacterPage.vue")
    }
]

const router = createRouter({
    routes,
    history : createWebHashHistory()
})

export default router