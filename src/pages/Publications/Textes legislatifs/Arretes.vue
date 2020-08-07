<template>
  <div>
    <div class="row">
      <div class="col-12 m-5">
        Agence / Publications / Home
      </div>
      <div class="col-md-4">
        <Menu></Menu>
      </div>
      <div class="col-12 col-md-8">
        <h3>Arretés</h3>
        All publications are considered electronically approved even if they do
        not bear a signature and stamp

        <div class="m-5">
          <div class="input-group mb-3">
            <input
              type="search"
              class="form-control"
              placeholder="Rechercher un document"
              aria-label="Recherche document"
            />
            </div>
        </div>
        <div class="table card">
          <md-table v-model="users" md-sort="name" md-sort-order="asc" md-card>
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="#" md-numeric>
                <img
                  src="../../../assets/pdf.png"
                  width="20"
                  :alt="item.name"
                />
              </md-table-cell>
              <md-table-cell md-label="Nom du fichier" md-sort-by="name">{{
                item.name
              }}</md-table-cell>
              <md-table-cell md-label="Date de publication" md-sort-by="date">{{
                item.date
              }}</md-table-cell>
              <md-table-cell md-label="Action" md-sort-by="title"
                ><button class="small">{{ item.action }}</button></md-table-cell
              >
            </md-table-row>
          </md-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "../../../components/MenuPublications";
export default {
  components: {
    Menu,
  },
  data: () => ({
    users: [
      {
        id: 1,
        name: "Safety & Security",
        date: "02/10/2020",
        action: "Download",
      },
    ],
  }),
};
</script>

<style lang="css" scoped></style>
