<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 social bg-info text-right">
        <img src="../assets/facebook.png" alt="facebook" width="30" />
        <img src="../assets/twitter.png" alt="twitter" width="30" />
        <img src="../assets/youtube.png" alt="youtube" width="30" />
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand img-fluid" href="#">
        <img src="../assets/casa.png" alt="logo" class="img-fluid logo" />
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ menu2 }}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link
                :to="item.route"
                v-for="(item, index) in sub2"
                :key="index"
                ><a class="dropdown-item">{{ item.title }}</a></router-link
              >
            </div>
          </li>
          <li class="nav-item dropdown" no-caret>
            <a
              class="nav-link dropdown-toggle dropdown"
              dropdown-right
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ menu3 }}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div v-for="(item, index) in sub3" :key="index">
                <b-dropdown v-if="!item.sub" class="small"
                  :text="item.title"
                  variant="link"
                  width="100%" no-caret></b-dropdown>
                <b-dropdown
                  v-if="item.sub"
                  id="dropdown-dropright"
                  dropright
                  :text="item.title"
                  variant="link"
                  class=" right-0"
                  width="100%"
                >
                  <b-dropdown-item
                    href="#"
                    v-for="(sub, index2) in item.sub"
                    :key="index2"
                    >{{ sub.title }}</b-dropdown-item
                  >
                </b-dropdown>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="row socialBottom">
      <div class="col-12 socialBottom bg-success"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: "Menu",
      showNavigation: false,
      showSidepanel: false,
      menu1: "Acceuil",
      menu2: "A propos de nous",
      menu3: "Publications",
      menu4: "Sécurité",
      menu5: "Inspection",
      menu6: "e-Service",
      menu7: "A propos de nous",
      sub2: [
        { title: "Presentation", route: "/Presentation" },
        { title: "Mot du directeur", route: "/Mot du directeur" },
        {
          title: "Organisation",
          route: "/Organisation",
        },
        {
          title: "Politique de supervision",
          route: "/Politique de Supervision",
        },
        { title: "Politique de formation", route: "/Politique de Formation" },
      ],
      sub3: [
        {
          title: "Textes legislatifs",
          sub: [{ title: "Lois" }, { title: "Decrets" }, { title: "Arettés" }],
          route: "",
        },
        {
          title: "Textes reglementaires",
          sub: [{ title: "Réglementation aérotique de Djibouti" }],
          route: "",
        },
        {
          title: "Directives",
          route: "",
        },
        {
          title: "Circulaires",
          route: "",
        },
        {
          title: "Décisions",
          route: "",
        },
        {
          title: "Accords",
          sub: [
            { title: "Accords internationaux" },
            { title: "Accords bilatéraux" },
          ],
          route: "",
        },
      ],
      sub4: [
        { title: "Naviguabilité", route: "" },
        {
          title: "Exploitation technique des aéronefs",
          route: "",
        },
        {
          title: "License du personel",
          route: "",
        },
        {
          title: "Aérodrome et infrastructure aéroportuaires",
          route: "",
        },
        {
          title: "Service de l'information aéronautique",
          route: "",
        },
        {
          title: "Service de la cartographie",
          route: "",
        },
      ],
      sub5: [{ title: "Audits et Inspections", route: "" }],
      sub6: [
        { title: "Contact", route: "" },
        {
          title: "Compte rendu volontaire",
          route: "",
        },
        {
          title: "Demande d'autorisation",
          route: "",
        },
        {
          title: "Formulaire de notification de sécurité",
          route: "",
        },
      ],
    };
  },
  computed: {},
};
</script>
<style lang="css" scoped>
.socialBottom {
  min-height: 5px;
}
.navbar {
  width: 100%;
}
.tabTitle {
  color: #005ba1;
}
@media (min-width: 770px) {
  .logo {
    width: 200px;
  }
}
@media (max-width: 769px) {
  .logo {
    width: 100px;
  }
}
#sidebar-2 {
  transition-duration: 1s;
}
</style>
