import Vue from 'vue'
import App from './App.vue'
import UI from './plugins'

Vue.use(UI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
