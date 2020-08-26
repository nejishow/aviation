import Vue from "vue";
import VueRouter from "vue-router";

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

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/gestionDocs",
    name: "Docs",
    component: Docs,
  },
  {
    path: "/gestionMedia",
    name: "Media",
    component: Media,
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
    path: "/Texte legislatifs/Arretes",
    name: "Arretes",
    component: Arretes,
  },
  {
    path: "/Texte reglementaires/Decrets",
    name: "Decrets",
    component: Decrets,
  },
  {
    path: "/Texte reglementaires/Lois",
    name: "Lois",
    component: Lois,
  },
  {
    path: "/Textes reglementaires/Reglementation aerotique de Djibouti",
    name: "Reglementation aerotique de Djibouti",
    component: RAD,
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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
