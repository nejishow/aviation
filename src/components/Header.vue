<template>
<div class="container-fluid">
    <div>
        <b-sidebar class="sidebar" id="sidebar-1" title="Menu">
            <b-list-group>
                <b-list-group-item>
                    <router-link to="/">{{ menu1 }}</router-link>
                </b-list-group-item>
                <b-list-group-item v-b-toggle.sidebar-2>{{
            menu2
          }}</b-list-group-item>
                <b-list-group-item v-b-toggle.sidebar-3>{{
            menu3
          }}</b-list-group-item>
                <b-list-group-item v-b-toggle.sidebar-4>{{
            menu4
          }}</b-list-group-item>
                <b-list-group-item v-b-toggle.sidebar-5>{{
            menu5
          }}</b-list-group-item>
                <b-list-group-item v-b-toggle.sidebar-6>{{
            menu6
          }}</b-list-group-item>
                <b-list-group-item v-b-toggle.sidebar-6>{{menu7}}</b-list-group-item>
            </b-list-group>
        </b-sidebar>
        <b-sidebar class="sidebar" id="sidebar-2" :title="menu2" shadow bg-variant="dark" text-variant="light">
            <b-list-group class="bg-dark">
                <b-list-group-item v-for="(item, index) in sub2" :key="index">
                    <router-link :to="item.router">{{ item.title }}</router-link>
                </b-list-group-item>
            </b-list-group>
        </b-sidebar>
        <b-sidebar class="sidebar" id="sidebar-3" :title="menu3" shadow bg-variant="dark" text-variant="light">
            <b-list-group class="bg-dark">
                <b-list-group-item v-b-toggle.sub-sidebar-3 v-for="(item, index) in sub3" :key="index" href="#">
                    <router-link :to="item.router">{{ item.title }}</router-link>
                </b-list-group-item>
            </b-list-group>
        </b-sidebar>

        <b-sidebar class="sidebar" id="sidebar-4" :title="menu4" shadow bg-variant="dark" text-variant="light">
            <b-list-group class="bg-dark">
                <b-list-group-item v-for="(item, index) in sub4" :key="index" href="#">
                    <router-link :to="item.router">{{ item.title }}</router-link>
                </b-list-group-item>
            </b-list-group>
        </b-sidebar>
        <b-sidebar class="sidebar" id="sidebar-5" :title="menu5" shadow bg-variant="dark" text-variant="light">
            <b-list-group class="bg-dark">
                <b-list-group-item v-for="(item, index) in sub5" :key="index" href="#">
                    <router-link :to="item.router">{{ item.title }}</router-link>
                </b-list-group-item>
            </b-list-group>
        </b-sidebar>
        <b-sidebar class="sidebar" id="sidebar-6" :title="menu6" shadow bg-variant="dark" text-variant="light">
            <b-list-group class="bg-dark">
                <b-list-group-item v-for="(item, index) in sub6" :key="index" href="#">
                    <router-link :to="item.router">{{ item.title }}</router-link>
                </b-list-group-item>
            </b-list-group>
        </b-sidebar>
        <b-sidebar class="sidebar" id="sidebar-7" :title="menu6" shadow bg-variant="dark" text-variant="light">
            <b-list-group class="bg-dark">
                <b-list-group-item v-for="(item, index) in sub7" :key="index" href="#">
                    <router-link :to="item.router">{{ item.title }}</router-link>
                </b-list-group-item>
            </b-list-group>
        </b-sidebar>
    </div>
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

        <b-navbar-toggle v-b-toggle.sidebar-1 target=""></b-navbar-toggle>

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
                            <router-link to="/Organisation"><a href="#" class="dropdown-item">Organisation
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/Mot du directeur"><a href="#" class="dropdown-item">Mot du directeur
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/Politique de Formation"><a href="#" class="dropdown-item">Politique de formation
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/Politique de Supervision"><a href="#" class="dropdown-item">Politique de supervision
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
                                    <router-link to="/Textes legislatifs/Lois"><a href="#" class="dropdown-item">Lois</a></router-link>
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
                                    <router-link to="/Textes reglementaires/Arretes">
                                        <a tabindex="-1" href="#" class="dropdown-item">Arrêtés</a></router-link>
                                </li>
                                <li>
                                    <router-link to="/Textes reglementaires/Decrets"><a href="#" class="dropdown-item">Décrets</a></router-link>
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
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle link">Navigabilité</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
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
                                    <router-link :to="{
                        name: 'Formulaires',
                        params: {id: '5f3aa8fe34512340cc2b825a'},
                      }"><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Guides',
                        params: {id: '5f3aa8fe34512340cc2b825b'},
                      }"><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Manuels',
                        params: {id: '5f3aa8fe34512340cc2b825c'},
                      }"><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Procedures',
                        params: {id: '5f3aa8fe34512340cc2b825d'},
                      }"><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Reglements',
                        params: {id: '5f3aa8fe34512340cc2b825e'},
                      }"><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">License du personels</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <router-link :to="{
                        name: 'Formulaires',
                        params: {id: '5f3aa91c34512340cc2b8260'},
                      }"><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Guides',
                        params: {id: '5f3aa91c34512340cc2b8261'},
                      }"><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Manuels',
                        params: {id: '5f3aa7f034512340cc2b8254'},
                      }"><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Procedures',
                        params: {id: '5f3aa91c34512340cc2b8263'},
                      }"><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Reglements',
                        params: {id: '5f3aa91c34512340cc2b8264'},
                      }"><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <!-- End Level two -->
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Aérodromes et infrastructures portuaires</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <router-link :to="{
                        name: 'Formulaires',
                        params: {id: '5f3aa94334512340cc2b8266'},
                      }"><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Guides',
                        params: {id: '5f3aa94334512340cc2b8267'},
                      }"><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Manuels',
                        params: {id: '5f3aa94334512340cc2b8268'},
                      }"><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Procedures',
                        params: {id: '5f3aa94334512340cc2b8269'},
                      }"><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Reglements',
                        params: {id: '5f3aa94334512340cc2b826a'},
                      }"><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Service de l'information aéronautique et de la cartographie</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <router-link :to="{
                        name: 'Formulaires',
                        params: {id: '5f3aa95b34512340cc2b826c'},
                      }"><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Guides',
                        params: {id: '5f3aa95b34512340cc2b826d'},
                      }"><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Manuels',
                        params: {id: '5f3aa95b34512340cc2b826e'},
                      }"><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Procedures',
                        params: {id: '5f3aa95b34512340cc2b826f'},
                      }"><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Reglements',
                        params: {id: '5f3aa95b34512340cc2b8270'},
                      }"><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Communication, naviguation et surveillance</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <router-link :to="{
                        name: 'Formulaires',
                        params: {id: '5f585dfdb1398d47641a5ece'},
                      }"><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Guides',
                        params: {id: '5f585d9eb1398d47641a5eca'},
                      }"><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Manuels',
                        params: {id: '5f585d9eb1398d47641a5ecb'},
                      }"><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Procedures',
                        params: {id: '5f585d9eb1398d47641a5ecc'},
                      }"><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Reglements',
                        params: {id: '5f585d9eb1398d47641a5ecd'},
                      }"><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Gestion de l'espace aérien</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <router-link :to="{
                        name: 'Formulaires',
                        params: {id: '5f535bcd1dc9dc44eceead5d'},
                      }"><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Guides',
                        params: {id: '5f535bcd1dc9dc44eceead5d'},
                      }"><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Manuels',
                        params: {id: '5f535bcd1dc9dc44eceead5d'},
                      }"><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Procedures',
                        params: {id: '5f535bcd1dc9dc44eceead5d'},
                      }"><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Reglements',
                        params: {id: '5f535bcd1dc9dc44eceead5d'},
                      }"><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Service métérorologique</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <router-link :to="{
                        name: 'Formulaires',
                        params: {id: '5f535bd91dc9dc44eceead5e'},
                      }"><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Guides',
                        params: {id: '5f535bd91dc9dc44eceead5e'},
                      }"><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Manuels',
                        params: {id: '5f535bd91dc9dc44eceead5e'},
                      }"><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Procedures',
                        params: {id: '5f535bd91dc9dc44eceead5e'},
                      }"><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Reglements',
                        params: {id: '5f535bd91dc9dc44eceead5e'},
                      }"><a href="#" class="dropdown-item">Reglements</a></router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Recherches et sauvetages</a>
                            <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                                <li>
                                    <router-link :to="{
                        name: 'Formulaires',
                        params: {id: '5f57966756cc341290c683d2'},
                      }"><a href="#" class="dropdown-item">Formulaires</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Guides',
                        params: {id: '5f57966756cc341290c683d2'},
                      }"><a href="#" class="dropdown-item">Guides</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Manuels',
                        params: {id: '5f57966756cc341290c683d2'},
                      }"><a href="#" class="dropdown-item">Manuels</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Procedures',
                        params: {id: '5f57966756cc341290c683d2'},
                      }"><a href="#" class="dropdown-item">Procedures</a></router-link>
                                </li>
                                <li>
                                    <router-link :to="{
                        name: 'Reglements',
                        params: {id: '5f57966756cc341290c683d2'},
                      }"><a href="#" class="dropdown-item">Reglements</a></router-link>
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
                            <router-link to="/Surete"><a href="#" class="dropdown-item">Sureté
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/Facilitation"><a href="#" class="dropdown-item">Facilitation
                                </a></router-link>
                        </li>
                    </ul>
                </li>

                <!-- Inspecton -->
                <li class="nav-item dropdown">
                    <a id="dropdownMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Inspection</a>
                    <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
                        <li>
                            <router-link to="/Audit et Inspection"><a href="#" class="dropdown-item">Audit et Inspection
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
                            <router-link to="/Formulaire de compte rendu"><a href="#" class="dropdown-item">Formulaire de compte rendu
                                </a></router-link>
                        </li>
                        <li>
                            <router-link to="/Demande autorisation"><a href="#" class="dropdown-item">Demande d'autorisation de vol
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
    <div class="row border">
        <div class="socialBottom bg-success"></div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      menu: "Menu",
      menu1: "Acceuil",
      menu2: "A propos de nous",
      menu3: "Publications",
      menu4: "Securité",
      menu5: "Sureté",
      menu6: "Inspection",
      menu7: "e-Services",
      sub2: [
        {
          title: "Presentation",
          router: "/Presentation",
        },
        {
          title: "Mot du directeur",
          router: "/Mot du directeur",
        },
        {
          title: "Organisation",
          router: "/Organisation",
        },
        {
          title: "Politique de supervision",
          router: "/Politique de Supervision",
        },
        {
          title: "Politique de formation",
          router: "Politique de Formation",
        },
      ],
      sub3: [
        {
          title: "Textes legislatifs",
          router: "/Textes legislatifs/Lois",
        },
        {
          title: "Textes reglementaires",
          router: "/Textes reglementaires",
        },
      ],
      sub4: [
        {
          title: "Navigabilité",
          router: "/securite/5f3aa3413c2c433e946dcca6",
        },
        {
          title: "Exploitation technique des aeronefs",
          router: "/securite/5f3aa7e234512340cc2b8253",
        },
        {
          title: "License du personel",
          router: "/securite/5f3aa7f034512340cc2b8254",
        },
        {
          title: "Aérodrome et infrastructures aéroportuaires",
          router: "/securite/5f3aa7fe34512340cc2b8255",
        },
        {
          title: "Service de l'information aéronautique et de la cartographie",
          router: "/securite/5f3aa80a34512340cc2b8256",
        },
        {
          title: "Communication, naviguation et surveillance",
          router: "/securite/5f535bbc1dc9dc44eceead5c",
        },
        {
          title: "Gestion de l'espace aérien",
          router: "/securite/5f535bcd1dc9dc44eceead5d",
        },
        {
          title: "Service metéorologique",
          router: "/securite/5f535bd91dc9dc44eceead5e",
        },
        {
          title: "Recherches et sauvetages",
          router: "/securite/5f57966756cc341290c683d2",
        },
      ],
      sub5: [
        {
          title: "Service 1",
          router: "",
        },
        {
          title: "Service 2",
          router: "",
        },
        {
          title: "Service 3",
          router: "",
        },
        {
          title: "Service 4",
          router: "",
        },
      ],
      sub6: [
        {
          title: "Service 1",
          router: "",
        },
        {
          title: "Service 2",
          router: "",
        },
        {
          title: "Service 3",
          router: "",
        },
        {
          title: "Service 4",
          router: "",
        },
      ],
      sub7: [
        {
          title: "Formulaire de compte rendu",
          router: "",
        },
        {
          title: "Demande d'autorisation de vol",
          router: "",
        },
      ],
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
  height: 0.5rem;
  width: 100%;
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

.sidebar {
  transition: all 2s;
}
</style>
