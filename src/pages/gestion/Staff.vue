<template>
  <div class="staff">
    <div class="new">
      <label for="">Pseudo</label>
      <input type="text" class="form-control" v-model="staff.pseudo" />
      <label for="">Mot de passe</label>
      <input type="text" class="form-control" v-model="staff.password" />
      <label for="">Administrateur</label>
      <input type="checkbox" class="form-control" v-model="staff.isAdmin" />

      <button class="btn btn-group btn-primary mt-5" @click="postUser">
        Enregistrer
      </button>
    </div>
    <div class="all">
      <div class="table" data-app>
        <v-container fluid>
          <v-data-iterator
            :items="staffs"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            hide-default-footer
          >
            <template v-slot:default="props">
              <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">Pseudo</th>
                    <th scope="col">Admin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(staf, index) in props.items"
                    :key="index"
                    class="staff-details"
                    @click="goStaff(staf)"
                  >
                    <td>{{ staf.pseudo }}</td>
                    <td v-if="staf.isAdmin">Oui</td>
                    <td v-if="!staf.isAdmin">Non</td>
                  </tr>
                </tbody>
              </table>
            </template>
            <template v-slot:footer>
              <div class="table-footer">
                <div>
                  <span
                    class="mr-4
            grey--text"
                  >
                    Page {{ page }} / {{ numberOfPages }}
                  </span>
                  <v-btn
                    small
                    fab
                    dark
                    color="#E6EE9C"
                    class="mr-1"
                    @click="formerPage"
                  >
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn
                    small
                    fab
                    dark
                    color="#E6EE9C"
                    class="ml-1"
                    @click="nextPage"
                  >
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </div>
              </div>
            </template>
          </v-data-iterator>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import authS from "../../services/auth.service";
export default {
  data() {
    return {
      staff: {
        pseudo: "",
        password: "",
        isAdmin: false,
      },
      sortDesc: false,
      page: 1,
      sortBy: "name",
      itemsPerPage: 6,
      itemsPerPageArray: [4, 8, 12],
    };
  },
  mounted() {
    this.$store.dispatch("getStaffs");
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.staffs.length / this.itemsPerPage);
    },
    staffs() {
      return this.$store.state.user.staff;
    },
  },
  methods: {
    postUser() {
      authS.postStaff(this.staff).then(() => {
        this.$store.dispatch("getStaffs");
        this.staff = {
          pseudo: "",
          password: "",
          isAdmin: false,
        };
      });
    },
    goStaff(staff) {
      this.$router.push({ path: "/staff", query: { id: staff._id } });
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>
<style lang="scss" scoped>
.staff {
  width: 100% !important;
  display: flex;
  justify-content: space-around;
  height: 100%;

  .new {
    width: 40%;
  }

  &-details {
    cursor: pointer;
    margin-bottom: 2rem;
  }
}
</style>
