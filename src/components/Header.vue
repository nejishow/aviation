<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 social bg-info text-right">
        <img src="../assets/facebook.png" alt="facebook" width="30" />
        <img src="../assets/twitter.png" alt="twitter" width="30" />
        <img src="../assets/youtube.png" alt="youtube" width="30" />
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <router-link to="/">
        <a class="navbar-brand img-fluid" href="#">
        <img src="../assets/casa.png" alt="logo" class="img-fluid logo" />
      </a>
      </router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li
            class="nav-item dropdown mr-3"
            v-for="(menu, index) in menus"
            :key="index"
          >
            <Dropdown placement="bottom-start">
              <a class="text-dark font-weight-bolder">
                {{ menu.name }}
                <Icon type="ios-arrow-down"></Icon>
              </a>

              <DropdownMenu slot="list">
                <Dropdown
                  :style="sub.subCategoryTwo.length === 0 ? 'display:none' : ''"
                  placement="right-start"
                  v-for="(sub, index2) in menu.subCategoryOne"
                  :key="index2"
                >
                  <DropdownItem class="small font-weight-bold text-dark">{{ sub.name }}</DropdownItem>
                  <DropdownMenu slot="list">
                    <DropdownItem
                      class="small font-weight-bold text-dark text-wrap"
                      v-for="(lastSub, index3) in sub.subCategoryTwo"
                      :key="index3"
                      ><router-link class="font-weight-bold text-dark text-wrap" :to="lastSub.path   ? {path:lastSub.path} : {path:'/'+lastSub.name, query:{category:sub.name}} ">
                        {{ lastSub.name }}</router-link
                      ></DropdownItem
                    >
                  </DropdownMenu>
                </Dropdown>
                <DropdownItem
                class="small font-weight-bold text-dark"
                  :style="sub.subCategoryTwo.length !== 0 ? 'display:none' : ''"
                  v-for="(sub, index2) in menu.subCategoryOne"
                  :key="index2"
                  ><router-link :to="sub.path" class="text-dark">{{ sub.name }}</router-link></DropdownItem
                >
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
    <div class="row socialBottom">
      <div class="col-12 socialBottom bg-success"></div>
    </div>
  </div>
</template>

<script>
import category from "../services/category.service";
export default {
  data() {
    return {
      menus: [],
    };
  },
  mounted() {
    category.getCategories().then((data) => {
      this.menus = data.data;
    });
  },
};
</script>
<style lang="css" scoped>
.socialBottom {
  min-height: 5px;
}
.navbar {
  width: 100%;
}
.tabTitle {
  color: #005ba1;
}
@media (min-width: 770px) {
  .logo {
    width: 200px;
  }
}
@media (max-width: 769px) {
  .logo {
    width: 100px;
  }
}
#sidebar-2 {
  transition-duration: 1s;
}
.right {
  width: 400px;
}
</style>
