import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getAccountMovements({
      commit
    }, payload) {
      
       return new Promise((resolve, reject) => {
         axios
           .get('https://cors-anywhere.herokuapp.com/' + 'https://api.clay.cl/v1/cuentas_bancarias/movimientos/?fecha_hasta=2020-08-25&fecha_desde=2018-01-01&numero_cuenta=215043786&dv_empresa=2&rut_empresa=76568200', {
             headers: {
               "token": 'ZXosenJtjNV5m6SX_tGXNpySbpFGV_Pk4kkJO4M2TSO3jeks0-THR3jSiwnm2i0a9V2_t4377KYaiVsJWy7CVW'
             }
           })
           .then(data => {
             console.log('MOVEMENTS -> ', data);
             resolve(data);
           })
           .catch(err => {
             console.log(err);
             resolve(err);
             // reject(err);
           });
       });
  },

  getAccountValue({
    commit
  }, payload) {
    
     return new Promise((resolve, reject) => {
       axios
         .get('https://cors-anywhere.herokuapp.com/' + 'https://api.clay.cl/v1/cuentas_bancarias/saldos/?fecha_hasta=2020-08-25&fecha_desde=2018-08-25&numero_cuenta=215043786&dv_empresa=2&rut_empresa=76568200', {
           headers: {
             "token": 'ZXosenJtjNV5m6SX_tGXNpySbpFGV_Pk4kkJO4M2TSO3jeks0-THR3jSiwnm2i0a9V2_t4377KYaiVsJWy7CVW'
           }
         })
         .then(data => {
           console.log('MOVEMENT VALUE -> ', data);
           resolve(data);
         })
         .catch(err => {
           console.log(err);
           resolve(err);
           // reject(err);
         });
     });
}
},
  
  
  modules: {}
});
