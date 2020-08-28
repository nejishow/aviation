<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 social bg-info text-right">
            <b-button to="/contact" pill class="btn bg-light text-white">
                <img src="../assets/mail.png" width="20" alt="">
            </b-button>
            <b-button pill class="btn btn-danger text-white">Fr</b-button>
            <b-button pill class="btn btn-success text-white">En</b-button>
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
                    <a id="dropdownMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">A propos de nous</a>
                    <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
                        <li>
                            <router-link to="/Presentation"><a href="#" class="dropdown-item">Presentation
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/"><a href="#" class="dropdown-item">Organisation
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/Mot du directeur"><a href="#" class="dropdown-item">Mot du directeur
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/"><a href="#" class="dropdown-item">Politique de formation
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/"><a href="#" class="dropdown-item">Politique de supervision
                                </a></router-link>
                        </li>
                    </ul>
                </li>
                <!-- Publications -->

                <li class="nav-item dropdown">
                    <a id="dropdownMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Publications</a>
                    <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
                        <!-- Level two dropdown-->
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Texte legislatif</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <router-link to="/Texte legislatifs/Lois"><a href="#" class="dropdown-item">Lois</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Texte reglementaires</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <router-link to="/Textes reglementaires/Reglementation aerotique de Djibouti">
                                        <a tabindex="-1" href="#" class="dropdown-item">Réglementation aérotique de Djibouti</a></router-link>
                                </li>
                                <li>
                                    <router-link to="/Texte legislatifs/Arretes">
                                        <a tabindex="-1" href="#" class="dropdown-item">Arrêtés</a></router-link>
                                </li>
                                <li>
                                    <router-link to="/Texte legislatifs/Decrets"><a href="#" class="dropdown-item">Décrets</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="true" class="dropdown-item nav-item dropdown-toggle">Accords</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <router-link to="/Accords/Accords internationaux">
                                        <a tabindex="-1" href="#" class="dropdown-item">Accords internationaux</a></router-link>
                                </li>
                                <li>
                                    <router-link to="/Accords/Accords bilateraux">
                                        <a href="#" class="dropdown-item">Accords bilaterales</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <!-- End Level two -->
                        <li>
                            <router-link to="/Directives"><a href="#" class="dropdown-item">Directives
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/Circulaires"><a href="#" class="dropdown-item">Circulaires
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/Decisions"><a href="#" class="dropdown-item">Decisions </a></router-link>
                        </li>
                    </ul>
                </li>

                <!-- Securité -->

                <li class="nav-item dropdown">
                    <a id="dropdownMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Securité</a>
                    <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
                        <!-- Level two dropdown-->
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle link">Naviguabilité</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <router-link :to="{
                        name: 'Directives',
                        params:{id: '5f3aa6cb34512340cc2b824d' },
                      }">
                                        <a tabindex="-1" href="#" class="dropdown-item">Directives</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Formulaires',
                        params: {id: '5f3aa6cb34512340cc2b824e'},
                      }"><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Guides',
                        params: {id: '5f3aa6cb34512340cc2b824f'},
                      }"><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Manuels',
                        params: {id: '5f3aa6cb34512340cc2b8250'},
                      }"><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Procedures',
                        params: {id: '5f3aa6cb34512340cc2b8251'},
                      }"><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Reglements',
                        params: {id: '5f3aa6cb34512340cc2b8252'},
                      }"><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Exploitation technique des aéronefs</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <a tabindex="-1" href="#" class="dropdown-item">Directives</a>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">License du personels</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <a tabindex="-1" href="#" class="dropdown-item">Directives</a>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <!-- End Level two -->
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Aérodromes et infrastructures portuaires</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <a tabindex="-1" href="#" class="dropdown-item">Directives</a>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Service de l'information aéronautique et de la cartographie</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <a tabindex="-1" href="#" class="dropdown-item">Directives</a>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Communication, naviguation et surveillance</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <a tabindex="-1" href="#" class="dropdown-item">Directives</a>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Gestion de l'espace aérien</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <a tabindex="-1" href="#" class="dropdown-item">Directives</a>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Service métérorologique</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <a tabindex="-1" href="#" class="dropdown-item">Directives</a>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link to=""><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <!-- Securité -->

                <li class="nav-item dropdown">
                    <a id="dropdownMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Sureté</a>
                    <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
                        <!-- Level two dropdown-->
                        <li>
                            <router-link to="/"><a href="#" class="dropdown-item">Sureté
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/"><a href="#" class="dropdown-item">Facilitation
                                </a></router-link>
                        </li>
                    </ul>
                </li>

                <!-- Inspecton -->
                <li class="nav-item dropdown">
                    <a id="dropdownMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Inspection</a>
                    <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
                        <li>
                            <router-link to="/"><a href="#" class="dropdown-item">Audit et Inspection
                                </a></router-link>
                        </li>
                        <!-- End Level two -->
                    </ul>
                </li>

                <!-- e-services -->
                <li class="nav-item dropdown">
                    <a id="dropdownMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">e-Services</a>
                    <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
                        <li>
                            <router-link to="/"><a href="#" class="dropdown-item">Formulaire de compte rendu
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/"><a href="#" class="dropdown-item">Demande d'autorisation de vol
                                </a></router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item nav-link btn" v-show="user.isAdmin">
                    <router-link to="/gestionMedia" class="nav-item text-primary font-weight-bolder">Gestion Media</router-link>
                </li>
                <li class="nav-item nav-link btn" v-show="user.isAdmin">
                    <router-link to="/gestionDocs" class="nav-item text-primary font-weight-bolder">Gestion Documents</router-link>
                </li>
                <li class="nav-item nav-link btn" v-show="user._id">
                    <router-link to="/docIntern" class="nav-item text-primary font-weight-bolder">Documents Internes</router-link>
                </li>
                <li class="nav-item nav-link btn" v-show="user._id">
                    <button class="btn-group btn-outline-danger btn nav-item" @click="logout">Sign out</button>
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
      menus: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
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
  // tres important sinn le sous menu n'est pas adjacent au menu
  position: relative;
}

.dropdown-submenu > .dropdown-menu {
  // c'est ce qui met le sous menu a droite
  top: 0;
  left: 100%;
  margin-top: 0px;
  margin-left: 0px;
  border-radius: 0%;
}

.dropdown-submenu:hover > .dropdown-menu {
  display: block; // c'st lui qui le truc hoverable
}

.nav-item > a:after {
  // c'est  pour la fleche du nav
  //    display: block;
  content: " ";
  float: right;
  width: 0;
  height: 0;
  border-color: transparent;
  // border-style: solid;
  // border-width: 5px 0 5px 5px;
  // margin-top: 5px;
  // margin-right: -10px;
}

.dropdown-submenu > a:after {
  // c'est tjr pour la fleche
  display: block;
  content: " ";
  float: right;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px 0 5px 5px;
  margin-top: 5px;
  margin-right: -10px;
}

.dropdown-submenu:hover > a:after {
  // la fleche
  border-left-color: red;
}

.dropdown-item {
  list-style: none;
  font-size: 1.6;
  color: black;
  text-decoration: none;

  &:link,
  &:visited,
  &:active {
    color: black;
  }

  &:hover {
    text-transform: uppercase;
    color: black;
  }
}
</style>
