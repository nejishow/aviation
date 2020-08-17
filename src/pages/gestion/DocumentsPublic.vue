<template>
  <div>
    <div class="row mt-5">
      <div class="col-12">
        <h1>Liste des documents publiques</h1>
      </div>
      <div class="col-12">
        Categories:
        <b-form-radio-group id="radio-group-1" name="radio-options">
          <b-form-radio
            @change="getSubCategoryOne(category._id)"
            v-for="(category, index) in categories"
            :key="index"
            :value="category._id"
            >{{ category.name }}</b-form-radio
          >
        </b-form-radio-group>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 col-md-4 mt-5">
        <ul class="list-group">
          <li
            class="list-group-item btn"
            @click="getSubCategoryTwo(item._id)"
            v-for="(item, index) in subCategoryOne"
            :key="index"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-8 mt-5" v-if="subOneDoc.length > 0">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fichier</th>
              <th scope="col">Nom</th>
              <th scope="col">Suspendre</th>
              <th scope="col">Re-Publier</th>
              <th scope="col">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(doc, index) in subOneDoc" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>
                <img
                  src="../../assets/pdf.png"
                  class="img-fluid"
                  width="30"
                  alt=""
                />
              </td>
              <td>{{ doc.name }}</td>
              <td><md-icon>menu</md-icon></td>
              <td><md-icon>menu</md-icon></td>
              <td><md-icon>menu</md-icon></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-5">
        <md-tabs class="md-transparent" md-alignment="fixed">
          <md-tab
            v-for="(subTwo, index) in subCategoryTwo"
            :key="index"
            :id="subTwo._id"
            :md-label="subTwo.name"
          >
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fichier</th>
                  <th scope="col" class="w-50">Nom</th>
                  <th scope="col" class="small">Suspendre</th>
                  <th scope="col" class="small">Re-Publier</th>
                  <th scope="col" class="small">Supprimer</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(doc, index) in subTwoDoc" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>
                    <img
                      src="../../assets/pdf.png"
                      class="img-fluid"
                      width="30"
                      alt=""
                    />
                  </td>
                  <td>{{ doc.name }}</td>
                  <td><md-icon>menu</md-icon></td>
                  <td><md-icon>menu</md-icon></td>
                  <td><md-icon>menu</md-icon></td>
                </tr>
              </tbody>
            </table>
          </md-tab>
        </md-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import category from "../../services/category.service";
export default {
  data() {
    return {
      categories: [],
      subCategoryOne: [],
      subCategoryTwo: [],
      subOneDoc: [],
      subTwoDoc: [],
      allsubCategoryOne: [],
      allsubCategoryTwo: [],
    };
  },
  mounted() {
    category.getCategories().then((data) => {
      this.categories = data.data;
    });
    category.getSubCategoryOne().then((data) => {
      this.allsubCategoryOne = data.data;
    });
    category.getSubCategoryTwo().then((data) => {
      this.allsubCategoryTwo = data.data;
    });
  },
  methods: {
    async getSubCategoryOne(id) {
      this.subCategoryOne = [];
      this.subCategoryTwo = [];
      this.subOneDoc = [];
      await this.allsubCategoryOne.forEach((element) => {
        if (element.idParent === id) {
          this.subCategoryOne.push(element);
        }
      });
    },
    getSubCategoryTwo(id) {
      this.subCategoryTwo = [];
      setTimeout(() => {
        this.allsubCategoryTwo.forEach((element) => {
          if (element.idParent === id) {
            this.subCategoryTwo.push(element);
          }
        });
      }, 1000);
    },
  },
};
</script>
