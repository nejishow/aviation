<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div>
                {{ message }}:
                <input v-show="!isBanner && !isNews" class="input" type="text" placeholder="Nom du document" v-model="document.name" />
                <div v-show="isBanner">
                    <label>Titre: </label><input class="input" type="text" v-model="banner.title" />
                    <label>Description: </label><input class="input" type="text" v-model="banner.description" />
                </div> <br>
                <div v-show="isNews">
                    <label>Titre: </label><input class="input" type="text" v-model="news.title" />
                    <label>Description: </label><input class="input" type="text" v-model="news.description" />
                    <label>Contenu: </label> <br>
                    <textarea rows="10" cols="100" class="input w-50" type="text" v-model="news.content" height="300px" />
                    </div> <br>

          <input
            type="file"
            v-show="!isBanner && !isNews"
            id="inputContent"
            @change="previewImage"
            accept=".json,.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
          <input
            type="file"
            v-show="isBanner || isNews"
            id="inputContent"
            @change="previewImage"
            accept="image/*"
          />
        </div>
        <div class="col-12" v-if="imageData != null">
          <img class="preview" :src="picture" />
          <br />
          <button class="btn btn-group btn-outline-danger" v-show="errorButton">
            Re-essayer
          </button>
          <button
            v-if="!loading && !errorButton"
            class="btn small btn-group btn-outline-success"
            @click="onUpload"
          >
            Charger
          </button>
          <button
            v-if="loading && !errorButton"
            class="btn disabled small btn-group btn-outline-success"
          >
            <md-progress-spinner
              :md-diameter="30"
              :md-stroke="3"
              md-mode="indeterminate"
            ></md-progress-spinner>
          </button>
        </div>

        <div class="col-12" v-if="documentData != null">
          <img class="preview" :src="picture" />
          <br />
          <button
            v-if="!loading"
            @click="onUpload"
            class="btn small btn-group btn-outline-success"
          >
            Charger
          </button>
          <button
            v-if="loading"
            class="btn disabled small btn-group btn-outline-success"
          >
            <md-progress-spinner
              :md-diameter="20"
              :md-stroke="3"
              md-mode="indeterminate"
            ></md-progress-spinner>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const firebase = require("../firebaseConfig.js");
import $ from "jquery";
export default {
  name: "Upload",
  props: [
    "isBanner",
    "isPublicDocumentS1",
    "isPublicDocumentS2",
    "category",
    "subOne",
    "subTwo",
    "isPrivateDocument1",
    "isPrivateDocument2",
    "isNews",
  ],
  data() {
    return {
      document: {
        src: "",
        idParent: "",
        name: "",
      },
      banner: {
        title: "",
        description: "",
        url: "",
      },
      news: {
        title: "",
        description: "",
        url: "",
        content: "",
      },
      imageData: null,
      documentData: null,
      picture: [],
      uploadValue: 0,
      loading: false,
      errorButton: false,
    };
  },
  computed: {
    message() {
      if (
        this.isPublicDocumentS1 ||
        this.isPublicDocumentS2 ||
        this.isPrivateDocument1 ||
        this.isPrivateDocument2
      ) {
        return "Enregistrer un document";
      }
      if (this.isNews) {
        return "Enregistrer un nouvel article";
      }
      return "Enregistrer une banniere";
    },
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      //this.picture = null;
      if (this.isNews || this.isBanner) {
        this.imageData = event.target.files[0];
      } else {
        this.documentData = event.target.files[0];
      }
    },
    onUpload() {
      if (this.isPublicDocumentS1) {
        this.loading = true;
        this.errorButton = false;
        const storageRef = firebase
          .storage()
          .ref(
            this.category.name +
              "/" +
              this.subOne.name +
              "/" +
              this.document.name
          )
          .put(this.documentData);
        storageRef.on(
          "state_changed",
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
            this.loading = false;
          },
          () => {
            storageRef.snapshot.ref
              .getDownloadURL()
              .then(async (url) => {
                this.document.src = url;
                this.document.idParent = this.subOne._id;
                await this.$store
                  .dispatch("addDocument", this.document)
                  .then(() => {
                    this.loading = false;
                    this.document = {};
                    $("#inputContent").val("");
                    this.$store.dispatch("setDocuments");
                    this.$store.dispatch("setPublicDocuments");
                  })
                  .catch((error) => {
                    console.log(error);
                    this.loading = false;
                  });
              })
              .catch(() => {
                this.loading = false;
                this.errorButton = true;
              });
          }
        );
      }
      if (this.isPublicDocumentS2) {
        this.loading = true;
        this.errorButton = false;
        const storageRef = firebase
          .storage()
          .ref(
            this.category.name +
              "/" +
              this.subOne.name +
              "/" +
              this.subTwo.name +
              "/" +
              this.document.name
          )
          .put(this.documentData);
        storageRef.on(
          "state_changed",
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
            this.loading = false;
          },
          () => {
            storageRef.snapshot.ref
              .getDownloadURL()
              .then(async (url) => {
                this.document.src = url;
                this.document.idParent = this.subTwo._id;
                await this.$store
                  .dispatch("addDocument", this.document)
                  .then(() => {
                    this.loading = false;
                    this.document = {};
                    $("#inputContent").val("");
                    this.$store.dispatch("setDocuments");
                    this.$store.dispatch("setPublicDocuments");
                  })
                  .catch((error) => {
                    console.log(error);
                    this.loading = false;
                  });
              })
              .catch(() => {
                this.loading = false;
                this.errorButton = true;
              });
          }
        );
      }
      if (this.isPrivateDocument1) {
        let document = {
          name: this.document.name,
          src: "",
          isInter: true,
        };
        this.loading = true;
        this.errorButton = false;
        const storageRef = firebase
          .storage()
          .ref(
            "document internes/" +
              this.category.name +
              "/" +
              this.subOne.name +
              "/" +
              this.document.name
          )
          .put(this.documentData);
        storageRef.on(
          "state_changed",
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
            this.loading = false;
          },
          () => {
            storageRef.snapshot.ref
              .getDownloadURL()
              .then(async (url) => {
                document.src = url;
                document.isIntern = true;
                document.idParent = this.subOne._id;

                await this.$store
                  .dispatch("addDocument", document)
                  .then(async () => {
                    this.loading = false;
                    this.document = {};
                    $("#inputContent").val("");
                    await this.$store.dispatch("setDocuments");
                    await this.$store.dispatch("setPublicDocuments");
                  })
                  .catch((error) => {
                    console.log(error);
                    this.loading = false;
                  });
                this.picture.push(url);
                //this.$store.dispatch("setPicture", this.picture);
              })
              .catch(() => {
                this.loading = false;
                this.errorButton = true;
              });
          }
        );
      }
      if (this.isPrivateDocument2) {
        let document = {
          name: this.document.name,
          src: "",
          isInter: true,
        };
        this.loading = true;
        this.errorButton = false;
        const storageRef = firebase
          .storage()
          .ref(
            "document internes/" +
              this.category.name +
              "/" +
              this.subOne.name +
              "/" +
              this.subTwo.name +
              "/" +
              this.document.name
          )
          .put(this.documentData);
        storageRef.on(
          "state_changed",
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
            this.loading = false;
          },
          () => {
            storageRef.snapshot.ref
              .getDownloadURL()
              .then(async (url) => {
                document.src = url;
                document.isIntern = true;
                document.idParent = this.subTwo._id;
                await this.$store
                  .dispatch("addDocument", document)
                  .then(async () => {
                    this.loading = false;
                    this.document = {};
                    $("#inputContent").val("");
                    await this.$store.dispatch("setDocuments");
                    await this.$store.dispatch("setPublicDocuments");
                  })
                  .catch((error) => {
                    console.log(error);
                    this.loading = false;
                  });
                this.picture.push(url);
                //this.$store.dispatch("setPicture", this.picture);
              })
              .catch(() => {
                this.loading = false;
                this.errorButton = true;
              });
          }
        );
      }
      if (this.isBanner) {
        this.loading = true;
        this.errorButton = false;
        const storageRef = firebase
          .storage()
          .ref("banners/" + this.banner.title)
          .put(this.imageData);
        storageRef.on(
          "state_changed",
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
            this.loading = false;
          },
          () => {
            storageRef.snapshot.ref
              .getDownloadURL()
              .then(async (url) => {
                this.banner.url = url;
                await this.$store
                  .dispatch("addBanner", this.banner)
                  .then(() => {
                    this.loading = false;
                    this.banner = {};
                    $("#inputContent").val("");
                    this.$store.dispatch("getBanners");
                  })
                  .catch((error) => {
                    console.log(error);
                    this.loading = false;
                  });
              })
              .catch(() => {
                this.loading = false;
                this.errorButton = true;
              });
          }
        );
      }
      if (this.isNews) {
        this.loading = true;
        this.errorButton = false;
        const storageRef = firebase
          .storage()
          .ref("news/" + this.news.title)
          .put(this.imageData);
        storageRef.on(
          "state_changed",
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
            this.loading = false;
          },
          () => {
            storageRef.snapshot.ref
              .getDownloadURL()
              .then(async (url) => {
                this.news.url = url;
                await this.$store
                  .dispatch("addNews", this.news)
                  .then(() => {
                    this.loading = false;
                    this.news = {};
                    $("#inputContent").val("");
                    this.$store.dispatch("getNews");
                  })
                  .catch((error) => {
                    console.log(error);
                    this.loading = false;
                  });
              })
              .catch(() => {
                this.loading = false;
                this.errorButton = true;
              });
          }
        );
      }
    },
  },
};
</script>

<style scoped>
img.preview {
  width: 200px;
}
</style>
