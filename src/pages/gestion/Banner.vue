<template>
<div class="row">
    <div class="col-6">
        <FirebaseUpload :isBanner="true"></FirebaseUpload>
    </div>
    <div class="col-12 mt-5">
        <h2>Mes bannieres</h2>
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Description</th>
                    <th scope="col">Modifier</th>
                    <th scope="col">Supprimer</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(banner, index) in banniere" :key="index">
                    <td scope="row"><img width="50" :src="banner.url" /></td>
                    <td><input type="text" :value="banner.title" /></td>
                    <td><textarea type="text" :value="banner.description" /></td>
            <td>Modifier</td>
            <td>Supprimer</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import FirebaseUpload from "../../components/FirebaseUpload";

export default {
   metaInfo() {
        // if no subcomponents specify a metaInfo.title, this title will be used
        return {
            meta: [{
                    name: 'robots',
                    content: "noindex"
                },
                {
                    name: 'googlebot',
                    content: "noindex"
                }
            ]
        }
    },
    components: {
        FirebaseUpload,
    },
    mounted() {},
    computed: {
        banniere() {
            return this.$store.state.media.banner;
        },
    },
};
</script>
