<template>
    <div>
       <PageTitle icon="fa fa-home" main="Planilha Idosos" sub="unidade xxxx" />
       <b-card no-body>
          <b-tabs card>
            <b-tab title="Idosos" active>
              <IdososPage />
            </b-tab>
            <b-tab title="Idosos por Vulnerabilidade">
              <IdososPorVulnerabilidadePage />
            </b-tab>
            <b-tab title="Idosos por Risco">
              <IdososPorRiscoPage />
            </b-tab>
            <b-tab title="Idosos com Escalas">
              Idosos com Escalas
            </b-tab>
          </b-tabs>
        </b-card>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import IdososPage from './IdososPage'
import IdososPorVulnerabilidadePage from './IdososPorVulnerabilidadePage'
import IdososPorRiscoPage from './IdososPorRiscoPage'

export default {
    name: 'GoogleSheetsPage',
    components: { PageTitle, IdososPage, IdososPorVulnerabilidadePage, IdososPorRiscoPage },
}
</script>

<style>

</style>