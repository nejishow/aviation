<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Header class="header"></Header>
      </div>
    </div>
    <router-view />
    <div class="row">
      <div class="col-12">
        <Footer class="mt-5"></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("getBanners");
    this.$store.dispatch("getNews");
    this.$store.dispatch("setDocuments");
    this.$store.dispatch("setPublicDocuments");
    this.$store.dispatch("fetchCategory");
    this.$store.dispatch("fetchSubCategoryOne");
    this.$store.dispatch("fetchSubCategoryTwo");
  },
};
</script>
