<template>
    <div>
       <PageTitle icon="fa fa-home" main="Idosos" sub="alguns idosos da unidade" />Idosos
       <b-table hover :items="idosos"></b-table>
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
        }
    },
    methods: {
        loadIdosos() {
            console.log('load idosos');
            const id = '1sP1UegbOnv5dVoO6KMtk2nms6HqjFs3vuYN5FGMWasc';
            const sheetName = 'Idosos';
            const range = 'A1:E10';
            const url = `${baseApiUrl}/docs/${id}/sheets/${sheetName}/range/${range}`;

            axios.get(url).then(res => {
                const array = [];
                res.data.forEach(item => {
                    array.push({
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