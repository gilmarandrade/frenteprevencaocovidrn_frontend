<template>
    <div>
        <h6>{{ $route.params.nome }}</h6>
        <h1>Meus Idosos ({{idosos.length}})</h1>
        <b-table :items="idosos" :fields="fields">
            <template v-slot:cell(col-1)="data">
                <div>
                    <b>{{ data.item.nome }}</b>
                </div>
                <div class="badges" v-if="data.item.stats.ultimaEscala">
                    <Badge v-if="data.item.stats.ultimaEscala.vulnerabilidade" :value="data.item.stats.ultimaEscala.vulnerabilidade" />
                    <Badge v-if="data.item.stats.ultimaEscala.epidemiologica" :value="data.item.stats.ultimaEscala.epidemiologica" />
                    <Badge v-if="data.item.stats.ultimaEscala.riscoContagio" :value="data.item.stats.ultimaEscala.riscoContagio" />
                </div>
            </template>
            <template v-slot:cell(col-2)="data">
                <div class="statusAtendimentos">
                    <span>
                        <popper
                            trigger="hover"
                            :options="{
                             placement: 'top',
                             modifiers: { offset: { offset: '0,10px' } }
                            }">
                            <div class="popper">
                               Atendimentos efetuados / total de tentativas
                            </div>

                            <span slot="reference">
                                <i class="fas fa-headset"></i> {{ data.item.stats.qtdAtendimentosEfetuados }}/{{ data.item.stats.qtdAtendimentosEfetuados + data.item.stats.qtdAtendimentosNaoEfetuados }}
                            </span>
                        </popper>
                    </span>

                    <span class="statusUltimoAtendimento" v-if="data.item.stats.ultimoAtendimento.data" :class="{ 'atendido' : data.item.stats.ultimoAtendimento.efetuado }">
                        <popper
                            trigger="hover"
                            :options="{
                             placement: 'top',
                             modifiers: { offset: { offset: '0,10px' } }
                            }">
                            <div class="popper">
                               Último atendimento: 
                               <span v-if="data.item.stats.ultimoAtendimento.efetuado">Ligação atendida</span>
                               <span v-if="!data.item.stats.ultimoAtendimento.efetuado">Não atendeu a ligação</span>
                            </div>

                            <span slot="reference">
                                <i class="far fa-check-circle" v-show="data.item.stats.ultimoAtendimento.efetuado"></i>
                                <i class="far fa-times-circle" v-show="!data.item.stats.ultimoAtendimento.efetuado"></i>
                                {{ data.item.stats.ultimoAtendimento.data }}
                            </span>
                        </popper>
                    </span>

                    <span class="statusUltimoAtendimento atencao" v-if="!data.item.stats.ultimoAtendimento.data">
                        <popper
                            trigger="hover"
                            :options="{
                             placement: 'top',
                             modifiers: { offset: { offset: '0,10px' } }
                            }">
                            <div class="popper">
                               Último atendimento: não há registros
                            </div>

                            <span slot="reference">
                                <i class="fas fa-exclamation-circle"></i> nunca atendido
                            </span>
                        </popper>
                    </span>

                    <span class="dataProximoAtendimento" v-if="data.item.stats.dataProximoAtendimento">
                        <popper
                            trigger="hover"
                            :options="{
                             placement: 'top',
                             modifiers: { offset: { offset: '0,10px' } }
                            }">
                            <div class="popper">
                               Sugestão de próximo atendimento
                            </div>

                            <span slot="reference">
                                <i class="far fa-clock"></i> {{ data.item.stats.dataProximoAtendimento }}
                            </span>
                        </popper>
                    </span>
                </div>
                <div>
                    {{ data.item.telefone1 }} {{ data.item.telefone2 }}
                </div>
          </template>
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global';
import axios from 'axios';
import Badge from '@/components/template/Badge';
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

const spreadsheetId = '1tBlFtcTlo1xtq4lU1O2Yq94wYaFfyL9RboX6mWjKhh4';

export default {
    name: 'VigilanteHome',
    components: { Badge, 'popper': Popper },
    data: function() {
        return {
            idosos: [],
            fields: [ 
                { key: 'col-1', label: 'col1' },
                { key: 'col-2', label: 'col2' },
            ],
        }
    },
    methods: {
        loadIdosos() {
            const url = `${baseApiUrl}/planilhas/${spreadsheetId}/vigilantes/${this.$route.params.indexVigilante}/idosos`;
            console.log(url);
            axios.get(url).then(res => {
                this.idosos = res.data;
                console.log(this.idosos)
            }).catch(showError)
        },
        formatDate(date) {
            return new Date(date).toLocaleString();
        },
    },
    mounted() {
        this.loadIdosos();
    }
}
</script>

<style>
    td:first-child {
        /* background: red; */
        width: 60%;
    }

    td:last-child {
        text-align: right;
        /* background: blue; */
        width: 40%;
    }

    .badges .badge {
        margin-right: 8px;
    }

    .statusAtendimentos > span {
        margin-left: 15px;
    }

    .statusUltimoAtendimento {
        /* background: red; */
        color: rgb(235, 87, 87);
    }

    .statusUltimoAtendimento.atendido {
        color: rgb(39, 174, 96);
    }

    .statusUltimoAtendimento.atencao {
        /* background: yellow; */
        color: rgb(235, 87, 87);
    }

    .dataProximoAtendimento {
        /* background: blue; */
    }

    .dataProximoAtendimento.atencao {
        color: rgb(235, 87, 87);
    }

</style>