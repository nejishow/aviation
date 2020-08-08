import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { MdTable, MdCard, MdAvatar, MdContent, MdRipple } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios';
import VueAxios from 'vue-axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(BootstrapVue)
Vue.use(iView);
Vue.use(MdTable)
Vue.use(MdCard)
Vue.use(MdAvatar)
Vue.use(MdContent)
Vue.use(MdRipple)
Vue.use(axios, VueAxios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
