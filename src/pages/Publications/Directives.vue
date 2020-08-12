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
        <h3>Directives</h3>
        All publications are considered electronically approved even if they do
        not bear a signature and stamp

        <div class=" m-5 p5 d-flex flex-column align-items-center">
          <div class="input-group w-50">
            <input
              type="text"
              class="form-control border-info input"
              placeholder="Search"
            />
            <div class="input-group-append border-info">
              <button class="input btn-outline-info" type="submit">Go</button>
            </div>
          </div>
          <div class="card result w-100" v-show="searchResults.length>0">
                      <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Titre</th>
                <th scope="col">Date de parution</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in searchResults" :key="index">
                <th><img src="../../assets/pdf.png" width="20" alt="" /></th>
                <td>{{ item.title }}</td>
                <td>{{ item.date }}</td>
                <td><button>Download</button></td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div class="table card">
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Titre</th>
                <th scope="col">Date de parution</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data" :key="index">
                <th><img src="../../assets/pdf.png" width="20" alt="" /></th>
                <td>{{ item.title }}</td>
                <td>{{ item.date }}</td>
                <td><button>Download</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "../../components/SideMenu";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      searchResults: [],
      data: [
        {
          id: 1,
          title: "Safety & Security",
          date: "02/10/2020",
          action: "Download",
        },
        {
          id: 1,
          title: "Safety & Security",
          date: "02/10/2020",
          action: "Download",
        },
        {
          id: 1,
          title: "Safety & Security",
          date: "02/10/2020",
          action: "Download",
        },
        {
          id: 1,
          title: "Safety & Security",
          date: "02/10/2020",
          action: "Download",
        },
      ],
    };
  },
  methods: {
    search(event) {
      console.log(event);
    },
  },
};
</script>

<style lang="css" scoped>
.search {
  border: none;
}
</style>
