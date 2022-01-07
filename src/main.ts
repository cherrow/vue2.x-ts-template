import Vue from 'vue'
import App from './App.vue'
import * as api from "@/service/api";

Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  render: h => h(App),
}).$mount('#app')
