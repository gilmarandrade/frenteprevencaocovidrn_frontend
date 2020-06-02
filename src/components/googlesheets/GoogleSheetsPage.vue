<template>
    <div>
       <PageTitle icon="fa fa-home" main="Idosos" sub="unidade xxxx" />
       <b-card>
            <p>foram encontrados {{ idosos.length }} registros</p>
            <b-table hover :items="idosos" :fields="fields"></b-table>
       </b-card>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import { baseApiUrl, showError } from '@/global';
import axios from 'axios';

export default {
    name: 'GoogleSheetsPage',
    components: { PageTitle },
    data: function() {
        return {
            idosos: [],
            fields: [
                { key: 'row', label: 'row', sortable: true },
                { key: 'dataNascimento', label: 'Data de Nascimento', sortable: true },
                { key: 'nome', label: 'Nome', sortable: true },
                { key: 'telefone1', label: 'Telefone 1', sortable: true },
                { key: 'telefone2', label: 'Telefone 2', sortable: true },
                { key: 'agenteSaude', label: 'Agente de Saúde', sortable: true },
            ]
        }
    },

    methods: {
        loadIdosos() {
            console.log('load idosos');
            const id = '1sP1UegbOnv5dVoO6KMtk2nms6HqjFs3vuYN5FGMWasc';
            const sheetName = 'Idosos';
            const range = 'A2:E1200';
            const url = `${baseApiUrl}/docs/${id}/sheets/${sheetName}/range/${range}`;

            axios.get(url).then(res => {
                const array = [];
                res.data.forEach((item, index) => {
                    array.push({
                        row: 'A' + (index + 2),
                        dataNascimento: item[0],
                        nome: item[1],
                        telefone1: item[2],
                        telefone2: item[3],
                        agenteSaude: item[4],
                    });
                });
                this.idosos = array;
                console.log(this.idosos)
            }).catch(showError)
        },

        /**
         * [
         *  ['data', 'nome', 'telefone', 'tel2', 'agente'],
         * ]
         * 
         */
    },
    mounted() {
        this.loadIdosos();
    }
}
</script>

<style>

</style>