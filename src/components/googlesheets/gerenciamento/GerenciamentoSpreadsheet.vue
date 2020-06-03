<template>
    <div>
       <PageTitle icon="fa fa-home" main="Planilha de Gerenciamento" sub="unidade xxxx" />
       <b-card no-body>
          <b-tabs card>
            <b-tab title="Vigilante 1">
              <Vigilante1Page />
            </b-tab>
            <b-tab title="Vigilante 2">
              <Vigilante2Page />
            </b-tab>
            <b-tab title="Vigilante 3">
              <Vigilante3Page />
            </b-tab>
            <b-tab title="Vigilante 4">
              <Vigilante4Page />
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
import Vigilante2Page from './Vigilante2Page'
import Vigilante3Page from './Vigilante3Page'
import Vigilante4Page from './Vigilante4Page'

export default {
    name: 'GerenciamentoSpreadsheet',
    components: { PageTitle, Vigilante1Page, Vigilante2Page, Vigilante3Page, Vigilante4Page },
}
</script>

<style>

</style>