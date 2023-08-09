import IndexComponent from "./components/People/IndexComponent.vue";
import CreateComponent from "./components/People/CreateComponent.vue";

export const routes = [
    {
        path: '/',
        component: IndexComponent
    },
    {
        path: '/people/create',
        component: CreateComponent
    },
];
