<template>
  <div class="container">
    <Header class="header"></Header>

    <router-view />
        <Footer class="mt-5"></Footer>

  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>