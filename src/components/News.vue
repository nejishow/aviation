<template>
  <div class="md_card" v-if="news" @click="goTo(news._id)">
    <div class="header">
      <div class="header_title">{{ news.title }}</div>
      <div class="header_date">{{ news.createdAt }}</div>
    </div>

    <div class="media">
      <img :src="news.url" :alt="news.title" class="media_image" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],
  methods: {
    goTo(id) {
      this.$router.push({ path: "/Article/" + id });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.md_card {
  max-width: 100%;
  border: 0.4px solid rgba(163, 160, 160, 0.63);
  cursor: pointer;
  @include respond(big-desk) {
  }

  @include respond(tablet-land) {
  }
  .header {
    
    padding-left: 1rem;
    padding-right: 1rem;
    font-weight: 800;
    text-transform: capitalize;
    @include respond(big-desk) {
          height: 6vh !important;

    }
    @include respond(desk) {
                    height: 10vh !important;

    }
        @include respond(tablet-land) {
                    height: 6vh !important;

    }
        @include respond(tablet) {
              height: 15vh !important;

    }
  }

  .media {
    padding-top: 0.5rem;
    max-height: 100%;
    min-width: 100%;
    display: flex;
    justify-content: center;
    &_image {
      max-height: 20vh;
      @include respond(big-desk) {
      max-height: 30vh;
      }
      @include respond(tablet-land) {
              max-height: 20vh !important;

      }
            @include respond(tablet) {
              max-height: 40vh !important;

      }
    }
  }
}

.popular {
  .list {
    list-style: none;

    &-news {
      list-style: none;
      border-bottom: 2px solid black;
      padding: 2rem;
    }
  }
}

.card-header {
  color: white;
}
</style>
