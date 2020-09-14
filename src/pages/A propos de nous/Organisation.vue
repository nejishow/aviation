<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 ">
                <div class="title-box">
                    <h1 class="title">Organisation</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <span>A propos de nous</span>
                <span> / Organisation</span>
            </div>
            <div class="col-md-4 sideMenu">
                <Menu :apropo="apropo"></Menu>
            </div>
            <div class="col-12 col-md-8">
                <p>
                    n, air traffic control and safety, ensuring international standards of
                    air navigation equipment and controlling airports service delivery as
                    well as putting in place principles and standards of the International
                    Civil Aviation Organization (ICAO). The Ethiopian Civil Aviation
                    Authority Regulatory Division has also been showing commendable
                    progress in updating its status approved by the US Federal Aviation
                    Administration (AFA) and ICAO USOAP Audit while implementing Quality
                    Management System (ISO 9001/2015) and capacity building program. The
                    Ethiopian Government sees the aviation sector as integral to securing
                    that future growth of this country, the Eastern Africa region and
                    Africa in general. Our airports, airlines and associate industries
                    facilitate to generate the required financial resource. Currently ECAA
                    is revamping its training center, ECATA, which has recent
                </p>
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
    title: "Organisation",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: "Organisation de l'Autorité de l'Aviation Civile de Djibouti",
      },
    ],
  },
  data() {
    return {
      searchResults: [],
      idDirectives: "",
      menu: [],
      errorSearch: "",
      apropo: true,
    };
  },
  computed: {
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
  border: solid 2px black;
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

.ceo {
  width: 500px;
}
</style>
