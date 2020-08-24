<template>
<div>
    <Header class="header"></Header>
    <div class="container">
        <router-view />

    </div>
    <Footer class="mt-5"></Footer>
</div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import $ from 'jquery';
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
        $('html').css('overflow', 'hidden');

    },
};
</script>
