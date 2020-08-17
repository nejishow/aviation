<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 social bg-info text-right">
        <b-button pill class="btn btn-secondary text-white">Francais</b-button>
        <b-button pill class="btn btn-danger text-white">Englais</b-button>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <router-link to="/">
        <a class="navbar-brand img-fluid" href="#">
          <img src="../assets/casa.png" alt="logo" class="img-fluid logo" />
        </a>
      </router-link>

      <!-- Header French -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!-- A propos de nous -->
          <li class="nav-item dropdown">
            <a
              id="dropdownMenu1"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="nav-link dropdown-toggle"
              >A propos de nous</a
            >
            <ul
              aria-labelledby="dropdownMenu1"
              class="dropdown-menu border-0 shadow"
            >
              <li>
                <router-link to="/Presentation"
                  ><a href="#" class="dropdown-item"
                    >Presentation
                  </a></router-link
                >
              </li>
              <li>
                <router-link to="/"
                  ><a href="#" class="dropdown-item"
                    >Organisation
                  </a></router-link
                >
              </li>
              <li>
                <router-link to="/Mot du directeur"
                  ><a href="#" class="dropdown-item"
                    >Mot du directeur
                  </a></router-link
                >
              </li>
              <li>
                <router-link to="/"
                  ><a href="#" class="dropdown-item"
                    >Politique de formation
                  </a></router-link
                >
              </li>
              <li>
                <router-link to="/"
                  ><a href="#" class="dropdown-item"
                    >Politique de supervision
                  </a></router-link
                >
              </li>
            </ul>
          </li>
          <!-- Publications -->

          <li class="nav-item dropdown">
            <a
              id="dropdownMenu1"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="nav-link dropdown-toggle"
              >Publications</a
            >
            <ul
              aria-labelledby="dropdownMenu1"
              class="dropdown-menu border-0 shadow"
            >
              <!-- Level two dropdown-->
              <li class="dropdown-submenu">
                <a
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Texte legislatif</a
                >
                <ul
                  aria-labelledby="dropdownMenu2"
                  class="dropdown-menu border-0 shadow"
                >
                  <li>
                    <router-link to="/Texte legislatifs/Arretes">
                      <a tabindex="-1" href="#" class="dropdown-item"
                        >Arrêtés</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to="/Texte legislatifs/Decrets"
                      ><a href="#" class="dropdown-item"
                        >Décrets</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to="/Texte legislatifs/Lois"
                      ><a href="#" class="dropdown-item">Lois</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown-submenu">
                <a
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Texte reglementaires</a
                >
                <ul
                  aria-labelledby="dropdownMenu2"
                  class="dropdown-menu border-0 shadow"
                >
                  <li>
                    <router-link
                      to="/Textes reglementaires/Reglementation aerotique de Djibouti"
                    >
                      <a tabindex="-1" href="#" class="dropdown-item"
                        >Réglementation aérotique de Djibouti</a
                      ></router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown-submenu">
                <a
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="true"
                  class="dropdown-item nav-item dropdown-toggle"
                  >Accords</a
                >
                <ul
                  aria-labelledby="dropdownMenu2"
                  class="dropdown-menu border-0 shadow"
                >
                  <li>
                    <router-link to="/Accords/Accords internationaux">
                      <a tabindex="-1" href="#" class="dropdown-item"
                        >Accords internationaux</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to="/Accords/Accords bilateraux">
                      <a href="#" class="dropdown-item"
                        >Accords bilaterales</a
                      ></router-link
                    >
                  </li>
                </ul>
              </li>
              <!-- End Level two -->
              <li>
                <router-link to="/Directives"
                  ><a href="#" class="dropdown-item"
                    >Directives
                  </a></router-link
                >
              </li>
              <li>
                <router-link to="/Circulaires"
                  ><a href="#" class="dropdown-item"
                    >Circulaires
                  </a></router-link
                >
              </li>
              <li>
                <router-link to="/Decisions"
                  ><a href="#" class="dropdown-item">Decisions </a></router-link
                >
              </li>
            </ul>
          </li>

          <!-- Securité -->

          <li class="nav-item dropdown">
            <a
              id="dropdownMenu1"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="nav-link dropdown-toggle"
              >Securité</a
            >
            <ul
              aria-labelledby="dropdownMenu1"
              class="dropdown-menu border-0 shadow"
            >
              <!-- Level two dropdown-->
              <li class="dropdown-submenu">
                <a
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Naviguabilité</a
                >
                <ul
                  aria-labelledby="dropdownMenu2"
                  class="dropdown-menu border-0 shadow"
                >
                  <li>
                    <router-link
                      :to="{
                        name: 'Directives',
                        params: { category: 'Naviguabilité', id: '12345' },
                      }"
                    >
                      <a tabindex="-1" href="#" class="dropdown-item"
                        >Directives</a
                      >
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Formulaires',
                        params: { category: 'Naviguabilité', id: '12345' },
                      }"
                      ><a href="#" class="dropdown-item"
                        >Formulaires</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Guides',
                        params: { category: 'Naviguabilité', id: '12345' },
                      }"
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Manuels',
                        params: { category: 'Naviguabilité', id: '12345' },
                      }"
                      ><a href="#" class="dropdown-item"
                        >Manuels</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Procedures',
                        params: { category: 'Naviguabilité', id: '12345' },
                      }"
                      ><a href="#" class="dropdown-item"
                        >Procedures</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Reglements',
                        params: { category: 'Naviguabilité', id: '12345' },
                      }"
                      ><a href="#" class="dropdown-item"
                        >Reglements</a
                      ></router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown-submenu">
                <a
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Exploitation technique des aéronefs</a
                >
                <ul
                  aria-labelledby="dropdownMenu2"
                  class="dropdown-menu border-0 shadow"
                >
                  <li>
                    <a tabindex="-1" href="#" class="dropdown-item"
                      >Directives</a
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Formulaires</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Manuels</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Procedures</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Reglements</a
                      ></router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown-submenu">
                <a
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >License du personels</a
                >
                <ul
                  aria-labelledby="dropdownMenu2"
                  class="dropdown-menu border-0 shadow"
                >
                  <li>
                    <a tabindex="-1" href="#" class="dropdown-item"
                      >Directives</a
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Formulaires</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Manuels</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Procedures</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Reglements</a
                      ></router-link
                    >
                  </li>
                </ul>
              </li>
              <!-- End Level two -->
              <li class="dropdown-submenu">
                <a
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Aérodromes et infrastructures portuaires</a
                >
                <ul
                  aria-labelledby="dropdownMenu2"
                  class="dropdown-menu border-0 shadow"
                >
                  <li>
                    <a tabindex="-1" href="#" class="dropdown-item"
                      >Directives</a
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Formulaires</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Manuels</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Procedures</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Reglements</a
                      ></router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown-submenu">
                <a
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Service de l'information aérotique</a
                >
                <ul
                  aria-labelledby="dropdownMenu2"
                  class="dropdown-menu border-0 shadow"
                >
                  <li>
                    <a tabindex="-1" href="#" class="dropdown-item"
                      >Directives</a
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Formulaires</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Manuels</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Procedures</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Reglements</a
                      ></router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown-submenu">
                <a
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Service de la cartographie</a
                >
                <ul
                  aria-labelledby="dropdownMenu2"
                  class="dropdown-menu border-0 shadow"
                >
                  <li>
                    <a tabindex="-1" href="#" class="dropdown-item"
                      >Directives</a
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Formulaires</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Manuels</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Procedures</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to=""
                      ><a href="#" class="dropdown-item"
                        >Reglements</a
                      ></router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <!-- Inspection -->
          <li class="nav-item dropdown">
            <a
              id="dropdownMenu1"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="nav-link dropdown-toggle"
              >Inspection</a
            >
            <ul
              aria-labelledby="dropdownMenu1"
              class="dropdown-menu border-0 shadow"
            >
              <li>
                <router-link to="/"
                  ><a href="#" class="dropdown-item"
                    >Audit et Inspection
                  </a></router-link
                >
              </li>
              <!-- End Level two -->
            </ul>
          </li>

          <!-- e-services -->
          <li class="nav-item dropdown">
            <a
              id="dropdownMenu1"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="nav-link dropdown-toggle"
              >e-Services</a
            >
            <ul
              aria-labelledby="dropdownMenu1"
              class="dropdown-menu border-0 shadow"
            >
              <li>
                <router-link to="/"
                  ><a href="#" class="dropdown-item">Contact </a></router-link
                >
              </li>
              <li>
                <router-link to="/"
                  ><a href="#" class="dropdown-item"
                    >Compte rendu volontaire
                  </a></router-link
                >
              </li>
              <li>
                <router-link to="/"
                  ><a href="#" class="dropdown-item"
                    >Demande d'autorisation
                  </a></router-link
                >
              </li>
              <li>
                <router-link to="/"
                  ><a href="#" class="dropdown-item"
                    >Formulaire de notification de securité
                  </a></router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item nav-link btn"><router-link to="/gestionMedia" class="nav-item text-danger font-weight-bolder">Gestion Media</router-link></li>
          <li class="nav-item nav-link btn"><router-link to="/gestionDocs" class="nav-item text-danger font-weight-bolder">Gestion Documents</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="row socialBottom">
      <div class="col-12 socialBottom bg-success"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      menus: [],
    };
  },
  mounted() {
    $("ul.dropdown-menu[data-toggle='dropdown']").on("mouseleave", function (
      event
    ) {
      event.preventDefault();
      event.stopPropagation();
      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", () => {
          $(".dropdown-submenu .show").removeClass("show");
        });
    });
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (
      event
    ) {
      event.preventDefault();
      event.stopPropagation();

      $(this).siblings().toggleClass("show");

      if (!$(this).next().hasClass("show")) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", () => {
          $(".dropdown-submenu .show").removeClass("show");
        });
    });
  },
  methods: {
    async go(id) {
      await this.$store.dispatch("categoryMenu/fetchCategoryMenu", id);
    },
    dropdown() {
      $(".dropdown-toggle").dropdown("toggle");
    },
  },
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
.right {
  width: 400px;
}

.dropdown-submenu {
  position: relative;
}

.dropdown-submenu > a:after {
  float: right;
  border: none;
  font-family: "FontAwesome";
}

.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: 0px;
  margin-left: 0px;
}
</style>
