import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import IdososSpreadsheet from '@/components/googlesheets/idosos/IdososSpreadsheet'
import GerenciamentoSpreadsheet from '@/components/googlesheets/gerenciamento/GerenciamentoSpreadsheet'
import AtendimentosPage from '@/components/atendimentos/AtendimentosPage'

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
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
        name: 'atendimentos',
        path: '/atendimentos',
        component: AtendimentosPage,
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
