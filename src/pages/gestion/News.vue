<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <FirebaseUpload :isNews="news"></FirebaseUpload>
      </div>
      <div class="col-12 mt-5">
        <h2 class="h2">Les articles</h2>
        <table class="table table-bordered" v-if="Allnews.length > 0">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Titre</th>
              <th scope="col">Contenu</th>
              <th scope="col">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(news, index) in Allnews" :key="index">
              <td scope="row"><img width="50" :src="news.url" /></td>
              <td><input type="text" :value="news.title" /></td>
              <td>
                <textarea
                  rows="10"
                  cols="50"
                  class="border mb-5"
                  type="text"
                  :value="news.content"
                />
              </td>
              <td>
                <button
                  @click="deleteArticles(news)"
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
      news: true,
    };
  },
  computed: {
    Allnews() {
      return this.$store.state.media.allNews;
    },
  },
  methods: {
    modifyArticles(news) {
      this.$store.dispatch("modifyNews", news);
    },
    enableArticles(id) {
      this.$store.dispatch("enableOneArticles", id);
    },
    deleteArticles(item) {
      // Create a reference to the file to delete
      var desertRef = firebase.storage().ref(item.ref);

      // Delete the file
      desertRef
        .delete()
        .then(() => {
          // File deleted successfully
          this.$store.dispatch("deleteOneNews", item._id);
        })
        .catch(function() {
          // Uh-oh, an error occurred!
          console.log(item);
        });
    },
  },
};
</script>
