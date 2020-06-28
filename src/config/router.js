import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import IdososSpreadsheet from '@/components/googlesheets/idosos/IdososSpreadsheet'
import GerenciamentoSpreadsheet from '@/components/googlesheets/gerenciamento/GerenciamentoSpreadsheet'
import VigilanteHome from '@/components/vigilante/VigilanteHome'
import Auth from '@/components/auth/Auth'

Vue.use(VueRouter);

const routes = [
    {
        name: 'adminHome',
        path: '/',
        component: Home,
    },
    {
        name: 'idososSpreadsheet',
        path: '/googlesheets/idosos',
        component: IdososSpreadsheet,
    },
    {
        name: 'gerenciamentoSpreadsheet',
        path: '/googlesheets/gerenciamento',
        component: GerenciamentoSpreadsheet,
    },
    {
        name: 'vigilanteHome',
        path: '/vigilante/:vigilanteId/:vigilanteNome',
        component: VigilanteHome,
    },
    {
        name: 'auth',
        path: '/auth',
        component: Auth,
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
