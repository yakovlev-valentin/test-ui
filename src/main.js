import Vue from 'vue'
import App from './App.vue'
import VuiCodica from './index'
import '@mdi/font/scss/materialdesignicons.scss'
import '@/styles/index.scss'
console.log(VuiCodica)
Vue.use(VuiCodica)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
