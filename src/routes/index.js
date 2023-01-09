import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import CreateWard from "../views/CreateWard.vue"
import CreatePlace from "../views/CreatePlace.vue"
import ListWard from "../views/ListWard.vue"
import UpdateWard from "../views/UpdateWard.vue"
import UpdatePlace from "../views/UpdatePlace.vue"
const routes = [
    { path: '/', component: Home },
    { path: '/create-ward', component: CreateWard },
    { path: '/create-place', component: CreatePlace },
    { path: '/list-ward', component: ListWard },
    { path: '/update-ward/:id', component: UpdateWard },
    { path: '/update-place/:id', component: UpdatePlace },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

