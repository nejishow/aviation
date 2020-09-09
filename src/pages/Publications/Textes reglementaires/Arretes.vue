<template>
<div class="container">
    <div class="row">
        <div class="col-12 col-md-8">
            <h3>Tous les arretés de l'Autorité de l'Aviation Civile de Djibouti</h3>

            <div class=" m-5 p5 d-flex flex-column align-items-center">
                <input type="text" class=" border-danger w-50 search input" placeholder="Search" v-on:keyup.enter="search" v-on:keyup.delete="enleve" />
                <div class="card result w-100 mt-2" v-show="searchResults.length > 0">
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Titre</th>
                                <th scope="col">Date de parution</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in searchResults" :key="index">
                                <th><img src="../../../assets/pdf.png" width="20" alt="" /></th>
                                <td>{{ item.name }}</td>
                                <td>{{ item.createdAt }}</td>
                                <td><button>Download</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span class="border-bottom border-danger" v-show="errorSearch!==''">{{errorSearch}}</span>
            </div>

            <div class="table card">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titre</th>
                            <th scope="col">Date de parution</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in sortedDocuments" :key="index">
                            <th><img src="../../../assets/pdf.png" width="20" alt="" /></th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.createdAt }}</td>
                            <td><a :href="item.src" target="_blank"><button>Download</button></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Arretés",
      meta: [
        {
          vmid: "description",
          name: "description",
          content:
            "Tous les arretés de l'autorité de l'aviation civile de djibouti",
        },
      ],
    };
  },

  data() {
    return {
      searchResults: [],
      idDirectives: "",
      menu: [],
      errorSearch: "",
    };
  },
  computed: {
    documents() {
      return this.$store.state.documents.publicDocuments;
    },
    sortedDocuments() {
      if (this.documents.length > 0) {
        let sorted = this.documents.filter((doc) => {
          return doc.idParent == "5f53724cdaa6914e7c573563";
        });
        return sorted;
      } else {
        let sorted = this.documents.filter((doc) => {
          return doc.idParent == "5f53724cdaa6914e7c573563";
        });
        return sorted;
      }
    },
  },
  methods: {
    search(event) {
      this.searchResults = [];
      const nameFile = event.target.value.toLowerCase().trim();
      if (nameFile !== "") {
        this.sortedDocuments.forEach((doc) => {
          const docName = doc.name.toLowerCase().trim();
          if (docName.includes(nameFile)) {
            this.searchResults.push(doc);
          }
        });
        if (this.searchResults.length < 1) {
          this.errorSearch = "Pas de resultat pour '" + nameFile + "'";
        }
      }
    },
    enleve() {
      this.searchResults = [];
      this.errorSearch = "";
    },
  },
  mounted() {},
};
</script>

<style lang="css" scoped>
.search {
  border-radius: 100px;
  /* mozilla */
  -moz-border-radius: 100px;
  /* webkit */
  -webkit-border-radius: 100px;
}
</style>
