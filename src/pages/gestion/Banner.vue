<template>
<div class="container">
  <div class="row loading" v-if="loading">
            
              <p class="spinner">Suppresion <b-spinner variant="danger" type="grow"  label="Spinning"></b-spinner></p>

  </div>
    <div class="row" v-else>
    <div class="col-6">
        <FirebaseUpload :isBanner="bannier"></FirebaseUpload>
    </div>
    <div class="col-12 mt-5">
        <h2>Mes bannieres</h2>
        <table class="table table-bordered" v-if="banniere.length>0">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Description</th>
                    <th scope="col">Supprimer</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(banner, index) in banniere" :key="index">
                    <td scope="row"><img width="150" :src="banner.url" /></td>
                    <td><input type="text" :value="banner.title" /></td>
                    <td>
                    <textarea name="" id="" :value="banner.description" cols="30" rows="5"></textarea></td>
  <td>
                <button
                  @click="deleteBanner(banner)"
                  class="btn btn-group btn-outline-success"
                >
                  <md-icon>delete</md-icon>
                </button>
              </td>            </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import FirebaseUpload from "../../components/FirebaseUpload";
const firebase = require("../../firebaseConfig.js");
export default {
  components: {
    FirebaseUpload,
  },
  data() {
    return {
      bannier: true,
      loading: false
    };
  },
  mounted() {},
  computed: {
    banniere() {
      return this.$store.state.media.banner;
    },
  },
  methods: {
        deleteBanner(item) {
          this.loading = true;
      // Create a reference to the file to delete
      var desertRef = firebase.storage().ref(item.ref);

      // Delete the file
      desertRef
        .delete()
        .then(() => {
          // File deleted successfully
          this.$store.dispatch("deleteOneBanner", item._id);
        }).then(()=>{
          setTimeout(() => {
            this.loading = false;
          }, 3000);
        })
        .catch(function() {
          // Uh-oh, an error occurred!
          this.loading = false
        });
    },
  },
};
</script>
<style lang="scss" scoped>
  @import '../../sass/main.scss';
  .loading {
    width: 100%;
    height: 100vh;
    background: rgb(102, 146, 160);
  }
  .spinner {
    @include centerElement;
  }
</style>