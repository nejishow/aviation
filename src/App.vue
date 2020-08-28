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
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: "Aviation Civile de Djibouti",
        titleTemplate: '%s | AACD',

        bodyAttrs: {
            class: ['dark-mode', 'mobile']
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                'http-equiv': "Content-Type",
                content: "text/html; charset=utf-8"
            },
            {
                vmid: 'description',
                name: 'description',
                content: "Authorité de l'Aviation Civile de Djibouti"
            },
                        {
                vmid: 'keywords',
                name: 'keywords',
                content: "authorite, aviation, djibouti, civile, civil, airport, air, djibouti,"
            }
        ]
    },
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
        this.$store.dispatch("getUser");
        $('html').css('overflow', 'hidden');

    }
};
</script>
