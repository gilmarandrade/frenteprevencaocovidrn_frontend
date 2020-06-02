<template>
    <div>
       google sheets
       <b-table hover :items="idosos"></b-table>
    </div>
</template>

<script>
import { showError } from '@/global';
import axios from 'axios';

export default {
    name: 'GoogleSheetsPage',
    data: function() {
        return {
            idosos: [],
        }
    },
    methods: {
        loadIdosos() {
            const url = `idosos/idosos/324324`;
            axios.get(url).then(res => {
                this.users = res.data;
            }).catch(showError)
        },
    },
    mounted() {
        this.loadIdosos();
    }
}
</script>

<style>

</style>