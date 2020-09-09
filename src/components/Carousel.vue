<template>
<div class="container">
    <div class="row">
        <div v-if="banners.length>0" class="col-12">
            <div @click="prev" class="carousel_arrow carousel_arrow_prev ml-2">&lang; </div>
            <VueSlickCarousel v-bind="settings" class="carousel" ref="carousel">
                <div class="carousel_div" v-for="(banner, index) in banners" :key="index">
                    <img :src="banner.url" alt="" class="carousel_img">
                    <div class="carousel_text pl-2">
                        <h4>{{banner.title}}</h4>
                        <p>{{banner.description}}</p>
                    </div>
                </div>
                <template #customPaging="page">
                    <div class="custom-dot">
                        <span class="custom-dot_number">{{ page }}</span>
                    </div>
                </template>
            </VueSlickCarousel>
            <div @click="next" class="carousel_arrow carousel_arrow_next mr-2">&rang;</div>
        </div>
        <div v-else class="col-12 p-5">
            <v-skeleton-loader class="mx-auto skeleton" max-height="500px" max-width="1000px" type="card"></v-skeleton-loader>
        </div>
    </div>
</div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import $ from "jquery";
export default {
  data() {
    return {
      arrows: true,
      dots: true,
      settings: {
        dots: true,
        dotsClass: "slick-dots dot-class",
        edgeFriction: 0.35,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  components: {
    VueSlickCarousel,
  },
  computed: {
    banners() {
      if (this.$store.state.media.banner.length > 0) {
        return this.$store.state.media.banner;
      } else {
        return this.$store.state.media.banner;
      }
    },
  },
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
  },
  mounted() {
    $(".slick-prev").removeClass("slick-disabled");
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 550px) {
  .custom-arrow,
  .carousel_arrow,
  .carousel_arrow_prev {
    display: none !important;
  }

  .carousel {
    max-height: 25vh !important;
    text-align: center;
    padding-right: 0rem !important;
    padding-left: 0rem !important;
    &_div {
      position: relative;
      text-align: center;
      max-width: 1000px;
    }

    &_img {
      max-height: 50vh;
      width: 100%;
    }

    &_text {
      font-size: 0.7rem;
      text-align: left;
    }
  }
}

@media (min-width: 551px) and (max-width: 1000px) {
  .custom-arrow,
  .carousel_arrow,
  .carousel_arrow_prev {
    display: none !important;
  }

  .carousel {
    max-height: 40vh !important;
    text-align: center;
    padding-right: 0rem !important;
    padding-left: 0rem !important;
    &_div {
      position: relative;
      text-align: center;
      max-width: 1000px;
    }

    &_img {
      max-height: 50vh;
      width: 100%;
    }

    &_text {
      font-size: 0.7rem;
      text-align: left;
    }
  }
}

.custom-arrow {
  opacity: 0.8;
  background-blend-mode: screen;
  border-radius: 50%;
  overflow: hidden;
  border: solid black 1px;
}

.slick-active {
  background-color: blue;

  .custom-dot {
    background-color: blue;
  }
}

.custom-dot {
  background-color: grey;
  height: 2px;

  .custom-dot_number {
    display: none;
  }
}

.carousel {
  height: 60vh;
  padding-right: 1rem;
  padding-left: 1rem;

  &_div {
    position: relative;
    text-align: center;
  }

  &_img {
    max-height: 50vh;
    width: 100%;
  }

  &_text {
    position: absolute;
    z-index: 999;
    bottom: 0;
    display: inline-block;
    left: 0;
    background: rgba(#0000, 0.5);
    width: 100%;
    color: white;
    text-align: left;
    font-size: 1rem;
  }

  &_arrow {
    position: absolute;
    top: 40%;
    display: inline-block;
    font-size: 3rem;
    background: rgba(#fff, 0.4);
    cursor: pointer;

    &:hover {
      color: blue;
    }

    &_next {
      right: 0;
    }

    &_prev {
      left: 0;
    }
  }
}
</style>
