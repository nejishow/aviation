<template>
    <div class="card">

                <ul class="list-group text-right">
                    <li class="list-group-item" v-for="(category, index) in categories" :key="index">
                        <router-link to="/Presentation">
                        {{}}</router-link>
                    </li>               
                </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["categories"],
};
</script>
<style lang="css" scoped>
.list-group .list-group-item {
  border: none;
}
.card {
  height: 100%;
}
</style>