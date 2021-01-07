<template>
<div class="container">
    <div class="row">
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
      // Create a reference to the file to delete
      var desertRef = firebase.storage().ref(item.ref);

      // Delete the file
      desertRef
        .delete()
        .then(() => {
          // File deleted successfully
          this.$store.dispatch("deleteOneBanner", item._id);
        })
        .catch(function() {
          // Uh-oh, an error occurred!
          console.log(item);
        });
    },
  },
};
</script>
