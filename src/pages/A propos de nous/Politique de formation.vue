<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <Menu></Menu>
      </div>
      <div class="col-12 col-md-8">
        <h3>Politique de Formation</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../../components/SideMenu";
export default {
  metaInfo() {
    return {
      title() {
        return "Politique de formation";
      },
      meta: [
        {
          vmid: "description",
          name: "description",
          content: "Politique de formation de l'Aviation Civile de Djibouti",
        },
      ],
    };
  },
  components: {
    Menu,
  },
};
</script>
