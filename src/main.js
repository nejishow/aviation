import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { MdTable, MdCard, MdAvatar } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(BootstrapVue)

Vue.use(MdTable)
Vue.use(MdCard)
Vue.use(MdAvatar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
