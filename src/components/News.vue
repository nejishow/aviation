<template>
<div class="row mb-5">
    <div class="col-12 col-md-9 mt-5 news">
        <h4 class="mb-5 card-header bg-info">Actualités</h4>
        <div class="row">
            <div class="col-6 col-md-4 mt-3" v-for="(item, index) in news" :key="index">
                <md-card>
                    <md-card-header>

                        <div class="md-title">{{item.title}}</div>
                        <div class="md-subhead"> {{item.createdAt}}
                        </div>
                    </md-card-header>

                    <md-card-media>
                        <img :src="item.url" :alt="item.title" class="newImage" />
                    </md-card-media>

                    <md-card-content class="description">
                        {{item.description}} </md-card-content>

                    <md-card-actions>
                        <md-button>Consulter</md-button>
                    </md-card-actions>
                </md-card>

            </div>
            <div class="col-6 col-md-4 mt-3" v-for="(item, index) in news" :key="index">
                <md-card>
                    <md-card-header>

                        <div class="md-title">{{item.title}}</div>
                        <div class="md-subhead"> {{item.createdAt}}
                        </div>
                    </md-card-header>

                    <md-card-media>
                        <img :src="item.url" :alt="item.title" class="newImage" />
                    </md-card-media>

                    <md-card-content class="description">
                        {{item.description}} </md-card-content>

                    <md-card-actions>
                        <md-button>Consulter</md-button>
                    </md-card-actions>
                </md-card>

            </div>
        </div>
    </div>
    <div class="col-12 col-md-3 mt-5">
        <h4 class="mb-5 card-header bg-info">Points fréquents</h4>
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
</template>

<script>
export default {
  computed: {
    news() {
      return this.$store.state.media.news;
    },
  },
};
</script>

<style lang="scss">
.description {
  min-height: 2rem;
  max-height: 2rem;
}

.popular {
  box-shadow: 0 1rem 1rem rgba(#0000, 0.7);

  .list {
    list-style: none;

    &-item {
      list-style: none;
      border-bottom: 2px solid black;
      padding: 2rem;
    }
  }
}

.newImage {
  min-height: 20rem;
  max-height: 20rem;
}
</style>
