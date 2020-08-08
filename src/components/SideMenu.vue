<template>
    <div class="card">

        {{category}}
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
    console.log(this.category);
    if (this.category) {
      CategoryS.getMenu(this.category).then((data) => {
        console.log(data.data);
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