import './bootstrap'
import {routes} from "./router"
import * as VueRouter from 'vue-router'

import {createApp} from 'vue'

import App from './App.vue'

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes
})

const app = createApp(App)
app.use(router)
app.mount("#app")

