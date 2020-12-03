<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-12">
        <md-tabs>
          <md-tab md-label="Bannieres">
            <Banner></Banner>
          </md-tab>

          <md-tab md-label="Articles">
            <News></News>
          </md-tab>
          <md-tab md-label="Staffs">
            <Staff></Staff>
          </md-tab>
        </md-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import News from "./News";
import Staff from "./Staff";
export default {
  components: {
    Banner,
    News,
    Staff,
  },
};
</script>
