import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import GoogleSheetsPage from '@/components/googlesheets/GoogleSheetsPage'

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'googlesheets',
        path: '/googlesheets',
        component: GoogleSheetsPage,
    },
    // {
    //     name: 'adminPages',
    //     path: '/admin',
    //     component: AdminPages,
    // },
]

export default new VueRouter({
    mode: 'history',
    routes,
})
