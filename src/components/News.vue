<template>
          <div class="row">
        <div class="col-12 col-md-9 mt-5 news">
          <h4 class="mb-5 card-header bg-info">Actualités</h4>
          <div class="row">
            <div class="col-12 col-md-6 d-flex flex-column" v-for="(item, index) in news" :key="index" >
              <div class="d-flex flex-column">
                <img :src="item.url" alt="news" class="newImage" />
                {{item.createdAt}}
              </div>
              <div class="titre mt-2">
                <p>{{item.description}}</p>
              </div>
              <a href="#" class="mt-2"><span>Consulter -></span></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3 mt-5">
          <h4 class="mb-5 card-header bg-info">Points fréquents</h4>
          <div>
            <ul class="list-group">
              <li class="list-group-item p-3">Article 1</li>
              <li class="list-group-item p-3">Article 2</li>
              <li class="list-group-item p-3">Article 3</li>
              <li class="list-group-item p-3">Article 4</li>
              <li class="list-group-item p-3">Article 5</li>
              <li class="list-group-item p-3">Article 6</li>
              <li class="list-group-item p-3">Article 7</li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    computed: {
        news() {
            return this.$store.state.media.news
        }
    }
}
</script>

<style lang="scss">
.newImage{
    max-height: 10rem;

}
</style>