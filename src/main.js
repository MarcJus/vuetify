import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

console.log("Connexion réussie");

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

export default {
  local_adress: "192.168.0.50",
}
