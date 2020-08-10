<template>
    <div class="card">

        {{category}}
        {{sous_category}}
                <ul class="list-group text-right">
                    <li class="list-group-item">
                        <router-link to="/Presentation">
                        Presentation</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/Organisation">
                        Organisation</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/Mot du directeur">
                        Mot du directeur</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/Politique de Formation">
                        Politique de Formation</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="Politique de Supervision">
                        Politique de supervision</router-link>
                    </li>
                </ul>
    </div>
</template>

<script>
import CategoryS from "../services/category.service";
export default {
  props: ["category", "sous_category"],
  mounted() {
    if (this.category) {
      const path = this.category.shift();
      CategoryS.getMenu(path).then((data) => {
        console.log(data);
      });
    }
    if (this.sous_category) {
      console.log(this.sous_category);
      CategoryS.getMenuS(this.sous_category).then((data) => {
        console.log(data);
      });
    }
  },
};
</script>
<style lang="css" scoped>
.list-group .list-group-item {
  border: none;
}
.card {
  height: 100%;
}
</style>