<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div class="">
        <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="16:9">
              <img src="../assets/apropo.png" alt="Skyscraper" />
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="md-title">Solid background</span>
                <span class="md-subhead"> image</span>
              </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
      </div>
      <div class="carousel">
        <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="16:9">
              <img src="../assets/history.jpg" alt="Skyscraper" />
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="md-title">Solid background</span>
                <span class="md-subhead"> image</span>
              </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
      </div>
      <div class="carousel">
        <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="16:9">
              <img src="../assets/plane.jpg" alt="Skyscraper" />
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="md-title">Solid background</span>
                <span class="md-subhead"> image</span>
              </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
      </div>
      <div class="carousel">
        <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="16:9">
              <img src="../assets/wallpaper.jpg" alt="Skyscraper" />
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="md-title">Solid background</span>
                <span class="md-subhead"> image</span>
              </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  data() {
    return {};
  },
  components: { VueSlickCarousel },
};
</script>
<style lang="css" scoped>
.carousel {
  max-height: 100px;
  width: auto;
}
</style>
