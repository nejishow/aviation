<template>
<div class="row">
    <div class="col-12">
        <FirebaseUpload :isNews="true"></FirebaseUpload>
    </div>
    <div class="col-12 mt-5">
        <h2>Mes articles</h2>
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Description</th>
                    <th scope="col">Contenu</th>
                    <th scope="col">Modifier</th>
                    <th scope="col">Supprimer</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(news, index) in Allnews" :key="index">
                    <td scope="row"><img width="50" :src="news.url" /></td>
                    <td><input type="text" :value="news.title" /></td>
                    <td><textarea type="text" :value="news.description" /></td>
            <td><textarea type="text" :value="news.content" /></td>
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
    computed: {
        Allnews() {
            return this.$store.state.media.news;
        },
    },
};
</script>
