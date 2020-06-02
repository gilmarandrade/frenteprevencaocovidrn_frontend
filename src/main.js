import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const environment = require('../environment');
console.log(environment);

new Vue({
  render: h => h(App),
}).$mount('#app')