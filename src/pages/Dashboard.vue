<template>
  <div>
    <Carousel></Carousel>
    <Partenaire></Partenaire>

    <div class="container">
      <div class="row mb-5">
        <div class="col-12 col-md-9 news">
          <h4 class="card-header bg-info">Actualités</h4>
          <div class="row" v-if="news.length > 0">
            <div
              class="col-12 col-md-6 mt-3"
              v-for="(item, index) in news"
              :key="index"
            >
              <News :news="item"></News>
            </div>
          </div>
          <div v-else class="row">
            <div class="col-12 col-md-6 p-5">
              <v-skeleton-loader
                class="mx-auto skeleton"
                max-height="500px"
                max-width="1000px"
                tile
                filled
                type="article"
              ></v-skeleton-loader>
            </div>
            <div class="col-12 col-md-6 p-5">
              <v-skeleton-loader
                class="mx-auto skeleton"
                max-height="500px"
                max-width="1000px"
                tile
                filled
                type="article"
              ></v-skeleton-loader>
            </div>
            <div class="col-12 col-md-6 p-5">
              <v-skeleton-loader
                class="mx-auto skeleton"
                max-height="500px"
                max-width="1000px"
                tile
                filled
                type="article"
              ></v-skeleton-loader>
            </div>
            <div class="col-12 col-md-6 p-5">
              <v-skeleton-loader
                class="mx-auto skeleton"
                max-height="500px"
                max-width="1000px"
                tile
                filled
                type="article"
              ></v-skeleton-loader>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <h4 class="card-header bg-info">Points fréquents</h4>
          <div class="popular">
            <ul class="list">
              <li class="list-item">Article 1</li>
              <li class="list-item">Article 2</li>
              <li class="list-item">Article 3</li>
              <li class="list-item">Article 4</li>
              <li class="list-item">Article 5</li>
              <li class="list-item">Article 6</li>
              <li class="list-item">Article 7</li>
            </ul>
          </div>
        </div>
      </div>
      <MAP class="mr-auto ml-auto"></MAP>
    </div>
  </div>
</template>

<script>
import MAP from "../components/Map";
import Carousel from "../components/Carousel";
import News from "../components/News";
import Partenaire from "../components/Partenaire.vue";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Aviation Civile de Djibouti",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: "Autorité de l'Aviation Civile de Djibouti",
      },
    ],
  },
  computed: {
    news() {
      return this.$store.state.media.allNews;
    },
  },
  components: {
    MAP,
    Carousel,
    Partenaire,
    News,
  },
};
</script>

<style lang="css">
.map {
  /* Full height */
  height: 100%;
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
