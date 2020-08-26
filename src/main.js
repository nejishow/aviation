import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import SuiVue from "semantic-ui-vue";
import VueAxios from "vue-axios";
import Buefy from "buefy";
import "semantic-ui-css/semantic.min.css";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import { MdCard, MdContent, MdTabs, MdButton, MdIcon, MdProgress } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faPhone,
  faMobile,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "buefy/dist/buefy.css";
import PortalVue from 'portal-vue'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VueMeta from 'vue-meta'

Vue.use(VueMeta,{
  refreshOnceOnNavigation: true

})

Vue.use(PortalVue)

library.add(faUserSecret, faPhone, faMobile, faEnvelope);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(MdCard);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdProgress);
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

Vue.use(Buefy);
Vue.use(BootstrapVue);
Vue.use(SuiVue);

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
