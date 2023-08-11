import * as VueRouter from "vue-router";

const routes = [
    {
        name: 'people.index',
        path: '/people',
        component: () => import('./components/People/Index.vue')
    },
    {
        name: 'people.create',
        path: '/people/create',
        component: () => import('./components/People/Create.vue')
    },
    {
        name: 'people.edit',
        path: '/people/:id/edit',
        component: () => import('./components/People/Edit.vue')
    },
    {
        name: 'people.show',
        path: '/people/:id',
        component: () => import('./components/People/Show.vue')
    },
];

export default new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes
})
