<template>
    <div>
         <PageTitle icon="fa fa-home" main="Atendimentos" sub="unidade xxxx" />
        <p>foram encontrados {{ items.length }} registros</p>
        <b-table hover :items="items" :fields="fields"></b-table>
    </div>
</template>

<script>
import PageTitle from '@/components/template/PageTitle'
import { baseApiUrl, showError } from '@/global';
import axios from 'axios';

export default {
    name: 'AtendimentosPage',
    components: { PageTitle },
    data: function() {
        return {
            items: [],
            fields: [
                { key: 'atendimento.row', label: 'row', sortable: true },
                { key: 'atendimento.data', label: 'data', sortable: true },//não vai ordenar corretamente
                { key: 'atendimento.vigilante', label: 'vigilante', sortable: true },//não vai ordenar corretamente
                { key: 'atendimento.dadosIniciais.nome', label: 'Nome', sortable: true },
                { key: 'atendimento.dadosIniciais.atendeu', label: 'Atendeu ao telefonema', sortable: true },
                { key: 'atendimento.idade', label: 'Idade', sortable: true },
                { key: 'escalas.vulnerabilidade', label: 'Escala de Vulnerabilidade', sortable: true },
                { key: 'escalas.epidemiologica', label: 'Escala Epidemiológica', sortable: true },
                { key: 'escalas.riscoContagio', label: 'Escala Risco COVID-19', sortable: true },
            ]
        }
    },

    methods: {
        loadItems() {
            console.log('load items');
            const id = '1tBlFtcTlo1xtq4lU1O2Yq94wYaFfyL9RboX6mWjKhh4';
            // const sheetName = 'Respostas';
            const range = 'A2:AI';
            const url = `${baseApiUrl}/docs/${id}/respostas/range/${range}`;

            axios.get(url).then(res => {
                this.items = res.data;
                console.log(this.items)
            }).catch(showError)
        },
    },
    mounted() {
        this.loadItems();
    }
}
</script>

<style>

</style>