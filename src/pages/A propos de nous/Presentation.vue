<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 ">
                <div class="title-box">
                    <h1 class="title">Presentation</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <span>A propos de nous</span>
                <span> / Presentation</span>
            </div>
            <div class="col-md-4 sideMenu">
                <Menu :apropo="apropo"></Menu>
            </div>
            <div class="col-12 col-md-8">
                <h5 class=" mt-5 font-weight-bold">Our Vision:</h5>
                Building internationally competent and secured civil aviation by 2025.

                <h5 class=" mt-5 font-weight-bold">Our Mission:</h5>

                To enable the public get access to reliable Air transport service by
                ensuring Aviation safety and security through effective regulatory
                function, environmental protection, provision of Air navigation
                services, by strengthening global cooperation and partnership.

                <h5 class=" mt-5 font-weight-bold">
                    The objective of the Authority shall be:
                </h5>

                To promote and maintain an efficient and economical civil air service
                and general aviation service system and to ensure the provision of
                highly secure and safe air service; To develop domestic and
                international air transportation networks and to ensure a reliable and
                sustainable air transport system; To implement and enforce laws,
                regulations and directives relating to civil aviation as well as reaties
                to which Ethiopia is a party.

                <h5 class=" mt-5 font-weight-bold">Our Value:</h5>

                <ol class="list-group">
                    <li class="ml-5">Safety First</li>
                    <li class="ml-5">Team Work</li>
                    <li class="ml-5">Think Globally Act Locally</li>
                    <li class="ml-5">Committed to Excellence</li>
                    <li class="ml-5">Our Efforts our Achievement</li>
                </ol>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Menu from "../../components/SideMenuSub";
export default {
  components: {
    Menu,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Présentation",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: "Présentation Autorité de l'Aviation Civile de Djibouti",
      },
    ],
  },
  data() {
    return {
      searchResults: [],
      idDirectives: "",
      menu: [],
      errorSearch: "",      sortDesc: false,
      page: 1,
      sortBy: "name",
      itemsPerPage: 6,
      itemsPerPageArray: [4, 8, 12],
      apropo: true,
    };
  },
  computed: {
        numberOfPages() {
      return Math.ceil(this.sortedDocuments.length / this.itemsPerPage);
    },
    b1() {
      return this.$store.state.category.breadCrumb1;
    },
    b2() {
      return this.$store.state.category.breadCrumb2;
    },
  },
  methods: {
    fetchBreadCrumb() {
      this.$store.state.category.subCategoryOne.forEach((subOne) => {
        if (subOne._id === "5f537098522dae004424ab1a") {
          this.subOne = subOne;
          this.$store.dispatch("fetchB2", subOne.name);
          this.$store.state.category.category.forEach((cat) => {
            if (cat._id === subOne.idParent) {
              this.$store.dispatch("fetchB1", cat.name);
            }
          });
        }
      });
    },
    fetchMenu() {
      this.menu = [];
      const subOne = this.$store.state.category.subCategoryOne.filter(
        (element) => {
          return element._id === "5f537098522dae004424ab1a";
        }
      );
      this.$store.state.category.subCategoryOne.forEach((sub) => {
        if (sub.idParent == subOne[0].idParent) {
          this.menu.push(sub);
        }
      });
    },
  },
  mounted() {
    this.fetchBreadCrumb();
    this.fetchMenu();
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 500px) and (max-width: 769px) {
  .title-box {
    max-height: 25vh;

    .title {
      bottom: 5vh;
      left: 5vh;
      font-size: 1.5rem !important;
    }
  }
      .sideMenu {
    display: none;
  }
}

@media (min-width: 1020px) and (max-width: 1500px) {
  .title-box {
    max-height: 25vh;

    .title {
      bottom: 5vh;
      left: 5vh;
    }
  }
}

@media (max-width: 499px) {
  .title-box {
    max-height: 15vh;

    .title {
      font-size: 1rem !important;
    }
  }

  .sideMenu {
    display: none;
  }
}

.title-box {
  position: relative;
  height: 40vh;
  background-image: url("https://i.twic.pics/v1/https://www.explo.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/a/1/a144-djibouti-pcp.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .title {
    position: absolute;
    bottom: 1vh;
    left: 1vh;
    font-size: 2rem;
    text-transform: uppercase;
    color: white;
  }

  .title-img {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 50vh;
    min-width: 100%;
  }
}

.search {
  border-radius: 100px;
  /* mozilla */
  -moz-border-radius: 100px;
  /* webkit */
  -webkit-border-radius: 100px;
}
.table-footer {
  border-top: solid 1px grey;
  padding-top: 2rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.ceo {
  width: 500px;
}
</style>
