<template>
<div>
        <div class="row">
            <div class="col-12 ">
                <div class="title-box">
                    <h1 class="title">Articles</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12" v-if="news">
                <div class="news-box">
                    <img :src="news.url" :alt="news.title" class="news-box_image">
                    <div class="news-box_content">
                        <div class="news-box_title d-flex flex-column">
                            <h1 class="h1">{{news.title}}</h1>
                            <strong>{{news.createdAt}}</strong>
                        </div>
                        <div v-html='news.content'></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-6" v-if="prev">
                <h1 class="h5">Article precèdent</h1>
                <News :news="prev"></News>
            </div>
            <div class="col-12 col-md-6" v-if="next">
                <h1 class="h5">Article suivant</h1>
               <News :news="next"></News>
            </div>
        </div>
</div>
</template>

<script>
import News from "../components/News";
export default {
  components: {
    News,
  },
  computed: {
    Allnews() {
      return this.$store.state.media.allNews;
    },
    news() {
      const article = this.Allnews.filter((x) => {
        return x._id === this.$route.params.id;
      });
      return article[0];
    },
    prev() {
      let result = {};
      for (let index = 0; index < this.Allnews.length; index++) {
        if (this.news === this.Allnews[index]) {
          result = this.Allnews[index - 1];
        }
      }
      return result;
    },
    next() {
      let result = {};
      for (let index = 0; index < this.Allnews.length; index++) {
        if (this.news === this.Allnews[index]) {
          result = this.Allnews[index + 1];
        }
      }
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
.news-box {
  width: 100%;
  &_image {
    float: left;
    width: 40%;
    height: 50vh;
    @include respond(tablet-land) {
      float: left;
      width: 40%;
      height: 30vh;
    }
    @include respond(tablet) {
      float: none;
      width: 100%;
      height: 50vh;
    }
  }

  &_title {
    margin-bottom: 5rem;
  }
}

.title-box {
  position: relative;
  height: 40vh;
  border: solid 2px black;
  background-image: url("../assets/article.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .title {
    position: absolute;
    bottom: 1vh;
    left: 1vh;
    font-size: 2rem;
    text-transform: uppercase;
    color: white;
  }

  .title-img {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 50vh;
    min-width: 100%;
  }
}
</style>
