<template>
<div>

    <Carousel></Carousel>
    <News></News>

    <MAP class="mr-auto ml-auto"></MAP>

</div>
</template>

<script>
import MAP from "../components/Map";
import Carousel from "../components/Carousel";
import News from "../components/News";
export default {
    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Acceuil',
        meta: [{
            vmid: 'description',
            name: 'description',
            content: "Authorité de l'Aviation Civile de Djibouti"
        }]
    },
    components: {
        MAP,
        Carousel,
        News
    },
};
</script>

<style lang="css">
.map {
    /* Full height */
    height: 100%;
    background-image: url(../assets/sky5.jpg);

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
