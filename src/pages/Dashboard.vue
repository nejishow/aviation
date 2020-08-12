<template>
  <div class="container pb-5">
      <div class="row">
        <div class="col-12 col-md-9 mt-5 news">
          <h4 class="mb-5 card-header bg-info">Actualités</h4>
          <div class="row">
            <div class="col-12 col-md-6 d-flex flex-column">
              <div class="d-flex flex-column">
                <img src="../assets/news.png" alt="news" width="200" />
                01/04/2020
              </div>
              <div class="titre mt-2">
                Aujourd'hui le dkafjan ekfnakof alefknaeknf falnafjln.
              </div>
              <a href="" class="mt-2"><span>Consulter -></span></a>
            </div>
            <div class="col-12 col-md-6 d-flex flex-column">
              <div class="d-flex flex-column">
                <img src="../assets/news.png" alt="news" width="200" />
                01/04/2020
              </div>
              <div class="titre mt-2">
                Aujourd'hui le dkafjan ekfnakof alefknaeknf falnafjln.
              </div>
              <a href="" class="mt-2"><span>Consulter -></span></a>
            </div>
            <div class="col-12 col-md-6 d-flex flex-column">
              <div class="d-flex flex-column">
                <img src="../assets/news.png" alt="news" width="200" />
                01/04/2020
              </div>
              <div class="titre mt-2">
                Aujourd'hui le dkafjan ekfnakof alefknaeknf falnafjln.
              </div>
              <a href="" class="mt-2"><span>Consulter -></span></a>
            </div>
            <div class="col-12 col-md-6 d-flex flex-column">
              <div class="d-flex flex-column">
                <img src="../assets/news.png" alt="news" width="200" />
                01/04/2020
              </div>
              <div class="titre mt-2">
                Aujourd'hui le dkafjan ekfnakof alefknaeknf falnafjln.
              </div>
              <a href="" class="mt-2"><span>Consulter -></span></a>
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
    <div class="row mt-5 ">
      <div class="col-12">
          <h4 class="mb-5 card-header bg-info">Location</h4>
      </div>
      <div class="col-12 mt-3">
              <MAP class="mr-auto ml-auto"></MAP>

      </div>
    </div>
  </div>
</template>

<script>
import MAP from "../components/Map";
export default {
  components: {
    MAP,
  },
};
</script>

<style lang="css">
.row .container. {
  background: white;
}
.map {
  /* Full height */
  height: 100%;
  background-image: url(../assets/sky5.jpg);

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
