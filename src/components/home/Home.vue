<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Home" sub="Bem vindo ao sistema de monitoramento" />
        <!-- <h2>Planilhas</h2>
        <ul>
            <li>
                <router-link to="/googlesheets/idosos">Idosos Spreadsheet</router-link>
            </li>
            <li>
                <router-link to="/googlesheets/gerenciamento">Gerenciamento Spreadsheet</router-link>
            </li>
        </ul> -->
        <div v-if="user.role === 'ADMINISTRADOR'">
            <h2>Vigilantes</h2>
            <ul>
                <li v-for="item in vigilantes" :key="item._id">
                    <router-link :to="'/vigilante/'+item._id+'/'+item.nome">{{ item.nome }}</router-link>
                </li>
            </ul>
        </div>
        <div v-if="user.role === 'VIGILANTE'">
            <h2>Seja bem vindo vigilante</h2>
            <router-link :to="'/vigilante/'+user.id+'/'+user.name">Meus idosos</router-link>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle';
import { baseApiUrl, showError } from '@/global';
import axios from 'axios';
import { mapState } from 'vuex';

export default {
    name: 'Home',
    components: { PageTitle },
    data: function() {
        return {
            vigilantes: [],
        }
    },
    methods: {
        loadVigilantes() {
            const url = `${baseApiUrl}/unidades/idunidade/vigilantes`;
             console.log(url);

            axios.get(url).then(res => {
                this.vigilantes = res.data
                console.log(this.vigilantes)
            }).catch(showError)
        }
    },
    computed: mapState(['user']),
    mounted() {
        if(this.user.role === 'ADMINISTRADOR') {
            this.loadVigilantes();
        }
    }
}
</script>

<style>

</style>