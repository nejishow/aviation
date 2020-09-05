import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index';
import Dashboard from "../pages/Dashboard.vue";
import Presentation from "../pages/A propos de nous/Presentation.vue";
import Organisation from "../pages/A propos de nous/Organisation.vue";
import MduD from "../pages/A propos de nous/Mot du directeur.vue";
import PdeF from "../pages/A propos de nous/Politique de formation.vue";
import PdeS from "../pages/A propos de nous/Politique de supervision.vue";
import Arretes from "../pages/Publications/Textes reglementaires/Arretes.vue";
import Decrets from "../pages/Publications/Textes reglementaires/Decret.vue";
import Lois from "../pages/Publications/Textes legislatifs/Lois.vue";
import RAD from "../pages/Publications/Textes reglementaires/Reglementation aerotique de Djibouti.vue";
import AI from "../pages/Publications/Accords/Accords Internationaux.vue";
import AB from "../pages/Publications/Accords/Accords bilaterales.vue";
import DirectiveS from "../pages/Publications/Directives.vue";
import Circulaires from "../pages/Publications/Circulaires.vue";
import Decisions from "../pages/Publications/Decisions.vue";
import Reglements from "../pages/Securites/Reglements.vue";
import Formulaires from "../pages/Securites/Formulaires.vue";
import Guides from "../pages/Securites/Guides.vue";
import Directives from "../pages/Securites/Directives.vue";
import Manuels from "../pages/Securites/Manuels.vue";
import Procedure from "../pages/Securites/Procedures.vue";
import Login from "../pages/Login.vue";
import Docs from "../pages/gestion/GestionDocuments.vue";
import Media from "../pages/gestion/GestionMedia.vue";
import DocIntern from '../pages/gestion/DocumentInternView.vue';
import Contact from '../pages/Contact.vue';
import TR from '../pages/Header/texte_reglementaire.vue';
import Securite from '../pages/Header/securité.vue';
import DA from '../pages/eService/demande_autorisation.vue';
import FCR from '../pages/eService/formulaire_cr.vue';
import Surete from '../pages/surete/surete.vue';
import Facilitation from '../pages/surete/facilitation.vue';
import AuditInspection from '../pages/inspection/audit_inspection.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (to.name === "Login" && localStorage.getItem('token')) {
        next({ name: "Dashboard" })
      } else {
        next()
      }
    }
  },
  {
    path: "/gestionDocs",
    name: "Docs",
    component: Docs,
    beforeEnter: (to, from, next) => {
      if (to.name === "Docs" && !store.state.user.isAdmin) {
        next({ name: "Login" })
      } else {
        next()
      }
    }
  },
  {
    path: "/docIntern",
    name: "DocIntern",
    component: DocIntern,
    beforeEnter: (to, from, next) => {
      if (to.name === "DocIntern" && !store.state.user._id) {
        next({ name: "Login" })
      } else {
        next()
      }
    }
  },
  {
    path: "/gestionMedia",
    name: "Media",
    component: Media,
    beforeEnter: (to, from, next) => {
      if (to.name === "Media" && !store.state.user.isAdmin) {
        next({ name: "Login" })
      } else {
        next()
      }
    }
  },
  {
    path: "/securite/:id",
    name: "Securité",
    component: Securite,
  },
  {
    path: "/Formulaires/:id",
    name: "Formulaires",
    component: Formulaires,
  },
  {
    path: "/Guides/:id",
    name: "Guides",
    component: Guides,
  },
  {
    path: "/Procedures/:id",
    name: "Procedures",
    component: Procedure,
  },
  {
    path: "/Manuels/:id",
    name: "Manuels",
    component: Manuels,
  },
  {
    path: "/Reglements/:id",
    name: "Reglements",
    component: Reglements,
  },
  {
    path: "/Directives",
    name: "DirectiveS",
    component: DirectiveS,
  },
  {
    path: "/Presentation",
    name: "Presentation",
    component: Presentation,
  },
  {
    path: "/Mot du directeur",
    name: "MduD",
    component: MduD,
  },
  {
    path: "/Organisation",
    name: "Organisation",
    component: Organisation,
  },
  {
    path: "/Politique de Formation",
    name: "PdeF",
    component: PdeF,
  },
  {
    path: "/Politique de Supervision",
    name: "PdeS",
    component: PdeS,
  },
  {
    path: "/Textes reglementaires/Arretes",
    name: "Arretes",
    component: Arretes,
  },
  {
    path: "/Textes reglementaires/Decrets",
    name: "Decrets",
    component: Decrets,
  },
  {
    path: "/Textes reglementaires/Reglementation aerotique de Djibouti",
    name: "Reglementation aerotique de Djibouti",
    component: RAD,
  },
  {
    path: "/Textes reglementaires",
    name: "TR",
    component: TR,
  },
  {
    path: "/Textes legislatifs/Lois",
    name: "Lois",
    component: Lois,
  },
  {
    path: "/Accords/Accords internationaux",
    name: "Accords internationaux",
    component: AI,
  },
  {
    path: "/Accords/Accords bilateraux",
    name: "Accords bilateraux",
    component: AB,
  },
  {
    path: "/Directives/:id",
    name: "Directives",
    component: Directives,
  },
  {
    path: "/Circulaires",
    name: "Circulaires",
    component: Circulaires,
  },
  {
    path: "/Decisions",
    name: "Decisions",
    component: Decisions,
  },
  {
    path: "/Demande autorisation",
    name: "Autorisation",
    component: DA,
  },
  {
    path: "/Formulaire de compte rendu",
    name: "Formulaire CR",
    component: FCR,
  },
  {
    path: "/Surete",
    name: "Surete",
    component: Surete,
  },
  {
    path: "/Facilitation",
    name: "Facilitation",
    component: Facilitation,
  },
  {
    path: "/Audit et Inspection",
    name: "Audit et Inspection",
    component: AuditInspection,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
