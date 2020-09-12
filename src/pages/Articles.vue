<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 ">
                <div class="title-box">
                    <h1 class="title">Articles</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
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
        <div class="row">
            <div class="col-12 col-md-6">
                <h1 class="h5">Article precèdent</h1>
                <News :news="prev"></News>
            </div>
            <div class="col-12 col-md-6">
                <h1 class="h5">Article suivant</h1>
               <News :news="next"></News>
            </div>
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
@media (min-width: 500px) and (max-width: 769px) {
  .title-box {
    max-height: 25vh;

    .title {
      bottom: 5vh;
      left: 5vh;
      font-size: 1.5rem !important;
    }
  }

  .news-box {
    &_image {
      max-width: 50% !important;
      min-width: 50% !important;
      max-height: 30vh !important;
      min-height: 30vh !important;
      margin-right: 1rem;
    }

    &_title {
      margin-bottom: 1rem !important;
    }
  }
}

@media (min-width: 1020px) and (max-width: 1500px) {
  .title-box {
    max-height: 25vh;

    .title {
      bottom: 5vh;
      left: 5vh;
    }
  }

  .news-box {
    &_image {
      max-width: 50% !important;
      min-width: 50% !important;
      max-height: 30vh !important;
      min-height: 30vh !important;
      margin-right: 1rem;
    }

    &_title {
      margin-bottom: 1rem !important;
    }
  }
}

@media (max-width: 499px) {
  .title-box {
    max-height: 15vh;

    .title {
      font-size: 1rem !important;
    }
  }

  .news-box {
    &_image {
      max-width: 100% !important;
      min-width: 100% !important;
      max-height: 30vh !important;
      min-height: 30vh !important;
      float: none !important;
    }

    &_title {
      margin-bottom: 1rem !important;
    }
  }
}

.news-box {
  &_image {
    float: left;
    max-width: 40%;
    min-width: 40%;
    max-height: 50vh;
    min-height: 50vh;
    border: solid 1px black;
    margin-right: 1rem;
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
