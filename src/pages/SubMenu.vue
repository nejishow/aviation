<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 ">
          <div class="title-box">
            <h1 class="title">{{ b2 }}</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <span>{{ b1 }}</span>
          <span> / {{ b2 }}</span>
        </div>
        <div class="col-md-4 sideMenu border">
          <Menu :menu="menu" :apropo="false">0"></Menu>
        </div>
        <div class="col">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            quisquam reprehenderit modi debitis repellendus, obcaecati cumque
            temporibus doloremque illo magnam mollitia voluptatum quidem
            praesentium sed excepturi commodi quis veniam perspiciatis.
          </p>
          <div class="row">
            <div
              class="col-12 col-md-4"
              v-for="(item, index) in subCategory"
              :key="index"
            >
              <router-link
                :to="{
                  name: item.name,
                  params: { id: item._id },
                }"
              >
                <div class="card text-left">
                  <img class="card-img-top" src="../assets/safety.png" alt="" />
                  <div class="card-body">
                    <h4 class="card-title">{{ item.name }}</h4>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/SideMenuSub";
export default {
  components: {
    Menu,
  },
  metaInfo() {
    const description = this.subOne.description;
    const name = this.subOne.name;
    return {
      title() {
        return name;
      },
      meta: [
        {
          vmid: "description",
          name: "description",
          content: description,
        },
      ],
    };
  },
  data() {
    return {
      menu: [],
      subOne: {},
      sub: [],
    };
  },
  computed: {
    subCategory() {
      let subtwo = this.$store.state.category.subCategoryTwo;
      if (subtwo.length > 0) {
        let sorted = subtwo.filter((doc) => {
          return doc.idParent == this.$route.query.id;
        });
        return sorted;
      } else {
        let sorted = subtwo.filter((doc) => {
          return doc.idParent == this.$route.query.id;
        });
        return sorted;
      }
    },
    b1() {
      return this.$store.state.category.breadCrumb1;
    },
    b2() {
      if (
        this.$store.state.category.subCategoryOne !== [] &&
        this.$store.state.category.category !== []
      ) {
        this.fetchBreadCrumb();
        this.fetchMenu();
      }
      return this.$store.state.category.breadCrumb2;
    },
  },
  methods: {
    fetchBreadCrumb() {
      this.$store.state.category.subCategoryOne.forEach((subOne) => {
          if (subOne._id === this.$route.query.id) {
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
          return element._id === this.$route.query.id;
        }
      );

        this.$store.state.category.subCategoryOne.forEach((sub) => {
          if (sub.idParent == subOne[0].idParent && sub.name !== "Accords") {
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
</style>
