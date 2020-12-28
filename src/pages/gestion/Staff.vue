<template>
  <div class="staff">
    <div class="new">
      <label for="">Pseudo</label>
      <input type="text" class="form-control" v-model="staff.pseudo" />
      <label for="">Mot de passe</label>
      <input type="text" class="form-control" v-model="staff.password" />
      <label for="">Administrateur</label>
      <input type="checkbox" class="form-control" v-model="staff.isAdmin" />

      <button class="btn btn-group btn-primary mt-5" @click="postUser">Enregistrer</button>
    </div>
    <div class="all">
      <table class="table">
        <thead>
          <tr>
            <th>Pseudo</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(staf, index) in staffs" :key="index">
            <td>{{staf.pseudo}}</td>
            <td v-if="staf.isAdmin">Oui</td>
            <td v-if="!staf.isAdmin">Non</td>
          </tr>
        </tbody>
      </table>
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
    };
  },
  mounted() {
    this.$store.dispatch("getStaffs");
  },
  computed: {
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
      }
      });
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
}
</style>
