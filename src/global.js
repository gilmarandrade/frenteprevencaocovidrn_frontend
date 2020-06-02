import Vue from 'vue';

export const baseApiUrl = require('../environment').api;
// export const baseApiUrl = process.env.baseApiUrl ? process.env.baseApiUrl : 'http://localhost:3000';
console.log('api url: ' + baseApiUrl)
export function showError(e) {
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg: e.response.data});
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e});
    } else {
        Vue.toasted.global.defaultError();
    }
}

export default { baseApiUrl, showError }