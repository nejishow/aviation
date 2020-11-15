<template>
  <div class="md_card" v-if="news" @click="goTo(news._id)">
    <div class="header">
      <div class="small">{{ news.title }}</div>
      <div class="small">{{ news.createdAt }}</div>
    </div>

    <div class="media">
      <img :src="news.url" :alt="news.title" class="newsImage" />

      <div v-html="news.content" class="small description"></div>
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
  max-height: 30vh;
  max-width: 100%;
  border: 0.4px solid rgba(163, 160, 160, 0.63);
  cursor: pointer;
  .header {
    max-height: 20%;
    padding-left: 1rem;
  }

  .media {
    padding-top: 0.5rem;
    max-height: 100%;

    .newsImage {
      max-height: 20vh;
      width: 50%;
    }

    .description {
      padding-top: 0.5rem;
      padding-bottom: 5rem;
      padding-left: 0.5rem;
      max-width: 100%;
      max-height: 20vh !important;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      &_text {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
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
