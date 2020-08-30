<template>
  <div class="container-fluid">
    <div class="row bg-info pt-5 pb-5">
      <div class="col-12 col-md-4 text-light d-flex flex-column">
        <a class="navbar-brand img-fluid mb-2" href="#">
          <img src="../assets/casa.png" alt="logo" class="img-fluid logo" />
        </a>
        <span
          >Regulation and oversight of Aviation Safety and Security; Economic
          regulation of Air Services and development of Civil Aviation.</span
        >
      </div>
      <div class="col-12 col-md-4 text-light">
        <h4>Siège sociale</h4>
        Aviation House, Djibouti International <br />
        Aeroport d'Ambouli, <br />
        <font-awesome-icon :icon="['fas', 'phone']" />
        +253 77 000000 <br />
        <font-awesome-icon :icon="['fas', 'phone']" />
        +253 77 000000 <br />
        <font-awesome-icon :icon="['fas', 'envelope']" />
        aviation@dj.com
      </div>
      <div class="col-12 col-md-4 text-light">
        <h4>Liens rapide</h4>
        Presidence <br />
        La nation <br />
        Air Djibouti <br />
        Aeroport de Djibouti <br />
        <router-link to="/login" v-show="!user._id">
          <a class="btn btn-group text-light small btn-secondary">Sign In</a>
        </router-link>
      </div>
    </div>
    <div class="row bg-success">
      <div class="col-12 text-center medium text-light pb-3">
        Copyright © 2020 Djibouti Civil Aviation Authority. All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>
<style lang="css" scoped>
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
</style>
