<template>
<div class="row mt-5">
    <div class="col-12">
        <h1>Liste des documents internes</h1>
    </div>
    <div class="col-12">
        <FirebaseUpload class=" mt-2 mb-5" :isPrivateDocument="true"></FirebaseUpload>
        <table class="table mb-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Fichier</th>
                    <th scope="col" class="w-50">Nom</th>
                    <th scope="col" class="small">Suspendre</th>
                    <th scope="col" class="small">Re-Publier</th>
                    <th scope="col" class="small">Supprimer</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(doc, index) in privateDocuments" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>
                        <a :href="doc.src" target="_blank">
                            <img src="../../assets/pdf.png" class="img-fluid" width="30" alt="" />
                        </a>
                    </td>
                    <td>{{ doc.name }}</td>
                    <td><button @click="disableDocument(doc._id)" class="btn btn-group btn-outline-warning" :disabled="!doc.enabled">
                            <md-icon>visibility_off</md-icon>
                        </button></td>
                    <td><button @click="enableDocument(doc._id)" class="btn btn-group btn-outline-success" :disabled="doc.enabled">
                            <md-icon>visibility</md-icon>
                        </button></td>
                    <td><button @click="deleteDocument(doc._id)" class="btn btn-group btn-outline-danger">
                            <md-icon>delete</md-icon>
                        </button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import FirebaseUpload from "../../components/FirebaseUpload";
export default {
   // metaInfo() {
    //     // if no subcomponents specify a metaInfo.title, this title will be used
    //     return {
    //         meta: [{
    //                 name: 'robots',
    //                 content: "noindex"
    //             },
    //             {
    //                 name: 'googlebot',
    //                 content: "noindex"
    //             }
    //         ]
    //     }
    // },
    components: {
        FirebaseUpload,
    },
    computed: {
        privateDocuments() {
            let docs = this.$store.state.documents.documents.filter((docs) => {
                return docs.isIntern;
            });
            return docs;
        },
    },
    methods: {
        disableDocument(id) {
            this.$store.dispatch("disableOneDocument", id);
        },
        enableDocument(id) {
            this.$store.dispatch("enableOneDocument", id);
        },
        deleteDocument(id) {
            this.$store.dispatch("deleteOneDocument", id);
        },
    },
};
</script>
