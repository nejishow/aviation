<template>
  <div class="container-fluid">
    <div>
      <b-sidebar class="sidebar text-dark bg-dark" id="sidebar-1" title="Menu">
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
          <b-list-group-item v-b-toggle.sidebar-7>{{
            menu7
          }}</b-list-group-item>
        </b-list-group>
      </b-sidebar>
      <b-sidebar
        class="sidebar text-dark bg-info"
        id="sidebar-2"
        :title="menu2"
        shadow
        text-variant="dark"
      >
        <b-list-group class="bg-dark">
          <b-list-group-item v-for="(item, index) in sub2" :key="index">
            <router-link :to="item.router">{{ item.title }}</router-link>
          </b-list-group-item>
        </b-list-group>
      </b-sidebar>
      <b-sidebar
        class="sidebar text-dark bg-dark"
        id="sidebar-3"
        :title="menu3"
        shadow
        text-variant="dark"
      >
        <b-list-group class="bg-light">
          <b-list-group-item
            v-b-toggle.sub-sidebar-3
            v-for="(item, index) in sub3"
            :key="index"
            href="#"
          >
            <router-link :to="item.router">{{ item.title }}</router-link>
          </b-list-group-item>
        </b-list-group>
      </b-sidebar>

      <b-sidebar
        class="sidebar text-dark bg-dark"
        id="sidebar-4"
        :title="menu4"
        shadow
        text-variant="dark"
      >
        <b-list-group class="bg-light">
          <b-list-group-item
            v-for="(item, index) in sub4"
            :key="index"
            href="#"
          >
            <router-link :to="item.router">{{ item.title }}</router-link>
          </b-list-group-item>
        </b-list-group>
      </b-sidebar>
      <b-sidebar
        class="sidebar text-dark bg-dark"
        id="sidebar-5"
        :title="menu5"
        shadow
        text-variant="dark"
      >
        <b-list-group class="bg-light">
          <b-list-group-item
            v-for="(item, index) in sub5"
            :key="index"
            href="#"
          >
            <router-link :to="item.router">{{ item.title }}</router-link>
          </b-list-group-item>
        </b-list-group>
      </b-sidebar>
      <b-sidebar
        class="sidebar text-dark bg-dark"
        id="sidebar-6"
        :title="menu6"
        shadow
        text-variant="dark"
      >
        <b-list-group class="bg-light">
          <b-list-group-item
            v-for="(item, index) in sub6"
            :key="index"
            href="#"
          >
            <router-link :to="item.router">{{ item.title }}</router-link>
          </b-list-group-item>
        </b-list-group>
      </b-sidebar>
      <b-sidebar
        class="sidebar text-dark bg-dark"
        id="sidebar-7"
        :title="menu7"
        shadow
        text-variant="dark"
      >
        <b-list-group class="bg-light">
          <b-list-group-item
            v-for="(item, index) in sub7"
            :key="index"
            href="#"
          >
            <router-link :to="item.router">{{ item.title }}</router-link>
          </b-list-group-item>
        </b-list-group>
      </b-sidebar>
    </div>
    <div class="row">
      <div class="col-12 social">
        <a href="#" class="social_language">Francais</a>/
        <a href="#" class="social_language">Englais</a>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <router-link to="/">
        <a class="navbar-brand img-fluid" href="#">
          <img src="../assets/casa.png" alt="logo" class="logo" />
        </a>
      </router-link>

      <b-navbar-toggle v-b-toggle.sidebar-1 target=""></b-navbar-toggle>

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
            <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
              <li>
                <router-link to="/Presentation"
                  ><a href="#" class="dropdown-item"
                    >Presentation
                  </a></router-link
                >
              </li>
              <li>
                <router-link to="/Organisation"
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
                <router-link to="/Politique de Formation"
                  ><a href="#" class="dropdown-item"
                    >Politique de formation
                  </a></router-link
                >
              </li>
              <li>
                <router-link to="/Politique de Supervision"
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
            <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
              <!-- Level two dropdown-->
              <li class="dropdown-submenu">
                <a
                  @click="
                    goTo('5f53706c838ed6002be47d36', 'Textes legislatifs')
                  "
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Texte legislatif</a
                >
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link to="/Textes legislatifs/Lois"
                      ><a href="#" class="dropdown-item">Lois</a></router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown-submenu">
                <a
                  @click="
                    goTo('5f53707658ac040039a1a6c0', 'Textes reglementaires')
                  "
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Texte reglementaires</a
                >
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link
                      to="/Textes reglementaires/Reglementation aerotique de Djibouti"
                    >
                      <a tabindex="-1" href="#" class="dropdown-item"
                        >Réglementation aérotique de Djibouti</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to="/Textes reglementaires/Arretes">
                      <a tabindex="-1" href="#" class="dropdown-item"
                        >Arrêtés</a
                      ></router-link
                    >
                  </li>
                  <li>
                    <router-link to="/Textes reglementaires/Decrets"
                      ><a href="#" class="dropdown-item"
                        >Décrets</a
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
            <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
              <!-- Level two dropdown-->
              <li class="dropdown-submenu">
                <a
                  @click="goTo('5f3aa3413c2c433e946dcca6', 'Navigabilité')"
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle link"
                  >Navigabilité</a
                >
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link
                      :to="{
                        name: 'Formulaires',
                        params: { id: '5f3aa6cb34512340cc2b824e' },
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
                        params: { id: '5f3aa6cb34512340cc2b824f' },
                      }"
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Manuels',
                        params: { id: '5f3aa6cb34512340cc2b8250' },
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
                        params: { id: '5f3aa6cb34512340cc2b8251' },
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
                        params: { id: '5f3aa6cb34512340cc2b8252' },
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
                  @click="
                    goTo(
                      '5f3aa7e234512340cc2b8253',
                      'Exploitation technique des aéronefs'
                    )
                  "
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Exploitation technique des aéronefs</a
                >
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link
                      :to="{
                        name: 'Formulaires',
                        params: { id: '5f3aa8fe34512340cc2b825a' },
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
                        params: { id: '5f3aa8fe34512340cc2b825b' },
                      }"
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Manuels',
                        params: { id: '5f3aa8fe34512340cc2b825c' },
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
                        params: { id: '5f3aa8fe34512340cc2b825d' },
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
                        params: { id: '5f3aa8fe34512340cc2b825e' },
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
                  @click="
                    goTo('5f3aa7f034512340cc2b8254', 'License du personel')
                  "
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >License du personels</a
                >
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link
                      :to="{
                        name: 'Formulaires',
                        params: { id: '5f3aa91c34512340cc2b8260' },
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
                        params: { id: '5f3aa91c34512340cc2b8261' },
                      }"
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Manuels',
                        params: { id: '5f3aa7f034512340cc2b8254' },
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
                        params: { id: '5f3aa91c34512340cc2b8263' },
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
                        params: { id: '5f3aa91c34512340cc2b8264' },
                      }"
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
                  @click="
                    goTo(
                      '5f3aa7fe34512340cc2b8255',
                      'Aérodrome et infrastructures aéroportuaires'
                    )
                  "
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Aérodromes et infrastructures portuaires</a
                >
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link
                      :to="{
                        name: 'Formulaires',
                        params: { id: '5f3aa94334512340cc2b8266' },
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
                        params: { id: '5f3aa94334512340cc2b8267' },
                      }"
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Manuels',
                        params: { id: '5f3aa94334512340cc2b8268' },
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
                        params: { id: '5f3aa94334512340cc2b8269' },
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
                        params: { id: '5f3aa94334512340cc2b826a' },
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
                  @click="
                    goTo(
                      '5f3aa80a34512340cc2b8256',
                      'Service de l\'information aéronautique et de la cartographie'
                    )
                  "
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Service de l'information aéronautique et de la
                  cartographie</a
                >
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link
                      :to="{
                        name: 'Formulaires',
                        params: { id: '5f3aa95b34512340cc2b826c' },
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
                        params: { id: '5f3aa95b34512340cc2b826d' },
                      }"
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Manuels',
                        params: { id: '5f3aa95b34512340cc2b826e' },
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
                        params: { id: '5f3aa95b34512340cc2b826f' },
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
                        params: { id: '5f3aa95b34512340cc2b8270' },
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
                  @click="
                    goTo(
                      '5f535bbc1dc9dc44eceead5c',
                      'Communication, naviguation et surveillance'
                    )
                  "
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Communication, naviguation et surveillance</a
                >
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link
                      :to="{
                        name: 'Formulaires',
                        params: { id: '5f585dfdb1398d47641a5ece' },
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
                        params: { id: '5f585d9eb1398d47641a5eca' },
                      }"
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Manuels',
                        params: { id: '5f585d9eb1398d47641a5ecb' },
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
                        params: { id: '5f585d9eb1398d47641a5ecc' },
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
                        params: { id: '5f585d9eb1398d47641a5ecd' },
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
                  @click="
                    goTo(
                      '5f535bcd1dc9dc44eceead5d',
                      'Gestion de l\'espace aérien'
                    )
                  "
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Gestion de l'espace aérien</a
                >
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link
                      :to="{
                        name: 'Formulaires',
                        params: { id: '5f58f66747a3152af4d2e315' },
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
                        params: { id: '5f58f66747a3152af4d2e316' },
                      }"
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Manuels',
                        params: { id: '5f58f66747a3152af4d2e317' },
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
                        params: { id: '5f58f66747a3152af4d2e318' },
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
                        params: { id: '5f58f66747a3152af4d2e319' },
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
                  @click="
                    goTo('5f535bd91dc9dc44eceead5e', 'Service metéorologique')
                  "
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Service métérorologique</a
                >
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link
                      :to="{
                        name: 'Formulaires',
                        params: { id: '5f58f77f47a3152af4d2e31a' },
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
                        params: { id: '5f58f77f47a3152af4d2e31b' },
                      }"
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Manuels',
                        params: { id: '5f58f77f47a3152af4d2e31c' },
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
                        params: { id: '5f58f77f47a3152af4d2e31d' },
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
                        params: { id: '5f58f77f47a3152af4d2e31e' },
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
                  @click="
                    goTo('5f57966756cc341290c683d2', 'Recherches et sauvetages')
                  "
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Recherches et sauvetages</a
                >
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link
                      :to="{
                        name: 'Formulaires',
                        params: { id: '5f585a81b1398d47641a5ec4' },
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
                        params: { id: '5f585a81b1398d47641a5ec5' },
                      }"
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Manuels',
                        params: { id: '5f585a81b1398d47641a5ec6' },
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
                        params: { id: '5f585a81b1398d47641a5ec7' },
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
                        params: { id: '5f585a81b1398d47641a5ec8' },
                      }"
                      ><a href="#" class="dropdown-item"
                        >Reglements</a
                      ></router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <!-- Sureté -->

          <li class="nav-item dropdown">
            <a
              id="dropdownMenu1"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="nav-link dropdown-toggle"
              >Sureté</a
            >
            <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
              <!-- Level two dropdown-->
              <li class="dropdown-submenu">
                <a
                  @click="goTo('5f535d6433d82b0034f95ee8', 'Sureté')"
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle link"
                  >Sureté
                </a>
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link
                      :to="{
                        name: 'Formulaires',
                        params: { id: '5f585a81b1398d47641a5ec4' },
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
                        params: { id: '5f585a81b1398d47641a5ec5' },
                      }"
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Manuels',
                        params: { id: '5f585a81b1398d47641a5ec6' },
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
                        params: { id: '5f585a81b1398d47641a5ec7' },
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
                        params: { id: '5f585a81b1398d47641a5ec8' },
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
                  @click="goTo('5f535d69c0161b0045e05444', 'Facilitation')"
                  id="dropdownMenu2"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="dropdown-item dropdown-toggle"
                  >Facilitation
                </a>
                <ul aria-labelledby="dropdownMenu2" class="dropdown-menu ">
                  <li>
                    <router-link
                      :to="{
                        name: 'Formulaires',
                        params: { id: '5f5b409c638e43228cf0a56f' },
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
                        params: { id: '5f5b409c638e43228cf0a570' },
                      }"
                      ><a href="#" class="dropdown-item">Guides</a></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Manuels',
                        params: { id: '5f5b409c638e43228cf0a571' },
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
                        params: { id: '5f5b409c638e43228cf0a572' },
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
                        params: { id: '5f5b409c638e43228cf0a573' },
                      }"
                      ><a href="#" class="dropdown-item"
                        >Reglements</a
                      ></router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <!-- Inspecton -->
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
            <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
              <li>
                <router-link to="/Audit et Inspection"
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
            <ul aria-labelledby="dropdownMenu1" class="dropdown-menu ">
              <li>
                <router-link to="/Formulaire de compte rendu"
                  ><a href="#" class="dropdown-item"
                    >Formulaire de compte rendu
                  </a></router-link
                >
              </li>
              <li>
                <router-link to="/Demande autorisation"
                  ><a href="#" class="dropdown-item"
                    >Demande d'autorisation de vol
                  </a></router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item nav-link btn" v-show="user.isAdmin">
            <router-link
              to="/gestionMedia"
              class="nav-item text-primary font-weight-bolder"
              >Gestion Media</router-link
            >
          </li>
          <li class="nav-item nav-link btn" v-show="user.isAdmin">
            <router-link
              to="/gestionDocs"
              class="nav-item text-primary font-weight-bolder"
              >Gestion Documents</router-link
            >
          </li>
          <li class="nav-item nav-link btn" v-show="user._id">
            <router-link
              to="/docIntern"
              class="nav-item text-primary font-weight-bolder"
              >Documents Internes</router-link
            >
          </li>
          <li class="nav-item nav-link btn" v-show="user._id">
            <button
              class="btn-group btn-outline-danger btn nav-item"
              @click="logout"
            >
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <div class="row">
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
          router: "/Politique de Formation",
        },
      ],
      sub3: [
        {
          title: "Textes legislatifs",
          router: "/Textes legislatifs?id=5f53706c838ed6002be47d36",
        },
        {
          title: "Textes reglementaires",
          router: "/Textes reglementaires?id=5f53707658ac040039a1a6c0",
        },
        {
          title: "Directives",
          router: "/Directives",
        },
        {
          title: "Circulaires",
          router: "/Circulaires",
        },
        {
          title: "Decisions",
          router: "/Decisions",
        },
      ],
      sub4: [
        {
          title: "Navigabilité",
          router: "/Navigabilité?id=5f3aa3413c2c433e946dcca6",
        },
        {
          title: "Exploitation technique des aeronefs",
          router:
            "/Exploitation technique des aéronefs?id=5f3aa7e234512340cc2b8253",
        },
        {
          title: "License du personel",
          router: "/License du personel?id=5f3aa7f034512340cc2b8254",
        },
        {
          title: "Aérodrome et infrastructures aéroportuaires",
          router:
            "/Aérodrome et infrastructures aéroportuaires?id=5f3aa7fe34512340cc2b8255",
        },
        {
          title: "Service de l'information aéronautique et de la cartographie",
          router:
            "/Service de l'information aéronautique et de la cartographie?id=5f3aa80a34512340cc2b8256",
        },
        {
          title: "Communication, naviguation et surveillance",
          router:
            "/Communication, naviguation et surveillance?id=5f535bbc1dc9dc44eceead5c",
        },
        {
          title: "Gestion de l'espace aérien",
          router: "/Gestion de l'espace aérien?id=5f535bcd1dc9dc44eceead5d",
        },
        {
          title: "Service metéorologique",
          router: "/Service metéorologique?id=5f535bd91dc9dc44eceead5e",
        },
        {
          title: "Recherches et sauvetages",
          router: "/Recherches et sauvetages?id=5f57966756cc341290c683d2",
        },
      ],
      sub5: [
        {
          title: "Sureté",
          router: "/Sureté?id=5f535d6433d82b0034f95ee8",
        },
        {
          title: "Facilitation",
          router: "/Facilitation?id=5f535d69c0161b0045e05444",
        },
      ],
      sub6: [
        {
          title: "Audit et Inspection",
          router: "/Audit et Inspection",
        },
      ],
      sub7: [
        {
          title: "Formulaire de compte rendu",
          router: "/Formulaire de compte rendu",
        },
        {
          title: "Demande d'autorisation de vol",
          router: "/Demande autorisation",
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    loading() {
      if (localStorage.getItem("token")) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    goTo(id, name) {
      this.$router.push({ path: "/" + name, query: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
.btn {
  width: 2rem;
  height: 2rem;
}
.logo {
  width: 10rem;
}
.socialBottom {
  height: 0.5rem;
  width: 100%;
}
.social {
  background: rgb(48, 139, 224);
  color: white;
  text-align: right;

  &_language {
    &,
    &:link,
    &:visited,
    &:active {
      text-decoration: none;
      color: inherit;
    }
    &:hover {
      color: black !important;
    }
  }
  .contact {
    &_img {
      width: 2rem;
      color: white;
    }
    &_btn {
      width: 2rem;
      color: white;
    }
  }
}

.navbar {
  width: 100%;
}

.tabTitle {
  color: #005ba1;
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
  // border-left-color: red;
  display: none;
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
