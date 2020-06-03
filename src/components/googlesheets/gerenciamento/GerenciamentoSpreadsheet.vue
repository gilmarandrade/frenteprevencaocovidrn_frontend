<template>
    <div>
       <PageTitle icon="fa fa-home" main="Planilha de Gerenciamento" sub="unidade xxxx" />
       <b-card no-body>
          <b-tabs card>
            <b-tab title="Vigilante 1">
              <Vigilante1Page />
            </b-tab>
            <b-tab title="Vigilante 2">
              vigila
            </b-tab>
            <b-tab title="Vigilante 3">
              vigila
            </b-tab>
            <b-tab title="Vigilante 4">
              vigila
            </b-tab>
            <b-tab title="Respostas">
              respostas
            </b-tab>
            <b-tab title="Escalas">
              escalas
            </b-tab>
            <b-tab title="Status Atendimentos">
              atendimentos
            </b-tab>
           
          </b-tabs>
        </b-card>
    </div>
</template>

<script>
import PageTitle from '../../template/PageTitle'
import Vigilante1Page from './Vigilante1Page'

export default {
    name: 'GerenciamentoSpreadsheet',
    components: { PageTitle, Vigilante1Page },
}
</script>

<style>

</style>