import Vue from 'vue'
import App from './App.vue'

import './config/msgs'
import './config/bootstrap'
import './config/axios'
import store from './config/store'
import router from './config/router'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

const environment = require('../environment');
console.log(environment);

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')