import Vue from 'vue'
import VueRouter from 'vue-router'

import { userKey } from '@/global';

import Home from '@/components/home/Home'
import IdososSpreadsheet from '@/components/googlesheets/idosos/IdososSpreadsheet'
import GerenciamentoSpreadsheet from '@/components/googlesheets/gerenciamento/GerenciamentoSpreadsheet'
import VigilanteHome from '@/components/vigilante/VigilanteHome'
import AdminPages from '@/components/administrador/AdminPages'
import IdososPorVigilante from '@/components/administrador/IdososPorVigilante'
import Auth from '@/components/auth/Auth'

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
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
        name: 'meusIdosos',
        path: '/meusIdosos',
        component: VigilanteHome,
    },
    {
        name: 'idososPorVigilante',
        path: '/unidade/:unidadePrefix/:unidadeNome/vigilante/:vigilanteId/:vigilanteNome',
        component: IdososPorVigilante,
    },
    {
        name: 'auth',
        path: '/auth',
        component: Auth,
    },
    {
        name: 'adminPages',
        path: '/admin',
        component: AdminPages,
        meta: { requiresAdmin: true }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey);//TODO fazer uma chamada ao backend para checar o role do usuario 

    if(to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json);
        user && user.role === 'ADMINISTRADOR' ? next() : next({ path: '/' })
    } else {
        next()
    }
})

export default router;
