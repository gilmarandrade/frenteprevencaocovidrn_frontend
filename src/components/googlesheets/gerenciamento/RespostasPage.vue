<template>
    <div>
        <p>foram encontrados {{ items.length }} registros</p>
        <b-table hover :items="items" :fields="fields"></b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global';
import axios from 'axios';

export default {
    name: 'RespostasPage',
    data: function() {
        return {
            items: [],
            fields: [
                { key: 'row', label: 'row', sortable: true },
                { key: 'data', label: 'data', sortable: true },//não vai ordenar corretamente
                { key: 'vigilante', label: 'vigilante', sortable: true },//não vai ordenar corretamente
                { key: 'dadosIniciais.nome', label: 'Nome', sortable: true },
                { key: 'dadosIniciais.atendeu', label: 'Atendeu ao telefonema', sortable: true },
                { key: 'idade', label: 'Idade', sortable: true },
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