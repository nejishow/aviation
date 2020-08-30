<template>
  <div class="row mb-5">
    <div class="col-12 col-md-9 mt-5 news">
      <h4 class="mb-5 card-header bg-info">Actualités</h4>
      <div class="row">
        <div
          class="col-12 col-md-6 mt-3"
          v-for="(item, index) in news"
          :key="index"
        >
          <div class="md_card d-flex flex-column">
            <div class="header">
              <div class="small font-weight-bold">{{ item.title }}</div>
              <div class="small">{{ item.createdAt }}</div>
            </div>

            <div class="media d-flex">
              <img :src="item.url" :alt="item.title" class="newImage" />

              <div class="small description d-flex flex-column text-wrap ">
                <div class="description_text">
                  {{ item.description }} Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div><router-link to="/">...consulter</router-link></div>
              </div>
            </div>
          </div>
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
.md_card {
  height: 30vh;
  box-shadow: 0 0.2rem 0.5rem rgba(#000000, 0.7);
  .header {
    max-height: 20%;
  }
  .media {
    padding-top: 0.5rem;
    max-height: 100%;
    .newImage {
      height: 100px;
    }
    .description {
      padding-top: 0.5rem;
      padding-bottom: 5rem;
      padding-left: 0.5rem;
      max-height: 100%;
      &_text {
        overflow: hidden;
        text-overflow: ellipsis; // This is where the magic happens
      }
    }
  }
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
</style>
