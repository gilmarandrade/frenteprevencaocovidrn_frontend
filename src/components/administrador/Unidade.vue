<template>
 <div class="unidades">
   <header class="header-page">
        <div v-if="unidade.ativo" class="sync-state">
          <popper
              trigger="hover"
              :options="{
                placement: 'top'
              }">
              <div class="popper">
                  Data da última sincronização 
              </div>

              <span slot="reference">
                  <i class="fas fa-sync"></i> {{ unidade.log.length ? formatDate(unidade.log[unidade.log.length - 1].time) : ''}}
              </span>
          </popper>
        </div>
        <h1>{{ unidade.nome }}</h1>
        <p>Distrito leste</p>
   </header>
   <div class="container">
       <div class="card">
        <div class="card-body">
          <h5 class="card-title">Planilhas</h5>
          <div>
            <b>Planilha de idosos:</b> <a :href="`https://docs.google.com/spreadsheets/d/${unidade.idPlanilhaIdosos}/edit?usp=sharing`" target="_blank">{{ unidade.idPlanilhaIdosos }}</a>
          </div>
          <div>
            <b>Planilha de gerenciamento:</b> <a :href="`https://docs.google.com/spreadsheets/d/${unidade.idPlanilhaGerenciamento}/edit?usp=sharing`" target="_blank">{{ unidade.idPlanilhaGerenciamento }}</a>
          </div>
          <div>
            <b>Ficha de vigilância:</b> <a :href="`https://docs.google.com/forms/d/${unidade.idFichaVigilancia}/edit?usp=sharing`" target="_blank">{{ unidade.idFichaVigilancia }}</a>
          </div>
        </div>
       </div>
   </div>

 </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global';
import axios from 'axios';
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
    name: 'Unidade',
    components: { 'popper': Popper },
    data: function() {
        return {
            unidade: null,
        }
    },
    methods: {
        loadUnidade() {
            const url = `${baseApiUrl}/unidades/${this.$route.params.id}`;
            console.log(url);

            axios.get(url).then(res => {
                this.unidade = res.data
                console.log(this.unidade)
            }).catch(showError)
        },
        formatDate(date) {
            return new Date(date).toLocaleString();
        },
    },
    mounted() {
      this.loadUnidade();
    }
}
</script>

<style>
  .header-page {
    padding-bottom: 30px;
    
  }
  .header-page h1 {
    margin: 0;
    font-weight: 600;
    font-size: 22px;
  }

  .header-page .sync-state {
    margin: 0;
    font-size: 14px;
    color: #27AE60;
  }

  .header-page p {
    margin: 0;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
  }

  .card .card-title {
    font-weight: 600;
  }
</style>