<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Home" sub="Bem vindo a unidade xxxx" />
        <!-- <h2>Planilhas</h2>
        <ul>
            <li>
                <router-link to="/googlesheets/idosos">Idosos Spreadsheet</router-link>
            </li>
            <li>
                <router-link to="/googlesheets/gerenciamento">Gerenciamento Spreadsheet</router-link>
            </li>
        </ul> -->
        <h2>Vigilantes</h2>
        <ul>
            <li v-for="item in vigilantes" :key="item.index">
                <router-link :to="'/vigilante/'+item.index+'/'+item.nome">{{ item.nome }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle';
import { baseApiUrl, showError } from '@/global';
import axios from 'axios';

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
    mounted() {
        this.loadVigilantes();
    }
}
</script>

<style>

</style>