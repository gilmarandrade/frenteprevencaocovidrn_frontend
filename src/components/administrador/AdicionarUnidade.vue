<template>
  <div class="adicionarUnidade">
    <h1>Adicionar Unidade</h1>

    <b-form @submit="onSubmit">
        <b-form-group
            id="input-group-nome"
            label="Nome:"
            label-for="nome"
        >
            <b-form-input
            id="nome"
            v-model="form.nome"
            type="text"
            required
            placeholder="Nome da unidade"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-distrito" label="Distrito:" label-for="distrito">
            <b-form-select
            id="distrito"
            v-model="form.distrito"
            :options="distritos"
            required
            ></b-form-select>
        </b-form-group>

        <b-form-group
            id="input-group-planilhaIdosos"
            label="Planilha de idosos:"
            label-for="planilhaIdosos"
        >
            <b-form-input
            id="planilhaIdosos"
            v-model="form.planilhaIdosos"
            type="text"
            required
            placeholder="Link para planilha de idosos"
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-planilhaGerenciamento"
            label="Planilha de gerenciamento:"
            label-for="planilhaGerenciamento"
        >
            <b-form-input
            id="planilhaGerenciamento"
            v-model="form.planilhaGerenciamento"
            type="text"
            required
            placeholder="Link para planilha de gerenciamento"
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-fichaVigilancia"
            label="Ficha de vigilância:"
            label-for="fichaVigilancia"
        >
            <b-form-input
            id="fichaVigilancia"
            v-model="form.fichaVigilancia"
            type="text"
            required
            placeholder="Link para ficha de vigilância"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Salvar</b-button>
    </b-form>
  </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global';
import axios from 'axios';

export default {
    name: 'AdicionarUnidade',
    data: function() {
        return {
            form: {
                nome: '',
                distrito: null,
                planilhaIdosos: '',
                planilhaGerenciamento: '',
                fichaVigilancia: '',
            },
            distritos: [ { text: 'Selecione...', value: null }, 'Norte', 'Sul', 'Leste', 'Oeste' ],
        }
    },
     methods: {
        onSubmit(evt) {
            evt.preventDefault();
            console.log(JSON.stringify(this.form));
            const url = `${baseApiUrl}/unidades`;
            console.log(url);

            axios.post(url, this.form).then(res => {
                this.$router.push({ name: 'unidade', params: { id: res.data } })
                this.$toasted.global.defaultSuccess();
            }).catch(showError)
        },
    },
}
</script>

<style>

</style>