import Vue from 'vue'
import App from './App.vue'
import VuiCodica from './plugins'
import '@mdi/font/scss/materialdesignicons.scss'
import '@/styles/index.scss'
Vue.use(VuiCodica)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export default VuiCodica
